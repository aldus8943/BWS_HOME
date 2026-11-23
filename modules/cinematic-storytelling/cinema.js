// The Chase player: play / pause (screen, PLAY, Space or K), seek on the framed bar (click, drag, ← / →), sound (M),
// full screen (FULL or F; the bar stays visible). Ctrl + wheel does not zoom the page.
(() => {
  const stage = document.querySelector('.stage');
  const screen = document.querySelector('.screen');
  const film = document.querySelector('.film');
  const bigPlay = document.querySelector('.big-play');
  const playBtn = document.querySelector('.ctl-play');
  const soundBtn = document.querySelector('.ctl-sound');
  const fullBtn = document.querySelector('.ctl-full');
  const track = document.querySelector('.track');
  const tNow = document.querySelector('.t-now');
  const tDur = document.querySelector('.t-dur');
  const controls = document.querySelector('.controls');

  const fmt = s => { s = Math.max(0, Math.floor(s || 0)); return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`; };
  const dur = () => (Number.isFinite(film.duration) ? film.duration : 305.27);

  const toggle = () => { if (film.paused || film.ended) film.play().catch(() => {}); else film.pause(); };
  // opening card: on when the page opens and after the film ends; off once the film plays
  const intro = document.querySelector('.intro'), watch = document.querySelector('.intro-watch');
  const setIntro = on => { stage.classList.toggle('is-intro', on); intro.setAttribute('aria-hidden', String(!on)); intro.inert = !on; };
  // 2026-11-23: WATCH THE FILM always plays the whole film from the start (it also ends a sequence playback)
  watch.addEventListener('click', e => { e.stopPropagation(); window.__chaseSegment?.release(); if (film.currentTime > 0) film.currentTime = 0; film.muted = false; film.play().catch(() => {}); });
  intro.addEventListener('click', e => e.stopPropagation());
  film.addEventListener('play', () => setIntro(false));
  film.addEventListener('ended', () => { setIntro(true); film.currentTime = 0; watch.focus({ preventScroll: true }); });
  setIntro(true);
  const syncPlay = () => {
    const playing = !film.paused && !film.ended;
    stage.classList.toggle('is-playing', playing);
    playBtn.textContent = playing ? 'PAUSE' : 'PLAY';
    playBtn.setAttribute('aria-label', playing ? 'Pause' : 'Play');
  };
  const syncTime = () => {
    const p = Math.min(1, film.currentTime / dur());
    track.style.setProperty('--p', p.toFixed(5));
    tNow.textContent = fmt(film.currentTime);
    track.setAttribute('aria-valuenow', Math.round(film.currentTime));
    track.setAttribute('aria-valuetext', `${fmt(film.currentTime)} of ${fmt(dur())}`);
  };
  const syncSound = () => { soundBtn.textContent = film.muted ? 'UNMUTE' : 'MUTE'; };
  const seekTo = t => { film.currentTime = Math.min(dur() - 0.05, Math.max(0, t)); syncTime(); };

  screen.addEventListener('click', toggle);
  bigPlay.addEventListener('click', e => { e.stopPropagation(); toggle(); });
  playBtn.addEventListener('click', toggle);
  soundBtn.addEventListener('click', () => { film.muted = !film.muted; syncSound(); });
  film.addEventListener('play', syncPlay);
  film.addEventListener('pause', syncPlay);
  film.addEventListener('ended', syncPlay);
  film.addEventListener('timeupdate', syncTime);
  film.addEventListener('seeked', syncTime);
  film.addEventListener('loadedmetadata', () => { tDur.textContent = fmt(dur()); track.setAttribute('aria-valuemax', Math.round(dur())); syncTime(); });
  film.addEventListener('volumechange', syncSound);

  // the framed bar: click or drag anywhere on it to seek
  const fromPointer = e => { const r = track.getBoundingClientRect(); return ((e.clientX - r.left - 9) / Math.max(1, r.width - 18)) * dur(); };
  let dragging = false;
  track.addEventListener('pointerdown', e => {
    if (e.button !== 0) return;
    dragging = true; seekTo(fromPointer(e));
    try { track.setPointerCapture(e.pointerId); } catch { /* pointer already gone */ }
  });
  track.addEventListener('pointermove', e => { if (dragging) seekTo(fromPointer(e)); });
  const stopDrag = () => { dragging = false; };
  track.addEventListener('pointerup', stopDrag);
  track.addEventListener('pointercancel', stopDrag);
  track.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); e.stopPropagation(); seekTo(film.currentTime + (e.key === 'ArrowRight' ? 5 : -5)); }
    else if (e.key === 'Home') { e.preventDefault(); seekTo(0); }
    else if (e.key === 'End') { e.preventDefault(); seekTo(dur()); }
  });

  // full screen: the stage (picture and bar)
  const full = () => { if (document.fullscreenElement) document.exitFullscreen(); else stage.requestFullscreen?.().catch(() => {}); };
  fullBtn.addEventListener('click', full);
  screen.addEventListener('dblclick', e => { e.preventDefault(); full(); });
  document.addEventListener('fullscreenchange', () => { fullBtn.textContent = document.fullscreenElement ? 'EXIT' : 'FULL'; size(); });

  document.addEventListener('keydown', e => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const tag = (e.target.tagName || '').toLowerCase();
    if (e.key === ' ' || e.key === 'k' || e.key === 'K') { if (tag === 'button') return; e.preventDefault(); toggle(); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); seekTo(film.currentTime + (e.key === 'ArrowRight' ? 5 : -5)); }
    else if (e.key === 'm' || e.key === 'M') { film.muted = !film.muted; }
    else if (e.key === 'f' || e.key === 'F') { full(); }
  });

  // blurred edges: draw the current frame (or the poster before playback) small into the canvas under the picture
  const glow = document.querySelector('.glow'), gctx = glow.getContext('2d');
  const poster = new Image(); poster.src = film.poster;
  const paint = src => { try { gctx.drawImage(src, 0, 0, glow.width, glow.height); } catch { /* frame not ready */ } };
  poster.onload = () => { if (film.readyState < 2) paint(poster); };
  let glowRaf = 0;
  const loop = () => { paint(film); glowRaf = film.paused || film.ended ? 0 : requestAnimationFrame(loop); };
  film.addEventListener('play', () => { if (!glowRaf) glowRaf = requestAnimationFrame(loop); });
  film.addEventListener('seeked', () => paint(film));
  film.addEventListener('loadeddata', () => { if (film.currentTime > 0) paint(film); });

  // the bar is as wide as the picture
  const size = () => controls.style.setProperty('--screen-w', `${screen.getBoundingClientRect().width}px`);
  window.addEventListener('resize', size);
  new ResizeObserver(size).observe(screen);
  size(); syncPlay(); syncSound(); syncTime();

  // Ctrl + mouse wheel (and trackpad pinch) does not zoom the page
  window.addEventListener('wheel', e => { if (e.ctrlKey) e.preventDefault(); }, { passive: false });
})();

// 2026-11-23: the C03 clip loops behind the opening card. It plays only while the card is up (paused during the film),
// and feeds the blurred edge canvas while it shows, so the edges match the moving picture.
(() => {
  const stage = document.querySelector('.stage'), bg = document.querySelector('.intro-bg');
  const glow = document.querySelector('.glow'), film = document.querySelector('.film');
  if (!stage || !bg) return;
  const gctx = glow && glow.getContext('2d');
  let raf = 0;
  const paint = () => {
    if (gctx && bg.readyState >= 2 && film.paused) { try { gctx.drawImage(bg, 0, 0, glow.width, glow.height); } catch { /* not ready */ } }
    raf = stage.classList.contains('is-intro') ? requestAnimationFrame(paint) : 0;
  };
  const sync = () => {
    if (stage.classList.contains('is-intro')) {
      bg.play().catch(() => {});
      if (!raf) raf = requestAnimationFrame(paint);
    } else {
      setTimeout(() => { if (!stage.classList.contains('is-intro')) bg.pause(); }, 750); // after the fade-out
    }
  };
  new MutationObserver(sync).observe(stage, { attributes: true, attributeFilter: ['class'] });
  sync();
})();

// 2026-11-23: gallery under the film. Clips and films play (muted, looped) only while on screen. The two films carry a
// bar: PAUSE / PLAY on the left, a seek track, SOUND ON / SOUND OFF on the right (default: muted, playing). Sound on mutes
// the other film and pauses the main film; playing the main film mutes them again. A film the visitor paused stays paused.
(() => {
  const vids = [...document.querySelectorAll('.gallery video')];
  if (!vids.length) return;
  const film = document.querySelector('.film');
  const userPaused = new WeakSet();
  const io = new IntersectionObserver(entries => {
    for (const e of entries) {
      const v = e.target;
      if (e.isIntersecting) { if (!userPaused.has(v)) v.play().catch(() => {}); } else v.pause();
    }
  }, { threshold: 0.15 });
  vids.forEach(v => io.observe(v));

  const figs = [...document.querySelectorAll('.g-film')];
  const setSound = (fig, on) => {
    const v = fig.querySelector('video'), b = fig.querySelector('.g-sound');
    v.muted = !on; b.setAttribute('aria-pressed', String(on)); b.textContent = on ? 'SOUND OFF' : 'SOUND ON';
  };
  for (const fig of figs) {
    const v = fig.querySelector('video'), play = fig.querySelector('.g-play'), sound = fig.querySelector('.g-sound');
    const track = fig.querySelector('.g-track');
    const sync = () => { play.textContent = v.paused ? 'PLAY' : 'PAUSE'; };
    v.addEventListener('play', sync); v.addEventListener('pause', sync);
    play.addEventListener('click', () => {
      if (v.paused) { userPaused.delete(v); v.play().catch(() => {}); } else { userPaused.add(v); v.pause(); }
    });
    sound.addEventListener('click', () => {
      const on = sound.getAttribute('aria-pressed') !== 'true';
      if (on) { figs.forEach(f => { if (f !== fig) setSound(f, false); }); if (film && !film.paused) film.pause(); userPaused.delete(v); v.play().catch(() => {}); }
      setSound(fig, on);
    });
    const paint = () => {
      const p = v.duration ? v.currentTime / v.duration : 0;
      track.style.setProperty('--p', p.toFixed(4)); track.setAttribute('aria-valuenow', String(Math.round(p * 100)));
    };
    v.addEventListener('timeupdate', paint);
    const seekAt = x => { const r = track.getBoundingClientRect(); if (v.duration) v.currentTime = Math.min(1, Math.max(0, (x - r.left) / r.width)) * v.duration; paint(); };
    track.addEventListener('pointerdown', e => { track.setPointerCapture(e.pointerId); seekAt(e.clientX); });
    track.addEventListener('pointermove', e => { if (track.hasPointerCapture(e.pointerId)) seekAt(e.clientX); });
    track.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); e.stopPropagation(); v.currentTime = Math.max(0, v.currentTime + (e.key === 'ArrowRight' ? 2 : -2)); paint(); }
    });
    // the bar's keys and clicks must not reach the main player's shortcuts
    fig.querySelector('.g-ctl').addEventListener('keydown', e => { if (e.key === ' ') e.stopPropagation(); });
    setSound(fig, false); sync();
  }
  if (film) film.addEventListener('play', () => figs.forEach(f => setSound(f, false)));
})();

// 2026-11-23: VIEW MY SEQUENCE. Plays Jin Kim's part of the same film file, 01:59-03:38 (119-218 s), and pauses at 03:38.
// The limit ends when the visitor seeks, presses WATCH THE FILM, or the segment ends; after that every control works as
// before (PLAY continues the whole film from where it stopped). Works before the metadata has loaded.
(() => {
  const film = document.querySelector('.film'), btns = [...document.querySelectorAll('.intro-seq')];
  if (!film || !btns.length) return;
  const START = 119, END = 218;
  let active = false, ownSeek = false, raf = 0, pendingStart = false;
  const release = () => { active = false; pendingStart = false; cancelAnimationFrame(raf); raf = 0; };
  window.__chaseSegment = { release, get active() { return active; }, START, END };
  const watchEnd = () => {
    raf = 0;
    if (!active) return;
    if (film.currentTime >= END - 0.02) {
      film.pause(); ownSeek = true; film.currentTime = END; release();
      return;
    }
    if (!film.paused) raf = requestAnimationFrame(watchEnd);
  };
  const begin = () => {
    pendingStart = false;
    ownSeek = true; film.currentTime = START;
    film.play().catch(() => {});
  };
  btns.forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    active = true; film.muted = false;
    if (film.readyState >= 1) begin();
    else { pendingStart = true; film.preload = 'auto'; film.load(); }
  }));
  film.addEventListener('loadedmetadata', () => { if (pendingStart && active) begin(); });
  film.addEventListener('play', () => { if (active && !raf) raf = requestAnimationFrame(watchEnd); });
  film.addEventListener('seeking', () => {
    if (ownSeek) { ownSeek = false; return; }
    if (active) release(); // the visitor moved the film: no automatic pause any more
  });
})();
