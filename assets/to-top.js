/* TOP button (2026-11-24): see assets/to-top.css. Shown after 600 px of scroll; a click goes back to the top of the page
   in about 600 ms (ease-in-out), or at once when the visitor prefers reduced motion. Works whether the page scrolls the
   window (AI Product Design) or the body (AI Cinematic Storytelling, where body has overflow-y: auto). */
(() => {
  const SHOW_AT = 600, DURATION = 600;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const btn = document.createElement('button');
  btn.type = 'button'; btn.className = 'to-top'; btn.setAttribute('aria-label', 'Back to the top of the page');
  btn.innerHTML = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 16V4M5 9l5-5 5 5" /></svg><span aria-hidden="true">TOP</span>';
  document.body.appendChild(btn);

  // the element that actually scrolls: the window's scrolling element, or the body when it is its own scroller
  const scroller = () => {
    const se = document.scrollingElement || document.documentElement, b = document.body;
    return b.scrollTop > 0 || (b.scrollHeight > b.clientHeight + 1 && getComputedStyle(b).overflowY !== 'visible' && se.scrollHeight <= innerHeight + 1) ? b : se;
  };
  const y = () => Math.max(window.scrollY || 0, document.documentElement.scrollTop || 0, document.body.scrollTop || 0);
  let raf = 0;
  const update = () => { raf = 0; btn.classList.toggle('is-shown', y() > SHOW_AT); };
  const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
  window.addEventListener('scroll', onScroll, { passive: true });
  document.body.addEventListener('scroll', onScroll, { passive: true });
  update();

  let anim = 0;
  const stop = () => { cancelAnimationFrame(anim); anim = 0; };
  btn.addEventListener('click', () => {
    const el = scroller(), from = el.scrollTop;
    stop();
    if (reduce.matches || from <= 0) { el.scrollTop = 0; window.scrollTo(0, 0); btn.blur(); return; }
    const t0 = performance.now(), ease = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const step = now => {
      const t = Math.min(1, (now - t0) / DURATION);
      el.scrollTop = Math.round(from * (1 - ease(t)));
      if (t < 1) anim = requestAnimationFrame(step); else { anim = 0; btn.blur(); }
    };
    anim = requestAnimationFrame(step);
  });
  // a wheel or touch by the visitor takes over from the animation
  ['wheel', 'touchstart', 'keydown'].forEach(t => window.addEventListener(t, () => { if (anim) stop(); }, { passive: true }));
})();
