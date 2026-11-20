// AI Product Design page: endless sideways strips (auto-scroll, round arrows, drag) and a full-screen viewer with
// left / right chevrons, keyboard (← → Esc) and swipe.
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const speed = () => Math.max(36, window.innerWidth * 0.035); // px per second (about 67 px/s on a 1920 px screen)
  const ease = t => 1 - Math.pow(1 - t, 3);
  const mod = (a, n) => ((a % n) + n) % n;
  const viewer = createViewer();

  document.querySelectorAll('[data-strip]').forEach(strip => {
    const viewport = strip.querySelector('.strip-viewport');
    const track = strip.querySelector('.strip-track');
    const originals = [...track.children];
    const items = originals.map(b => {
      const img = b.querySelector('img');
      return { large: b.dataset.large, w: +b.dataset.w, h: +b.dataset.h, alt: img.alt };
    });
    originals.forEach((b, i) => { b.dataset.i = i; b.addEventListener('click', onShotClick); });

    let copies = 1, setW = 0, starts = [];
    const measure = () => {
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      starts = []; setW = 0;
      originals.forEach(b => { starts.push(setW); setW += b.getBoundingClientRect().width + gap; });
      // enough copies that the visible window never runs past the end of the track
      while (copies < 2 || (copies - 1) * setW < viewport.clientWidth + 2) {
        originals.forEach(b => {
          const c = b.cloneNode(true);
          c.setAttribute('aria-hidden', 'true'); c.tabIndex = -1; c.classList.add('is-clone');
          c.addEventListener('click', onShotClick);
          track.appendChild(c);
        });
        if (++copies > 12) break;
      }
    };

    let x = 0, last = 0, hover = false, focusIn = false, visible = true, tween = null, drag = null, suppressClick = false;
    const frame = now => {
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 0; last = now;
      if (tween) {
        const t = Math.min(1, (now - tween.t0) / tween.dur);
        x = tween.from + (tween.to - tween.from) * ease(t);
        if (t >= 1) tween = null;
      } else if (!drag && !hover && !focusIn && !viewer.isOpen() && !reduce.matches && visible) {
        x += speed() * dt;
      }
      if (!tween && setW) x = mod(x, setW);
      track.style.transform = `translate3d(${(-mod(x, setW || 1)).toFixed(2)}px,0,0)`;
      requestAnimationFrame(frame);
    };
    const go = (to, dur) => { tween = { from: x, to, t0: performance.now(), dur }; };

    // one step = to the next / previous image edge
    const step = dir => {
      if (!setW) return;
      const cur = tween ? tween.to : x, local = mod(cur, setW);
      if (dir > 0) {
        const s = [...starts, setW].find(p => p > local + 2);
        go(cur + (s - local), 650);
      } else {
        const s = [starts[starts.length - 1] - setW, ...starts].reverse().find(p => p < local - 2);
        go(cur - (local - s), 650);
      }
    };
    strip.querySelector('.strip-arrow--prev').addEventListener('click', () => step(-1));
    strip.querySelector('.strip-arrow--next').addEventListener('click', () => step(1));

    viewport.addEventListener('mouseenter', () => { hover = true; });
    viewport.addEventListener('mouseleave', () => { hover = false; });
    strip.addEventListener('focusin', () => { focusIn = !!strip.querySelector(':focus-visible'); }); // keyboard focus only
    strip.addEventListener('focusout', e => { if (!strip.contains(e.relatedTarget)) focusIn = false; });
    // keep a keyboard-focused image in view
    originals.forEach((b, i) => b.addEventListener('focus', () => {
      if (!setW || !b.matches(':focus-visible')) return;
      const target = starts[i] - Math.max(0, (viewport.clientWidth - b.offsetWidth) / 2);
      go(x + (mod(target - x + setW / 2, setW) - setW / 2), 450);
      viewport.scrollLeft = 0;
    }));

    // drag / swipe
    viewport.addEventListener('pointerdown', e => {
      if (e.button !== 0) return;
      drag = { id: e.pointerId, sx: e.clientX, x0: x, moved: false }; tween = null;
    });
    viewport.addEventListener('pointermove', e => {
      if (!drag || e.pointerId !== drag.id) return;
      const dx = e.clientX - drag.sx;
      if (!drag.moved && Math.abs(dx) > 6) { drag.moved = true; viewport.setPointerCapture(e.pointerId); viewport.classList.add('is-dragging'); }
      if (drag.moved) x = drag.x0 - dx;
    });
    const endDrag = e => {
      if (!drag || e.pointerId !== drag.id) return;
      suppressClick = drag.moved; drag = null; viewport.classList.remove('is-dragging');
      setTimeout(() => { suppressClick = false; }, 0);
    };
    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointercancel', endDrag);

    function onShotClick(e) {
      if (suppressClick) { e.preventDefault(); return; }
      // a mouse click has e.detail > 0: focus goes back to the image on close only for keyboard use
      viewer.open(items, +e.currentTarget.dataset.i, originals[+e.currentTarget.dataset.i], e.detail === 0);
    }

    new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(strip);
    const relayout = () => { const f = setW ? mod(x, setW) / setW : 0; tween = null; measure(); x = f * setW; };
    window.addEventListener('resize', relayout);
    measure();
    requestAnimationFrame(frame);
  });

  function createViewer() {
    const el = document.getElementById('viewer');
    const img = el.querySelector('.viewer-img');
    const count = el.querySelector('.viewer-count');
    const label = el.querySelector('.viewer-label');
    let list = [], idx = 0, opener = null, open = false, keyboard = false, resetZoom = () => {};
    const pad = n => String(n).padStart(2, '0');
    const show = i => {
      idx = mod(i, list.length);
      const it = list[idx];
      resetZoom();
      img.classList.remove('is-ready');
      img.onload = () => img.classList.add('is-ready');
      img.width = it.w; img.height = it.h; img.alt = it.alt; img.src = it.large;
      if (img.complete) img.classList.add('is-ready');
      count.textContent = `${pad(idx + 1)} / ${pad(list.length)}`;
      [1, -1].forEach(d => { const p = new Image(); p.src = list[mod(idx + d, list.length)].large; });
    };
    const openFn = (items, i, from, viaKeyboard) => {
      list = items; opener = from; open = true; keyboard = viaKeyboard;
      label.textContent = from.closest('[data-strip]').dataset.label;
      show(i);
      el.hidden = false;
      requestAnimationFrame(() => el.classList.add('is-open'));
      document.documentElement.style.overflow = 'hidden';
      el.querySelector('.viewer-close').focus({ preventScroll: true });
    };
    const close = () => {
      if (!open) return;
      open = false; el.classList.remove('is-open'); resetZoom();
      document.documentElement.style.overflow = '';
      setTimeout(() => { if (!open) el.hidden = true; }, 300);
      if (keyboard && opener) opener.focus({ preventScroll: true });
      else document.activeElement?.blur();
    };
    el.querySelector('.viewer-prev').addEventListener('click', () => show(idx - 1));
    el.querySelector('.viewer-next').addEventListener('click', () => show(idx + 1));
    el.querySelector('.viewer-close').addEventListener('click', close);
    el.addEventListener('click', e => { if (e.target === el || e.target.classList.contains('viewer-figure')) close(); });
    document.addEventListener('keydown', e => {
      if (!open) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(idx - 1);
      else if (e.key === 'ArrowRight') show(idx + 1);
      else if (e.key === 'Tab') { // keep focus inside the viewer
        const f = [...el.querySelectorAll('button')], a = f[0], z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
      }
    });
    // ---- zoom: the mouse wheel zooms the image toward the pointer, from 100% (fit to screen) up to ZOOM_MAX, inside
    // its fitted frame only (the frame keeps its size and clips the image). Once zoomed, the cursor over the image is a
    // hand, and pressing the left button drags the image (hand tool). Changing image or closing goes back to 100%.
    const ZOOM_MAX = 4;
    let z = 1, tx = 0, ty = 0, pan = null;
    const frame = document.createElement('div');
    frame.className = 'viewer-frame';
    img.replaceWith(frame); frame.appendChild(img);
    // the line under the image: page number, then the permanent hint (mouse screens only, see ai-design.css)
    const hint = document.createElement('span');
    hint.className = 'viewer-hint';
    hint.setAttribute('aria-hidden', 'true');
    hint.textContent = 'WHEEL TO ZOOM · DRAG TO PAN';
    el.querySelector('.viewer-meta').appendChild(hint);
    // the zoomed image always covers the frame: its edges never come inside it, so dragging stops at the image's edges
    const clampPan = () => {
      const mx = frame.clientWidth * (z - 1) / 2, my = frame.clientHeight * (z - 1) / 2;
      tx = Math.min(mx, Math.max(-mx, tx)); ty = Math.min(my, Math.max(-my, ty));
    };
    const applyZoom = () => {
      if (z <= 1.001) { z = 1; tx = 0; ty = 0; }
      img.style.transform = z === 1 ? '' : `translate3d(${tx}px, ${ty}px, 0) scale(${z})`;
      el.classList.toggle('is-zoomed', z > 1);
    };
    const zoomAt = (nz, px, py) => {
      nz = Math.min(ZOOM_MAX, Math.max(1, nz));
      const r = frame.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      px = Math.min(r.right, Math.max(r.left, px)); py = Math.min(r.bottom, Math.max(r.top, py)); // anchor inside the frame
      const qx = (px - cx - tx) / z, qy = (py - cy - ty) / z; // pointer in image coordinates (from its centre)
      z = nz; tx = px - cx - z * qx; ty = py - cy - z * qy;
      clampPan(); applyZoom();
    };
    const endPan = () => { pan = null; el.classList.remove('is-panning'); };
    resetZoom = () => { z = 1; tx = 0; ty = 0; endPan(); applyZoom(); };
    el.addEventListener('wheel', e => {
      if (!open) return;
      e.preventDefault();
      const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 400 : 1);
      zoomAt(z * Math.exp(-dy * 0.0015), e.clientX, e.clientY);
    }, { passive: false });
    // no browser auto-scroll from the middle button inside the viewer
    el.addEventListener('mousedown', e => { if (e.button === 1) e.preventDefault(); });
    // hand tool: left button on the zoomed image drags it
    frame.addEventListener('pointerdown', e => {
      if (e.button !== 0 || z === 1 || !open) return;
      e.preventDefault();
      pan = { id: e.pointerId, sx: e.clientX, sy: e.clientY, tx, ty };
      el.classList.add('is-panning');
      try { frame.setPointerCapture(e.pointerId); } catch { /* pointer already gone */ }
    });
    frame.addEventListener('pointermove', e => {
      if (!pan || e.pointerId !== pan.id) return;
      tx = pan.tx + e.clientX - pan.sx; ty = pan.ty + e.clientY - pan.sy;
      clampPan(); applyZoom();
    });
    frame.addEventListener('pointerup', e => { if (pan && e.pointerId === pan.id) endPan(); });
    frame.addEventListener('pointercancel', endPan);
    window.addEventListener('blur', endPan);
    window.addEventListener('resize', () => { if (open && z > 1) { clampPan(); applyZoom(); } });

    // swipe to change image (touch, at 100% only)
    let sx = null;
    el.addEventListener('pointerdown', e => { sx = z === 1 ? e.clientX : null; });
    el.addEventListener('pointerup', e => {
      if (sx === null) return; const dx = e.clientX - sx; sx = null;
      if (Math.abs(dx) > 50 && e.pointerType !== 'mouse') show(idx + (dx < 0 ? 1 : -1));
    });
    return { open: openFn, isOpen: () => open };
  }
})();

// Ctrl + mouse wheel (and trackpad pinch, sent as Ctrl + wheel) does not zoom the page. A plain wheel still scrolls the
// page, and inside the open viewer it zooms the image as before.
window.addEventListener('wheel', e => { if (e.ctrlKey) e.preventDefault(); }, { passive: false });
