// 07 · My Contribution to Beth Ward Studios
//  - Accordion: three rows, all closed at first, at most one open. The panel's height animates (~320 ms) from 0 to its
//    measured content height and is then released to auto, so nothing is clipped and no inner scrollbar appears.
//    While rows open / close, the clicked row is held at the same place on screen (no jump).
//  - Viewers: the submitted resume (zoom) and the Chinese-language presentations (tabs, ← →, counter, caption).
//    Esc / × close; the page behind is locked while open and the scroll position and focus are restored on close.
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const DUR = () => (reduce.matches ? 0 : 320);

  /* ------------------------------------------------------------------ hero + row motion (2026-11-21, DMA redesign) */
  // rows rise in as they enter the screen (html.motion is set in the head; without it nothing is hidden)
  const items = [...document.querySelectorAll('.acc-item')];
  if (document.documentElement.classList.contains('motion') && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    items.forEach(i => io.observe(i));
  } else items.forEach(i => i.classList.add('is-in'));
  // scroll cue: a click glides down to the rows; the cue fades away once the page is scrolled
  const cue = document.querySelector('.scroll-cue');
  if (cue) {
    cue.addEventListener('click', e => {
      const target = document.getElementById('contribution'); if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth', block: 'start' });
    });
    const onScroll = () => cue.classList.toggle('is-gone', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    // wide screens: the cue sits under the heading column, a little in from its left edge and well below the
    // lede (user's reference, 2026-11-21). Offsets ignore the pointer drift, so the spot is stable. Under 1024 px
    // the CSS pins it to the bottom of the screen instead.
    const copy = document.querySelector('.hero-copy'), lede = document.querySelector('.hero-lede'), heroEl = document.querySelector('.hero');
    const placeCue = () => {
      if (!copy || !lede || !heroEl) return;
      const stacked = window.innerWidth <= 1024; // stacked hero: a pill right under the lede, on the copy's left edge
      const inset = stacked ? 0 : Math.round(Math.min(72, window.innerWidth * 0.0375));
      const gap = stacked ? 10 :Math.round(Math.max(56, Math.min(165, window.innerHeight * 0.15)));
      const maxTop = heroEl.offsetHeight - cue.offsetHeight - (stacked ? 12 : 28);
      cue.style.right = cue.style.bottom = 'auto';
      cue.style.left = (copy.offsetLeft + inset) + 'px';
      // the lede's offsetTop is measured from .hero-copy (its transform makes it the offset parent), so add the column's own
      const ledeBottom = (lede.offsetParent === copy ? copy.offsetTop : 0) + lede.offsetTop + lede.offsetHeight;
      cue.style.top = Math.min(ledeBottom + gap, maxTop) + 'px';
    };
    placeCue();
    window.addEventListener('resize', placeCue);
    if (document.fonts) document.fonts.ready.then(placeCue);
  }
  // the monogram and the heading drift a few pixels with the pointer (mouse / pen only)
  const hero = document.querySelector('.hero');
  const layers = [...document.querySelectorAll('[data-parallax]')];
  if (hero && layers.length && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let raf = 0, px = 0, py = 0;
    const apply = () => { raf = 0; if (reduce.matches) return; layers.forEach(l => { const k = +l.dataset.parallax; l.style.transform = `translate3d(${(px * k).toFixed(2)}px, ${(py * k).toFixed(2)}px, 0)`; }); };
    hero.addEventListener('pointermove', e => { const r = hero.getBoundingClientRect(); px = (e.clientX - r.left) / r.width - 0.5; py = (e.clientY - r.top) / r.height - 0.5; if (!raf) raf = requestAnimationFrame(apply); });
    hero.addEventListener('pointerleave', () => { px = py = 0; if (!raf) raf = requestAnimationFrame(apply); });
  }

  /* ------------------------------------------------------------------ accordion */
  const triggers = [...document.querySelectorAll('.acc-trigger')];
  const panelOf = btn => document.getElementById(btn.getAttribute('aria-controls'));
  const timers = new WeakMap();

  const finish = (panel, fn) => {
    clearTimeout(timers.get(panel));
    const done = () => { panel.removeEventListener('transitionend', onEnd); fn(); };
    const onEnd = e => { if (e.target === panel && e.propertyName === 'height') done(); };
    panel.addEventListener('transitionend', onEnd);
    timers.set(panel, setTimeout(done, DUR() + 80)); // fallback (reduced motion, or no transition)
  };
  const open = (btn) => {
    const panel = panelOf(btn);
    btn.setAttribute('aria-expanded', 'true');
    panel.hidden = false;
    panel.classList.remove('is-open');
    panel.style.height = '0px';
    void panel.offsetHeight;
    panel.style.height = panel.scrollHeight + 'px';
    finish(panel, () => { panel.classList.add('is-open'); panel.style.height = ''; });
  };
  const close = (btn) => {
    const panel = panelOf(btn);
    if (panel.hidden) return;
    btn.setAttribute('aria-expanded', 'false');
    panel.style.height = panel.scrollHeight + 'px';
    panel.classList.remove('is-open');
    void panel.offsetHeight;
    panel.style.height = '0px';
    finish(panel, () => { panel.hidden = true; panel.style.height = ''; });
  };
  // keep the clicked row still while the rows above it collapse or expand
  const holdInPlace = (el) => {
    const startTop = el.getBoundingClientRect().top, until = performance.now() + DUR() + 120;
    const step = (now) => {
      const d = el.getBoundingClientRect().top - startTop;
      if (Math.abs(d) > 0.5) window.scrollBy(0, d);
      if (now < until) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  triggers.forEach(btn => btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    holdInPlace(btn);
    if (isOpen) { close(btn); return; }
    triggers.filter(b => b !== btn && b.getAttribute('aria-expanded') === 'true').forEach(close);
    open(btn);
  }));

  /* ------------------------------------------------------------------ viewers (shared) */
  const root = document.documentElement;
  let active = null, opener = null, savedY = 0;
  const focusables = el => [...el.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')].filter(n => n.offsetParent !== null || n === document.activeElement);

  const openViewer = (el, from) => {
    if (active) closeViewer(true);
    active = el; opener = from; savedY = window.scrollY;
    root.classList.add('viewer-open');
    el.hidden = false;
    requestAnimationFrame(() => el.classList.add('is-open'));
    el.dispatchEvent(new CustomEvent('viewer:open'));
    el.querySelector('[data-close]').focus({ preventScroll: true });
  };
  const closeViewer = (instant) => {
    if (!active) return;
    const el = active; active = null;
    el.classList.remove('is-open');
    const end = () => { el.hidden = true; };
    if (instant || reduce.matches) end(); else setTimeout(end, 280);
    root.classList.remove('viewer-open');
    window.scrollTo(0, savedY);
    if (opener) opener.focus({ preventScroll: true });
  };
  document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => closeViewer()));
  document.addEventListener('keydown', e => {
    if (!active) return;
    if (e.key === 'Escape') { e.preventDefault(); closeViewer(); return; }
    if (e.key === 'Tab') { // keep focus inside the open viewer
      const f = focusables(active); if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  document.querySelectorAll('[data-open-viewer]').forEach(b => b.addEventListener('click', () => {
    openViewer(document.getElementById('viewer-' + b.dataset.openViewer), b);
  }));

  /* ------------------------------------------------------------------ resume viewer: zoom */
  const resume = document.getElementById('viewer-resume');
  const scroller = resume.querySelector('.resume-scroll');
  const img = resume.querySelector('.resume-img');
  const zoomOut = resume.querySelector('[data-zoom="-1"]'), zoomIn = resume.querySelector('[data-zoom="1"]');
  const zoomLabel = resume.querySelector('.zoom-value');
  const STEPS = [1, 1.25, 1.5, 2, 2.5];
  let z = 0;
  const NATURAL = 2125;
  const layoutResume = () => {
    const pad = parseFloat(getComputedStyle(scroller).paddingLeft) * 2;
    const base = Math.min(scroller.clientWidth - pad, 960); // 100 % = the page at a comfortable reading width
    img.style.width = Math.min(NATURAL, Math.round(base * STEPS[z])) + 'px';
    zoomLabel.textContent = Math.round(STEPS[z] * 100) + '%';
    zoomOut.disabled = z === 0; zoomIn.disabled = z === STEPS.length - 1;
  };
  const setZoom = (dz) => {
    const nz = Math.max(0, Math.min(STEPS.length - 1, z + dz)); if (nz === z) return;
    const cx = (scroller.scrollLeft + scroller.clientWidth / 2) / scroller.scrollWidth;
    const cy = (scroller.scrollTop + scroller.clientHeight / 2) / scroller.scrollHeight;
    z = nz; layoutResume();
    scroller.scrollLeft = cx * scroller.scrollWidth - scroller.clientWidth / 2;
    scroller.scrollTop = cy * scroller.scrollHeight - scroller.clientHeight / 2;
  };
  zoomOut.addEventListener('click', () => setZoom(-1));
  zoomIn.addEventListener('click', () => setZoom(1));
  resume.addEventListener('viewer:open', () => { z = 0; layoutResume(); scroller.scrollTop = 0; scroller.scrollLeft = 0; });
  window.addEventListener('resize', () => { if (active === resume) layoutResume(); });

  /* ------------------------------------------------------------------ presentations viewer */
  const DECKS = {
    proposal: { tab: 'tab-proposal', slides: [
      ['media/slides/proposal/proposal-p01.webp', 'Proposal Cover', 1],
      ['media/slides/proposal/proposal-p02.webp', 'Market Analysis', 2],
      ['media/slides/proposal/proposal-p08.webp', 'Brand Research', 8],
      ['media/slides/proposal/proposal-p15.webp', 'Partner Evaluation', 15],
      ['media/slides/proposal/proposal-p18.webp', 'Sample Pilot Proposal', 18],
    ] },
    association: { tab: 'tab-association', slides: [
      ['media/slides/association/association-p01.webp', 'Industry Association Presentation', 1],
      ['media/slides/association/association-p04.webp', 'Supply Chain & Intellectual Property', 4],
      ['media/slides/association/association-p07.webp', 'Regional Branding & Talent Development', 7],
      ['media/slides/association/association-p09.webp', 'Three-Year Strategic Development Plan', 9],
    ] },
  };
  const decks = document.getElementById('viewer-decks');
  const stage = decks.querySelector('.deck-stage');
  const slideImg = decks.querySelector('.deck-img');
  const count = decks.querySelector('.deck-count'), caption = decks.querySelector('.deck-caption');
  const prev = decks.querySelector('.deck-arrow--prev'), next = decks.querySelector('.deck-arrow--next');
  const tabs = [...decks.querySelectorAll('.deck-tab')];
  let deck = 'proposal', idx = 0;
  const pad2 = n => String(n).padStart(2, '0');
  const preload = src => { const i = new Image(); i.decoding = 'async'; i.src = src; };
  const show = () => {
    const list = DECKS[deck].slides, [src, cap, page] = list[idx];
    slideImg.src = src;
    slideImg.alt = `${cap} — original page ${page} of the Chinese-language document`;
    count.textContent = `${pad2(idx + 1)} / ${pad2(list.length)}`;
    caption.textContent = cap;
    prev.disabled = idx === 0; next.disabled = idx === list.length - 1;
    [idx - 1, idx + 1].forEach(k => { if (list[k]) preload(list[k][0]); });
  };
  const go = d => { const n = idx + d; if (n < 0 || n >= DECKS[deck].slides.length) return; idx = n; show(); };
  const pick = name => {
    deck = name; idx = 0;
    tabs.forEach(t => { const on = t.dataset.deck === name; t.setAttribute('aria-selected', String(on)); t.tabIndex = 0; });
    stage.setAttribute('aria-labelledby', DECKS[name].tab);
    show();
  };
  prev.addEventListener('click', () => go(-1));
  next.addEventListener('click', () => go(1));
  tabs.forEach(t => t.addEventListener('click', () => pick(t.dataset.deck)));
  document.addEventListener('keydown', e => {
    if (active !== decks) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
  });
  // swipe on touch screens
  let sx = null;
  stage.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') sx = e.clientX; });
  stage.addEventListener('pointerup', e => { if (sx === null) return; const dx = e.clientX - sx; sx = null; if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1); });
  decks.addEventListener('viewer:open', () => pick(deck));
})();
