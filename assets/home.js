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
