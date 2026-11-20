// Games page layout: the two games first, as large as the window allows; the title and the intro line only go into
// the space that is left.
//  - Each game lays itself out for its frame and stops growing at about NATURAL_H px tall, so on a tall window the frame
//    is drawn at that logical height and scaled up (at most MAX_S); in a frame narrower than MIN_W or lower than MIN_H
//    it is drawn at that logical size and scaled down, so its layout never gets cramped.
//  - Side by side when the window is wide enough; on narrow / portrait screens the games are stacked.
(() => {
  const NATURAL_H = 900, MIN_W = 600, MIN_H = 740, MIN_W_STACKED = 320, MIN_H_STACKED = 568, MAX_S = 1.35, MIN_S = 0.4;
  const root = document.documentElement;
  const games = document.querySelector('.games');
  const stage = document.querySelector('.stage');
  const intro = document.querySelector('.intro');
  const introText = intro.querySelector('.intro-text');

  const layout = () => {
    const W = window.innerWidth, H = window.innerHeight;
    const bar = parseFloat(getComputedStyle(root).getPropertyValue('--bar-h')) || 48;
    const pad = parseFloat(getComputedStyle(stage).paddingLeft) || 16;
    const stacked = W < 760 || W / H < 0.95;
    root.classList.toggle('is-stacked', stacked);
    root.classList.toggle('is-side', !stacked);

    const availH = H - bar - pad;
    const colW = stacked ? W - 2 * pad : (W - 3 * pad) / 2;
    const up = availH > NATURAL_H ? Math.min(availH / NATURAL_H, MAX_S) : 1;
    // stacked (phones, portrait tablets): the games have their own phone layout down to 320 × 568, so they are drawn
    // at the real size there and only scaled below that
    const minW = stacked ? MIN_W_STACKED : MIN_W, minH = stacked ? MIN_H_STACKED : MIN_H;
    const s = Math.max(MIN_S, Math.min(up, colW / minW, availH < minH ? availH / minH : Infinity));
    const boxH = Math.floor(Math.min(availH, s * NATURAL_H));
    const boxW = Math.floor(colW);
    games.style.setProperty('--s', s.toFixed(4));
    games.style.setProperty('--box-w', boxW);
    games.style.setProperty('--box-h', boxH);
    games.style.setProperty('--frame-w', (boxW / s).toFixed(2));
    games.style.setProperty('--frame-h', (boxH / s).toFixed(2));

    // text in the leftover height only: title block (kicker + GAMES) from ~83 px, plus the intro line from ~135 px;
    // otherwise a compact title sits in the top bar
    const left = stacked ? 0 : availH - boxH;
    const showTitle = left >= 83, showText = left >= 135;
    intro.hidden = !showTitle;
    introText.hidden = !showText;
    root.classList.toggle('title-in-bar', !showTitle);
    stage.style.setProperty('--intro-gap', showTitle ? '16px' : '0px');
    if (showTitle) intro.style.setProperty('--title-size', `${Math.round(Math.min(64, left - 49 - (showText ? 52 : 0)))}px`);
  };

  let queued = false;
  window.addEventListener('resize', () => { if (!queued) { queued = true; requestAnimationFrame(() => { queued = false; layout(); }); } });
  layout();
})();

// Ctrl + mouse wheel (and trackpad pinch, which the browser sends as Ctrl + wheel) does not zoom the page. The two
// game frames are same-origin documents, so the same guard is added to each frame's window after every load; the game
// files themselves are not changed.
(() => {
  const blockZoom = e => { if (e.ctrlKey) e.preventDefault(); };
  const guard = win => { try { win.addEventListener('wheel', blockZoom, { passive: false }); } catch { /* frame not reachable */ } };
  guard(window);
  document.querySelectorAll('.game iframe').forEach(frame => {
    const hook = () => guard(frame.contentWindow);
    frame.addEventListener('load', hook);
    if (frame.contentDocument && frame.contentDocument.readyState === 'complete') hook();
  });
})();
