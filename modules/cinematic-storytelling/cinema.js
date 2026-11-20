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
  watch.addEventListener('click', e => { e.stopPropagation(); film.muted = false; film.play().catch(() => {}); });
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
