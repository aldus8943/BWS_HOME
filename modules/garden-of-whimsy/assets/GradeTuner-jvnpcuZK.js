const u={overall:1,gradeR:.22,gradeG:.42,gradeB:.28,water:1,sky:.5},c=[2.2,1.35,1.7];function g(o){const r={...u,compare:!1};window.__gradeTune=r;const i=[["overall","Overall strength",0,2,.01],["gradeG","Pink depth (green ↓)",0,.9,.01],["gradeR","Red / coral depth",0,.7,.01],["gradeB","Blue / lilac depth",0,.7,.01],["water","Water depth",0,2.5,.01],["sky","Sky strength",0,1.5,.01]],a=document.createElement("div");a.id="grade-tuner",a.innerHTML=`
    <style>
      #grade-tuner { position: fixed; left: 16px; top: 16px; z-index: 9999; width: 280px; padding: 12px 14px 10px;
        background: rgba(24, 18, 28, 0.82); color: #f6eef2; font: 12px/1.35 system-ui, sans-serif; border-radius: 10px;
        box-shadow: 0 6px 24px rgba(0,0,0,0.35); backdrop-filter: blur(6px); user-select: none; }
      #grade-tuner h4 { margin: 0 0 8px; font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: #ffd6e6; }
      #grade-tuner label { display: grid; grid-template-columns: 1fr 44px; gap: 2px 8px; margin: 6px 0; }
      #grade-tuner input[type=range] { grid-column: 1 / 3; width: 100%; accent-color: #ff8fb4; }
      #grade-tuner output { text-align: right; font-variant-numeric: tabular-nums; color: #ffd6e6; }
      #grade-tuner .row { display: flex; gap: 6px; margin-top: 8px; flex-wrap: wrap; }
      #grade-tuner button { flex: 1; padding: 5px 6px; border: 0; border-radius: 6px; background: #4a3a52; color: #fff;
        font: inherit; cursor: pointer; }
      #grade-tuner button.on { background: #ff8fb4; color: #2a1520; }
      #grade-tuner .hint { margin-top: 8px; color: #cdbfc8; font-size: 11px; }
    </style>
    <h4>Garden 01 colour · review</h4>
    ${i.map(([e,t,n,s,p])=>`<label>${t}<output data-o="${e}"></output>
      <input type="range" data-k="${e}" min="${n}" max="${s}" step="${p}"></label>`).join("")}
    <div class="row"><button data-a="compare">Before / after</button><button data-a="reset">Reset</button></div>
    <div class="row"><button data-a="start">Garden 01 start</button><button data-a="mid">Garden 01 middle</button></div>
    <div class="hint">Tune until it looks right, then tell Claude "use the slider values".</div>`,document.body.appendChild(a);for(const e of["pointerdown","wheel"])a.addEventListener(e,t=>t.stopPropagation());const d=()=>{for(const[e]of i)a.querySelector(`[data-k="${e}"]`).value=r[e],a.querySelector(`[data-o="${e}"]`).textContent=(+r[e]).toFixed(2);a.querySelector('[data-a="compare"]').classList.toggle("on",r.compare)};a.addEventListener("input",e=>{const t=e.target.dataset.k;t&&(r[t]=+e.target.value,d())}),a.addEventListener("click",e=>{const t=e.target.dataset.a;t==="compare"&&(r.compare=!r.compare),t==="reset"&&Object.assign(r,u,{compare:!1}),(t==="start"||t==="mid")&&o.journey&&window.__garden.api&&(o.state.current==="INTRO"&&document.querySelector("#start")?.click(),setTimeout(()=>window.__garden.api.jump(t==="start"?0:.09),o.state.current==="INTRO"?2600:0)),d()}),d();const l=()=>{const e=o.garden;if(e?.weather?.presets&&e.water){const t=e.weather.presets[0].scalars,n=r.compare?0:r.overall;t.gradeR=r.gradeR*n,t.gradeG=r.gradeG*n,t.gradeB=r.gradeB*n,e.water.uniforms.uGradeWater.value.set(...c.map(s=>s*r.water)),e.water.uniforms.uGradeSky.value=r.sky}requestAnimationFrame(l)};l()}export{g as installGradeTuner};
