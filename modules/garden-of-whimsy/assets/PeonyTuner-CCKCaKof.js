import{H as c,a as f}from"./index-LCeuZMDZ.js";import"./three-BW246XVu.js";function b(r){const e={...c,compare:!1,hover:!1,opening:0};window.__peonyTune=e;const s=[["warmth","Petal warmth (champagne · peach)",0,1,.01],["shadow","Petal shadow depth",0,1,.01],["blush","Inner blush",0,1,.01],["glow","Glow strength",0,1.5,.01],["halo","Background halo",0,1.5,.01]],t=document.createElement("div");t.id="peony-tuner",t.innerHTML=`
    <style>
      #peony-tuner { position: fixed; left: 16px; top: 16px; z-index: 9999; width: 290px; padding: 12px 14px 10px;
        background: rgba(28, 20, 22, 0.84); color: #f8eee8; font: 12px/1.35 system-ui, sans-serif; border-radius: 10px;
        box-shadow: 0 6px 24px rgba(0,0,0,0.35); backdrop-filter: blur(6px); user-select: none; }
      #peony-tuner h4 { margin: 0 0 8px; font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: #f2d6c4; }
      #peony-tuner label { display: grid; grid-template-columns: 1fr 44px; gap: 2px 8px; margin: 6px 0; }
      #peony-tuner input[type=range] { grid-column: 1 / 3; width: 100%; accent-color: #e6b89f; }
      #peony-tuner output { text-align: right; font-variant-numeric: tabular-nums; color: #f2d6c4; }
      #peony-tuner .row { display: flex; gap: 6px; margin-top: 8px; flex-wrap: wrap; }
      #peony-tuner button { flex: 1; padding: 5px 6px; border: 0; border-radius: 6px; background: #4d3a3c; color: #fff;
        font: inherit; cursor: pointer; }
      #peony-tuner button.on { background: #e6b89f; color: #2a1814; }
      #peony-tuner .sep { margin-top: 10px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.12); }
      #peony-tuner .hint { margin-top: 8px; color: #d4c4bc; font-size: 11px; }
      #peony-tuner code { color: #f2d6c4; font-size: 11px; word-break: break-all; }
    </style>
    <h4>Garden 06 hero peony · review</h4>
    ${s.map(([o,n,a,g,h])=>`<label>${n}<output data-o="${o}"></output>
      <input type="range" data-k="${o}" min="${a}" max="${g}" step="${h}"></label>`).join("")}
    <div class="row"><button data-a="compare">Before / after</button><button data-a="reset">Reset to approved</button></div>
    <div class="sep"><b>Review states</b></div>
    <div class="row"><button data-a="goto">Go to Garden 06</button><button data-a="hover">Hover glow</button></div>
    <label>Opening preview<output data-o="opening"></output>
      <input type="range" data-k="opening" min="0" max="1" step="0.01"></label>
    <div class="hint">Wait for the hummingbird and CLICK TO DISCOVER, then click the flower for the real reveal, or use the
      opening preview. "Before" shows the look reviewed before this pass.</div>
    <div class="hint">Values: <code data-o="values"></code></div>
    <div class="hint">When it looks right, tell Claude "use the slider values".</div>`,document.body.appendChild(t);for(const o of["pointerdown","pointerup","wheel"])t.addEventListener(o,n=>n.stopPropagation());const d=()=>r.garden?.flower,u=()=>e.compare?f:{warmth:e.warmth,shadow:e.shadow,blush:e.blush,glow:e.glow,halo:e.halo},i=()=>d()?.setLook(u()),l=()=>{for(const[o]of s)t.querySelector(`[data-k="${o}"]`).value=e[o],t.querySelector(`[data-o="${o}"]`).textContent=(+e[o]).toFixed(2);t.querySelector('[data-k="opening"]').value=e.opening,t.querySelector('[data-o="opening"]').textContent=(+e.opening).toFixed(2),t.querySelector('[data-a="compare"]').classList.toggle("on",e.compare),t.querySelector('[data-a="hover"]').classList.toggle("on",e.hover),t.querySelector('[data-o="values"]').textContent=s.map(([o])=>`${o} ${(+e[o]).toFixed(2)}`).join(" · ")};t.addEventListener("input",o=>{const n=o.target.dataset.k;if(n){if(e[n]=+o.target.value,n==="opening"){const a=d();a&&(a.openTarget=e.opening,e.opening<1&&(a.jewelShown=!1,a.placeholder.hide()))}else i();l()}}),t.addEventListener("click",o=>{const n=o.target.dataset.a;if(n==="compare"&&(e.compare=!e.compare,i()),n==="reset"&&(Object.assign(e,c,{compare:!1}),i()),n==="hover"&&(e.hover=!e.hover),n==="goto"&&r.journey&&window.__garden.api){const a=()=>{r.discovery.reset(),window.__garden.api.jump(r.garden.spot.progress-.004)};r.state.current==="INTRO"?(document.querySelector("#start")?.click(),setTimeout(a,2600)):a()}l()}),l();const p=()=>{const o=d();o&&!p.applied&&(i(),p.applied=!0),o&&e.hover&&o.invited&&(o.hover=!0),requestAnimationFrame(p)};p()}export{b as installPeonyTuner};
