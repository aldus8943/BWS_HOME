// 2026-11-23: opened as a file (file:///...), browsers refuse the 3D works and games (JavaScript modules) and the
// deck's sound. If the local server is running, switch to it; otherwise say how to start it. Online this does nothing.
(() => {
  if (location.protocol !== 'file:') return;
  const BASE = 'http://localhost:5320/';
  const probe = new Image();
  probe.onload = () => location.replace(BASE + 'index.html' + location.hash);
  probe.onerror = () => {
    const d = document.createElement('div');
    d.setAttribute('role', 'alert');
    d.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:9999;max-width:calc(100% - 32px);padding:14px 20px;background:#111;color:#f4ede3;font:500 13px/1.6 "Helvetica Neue",Arial,sans-serif;letter-spacing:.02em;border-radius:6px;box-shadow:0 12px 30px rgba(0,0,0,.3)';
    d.innerHTML = 'Opened as a file: the 3D works, games and sound need the local server.<br>Double-click <b>OPEN_PORTFOLIO_HOME.cmd</b> (in BW_S_FINAL_SUBMISSION), or open <b>http://localhost:5320/</b>.';
    document.body.appendChild(d);
  };
  probe.src = BASE + 'assets/images/H01_type_badge.webp?probe=' + Date.now();
})();

// Works menu: the two-line icon in the top bar opens it; Close, the backdrop, Esc or choosing a work closes it.
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const drawer = document.getElementById('works-menu');
  const scrim = document.querySelector('.menu-scrim');
  if (!toggle || !drawer || !scrim) return;
  let hideTimer = 0;

  const open = () => {
    clearTimeout(hideTimer);
    drawer.hidden = false; scrim.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => document.documentElement.classList.add('menu-open')));
    toggle.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
    drawer.querySelector('.menu-close').focus({ preventScroll: true });
  };
  const close = ({ returnFocus = true } = {}) => {
    if (drawer.hidden) return;
    document.documentElement.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
    hideTimer = setTimeout(() => { drawer.hidden = true; scrim.hidden = true; }, 600);
    if (returnFocus) toggle.focus({ preventScroll: true });
  };

  toggle.addEventListener('click', () => (drawer.hidden ? open() : close()));
  // return focus to the icon only for keyboard use (a mouse click has e.detail > 0)
  document.querySelectorAll('[data-close-menu]').forEach(el => el.addEventListener('click', e => close({ returnFocus: e.detail === 0 })));
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => close({ returnFocus: false })));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  // a page restored from the back/forward cache must not come back with the sidebar open
  window.addEventListener('pageshow', () => { if (!drawer.hidden) { close({ returnFocus: false }); } });
})();

// FOR BW/S button: dark version while a card (02–07, all dark under the button) is behind it; light over the hero.
(() => {
  const btn = document.querySelector('.bring-link');
  const cards = [...document.querySelectorAll('#works > li')];
  if (!btn) return;
  let ticking = false;
  const update = () => {
    ticking = false;
    const r = btn.getBoundingClientRect(), y = (r.top + r.bottom) / 2;
    const onDark = cards.some(el => { const b = el.getBoundingClientRect(); return b.top <= y && b.bottom >= y; });
    document.documentElement.classList.toggle('bring-on-dark', onDark);
  };
  const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  update();
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
})();

// Hero film: respect "reduce motion" (show the poster frame only) and pause it while it is off screen.
(() => {
  const film = document.querySelector('.hero video');
  if (!film) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const apply = () => { if (reduce.matches) { film.pause(); film.removeAttribute('autoplay'); } else film.play().catch(() => {}); };
  apply();
  reduce.addEventListener('change', apply);
  new IntersectionObserver(([e]) => { if (reduce.matches) return; e.isIntersecting ? film.play().catch(() => {}) : film.pause(); }).observe(film);
})();

// Ctrl + mouse wheel (and trackpad pinch, sent as Ctrl + wheel) does not zoom the page. A plain wheel still scrolls.
window.addEventListener('wheel', e => { if (e.ctrlKey) e.preventDefault(); }, { passive: false });

// 2026-11-23: the menu icon turns dark grey when it sits over a black / very dark area (user request:
// "검은색 배경에 놓이면 어두운 회색으로 변하게 해줘. 너무 밝으면 안돼."). The pictures under it are videos and
// images, not CSS colours, so the pixels under the icon are sampled (same-origin media) a few times a second.
(() => {
  const btn = document.querySelector('.menu-toggle');
  if (!btn) return;
  // average luminance (linear) thresholds, with hysteresis so it does not flicker. #555 reads better than the black
  // lines only on near-black ground (contrast is equal at L ~ 0.039, about sRGB 55), so it switches there and no earlier.
  const DARK = 0.035, LIGHT = 0.045;
  const cv = document.createElement('canvas'); cv.width = 24; cv.height = 8;
  const cx = cv.getContext('2d', { willReadFrequently: true });
  const lin = c => { c /= 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
  const parseRGBA = s => { const m = s.match(/[\d.]+/g); return m ? m.map(Number) : [0, 0, 0, 0]; };
  // the part of a media element's source that is drawn under rect r, honouring object-fit / object-position
  const sourceRect = (el, r) => {
    const nw = el.videoWidth || el.naturalWidth, nh = el.videoHeight || el.naturalHeight;
    if (!nw || !nh) return null;
    const b = el.getBoundingClientRect(), st = getComputedStyle(el);
    const fit = st.objectFit;
    let sx = b.width / nw, sy = b.height / nh;
    if (fit === 'cover') sx = sy = Math.max(sx, sy); else if (fit === 'contain') sx = sy = Math.min(sx, sy);
    const dw = nw * sx, dh = nh * sy;
    const [px, py] = st.objectPosition.split(' ').map((v, i) => v.endsWith('%') ? parseFloat(v) / 100 * ((i ? b.height - dh : b.width - dw)) : parseFloat(v) || 0);
    const ox = b.left + px, oy = b.top + py;
    const x0 = Math.max(0, (r.left - ox) / sx), y0 = Math.max(0, (r.top - oy) / sy);
    const x1 = Math.min(nw, (r.right - ox) / sx), y1 = Math.min(nh, (r.bottom - oy) / sy);
    return x1 > x0 && y1 > y0 ? [x0, y0, x1 - x0, y1 - y0] : null;
  };
  const luminanceUnder = () => {
    const r = btn.querySelector('.menu-lines').getBoundingClientRect();
    const stack = document.elementsFromPoint(r.left + r.width / 2, r.top + r.height / 2).filter(e => !e.closest('.site-header'));
    for (const el of stack) {
      if ((el.tagName === 'VIDEO' || el.tagName === 'IMG') && getComputedStyle(el).opacity !== '0') {
        const src = sourceRect(el, r);
        if (!src) continue;
        try {
          cx.drawImage(el, ...src, 0, 0, cv.width, cv.height);
          const d = cx.getImageData(0, 0, cv.width, cv.height).data;
          let sum = 0;
          for (let i = 0; i < d.length; i += 4) sum += 0.2126 * lin(d[i]) + 0.7152 * lin(d[i + 1]) + 0.0722 * lin(d[i + 2]);
          return sum / (d.length / 4);
        } catch { return null; }
      }
      const [cr, cg, cb, ca = 1] = parseRGBA(getComputedStyle(el).backgroundColor);
      if (ca > 0.5) return 0.2126 * lin(cr) + 0.7152 * lin(cg) + 0.0722 * lin(cb);
    }
    return null;
  };
  let dark = false;
  const check = () => {
    const L = luminanceUnder();
    if (L === null) return;
    const next = dark ? L < LIGHT : L < DARK;
    if (next !== dark) { dark = next; btn.classList.toggle('is-on-dark', dark); }
  };
  // on scroll / resize, and every 250 ms for the hero video's changing frames
  let queued = false;
  const soon = () => { if (!queued) { queued = true; setTimeout(() => { queued = false; check(); }, 60); } };
  window.addEventListener('scroll', soon, { passive: true });
  window.addEventListener('resize', soon);
  setInterval(check, 250);
  check();
})();
