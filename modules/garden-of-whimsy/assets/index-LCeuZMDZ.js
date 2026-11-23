const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./audio-BKLz871Z.js","./three-BW246XVu.js","./TestHooks-DDuFZOWR.js","./PeonyTuner-CCKCaKof.js"])))=>i.map(i=>d[i]);
import{C as N,V as g,a as Mt,B as dt,F as X,M as J,Q as V,S as K,D as Dt,b as R,G as rt,c as lt,d as j,I as ct,e as ot,f as St,A as Gt,P as Ce,g as Ai,h as Qs,i as ti,j as ft,k as ki,T as zi,l as ei,E as Ri,m as Pt,n as si,o as Ke,R as _i,p as Ti,W as Qe,q as ts,H as Ci,r as Ei,s as hs,t as es,u as ss,O as ii,v as Fi,w as us,x as Pi,y as ds,z as Ii,J as Ni,K as Li,L as Oi,N as fs,U as Di,X as Gi,Y as Wi,Z as Vi,_ as Bi}from"./three-BW246XVu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const Ui="modulepreload",ji=function(l,t){return new URL(l,t).href},ps={},Me=function(t,e,s){let i=Promise.resolve();if(e&&e.length>0){let c=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),n=r?.nonce||r?.getAttribute("nonce");i=c(e.map(h=>{if(h=ji(h,s),h in ps)return;ps[h]=!0;const u=h.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(s)for(let m=a.length-1;m>=0;m--){const d=a[m];if(d.href===h&&(!u||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${f}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":Ui,u||(p.as="script"),p.crossOrigin="",p.href=h,n&&p.setAttribute("nonce",n),document.head.appendChild(p),u)return new Promise((m,d)=>{p.addEventListener("load",m),p.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return i.then(a=>{for(const r of a||[])r.status==="rejected"&&o(r.reason);return t().catch(o)})},kt=new URLSearchParams(window.location.search),tt={introVideo:kt.get("video")||null,introPoster:null,quality:kt.get("quality")||"high",debug:kt.has("debug"),attractionsEnabled:kt.has("attractions")?kt.get("attractions")==="1":!kt.has("test"),testMode:kt.has("test"),seed:2027,maxPixelRatio:1.5,transitionSeconds:1.6,unitsPerNotch:.57,maxLeadUnits:3.6,smoothTime:.32,maxSpeed:4.8,travelSpeedFactor:.4,fov:58,boatScale:.78,eyeBack:.3,cameraFloat:Math.min(1,Math.max(0,parseFloat(kt.get("float")??"0")||0)),eyeHeight:.52,lookAhead:6,lookHeight:.46,recenterAfter:6,discoveries:[{id:"secret-peony",progress:.95,enterRadius:.018,exitRadius:.042,side:1,ahead:7.2}],guideApproachSeconds:3.8,discoveryCameraSeconds:1.9,endingProgress:.994},B=Object.freeze({INTRO:"INTRO",TRANSITION:"TRANSITION",JOURNEY:"JOURNEY",DISCOVERY_INVITATION:"DISCOVERY_INVITATION",DISCOVERY_REVEAL:"DISCOVERY_REVEAL",RETURN_TO_JOURNEY:"RETURN_TO_JOURNEY",ENDING:"ENDING"}),qi={INTRO:["TRANSITION"],TRANSITION:["JOURNEY","INTRO"],JOURNEY:["DISCOVERY_INVITATION","ENDING","INTRO"],DISCOVERY_INVITATION:["DISCOVERY_REVEAL","JOURNEY","INTRO"],DISCOVERY_REVEAL:["RETURN_TO_JOURNEY","INTRO"],RETURN_TO_JOURNEY:["JOURNEY","INTRO"],ENDING:["JOURNEY","INTRO"]};class Hi{constructor(){this.current=B.INTRO,this.listeners=new Set}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}is(...t){return t.includes(this.current)}can(t){return qi[this.current].includes(t)}to(t){if(t===this.current)return!1;if(!this.can(t))return console.warn(`Ignored invalid experience transition: ${this.current} -> ${t}`),!1;const e=this.current;this.current=t;for(const s of this.listeners)s(t,e);return!0}get navigationEnabled(){return this.is(B.JOURNEY,B.DISCOVERY_INVITATION,B.ENDING)}get lookEnabled(){return this.is(B.JOURNEY,B.DISCOVERY_INVITATION,B.ENDING)}}const Yi=.2,$i=.5,ue=l=>l-Math.floor(l);function zt(l,t,e){l=ue(l*.1031),t=ue(t*.1031),e=ue(e*.1031);const s=l*(e+31.32)+t*(t+31.32)+e*(l+31.32);return l+=s,t+=s,e+=s,ue((l+t)*e)}function Le(l,t,e){const s=Math.floor(l),i=Math.floor(t),o=Math.floor(e);let a=l-s,r=t-i,n=e-o;a=a*a*(3-2*a),r=r*r*(3-2*r),n=n*n*(3-2*n);const c=zt(s,i,o),h=zt(s+1,i,o),u=zt(s,i+1,o),f=zt(s+1,i+1,o),p=zt(s,i,o+1),m=zt(s+1,i,o+1),d=zt(s,i+1,o+1),v=zt(s+1,i+1,o+1),w=(x,A)=>x+(A-x)*a,y=w(c,h)+(w(u,f)-w(c,h))*r,M=w(p,m)+(w(d,v)-w(p,m))*r;return y+(M-y)*n}function Xi(l,t,e){let s=Le(l*.9,(t-e*.55)*.55,e*.12)*.55;return s+=Le(l*2.3,(t-e*.8)*1.7,e*.3+4)*.28,s+=Le(l*6,(t-e*1.1)*4.5,e*.6+9)*.12,s+=Math.sin(t*3.1-e*1.6+Math.sin(l*1.7)*1.2)*.04,s}const U={uTime:{value:0},uSunDir:{value:new g(.12,.34,-1).normalize()},uSunColor:{value:new N(1,.84,.66).multiplyScalar(1.3)},uFillDir:{value:new g(-.25,.55,1).normalize()},uFillColor:{value:new N(.96,.84,.86).multiplyScalar(.5)},uSkyFill:{value:new N(.36,.36,.47)},uGroundFill:{value:new N(.3,.22,.2)},uRimColor:{value:new N(1,.86,.74)},uZenith:{value:new N("#7d8fc6")},uMidSky:{value:new N("#c9aecb")},uHorizon:{value:new N("#f2cdbd")},uSunGlow:{value:new N("#fff1d8")},uHazeDensity:{value:.019},uHazeStart:{value:10},uWind:{value:1},uCloudAmount:{value:.35},uCloudDark:{value:.1},uRain:{value:0},uWet:{value:0},uSparkle:{value:0},uScatter:{value:.3},uRays:{value:0},uSunVis:{value:1},uWaterBody:{value:new N("#1a1a14")},uRippleGain:{value:1},uReflectDistort:{value:1},uImpactBoost:{value:0},uCloudContrast:{value:0},uCloudBright:{value:1},uCloudOpen:{value:0},uStormDeck:{value:0},uStormDrift:{value:0},uFlowerGust:{value:0},uRainRate:{value:0},uGrade:{value:new g(0,0,0)},uGradeWater:{value:new g(2.2,1.35,1.7)},uGradeSky:{value:.5},uGradeWB:{value:new g(0,0,0)},uGradeContrast:{value:new Mt(0,.6)}},$t=`
uniform vec3 uGrade;
uniform vec3 uGradeWater;
uniform float uGradeSky;
uniform vec3 uGradeWB;
uniform vec2 uGradeContrast;
vec3 gardenGrade(vec3 c, vec3 k) { return pow(max(c, vec3(0.0)), vec3(1.0) + uGrade * k); }
// Garden 01 look (approved V4.9.6), after the approved richness grade, the same for every surface (a whole-frame balance):
//  - white balance: per-channel gains 1 + uGradeWB, normalised to keep display luminance (no exposure change)
//  - contrast: a pivoted, endpoint-preserving curve on display luminance only (hue and saturation ratios kept):
//      L < p : p * (L / p)^s          L >= p : 1 - (1 - p) * ((1 - L) / (1 - p))^s,   s = 1 + uGradeContrast.x
//    slope s at the pivot p, 0 stays 0 and 1 stays 1 (highlights roll off, never clip; shadows keep gradation)
// Each step runs only when its value is not neutral.
vec3 gardenLook(vec3 c) {
  const vec3 Y = vec3(0.2126, 0.7152, 0.0722);
  if (any(notEqual(uGradeWB, vec3(0.0)))) { vec3 g = vec3(1.0) + uGradeWB; c *= g / dot(g, Y); }
  if (uGradeContrast.x != 0.0) {
    float L = dot(c, Y), Lc = clamp(L, 0.0, 1.0), p = uGradeContrast.y, s = 1.0 + uGradeContrast.x;
    float L2 = Lc < p ? p * pow(Lc / p, s) : 1.0 - (1.0 - p) * pow((1.0 - Lc) / (1.0 - p), s);
    c *= L2 / max(L, 1e-5);
  }
  return c;
}
#ifdef TONE_MAPPING
  #define GARDEN_GRADE_SCALED(k) if (any(notEqual(uGrade, vec3(0.0)))) gl_FragColor.rgb = gardenGrade(gl_FragColor.rgb, vec3(k)); if (any(notEqual(uGradeWB, vec3(0.0))) || uGradeContrast.x != 0.0) gl_FragColor.rgb = gardenLook(gl_FragColor.rgb);
#else
  #define GARDEN_GRADE_SCALED(k)
#endif
#define GARDEN_GRADE_OUTPUT GARDEN_GRADE_SCALED(1.0)
`,mt=`
uniform float uTime;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uFillDir;
uniform vec3 uFillColor;
uniform vec3 uSkyFill;
uniform vec3 uGroundFill;
uniform vec3 uRimColor;
uniform vec3 uZenith;
uniform vec3 uMidSky;
uniform vec3 uHorizon;
uniform vec3 uSunGlow;
uniform float uHazeDensity;
uniform float uHazeStart;
uniform float uWind;
uniform float uCloudAmount;
uniform float uCloudDark;
uniform float uRain;
uniform float uWet;
uniform float uSparkle;
uniform float uScatter;
uniform float uRays;
uniform float uSunVis;

float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.zyx + 31.32);
  return fract((p.x + p.y) * p.z);
}

float vnoise(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash13(i), n100 = hash13(i + vec3(1,0,0)), n010 = hash13(i + vec3(0,1,0)), n110 = hash13(i + vec3(1,1,0));
  float n001 = hash13(i + vec3(0,0,1)), n101 = hash13(i + vec3(1,0,1)), n011 = hash13(i + vec3(0,1,1)), n111 = hash13(i + vec3(1,1,1));
  return mix(mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y), mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y), f.z);
}

// Base sky colour for a view direction (no clouds). Shared by the sky dome, haze and water.
vec3 skyGradient(vec3 dir) {
  float h = dir.y;
  vec3 c = mix(uHorizon, uMidSky, smoothstep(0.0, 0.22, h));
  c = mix(c, uZenith, smoothstep(0.18, 0.85, h));
  c = mix(c, uHorizon * 0.92, smoothstep(0.0, -0.25, h));
  float sun = max(dot(dir, uSunDir), 0.0);
  c += uSunGlow * (pow(sun, 7.0) * 0.55 + pow(sun, 60.0) * 0.9) * uSunVis;
  // low warm band all around the horizon
  c += vec3(0.10, 0.05, 0.02) * exp(-abs(h) * 9.0) * uSunVis;
  return c;
}

vec3 hazeColor(vec3 dir) {
  vec3 d = normalize(vec3(dir.x, clamp(dir.y, -0.05, 0.25), dir.z));
  vec3 c = skyGradient(d);
  // sunlight scattered by the haze toward the viewer (luminous air when looking toward the sun)
  float sun = max(dot(normalize(dir), uSunDir), 0.0);
  c += uSunGlow * (pow(sun, 6.0) * 0.6 + pow(sun, 24.0) * 0.6) * uScatter * uSunVis;
  // light shafts in the air after the rain (same radial pattern as the sky rays)
  if (uRays > 0.001) {
    vec3 tA = normalize(cross(uSunDir, vec3(0.0, 1.0, 0.0)));
    vec3 tB = cross(tA, uSunDir);
    vec3 nd = normalize(dir);
    float ang = atan(dot(nd, tB), dot(nd, tA));
    float streak = vnoise(vec3(ang * 9.0, 0.0, uTime * 0.03)) * 0.6 + vnoise(vec3(ang * 23.0, 5.0, uTime * 0.05)) * 0.4;
    c += uSunGlow * smoothstep(0.5, 0.88, streak) * pow(sun, 3.5) * uRays * 0.3;
  }
  return c;
}

vec3 applyHaze(vec3 col, vec3 worldPos) {
  vec3 v = worldPos - cameraPosition;
  float d = length(v);
  vec3 dir = v / max(d, 1e-4);
  float heightFade = exp(-max(worldPos.y, 0.0) * 0.045);
  float f = 1.0 - exp(-max(d - uHazeStart, 0.0) * uHazeDensity * heightFade);
  return mix(col, hazeColor(dir), clamp(f, 0.0, 1.0));
}

// Soft gouache-like lighting: wrapped diffuse, petal translucency, hemisphere fill, gentle rim.
vec3 gouacheLight(vec3 albedo, vec3 N, vec3 V, float translucency, float ao) {
  float ndl = dot(N, uSunDir);
  float wrap = clamp((ndl + 0.5) / 1.5, 0.0, 1.0);
  wrap = wrap * wrap * (3.0 - 2.0 * wrap);
  float back = clamp(-ndl, 0.0, 1.0);
  float through = pow(clamp(dot(-V, uSunDir), 0.0, 1.0), 3.0);
  vec3 hemi = mix(uGroundFill, uSkyFill, N.y * 0.5 + 0.5);
  float fill = clamp(dot(N, uFillDir) * 0.6 + 0.4, 0.0, 1.0);
  vec3 light = hemi * (0.45 + 0.55 * ao) + uSunColor * wrap * (0.35 + 0.65 * ao) * 0.62 + uFillColor * fill * ao;
  vec3 trans = uSunColor * albedo * albedo * (back * 0.5 + through * 0.45) * translucency * (0.4 + 0.6 * ao) * 1.6;
  float rim = pow(1.0 - clamp(abs(dot(N, V)), 0.0, 1.0), 3.0);
  return albedo * light + trans + rim * uRimColor * albedo * 0.35 * ao;
}

// Wind: a slow travelling gust envelope on top of the sway, so strong-wind gardens visibly breathe.
vec3 windOffset(vec2 xz) {
  float t = uTime;
  float gust = 0.65 + 0.35 * sin(t * 0.31 + xz.x * 0.05 - xz.y * 0.04) * sin(t * 0.17 + 1.3);
  float a = sin(t * 0.83 + xz.x * 0.31 + xz.y * 0.19) + 0.45 * sin(t * 1.61 + xz.y * 0.47 + xz.x * 0.13);
  float b = cos(t * 0.67 + xz.y * 0.27 + xz.x * 0.17) * 0.8;
  return vec3(a * 0.05, 0.0, b * 0.035) * uWind * mix(1.0, gust * 1.35, smoothstep(1.0, 1.8, uWind));
}
`,Vt={windIntensity:{uniform:"uWind",kind:"scalar",note:"Plant/leaf sway amplitude AND rain slant (one shared wind)."},rainIntensity:{uniform:"uRain",kind:"scalar",note:"Shader rain amount: rain rings on the water, wet petals. Not the streak density (see rainDropDensity)."},wetness:{uniform:"uWet",kind:"scalar",note:"Wet-surface look on petals and leaves."},wetSparkle:{uniform:"uSparkle",kind:"scalar",note:"Sun glints on wet surfaces (V4.7 = wet * breakthrough)."},cloudCoverage:{uniform:"uCloudAmount",kind:"scalar",note:"0 = wisps, 1 = closed overcast."},cloudDarkness:{uniform:"uCloudDark",kind:"scalar",note:"Darker cloud bellies / greyer dome. Closest V4.7 control to cloud contrast."},sunlightVisibility:{uniform:"uSunVis",kind:"scalar",note:"How much sun disc and direct light get through."},sunlightIntensity:{uniform:"uSunColor",kind:"colorScale",note:"Scales the direct sun colour (use mode multiply)."},sunDirection:{uniform:"uSunDir",kind:"vec3",note:"Normalised direction toward the sun."},hazeDensity:{uniform:"uHazeDensity",kind:"scalar",note:"Atmospheric haze density."},hazeStart:{uniform:"uHazeStart",kind:"scalar",note:"Distance where haze begins."},sunScatter:{uniform:"uScatter",kind:"scalar",note:"Luminous in-scattering toward the sun."},sunRays:{uniform:"uRays",kind:"scalar",note:"Crepuscular rays in sky and air."},skyZenith:{uniform:"uZenith",kind:"color",note:"Sky gradient top."},skyMid:{uniform:"uMidSky",kind:"color",note:"Sky gradient middle."},skyHorizon:{uniform:"uHorizon",kind:"color",note:"Sky gradient horizon (also tints haze)."},sunGlow:{uniform:"uSunGlow",kind:"color",note:"Sun glow / silver-lining colour."},fillLight:{uniform:"uFillColor",kind:"colorScale",note:"Scales the soft fill light (V4.8; rewritten by WeatherSystem every frame)."},skyFill:{uniform:"uSkyFill",kind:"colorScale",note:"Scales the sky ambient fill (V4.8; rewritten by WeatherSystem every frame)."},rimLight:{uniform:"uRimColor",kind:"colorScale",note:"Scales the rim light (V4.8; rewritten by WeatherSystem every frame)."},waterRippleStrength:{uniform:"uRippleGain",kind:"scalar",neutral:1,note:"Water normal gain / wind chop (WaterSystem)."},reflectionDistortion:{uniform:"uReflectDistort",kind:"scalar",neutral:1,note:"Planar reflection UV distortion scale (WaterSystem)."},rainImpactStrength:{uniform:"uImpactBoost",kind:"scalar",neutral:0,note:"Extra storm impact rings on the water; density follows rainIntensity (WaterSystem)."},cloudContrast:{uniform:"uCloudContrast",kind:"scalar",neutral:0,note:"Hard storm cloud edges, dark bellies, bright tops (SkySystem)."},cloudBrightness:{uniform:"uCloudBright",kind:"scalar",neutral:1,note:"Lit cloud colour scale (SkySystem)."},cloudOpening:{uniform:"uCloudOpen",kind:"scalar",neutral:0,note:"Clouds part around the sun (SkySystem)."},stormCloudMasses:{uniform:"uStormDeck",kind:"scalar",neutral:0,note:"Low storm cloud masses seen from the boat: gather, merge, break apart (SkySystem)."},stormCloudDrift:{uniform:"uStormDrift",kind:"scalar",neutral:0,note:"Integrated downwind drift of the storm masses; set it every frame while they are on (SkySystem)."},flowerGust:{uniform:"uFlowerGust",kind:"scalar",neutral:0,note:"Travelling gust fronts through the flower beds: staggered downwind lean, rooted (FloralMaterial)."},rainRingRate:{uniform:"uRainRate",kind:"scalar",neutral:0,note:"d(rainIntensity)/dt: rings born at the earlier rain level finish instead of vanishing (WaterSystem)."},rainDropDensity:{external:!0,kind:"scalar",note:"Rain streak density/heaviness (RainSystem uRain). Bound by App."},rainDrizzle:{external:!0,kind:"scalar",note:"Rain streak drizzle fraction (RainSystem uDrizzle). Bound by App."},flowerSwayMultiplier:{reserved:!0,note:"Use windIntensity: uWind already drives plant sway (and cloud drift) only."},lensFlareIntensity:{reserved:!0,note:"Owned by the Golden Awakening flare layer (attraction-owned meshes)."},rainbowOpacity:{reserved:!0,note:"Owned by the Golden Awakening rainbow mesh (attraction-owned)."}},Oe=(l,t,e)=>l+(t-l)*e;class Zi{constructor({debug:t=!1}={}){this.debug=t,this.requests=new Map,this.order=0,this.stats={frames:0,requests:0,conflicts:0,ignored:0,lastConflicts:[]},this._warned=new Set,this.targets=new Map}bindTarget(t,e,{after:s=null}={}){const i=Vt[t];if(!i||!i.external)throw new Error(`"${t}" is not an external channel`);this.targets.set(t,{u:e,after:s})}beginFrame(){this.requests.clear(),this.order=0,this.stats.lastConflicts=[]}set(t,e,s,{weight:i=1,mode:o="override",priority:a=0}={}){const r=Vt[e];if(!r)throw new Error(`Unknown environment channel "${e}"`);if(r.reserved)return this.stats.ignored++,this._warnOnce(`reserved:${e}`,`Channel "${e}" is reserved (not a shared uniform): ${r.note}`),!1;if(r.external&&!this.targets.has(e))return this.stats.ignored++,this._warnOnce(`unbound:${e}`,`Channel "${e}" has no bound target.`),!1;if(!(i>0))return!0;let n=this.requests.get(e);return n||this.requests.set(e,n=[]),n.push({owner:t,value:s,weight:Math.min(1,i),mode:o,priority:a,order:this.order++}),this.stats.requests++,!0}owners(t){return(this.requests.get(t)||[]).map(e=>e.owner)}apply(){this.stats.frames++;for(const e of Object.values(Vt))e.neutral!==void 0&&(U[e.uniform].value=e.neutral);const t=new Set;for(const[e,s]of this.requests){const i=Vt[e],o=i.external?this.targets.get(e):null,a=o?o.u:U[i.uniform];o?.after&&t.add(o.after),s.sort((n,c)=>n.priority-c.priority||n.order-c.order);const r=new Map;for(const n of s){if(n.mode==="override"){const c=n.priority,h=r.get(c);h&&h!==n.owner&&(this.stats.conflicts++,this.stats.lastConflicts.push(`${e}: ${h} vs ${n.owner}`),this._warnOnce(`conflict:${e}:${h}:${n.owner}`,`Override conflict on "${e}" between ${h} and ${n.owner} (same priority). Last one wins.`)),r.set(c,n.owner)}this._applyOne(i.kind,a,n)}}for(const e of t)e()}restoreNeutral(){for(const t of Object.values(Vt))t.neutral!==void 0&&(U[t.uniform].value=t.neutral)}_applyOne(t,e,{value:s,weight:i,mode:o}){if(t==="scalar")o==="override"?e.value=Oe(e.value,s,i):o==="multiply"?e.value*=Oe(1,s,i):e.value+=s*i;else if(t==="colorScale"){const a=o==="add"?1+s*i:Oe(1,s,i);e.value.multiplyScalar(a)}else t==="color"?o==="override"?e.value.lerp(s,i):o==="multiply"?e.value.multiply(s.clone().lerp(Ji(s),1-i)):e.value.add(s.clone().multiplyScalar(i)):t==="vec3"&&(o==="override"?e.value.lerp(s,i).normalize():e.value.add(s.clone().multiplyScalar(i)).normalize())}describe(){return Object.entries(Vt).map(([t,e])=>({name:t,backed:!e.reserved,external:!!e.external,bound:e.external?this.targets.has(t):void 0,uniform:e.uniform||null,neutral:e.neutral,kind:e.kind||null,note:e.note}))}_warnOnce(t,e){this._warned.has(t)||(this._warned.add(t),this.debug&&console.warn(`[attractions] ${e}`))}}function Ji(l){return l.clone().setRGB(1,1,1)}class ne{constructor({id:t,garden:e,trigger:s,replay:i="on-reenter",reverse:o="fade-out",implemented:a=!1,description:r=""}){Object.assign(this,{id:t,garden:e,trigger:{enterMargin:0,exitMargin:.02,states:["JOURNEY","DISCOVERY_INVITATION"],...s},replay:i,reverse:o,implemented:a,description:r}),this.phase="idle",this.elapsed=0,this.prepared=!1,this.finished=!0}prepare(){}enter(){this.elapsed=0,this.phase="start",this.finished=!1}update(t){this.elapsed+=t}exit(){this.finish()}finish(){this.phase="complete",this.finished=!0}reset(){this.phase="idle",this.elapsed=0,this.finished=!0}dispose(){}}function Ki(l){let t=l>>>0;return function(){t=t+1831565813>>>0;let s=t;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296}}class at{constructor(t=1){this.next=Ki(t)}float(t=0,e=1){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.float(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}chance(t){return this.next()<t}sign(){return this.next()<.5?-1:1}gauss(){return(this.next()+this.next()+this.next()+this.next()-2)*1.732}weighted(t){let e=0;for(const i of t)e+=i.weight;let s=this.next()*e;for(const i of t)if(s-=i.weight,s<=0)return i;return t[t.length-1]}fork(t){return new at(Math.floor(this.next()*1e9)^t)}}new J;const de=new g,bt=Math.PI;function oe(l,t,e){const s=Math.min(1,Math.max(0,(e-l)/(t-l)));return s*s*(3-2*s)}function z(l,t,e){return l+(t-l)*e}const Qi={round:l=>Math.max(Math.pow(Math.sin(bt*Math.pow(Math.min(l,.999),.82)),.5),.14*(1-l)),lance:l=>Math.max(Math.pow(Math.sin(bt*Math.pow(Math.min(l,.999),.68)),.95),.12*(1-l)),strap:l=>(.32+.68*oe(0,.16,l))*Math.sqrt(Math.max(0,1-Math.pow(Math.max(0,(l-.8)/.2),2)))+.02,wedge:l=>(.22+.78*Math.pow(l,.62))*(l>.94?.9:1),broad:l=>(.26+.74*oe(0,.5,l))*(1-.18*Math.pow(l,3)),egg:l=>Math.max(Math.pow(Math.sin(bt*Math.pow(Math.min(l,.999),.9)),.62),.2*(1-l))};class Ee{constructor({hinge:t=!1}={}){this.hinge=t,this.pos=[],this.col=[],this.info=[],this.extra=[],this.idx=[],this.hingeArr=[],this.openArr=[],this.matrix=null,this.windMode=0,this.translucency=1}get vertexCount(){return this.pos.length/3}_vertex(t,e,s,i,o,a,r,n,c,h){this.matrix&&(de.set(t,e,s).applyMatrix4(this.matrix),t=de.x,e=de.y,s=de.z),this.pos.push(t,e,s),this.col.push(i[0],i[1],i[2]),this.info.push(o,a,r,n),this.extra.push(this.windMode,this.translucency),this.hinge&&(this.hingeArr.push(c?c[0]:0,c?c[1]:0,c?c[2]:0,c?c[3]:0),this.openArr.push(h||0))}withMatrix(t,e){const s=this.matrix;this.matrix=s?s.clone().multiply(t):t,e(),this.matrix=s}_grid(t,e){const s=this.vertexCount-(t+1)*(e+1);for(let i=0;i<e;i++)for(let o=0;o<t;o++){const a=s+i*(t+1)+o,r=a+1,n=a+t+1,c=n+1;this.idx.push(a,n,r,r,n,c)}}petal(t){const{az:e=0,r0:s=.05,y0:i=0,length:o=1,width:a=.6,elev:r=.3,curl:n=0,droop:c=0,cup:h=.3,ruffle:u=0,ruffleFreq:f=3,seed:p=0,profile:m="round",tipTeeth:d=0,asym:v=0,uSeg:w=4,vSeg:y=6,shade0:M=.05,shade1:x=1,ao0:A=.5,ao1:E=1,tint:k=[1,1,1],tintBase:_=null,mat:O=0,color:b=null,open:T=0,twist:F=0,tipRound:L=0}=t,G=typeof m=="function"?m:Qi[m],C=[Math.cos(e),0,Math.sin(e)],D=[-Math.sin(e),0,Math.cos(e)],S=24,P=[0],I=[0],W=[];for(let Z=0;Z<=S;Z++){const H=Z/S;if(W.push(r+n*Math.pow(H,1.35)+c*H*H),Z>0){const Q=(W[Z]+W[Z-1])*.5,$=o/S;P.push(P[Z-1]+Math.cos(Q)*$),I.push(I[Z-1]+Math.sin(Q)*$)}}const Y=(Z,H)=>{const Q=Math.min(S-1e-6,Math.max(0,H*S)),$=Math.floor(Q);return z(Z[$],Z[$+1],Q-$)},et=[C[0]*s,i,C[2]*s,e],gt=b||k;for(let Z=0;Z<=y;Z++){const H=Z/y;for(let Q=0;Q<=w;Q++){const $=Q/w*2-1;let At=H;d>0&&(At=H*z(1,1-d*(.5-.5*Math.cos($*bt*3)),Math.pow(H,6))),L>0&&(At=At*(1-L*$*$*Math.pow(H,5)));const Xt=a*.5*G(H),Ie=Y(P,At),Wt=Y(I,At),ce=Y(W,At),Ne=-Math.sin(ce),he=Math.cos(ce);let ns=$*Xt*(1-.22*Math.min(h,1.6)*$*$)+v*H*H*o,Zt=h*$*$*Xt;if(u&&(Zt+=u*Math.sin($*f*bt+p+H*3.7)*Math.pow(Math.abs($),1.4)*oe(.25,1,H),Zt+=u*.8*Math.sin($*f*2.3+p*1.7)*oe(.7,1,H)),F){const Jt=F*H*$*Xt;Zt+=Jt}const ls=s+Ie+Ne*Zt,xi=i+Wt+he*Zt,Si=C[0]*ls+D[0]*ns,Mi=C[2]*ls+D[2]*ns;let cs=gt;if(_&&!b){const Jt=oe(0,.42,H);cs=[z(_[0],k[0],Jt),z(_[1],k[1],Jt),z(_[2],k[2],Jt)]}this._vertex(Si,xi,Mi,cs,z(M,x,H),O,$,z(A,E,Math.pow(H,.7)),et,T)}}this._grid(w,y)}disc({radius:t=.2,height:e=.08,y0:s=0,rings:i=4,segs:o=12,colorFn:a,bumps:r=.012,ao0:n=.6,ao1:c=.9}){for(let h=0;h<=i;h++){const u=h/i;for(let f=0;f<=o;f++){const p=f/o*bt*2,m=r*Math.sin(p*7+u*13)*Math.sin(u*11)*u,d=s+e*Math.pow(Math.max(0,1-u*u),.8)+m;this._vertex(Math.cos(p)*t*u,d,Math.sin(p)*t*u,a(u,p),.5,1,0,z(c,n,u))}}this._grid(o,i)}ellipsoid({center:t=[0,0,0],radii:e=[.1,.1,.1],color:s=[1,1,1],mat:i=1,segs:o=8,rings:a=5,shade:r=.5,ao:n=.8,thetaMax:c=bt}){for(let h=0;h<=a;h++){const u=h/a*c;for(let f=0;f<=o;f++){const p=f/o*bt*2,m=Math.sin(u)*Math.cos(p),d=Math.cos(u),v=Math.sin(u)*Math.sin(p);this._vertex(t[0]+m*e[0],t[1]+d*e[1],t[2]+v*e[2],s,r+.4*d,i,0,n*(.75+.25*d))}}this._grid(o,a)}tube({points:t,radius:e=.02,radial:s=5,color:i=[1,1,1],mat:o=0,shadeFn:a=r=>r}){const r=t.length,n=new g,c=new g,h=new g;for(let u=0;u<r;u++){const f=t[u],p=t[Math.max(0,u-1)],m=t[Math.min(r-1,u+1)];n.set(m[0]-p[0],m[1]-p[1],m[2]-p[2]).normalize(),c.set(1,0,0),Math.abs(n.x)>.9&&c.set(0,0,1),h.crossVectors(n,c).normalize(),c.crossVectors(h,n).normalize();const d=u/(r-1),v=typeof e=="function"?e(d):e;for(let w=0;w<=s;w++){const y=w/s*bt*2,M=Math.cos(y),x=Math.sin(y);this._vertex(f[0]+(c.x*M+h.x*x)*v,f[1]+(c.y*M+h.y*x)*v,f[2]+(c.z*M+h.z*x)*v,i,a(d),o,w/s*2-1,.55+.45*d)}}this._grid(s,r-1)}filament(t,e,s,i,o,a){this.tube({points:[t,[(t[0]+e[0])/2,(t[1]+e[1])/2+.01,(t[2]+e[2])/2],e],radius:s,radial:3,color:i,mat:1}),a>0&&this.ellipsoid({center:e,radii:[a,a*.8,a],color:o,segs:4,rings:3,ao:1})}build(){const t=new dt;return t.setAttribute("position",new X(this.pos,3)),t.setAttribute("aColor",new X(this.col,3)),t.setAttribute("aInfo",new X(this.info,4)),t.setAttribute("aExtra",new X(this.extra,2)),this.hinge&&(t.setAttribute("aHinge",new X(this.hingeArr,4)),t.setAttribute("aOpen",new X(this.openArr,1))),t.setIndex(this.idx),t.computeVertexNormals(),t.computeBoundingSphere(),t.computeBoundingBox(),t}}const st=l=>{const t=new N(l);return[t.r,t.g,t.b]},ae=st("#5f7a3a");st("#3c5226");const Kt=st("#f2c230"),fe=st("#e0a21a"),pe=l=>({uSeg:[1,3,6][l],vSeg:[2,4,9][l]}),Rt=Math.PI*(3-Math.sqrt(5));function vt(l,t,e=.16,s=-.06){t!==0&&l.ellipsoid({center:[0,s,0],radii:[e,e*.75,e],color:ae,segs:t?7:4,rings:t?4:2,ao:.7})}function ms(l,t,e,s,i,o=-.04){if(t!==0)for(let a=0;a<e;a++)l.petal({az:a/e*Math.PI*2+i.float(-.2,.2),r0:.06,y0:o,length:s,width:s*.38,elev:-.35,curl:-.25,cup:.2,profile:"lance",mat:1,color:ae,uSeg:2,vSeg:2,ao0:.6,ao1:.85})}const Lt={peony:{label:"Peony",radius:1,build(l,{openness:t,detail:e,rng:s}){const i=[2,4,6][e],o=e===2?{uSeg:8,vSeg:11}:pe(e);for(let a=0;a<i;a++){const r=a/(i-1),n=e===0?6:Math.round(z(8,11,r));for(let c=0;c<n;c++){const h=(c+a*.618)/n*Math.PI*2+s.float(-.16,.16);l.petal({...o,az:h,r0:z(.15,.03,r),y0:z(0,.2,r),length:z(.98,.42,r)*s.float(.9,1.08)*(.82+.18*t),width:z(1.05,.58,r)*s.float(.9,1.1),elev:z(z(1.15,.22,t),1.42,Math.pow(r,.85))+s.float(-.08,.08),curl:z(.35,.95,r),cup:z(.55,1,r),ruffle:z(.028,.06,r)*(e?1:0),ruffleFreq:s.float(2.5,4.5),seed:s.float(0,6),profile:"broad",tipRound:.42,shade0:.04,shade1:z(1,.62,r),ao0:z(.5,.28,r),ao1:z(1,.62,r),open:z(.35,1.05,r)})}}vt(l,e,.2,-.05),ms(l,e,4,.45,s)}},ranunculus:{label:"Ranunculus",radius:.72,build(l,{openness:t,detail:e,rng:s}){const i=[2,4,7][e],o=pe(e);for(let a=0;a<i;a++){const r=a/(i-1),n=e===0?6:Math.round(z(8,13,1-r));for(let c=0;c<n;c++)l.petal({...o,az:(c+a*.5)/n*Math.PI*2+s.float(-.05,.05),r0:z(.24,.02,r),y0:z(0,.36,Math.pow(r,.8)),length:z(.6,.18,r),width:z(.78,.34,r),elev:z(z(1.15,.5,t),1.5,r),curl:z(1,1.35,r),cup:1.15,profile:"broad",tipRound:.5,shade0:.15,shade1:z(1,.55,r),ao0:z(.55,.3,r),ao1:z(1,.6,r),open:z(.3,1,r)})}e&&l.ellipsoid({center:[0,.4,0],radii:[.05,.03,.05],color:st("#8aa05a"),segs:5,rings:3,ao:.5}),vt(l,e,.2,-.04)}},dahlia:{label:"Dahlia",radius:1,build(l,{openness:t,detail:e,rng:s}){const i=[14,30,72][e],o={uSeg:[1,2,4][e],vSeg:[2,3,6][e]};for(let a=0;a<i;a++){const r=a/(i-1);l.petal({...o,az:a*Rt,r0:z(.1,.01,r),y0:z(0,.26,r),length:z(.98,.16,Math.pow(r,.8)),width:z(.32,.13,r),elev:z(z(1.1,.1,t),1.45,Math.pow(r,1.5)),curl:z(.18,.95,r),cup:z(1.45,2.1,r),profile:"lance",shade0:.05,shade1:z(1,.5,r),ao0:z(.5,.3,r),ao1:z(1,.6,r),open:z(.3,.95,r)})}vt(l,e,.18,-.04),ms(l,e,6,.35,s)}},anemone:{label:"Anemone",radius:.95,build(l,{openness:t,detail:e,rng:s}){const i=e===0?5:6,o=pe(e);for(let c=0;c<i;c++)l.petal({...o,az:c/i*Math.PI*2+s.float(-.12,.12),r0:.12,y0:0,length:.92*s.float(.92,1.05),width:.95,elev:z(1.15,.26,t)+s.float(-.06,.06),curl:.28,cup:.32,ruffle:e?.02:0,seed:s.float(0,6),profile:"broad",tipRound:.48,tintBase:[1.22,1.16,1.14],shade0:.3,shade1:1,ao0:.7,ao1:1,open:.5});const a=st("#14121e"),r=st("#2a1b33");l.disc({radius:.2,height:.12,y0:.02,rings:e?4:1,segs:e?12:6,colorFn:c=>c<.6?a:r,bumps:.02});const n=[0,0,38][e];for(let c=0;c<n;c++){const h=c*Rt,u=s.float(.15,.2),f=s.float(.27,.36);l.filament([Math.cos(h)*u,.07,Math.sin(h)*u],[Math.cos(h)*f,s.float(.16,.24),Math.sin(h)*f],.007,r,a,.018)}vt(l,e,.15,-.05)}},cosmos:{label:"Cosmos",radius:1,build(l,{openness:t,detail:e,rng:s}){const o={uSeg:[1,2,5][e],vSeg:[2,3,7][e]};for(let r=0;r<8;r++)l.petal({...o,az:r/8*Math.PI*2+s.float(-.06,.06),r0:.12,y0:0,length:.9*s.float(.94,1.04),width:.62,elev:z(1.05,.08,t)+s.float(-.05,.05),curl:-.05,droop:-.08,cup:.16,ruffle:e?.018:0,seed:s.float(0,6),profile:"wedge",tipTeeth:e?.13:0,twist:.08,shade0:.22,shade1:1,ao0:.7,ao1:1,open:.45});l.disc({radius:.17,height:.09,y0:.01,rings:e?4:1,segs:e?12:6,colorFn:r=>r<.35?fe:Kt,bumps:.016});const a=[0,0,22][e];for(let r=0;r<a;r++){const n=r*Rt,c=.05+r/a*.11;l.filament([Math.cos(n)*c,.07,Math.sin(n)*c],[Math.cos(n)*c*1.05,.13,Math.sin(n)*c*1.05],.006,Kt,fe,.012)}vt(l,e,.13,-.04)}},gerbera:{label:"Gerbera",radius:1,build(l,{openness:t,detail:e,rng:s}){const i={uSeg:[1,2,3][e],vSeg:[2,3,5][e]};[{n:[12,20,26][e],len:.96,wid:.18,e:0,c:-.1,sh:1},{n:[0,16,24][e],len:.8,wid:.16,e:.1,c:-.05,sh:.92},{n:[0,0,30][e],len:.2,wid:.06,e:.85,c:.2,sh:.7}].forEach((n,c)=>{for(let h=0;h<n.n;h++)l.petal({...i,az:(h+c*.5)/n.n*Math.PI*2+s.float(-.03,.03),r0:.27-c*.04,y0:.01+c*.012,length:n.len*s.float(.93,1.05),width:n.wid,elev:z(1.1,.05,t)+n.e,curl:n.c,droop:-.05,cup:.35,profile:"strap",shade0:.25,shade1:n.sh,ao0:.6,ao1:1,open:.35})});const a=st("#3a2a0e"),r=st("#7a5a12");l.disc({radius:.29,height:.05,y0:.012,rings:e?4:1,segs:e?14:8,bumps:.008,colorFn:n=>n<.45?a:n<.7?r:Kt}),vt(l,e,.2,-.04)}},tulip:{label:"Tulip",radius:.62,facing:"up",build(l,{openness:t,detail:e,rng:s}){const i={uSeg:[1,3,6][e],vSeg:[2,4,9][e]};for(let o=0;o<6;o++){const a=o%2===1;l.petal({...i,az:o/6*Math.PI*2+s.float(-.05,.05),r0:a?.04:.06,y0:a?.01:0,length:(a?.94:1)*s.float(.96,1.03),width:a?.74:.82,elev:z(.95,.6,t)+(a?.07:0)+s.float(-.04,.04),curl:z(.62,.92,t),droop:z(0,-.22,t),cup:z(1.2,1,t),profile:"egg",shade0:.04,shade1:1,ao0:.35,ao1:1,open:.8})}if(e===2){const o=st("#2a1c22");for(let a=0;a<6;a++){const r=a/6*Math.PI*2;l.filament([0,.04,0],[Math.cos(r)*.1,.3,Math.sin(r)*.1],.008,st("#d8c9a0"),o,.03)}l.ellipsoid({center:[0,.2,0],radii:[.035,.18,.035],color:st("#a9b36e"),segs:5,rings:4})}vt(l,e,.14,-.03)}},hydrangea:{label:"Hydrangea",radius:.85,build(l,{openness:t,detail:e,rng:s}){const i=[16,34,56][e],o=.72*z(.75,1,t);l.ellipsoid({center:[0,-.1,0],radii:[o*.92,o*.78,o*.92],mat:0,color:[.82,.8,.85],segs:e?12:9,rings:e?6:4,shade:.1,ao:.45,thetaMax:Math.PI*.62});const a=new g(0,1,0);for(let r=0;r<i;r++){const n=1-(r+.5)/i*.78,c=Math.sqrt(1-n*n),h=r*Rt,u=new g(Math.cos(h)*c,n,Math.sin(h)*c).normalize(),f=new J().compose(u.clone().multiplyScalar(o*.92).add(new g(0,-.1+o*.04,0)),new V().setFromUnitVectors(a,u).multiply(new V().setFromAxisAngle(a,s.float(0,6.3))),new g(1,1,1).multiplyScalar(s.float(.85,1.12))),p=s.float(.86,1.1),m=[p*s.float(.97,1.03),p*s.float(.95,1.02),p*s.float(.98,1.08)];l.withMatrix(f,()=>{for(let d=0;d<4;d++)l.petal({az:d/4*Math.PI*2,r0:.012,y0:0,length:.17,width:.18,elev:z(.9,.12,t),curl:-.1,cup:.25,profile:"round",uSeg:e?2:1,vSeg:e===2?3:e?2:1,tint:m,shade0:.45,shade1:1,ao0:.65,ao1:1,open:.3})})}}},camellia:{label:"Camellia",radius:.9,build(l,{openness:t,detail:e,rng:s}){const i=pe(e);[{n:7,len:.86,wid:.84,e0:1.05,e1:.2,c:.22,cup:.4},{n:7,len:.68,wid:.72,e0:1.3,e1:.58,c:.35,cup:.55},{n:5,len:.48,wid:.56,e0:1.45,e1:.98,c:.45,cup:.7}].slice(0,e===0?2:3).forEach((r,n)=>{for(let c=0;c<r.n;c++)l.petal({...i,az:(c+n*.5)/r.n*Math.PI*2+s.float(-.03,.03),r0:.1-n*.025,y0:n*.05,length:r.len,width:r.wid,elev:z(r.e0,r.e1,t),curl:r.c,cup:r.cup,profile:"broad",tipRound:.45,shade0:.12,shade1:1-n*.12,ao0:.5-n*.08,ao1:1-n*.1,open:.4+n*.3})});const a=st("#f4e6b8");if(e<2)l.ellipsoid({center:[0,.18,0],radii:[.09,.1,.09],color:Kt,segs:5,rings:3});else{const r=e===1?12:30;for(let n=0;n<r;n++){const c=n*Rt,h=s.float(.03,.08),u=h+s.float(.03,.07);l.filament([Math.cos(c)*h,.06,Math.sin(c)*h],[Math.cos(c)*u,s.float(.26,.34),Math.sin(c)*u],.008,a,fe,.02)}}vt(l,e,.17,-.05)}},daisy:{label:"Daisy",radius:1,build(l,{openness:t,detail:e,rng:s}){const i=[12,20,32][e],o={uSeg:[1,2,2][e],vSeg:[2,3,5][e]};for(let a=0;a<i;a++){const r=a%2;l.petal({...o,az:a/i*Math.PI*2+s.float(-.04,.04),r0:.2,y0:r*.015,length:.82*s.float(.9,1.06),width:.15,elev:z(1.15,.03,t)+r*.06,curl:-.08,droop:-.14,cup:.3,profile:"strap",shade0:.35,shade1:1,ao0:.7,ao1:1,open:.3})}l.disc({radius:.22,height:.13,y0:0,rings:e?4:1,segs:e?12:7,bumps:.012,colorFn:a=>a<.5?fe:Kt}),vt(l,e,.16,-.04)}},blossom:{label:"Sweet blossom (filler)",radius:.55,build(l,{openness:t,detail:e,rng:s}){for(let i=0;i<5;i++)l.petal({az:i/5*Math.PI*2+s.float(-.08,.08),r0:.04,length:.5,width:.52,elev:z(1.1,.24,t),curl:.08,cup:.3,ruffle:e?.02:0,seed:s.float(0,6),profile:"broad",tipRound:.5,uSeg:e?3:2,vSeg:e?3:2,shade0:.3,shade1:1,ao0:.6,ao1:1,tintBase:[1.12,1.1,1.05],open:.4});l.ellipsoid({center:[0,.03,0],radii:[.075,.05,.075],color:st("#f6dc72"),segs:5,rings:3})}},cluster:{label:"White blossom cluster (accent)",radius:.55,build(l,{openness:t,detail:e,rng:s}){const i=[5,11,19][e],o=new g(0,1,0);if(e)for(let a=0;a<Math.min(i,9);a++){const r=a*Rt,n=.12+a%3*.08;l.tube({points:[[0,-.15,0],[Math.cos(r)*n*.6,0,Math.sin(r)*n*.6],[Math.cos(r)*n,.1+a%3*.04,Math.sin(r)*n]],radius:.008,radial:3,color:ae,mat:1})}for(let a=0;a<i;a++){const r=(a+.5)/i,n=a*Rt,c=Math.sqrt(r)*.42,h=.16-c*c*.9+s.float(-.03,.03),u=new g(Math.cos(n)*c*1.4,1,Math.sin(n)*c*1.4).normalize(),f=s.float(.7,1)*(r>.85?.8:1),p=new J().compose(new g(Math.cos(n)*c,h,Math.sin(n)*c),new V().setFromUnitVectors(o,u).multiply(new V().setFromAxisAngle(o,s.float(0,6.3))),new g(f,f,f)),m=s.float(.93,1.05);l.withMatrix(p,()=>{for(let d=0;d<5;d++)l.petal({az:d/5*Math.PI*2,r0:.01,length:.1,width:.11,elev:z(.9,.18,t),curl:.05,cup:.25,profile:"round",uSeg:e===2?2:1,vSeg:e===2?2:1,tint:[m,m,m*1.01],shade0:.5,shade1:1,ao0:.7,ao1:1,open:.2});e&&l.ellipsoid({center:[0,.015,0],radii:[.022,.015,.022],color:st("#e8dc9a"),segs:4,rings:2})})}}},spike:{label:"Larkspur spike (filler)",radius:.4,facing:"upright",build(l,{openness:t,detail:e,rng:s}){const i=[7,11,17][e];l.tube({points:[[0,-.2,0],[.02,1.1,0],[0,2.35,.02]],radius:a=>.035*(1-a*.6),radial:e?5:3,color:ae,mat:1});const o=new g(0,1,0);for(let a=0;a<i;a++){const r=a/(i-1),n=a*Rt,c=z(.24,.06,r),h=new g(Math.cos(n),.45,Math.sin(n)).normalize(),u=z(.95,.42,r)*(r>.85?.6:1),f=new J().compose(new g(Math.cos(n)*c,.1+r*2.1,Math.sin(n)*c),new V().setFromUnitVectors(o,h),new g(u,u,u));l.withMatrix(f,()=>{if(r>.82){l.ellipsoid({center:[0,.06,0],radii:[.07,.1,.07],mat:0,color:[1,1,1],segs:5,rings:3,shade:.4});return}const p=e===2?5:e?4:3;for(let m=0;m<p;m++)l.petal({az:m/p*Math.PI*2,r0:.02,length:.24,width:.22,elev:z(1,.3,t),curl:.1,cup:.3,profile:"round",uSeg:e===2?2:1,vSeg:e===2?2:1,shade0:.3,shade1:1,ao0:.6,ao1:1,open:.2});e&&l.ellipsoid({center:[0,.03,0],radii:[.035,.03,.035],color:st("#f0ead8"),segs:4,rings:2})})}}},bud:{label:"Bud",radius:.32,facing:"up",build(l,{detail:t,rng:e}){const s={uSeg:[1,2,4][t],vSeg:[2,3,5][t]};for(let i=0;i<6;i++)l.petal({...s,az:i/6*Math.PI*2+e.float(-.08,.08),r0:.03,length:.58,width:.62,elev:1.3,curl:.75,cup:1.35,profile:"egg",shade0:.05,shade1:.9,ao0:.4,ao1:.95});for(let i=0;i<(t?5:0);i++)l.petal({az:(i+.5)/5*Math.PI*2,r0:.06,y0:-.02,length:.42,width:.17,elev:1.15,curl:-.4,cup:.4,profile:"lance",mat:1,color:ae,uSeg:2,vSeg:t?3:2,ao0:.6,ao1:.9});vt(l,t,.1,-.02)}}},to={open:1,half:.48};function is(l,{stage:t="open",detail:e=2,seed:s=1,hinge:i=!1}={}){const o=Lt[l],a=new Ee({hinge:i});return a.windMode=0,a.translucency=1,o.build(a,{openness:to[t]??1,detail:e,rng:new at(s*7919+l.length*131)}),a.build()}function eo(l){const t=new Ee;t.windMode=1,t.translucency=.25;const e=[3,4,6][l],s=[];for(let i=0;i<=e;i++){const o=i/e;s.push([Math.sin(o*Math.PI)*.6+o*o*.3,o,0])}return t.tube({points:s,radius:i=>1-i*.35,radial:[3,4,5][l],color:[1,1,1],mat:0,shadeFn:i=>.1+i*.8}),t.build()}const so={broad:{length:1,width:.52,curl:-.35,droop:-.4,cup:.32,profile:"round"},lance:{length:1,width:.24,curl:-.25,droop:-.6,cup:.45,profile:"lance"},strap:{length:1,width:.1,curl:-.1,droop:-1.1,cup:.5,profile:"lance"},heart:{length:1,width:.78,curl:-.15,droop:-.3,cup:.18,profile:l=>Math.max(Math.pow(Math.sin(Math.PI*Math.pow(Math.min(l,.999),.55)),.6),.1)},oval:{length:.8,width:.44,curl:-.12,droop:-.18,cup:.22,profile:l=>Math.max(Math.pow(Math.sin(Math.PI*Math.pow(Math.min(l,.999),.75)),.75),.08)},basal:{length:1.25,width:.3,curl:-.55,droop:-.35,cup:.6,profile:l=>Math.max(Math.pow(Math.sin(Math.PI*Math.pow(Math.min(l,.999),.5)),.7),.15)},feather:{compound:"feather"},cut:{compound:"cut"}};function oi(l,t){const e=so[l],s=new Ee;s.windMode=2,s.translucency=.35;const i=[1,2,4][t],o=[1,3,6][t];if(e.compound==="feather"){const a=[3,5,7][t];s.petal({az:0,r0:0,y0:0,length:1,width:.035,elev:.5,curl:-.4,droop:-.3,cup:0,profile:"lance",uSeg:1,vSeg:Math.max(2,o),shade0:.1,shade1:1,ao0:.5,ao1:1});for(let r=0;r<a;r++){const n=(r+1)/(a+1),c=n*.85,h=.5*n-.25*n*n;for(const u of[-1,1])s.withMatrix(new J().makeTranslation(c,h,0),()=>{s.petal({az:u*(.9-n*.4),r0:0,y0:0,length:.42*(1-n*.5),width:.05,elev:.25,curl:-.3,droop:-.2,cup:0,profile:"lance",uSeg:1,vSeg:Math.max(1,o-2),shade0:.2,shade1:1,ao0:.6,ao1:1})})}return s.build()}if(e.compound==="cut"){for(const[a,r,n]of[[0,1,.34],[-.75,.78,.3],[.75,.78,.3]])s.petal({az:a,r0:0,y0:0,length:r,width:n,elev:.45,curl:-.3,droop:-.3,cup:.3,profile:"lance",tipTeeth:t===2?.18:0,uSeg:i,vSeg:o,shade0:.05,shade1:1,ao0:.45,ao1:1});return s.build()}return s.petal({az:0,r0:0,y0:0,length:e.length,width:e.width,elev:.55,curl:e.curl,droop:e.droop,cup:e.cup,profile:e.profile,uSeg:i,vSeg:o,shade0:.05,shade1:1,ao0:.45,ao1:1}),s.build()}const io=`
#include <common>
#include <batching_pars_vertex>
${mt}
attribute vec3 aColor;
attribute vec4 aInfo;
attribute vec2 aExtra;
#ifdef USE_OPENING
attribute vec4 aHinge;
attribute float aOpen;
uniform float uOpen;
#endif
uniform vec3 uBaseColor;
#ifdef USE_INSTANCING
attribute vec2 aFade; // x: timed LOD transition coverage, y: far-edge shrink (grow-in)
attribute vec4 aRoute; // instance origin in route space (s, lateral) + stream tangent (x, z)
#endif
varying float vFade;
varying vec3 vColor;
varying vec4 vInfo;
varying vec2 vExtra;
varying vec3 vNormal;
varying vec3 vWorld;
varying vec3 vInst;
varying vec3 vObj;
varying float vSeed;

vec3 rotAxis(vec3 v, vec3 k, float a) {
  float c = cos(a), s = sin(a);
  return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c);
}

float vSeedOf(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }

// The stream's surface height (identical to waterH in WaterSystem; p.x = lateral, p.y = downstream).
float waterSurfaceH(vec2 p, float t) {
  float h = vnoise(vec3(p.x * 0.9, (p.y - t * 0.55) * 0.55, t * 0.12)) * 0.55;
  h += vnoise(vec3(p.x * 2.3, (p.y - t * 0.8) * 1.7, t * 0.3 + 4.0)) * 0.28;
  h += vnoise(vec3(p.x * 6.0, (p.y - t * 1.1) * 4.5, t * 0.6 + 9.0)) * 0.12;
  h += sin(p.y * 3.1 - t * 1.6 + sin(p.x * 1.7) * 1.2) * 0.04;
  return h;
}

// Per-plant sway. Phase and tempo come from a noise keyed to the plant's position, so neighbours move
// independently (no travelling wave across the bank), and the tempo (10-20 s periods) is far slower than
// the water's ripples, so flowers never appear to heave together with the stream.
// V4.9.3 hook, neutral 0: storm gust fronts (see the end of plantSway)
uniform float uFlowerGust;
vec3 plantSway(vec2 key) {
  float ph = vnoise(vec3(key * 0.9, 3.7)) * 12.566;
  float tempo = 0.7 + 0.6 * vnoise(vec3(key * 0.6, 8.1));
  float t = uTime * tempo;
  float a = sin(t * 0.47 + ph) + 0.35 * sin(t * 1.13 + ph * 1.7);
  float b = cos(t * 0.39 + ph * 1.3) * 0.8 + 0.25 * sin(t * 0.91 + ph * 0.6);
  float gust = 0.72 + 0.28 * sin(uTime * 0.13 + key.x * 0.021 + key.y * 0.017);
  vec3 sw = vec3(a * 0.045, 0.0, b * 0.035) * uWind * gust * mix(1.0, 1.3, smoothstep(1.0, 1.8, uWind));
  if (uFlowerGust > 0.0) {
    // broad gust fronts sweep downwind (-x, the way the rain slants) across the banks at ~4.5 units/s, so
    // neighbouring groups are hit one after another: the swing grows and the plant leans downwind, then springs
    // back. Applied through the same sway, so stems stay rooted; the lean is capped (about 50 degrees at the head).
    float front = vnoise(vec3(key.x * 0.09 + uTime * 0.41, key.y * 0.13, uTime * 0.06));
    float hit = smoothstep(0.48, 0.8, front) * uFlowerGust;
    float flutter = 0.78 + 0.22 * sin(uTime * 6.1 + ph * 2.3);
    sw *= 1.0 + 0.85 * hit;
    sw.x -= 0.1 * hit * flutter;
    float m = length(sw.xz);
    if (m > 0.36) sw.xz *= 0.36 / m;
  }
  return sw;
}

void main() {
  vec3 pos = position;
  vec3 nrm = normal;
  #ifdef USE_OPENING
    vec3 k = vec3(-sin(aHinge.w), 0.0, cos(aHinge.w));
    float a = -uOpen * aOpen;
    pos = aHinge.xyz + rotAxis(pos - aHinge.xyz, k, a);
    nrm = rotAxis(nrm, k, a);
  #endif
  mat4 m = modelMatrix;
  #ifdef USE_BATCHING
    #include <batching_vertex>
    m = modelMatrix * batchingMatrix;
  #endif
  #ifdef USE_INSTANCING
    m = m * instanceMatrix;
  #endif
  vec4 world = m * vec4(pos, 1.0);
  vec3 anchor = (m * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  float mode = aExtra.x;
  vec3 wn = mat3(m) * nrm;
  #ifdef USE_INSTANCING
    // far-edge grow-in: blooms swell from their centre, stems and leaves rise from their base
    if (aFade.y > 0.0) world.xyz = anchor + (world.xyz - anchor) * (1.0 - aFade.y);
  #endif
  // A head lying flat at the water line floats: it bobs and slowly turns with the water, no wind sway.
  bool floating = mode < 0.5 && anchor.y < 0.07 && anchor.y > -0.05 && normalize(m[1].xyz).y > 0.96;
  if (floating) {
    // A bloom lying on the stream rides the same waves the water shader draws: it tilts to the local surface
    // slope, rises and sinks a little with the swell, and slowly turns and wanders as the current nudges it.
    vec2 rp = vec2(0.0, 0.0);
    vec3 T = vec3(0.0, 0.0, -1.0);
    #ifdef USE_INSTANCING
      rp = vec2(aRoute.y, aRoute.x);
      if (dot(aRoute.zw, aRoute.zw) > 0.25) T = normalize(vec3(aRoute.z, 0.0, aRoute.w));
      else rp = vec2(anchor.x, -anchor.z); // no route data (intro scene): use world axes
    #else
      rp = vec2(anchor.x, -anchor.z);
    #endif
    vec3 Rt = vec3(-T.z, 0.0, T.x);
    float e = 0.14;
    float ft = uTime * 0.5; // FLOAT_TIME_SCALE: floating things move at half the water's speed
    float h0 = waterSurfaceH(rp, ft);
    float hL = waterSurfaceH(rp + vec2(e, 0.0), ft);
    float hS = waterSurfaceH(rp + vec2(0.0, e), ft);
    // slope in world units (the water shader's normals use ~0.2 x this gradient)
    vec2 g = vec2(hL - h0, hS - h0) / e * 0.2 * 1.2;
    vec3 grad = Rt * g.x + T * g.y;
    vec3 n = normalize(vec3(-grad.x, 1.0, -grad.z));
    float ph = vnoise(vec3(anchor.xz * 1.7, 2.3)) * 6.2832;
    // slow turning with the current
    float turn = sin(ft * 0.17 + ph) * 0.45 + sin(ft * 0.41 + ph * 1.9) * 0.12;
    vec3 rel = world.xyz - anchor;
    float c = cos(turn), sn = sin(turn);
    rel.xz = vec2(rel.x * c - rel.z * sn, rel.x * sn + rel.z * c);
    wn.xz = vec2(wn.x * c - wn.z * sn, wn.x * sn + wn.z * c);
    // tilt to the surface (clamped so petals only just dip into the flat water plane)
    float tilt = min(acos(clamp(n.y, -1.0, 1.0)), 0.22);
    if (tilt > 1e-4) {
      vec3 k = normalize(vec3(n.z, 0.0, -n.x));
      rel = rotAxis(rel, k, tilt);
      wn = rotAxis(wn, k, tilt);
    }
    world.xyz = anchor + rel;
    // heave with the swell, kept small because the water geometry itself is flat
    world.y += clamp((h0 - 0.5) * 0.05, -0.014, 0.014);
    // the current pushes it to and fro along the stream and across it
    world.xyz += T * (sin(ft * 0.23 + ph) * 0.06 + (h0 - 0.5) * 0.05) + Rt * sin(ft * 0.19 + ph * 1.3) * 0.035;
  } else if (mode < 0.5) {
    // heads: each plant sways on its own slow phase and nods about its anchor
    vec3 sw = plantSway(anchor.xz);
    float ang = length(sw.xz) * 2.4;
    if (ang > 1e-5) {
      vec3 k = normalize(vec3(sw.z, 0.0, -sw.x));
      world.xyz = anchor + rotAxis(world.xyz - anchor, k, ang);
      wn = rotAxis(wn, k, ang);
    }
    world.xyz += sw;
  } else if (mode < 1.5) {
    // stems: vertical at the ground, arching toward the (leaning) head; keyed to the stem TOP so the stem
    // follows exactly the sway of the head it carries
    world.xz += m[1].xz * (pos.y * pos.y - pos.y);
    world.xyz += plantSway(anchor.xz + m[1].xz) * pos.y * pos.y;
  }
  else if (mode < 2.5) world.xyz += plantSway(anchor.xz) * 0.35 + vec3(0.0, sin(uTime * (1.4 + vSeedOf(anchor) * 0.9) + anchor.x * 3.1 + anchor.z * 1.7) * 0.02, 0.0) * aInfo.x;
  else world.y += sin(uTime * 0.9 + anchor.x * 2.0 + anchor.z) * 0.006;

  vNormal = normalize(wn);
  vInst = uBaseColor;
  #ifdef USE_BATCHING_COLOR
    vInst = getBatchingColor(getIndirectIndex(gl_DrawID));
  #endif
  #ifdef USE_INSTANCING_COLOR
    vInst = instanceColor;
  #endif
  #ifdef USE_INSTANCING
    vFade = aFade.x;
  #else
    vFade = 0.0;
  #endif
  vColor = aColor;
  vInfo = aInfo;
  vExtra = aExtra;
  vWorld = world.xyz;
  vObj = pos;
  vSeed = fract(sin(dot(anchor, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,oo=`
#include <common>
${mt}
${$t}
uniform float uGlow;
uniform vec3 uGlowColor;
uniform float uSaturation;
varying float vFade;
varying vec3 vColor;
varying vec4 vInfo;
varying vec2 vExtra;
varying vec3 vNormal;
varying vec3 vWorld;
varying vec3 vInst;
varying vec3 vObj;
varying float vSeed;

void main() {
  // Timed LOD transition (screen-door, ~0.45 s, only while an instance is changing level). vFade: 0 = fully
  // drawn; f in (0,1) = draw where noise < f (incoming level); f in (-1,0) = draw where noise >= -f (outgoing
  // level). The two together cover each pixel exactly once.
  if (vFade != 0.0) {
    float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
    if (vFade > 0.0 ? ign >= vFade : ign < -vFade) discard;
  }
  vec3 N = normalize(vNormal);
  if (!gl_FrontFacing) N = -N;
  vec3 V = normalize(cameraPosition - vWorld);
  float shade = vInfo.x, mat = vInfo.y, u = vInfo.z, ao = vInfo.w;

  vec3 base = vInst;
  vec3 deep = pow(base, vec3(1.22)) * 0.66;
  vec3 light = mix(base, vec3(1.0, 0.965, 0.93), 0.16);
  float g = smoothstep(0.0, 1.0, shade);
  vec3 petal = mix(deep, light, g);
  float edge = abs(u);
  petal = mix(petal, light * 1.03, pow(edge, 5.0) * 0.28 * g);
  float veins = 0.5 + 0.5 * cos(u * 28.0 + shade * 1.5);
  petal *= 1.0 - veins * 0.055 * smoothstep(0.05, 0.45, shade) * (1.0 - edge * 0.5);
  petal *= vColor;
  vec3 albedo = mat > 0.5 ? vColor : petal;

  float n1 = vnoise(vObj * 4.5 + vSeed * 17.0);
  float n2 = vnoise(vObj * 15.0 + vSeed * 9.0);
  albedo *= 0.92 + 0.13 * n1 + 0.06 * n2;
  albedo = mix(albedo, albedo * vec3(1.06, 0.98, 0.93), (n1 - 0.5) * 0.7);
  float lum = dot(albedo, vec3(0.2126, 0.7152, 0.0722));
  albedo = max(mix(vec3(lum), albedo, uSaturation), 0.0);

  // rain: surfaces darken and deepen slightly
  albedo *= 1.0 - 0.14 * uWet;
  vec3 col = gouacheLight(albedo, N, V, vExtra.y, ao);
  // satin sheen on petals (stronger when wet)
  vec3 Rf = reflect(-V, N);
  float sunR = max(dot(Rf, uSunDir), 0.0);
  col += uSunColor * pow(sunR, 16.0) * (0.05 + 0.22 * uWet) * (mat > 0.5 ? 0.4 : 1.0) * ao * uSunVis;
  // water droplets: cool beads under clouds, brilliant glints once the sun breaks through
  // (Garden 05 speckle repair, approved 2026-11-15, V4.9.7: a bead lights up only where it mirrors the sun. The former
  //  flat "+ 0.12" term lit every bead regardless of the sun angle, which printed pale cream flecks over all petals and
  //  leaves in Garden 05.)
  if (uWet > 0.01) {
    float drop = smoothstep(0.84, 0.93, vnoise(vObj * 34.0 + vSeed * 31.0));
    col += vec3(0.85, 0.9, 1.0) * drop * uWet * 0.06;
    col += uSunColor * drop * pow(sunR, 48.0) * 7.0 * uSparkle;
  }
  col += uGlowColor * uGlow * (0.25 + 0.75 * g) * (0.6 + 0.4 * ao);
  col = applyHaze(col, vWorld);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  GARDEN_GRADE_OUTPUT
}
`;function Yt({opening:l=!1,baseColor:t="#ffffff"}={}){return new K({uniforms:{...U,uBaseColor:{value:new N(t)},uGlow:{value:0},uGlowColor:{value:new N(1,.72,.42)},uSaturation:{value:1.32},...l?{uOpen:{value:0}}:{}},vertexShader:io,fragmentShader:oo,side:Dt,defines:l?{USE_OPENING:""}:{}})}const ai={ruby:["#9b1b30","#b31a35","#c8243c","#8c0f2a","#a8203f"],fuchsia:["#d63a7a","#e0457b","#c42f73","#e8558e"],rose:["#ef6f9c","#f59ab8","#f7b0c6","#ff8fb1","#f4a3b8"],butter:["#f6d56b","#f2c230","#ffe08a","#f7c948","#fbe7a1"],plum:["#5b2a6e","#6e3480","#7b3f8c","#4a2458","#8e4fa8"],lilac:["#a98bd6","#b7a3e8","#9fa7e0","#c4a6dc","#8f86cf"],ivory:["#f6efe2","#f3e5cc","#fbf6ee","#efe1c7","#f8ead8"],tangerine:["#f07a2a","#ff8c42","#e8642c","#ffa45b","#f5923e"],coral:["#f49b84","#f7a98f","#ee8a78"],white:["#fbf8f2","#f7f3ec","#fffdf8"],blush:["#f6d3d0","#f9dcd8","#f2c4c4","#fbe3de","#f0bcc0"],champagne:["#f3e2c4","#ecd6b0","#f7e8cf","#e9d0a8"],softrose:["#efa4b4","#f3b4c0","#e8909f","#f0a0ae"],yellow:["#f7d23a","#f5c518","#fbe05a","#f2bd1c"],purple:["#6a3fa0","#7d4cb8","#5a2f8a","#8a58c4"],lavender:["#c8b8e8","#d6c8f0","#bfaee0","#cbb4e4"],paleyellow:["#fbeaa0","#f8e48a","#fdf0b8"],softpink:["#f7c6d4","#f9d0dc","#f4b8ca"],blueviolet:["#7b7fd8","#8a8be6","#6c74cc","#9a94e8","#7368c8"],coolivory:["#eef0f4","#e6e8f0","#f2f2f6"],golden:["#f5b81c","#f8c534","#f0a818","#ffcc3d","#f7b42a"],orange:["#f07a1a","#f58a28","#e8681c","#fa9632"],warmruby:["#c2283a","#b8202f","#cc3442"],burgundy:["#6e1f33","#7a2a3c","#5c1a2c"],deepplum:["#3e1a48","#4a2058","#55285e","#3a1640"]},gs={peony:{fuchsia:3,rose:3,ivory:1.2,ruby:2.2,coral:1},ranunculus:{tangerine:3,butter:2.5,rose:1.5,ivory:.8,coral:1.2,fuchsia:1.2,ruby:1},dahlia:{ruby:3,tangerine:2,fuchsia:2,plum:1.5,butter:1},anemone:{ruby:3,plum:2,ivory:2,fuchsia:1.5,lilac:1},cosmos:{rose:2,fuchsia:3,ivory:1,plum:1.2,ruby:1},gerbera:{tangerine:3,butter:2.5,fuchsia:2,ruby:1.5,coral:1},tulip:{ruby:3,butter:2.5,fuchsia:2,tangerine:2,ivory:1,plum:1},hydrangea:{ivory:1.2,lilac:3,rose:1.6,plum:1.4},camellia:{ruby:3,rose:2.5,ivory:2,fuchsia:1},daisy:{white:4,butter:2},blossom:{lilac:2,rose:2,ivory:2,butter:1.5,white:1},cluster:{white:3,ivory:1},spike:{plum:2.5,lilac:3,rose:1.5,ivory:1},bud:{rose:2,fuchsia:2,ruby:1.5,butter:1,tangerine:1,ivory:1}};function ao(l,t){const e=Object.entries(t).map(([s,i])=>({family:s,weight:i}));return l.weighted(e).family}function Ae(l,t,e=null,s=new N){const i=ao(l,e||gs[t]||gs.blossom);return{family:i,color:ri(l,s.set(l.pick(ai[i])),.022,.06,.05)}}function De(l,t,e=new N){return ri(l,e.set(l.pick(ai[t])),.02,.07,.06)}function ri(l,t,e=.02,s=.06,i=.05){const o={};return t.getHSL(o),t.setHSL((o.h+l.float(-e,e)+1)%1,R.clamp(o.s+l.float(-s,s),0,1),R.clamp(o.l+l.float(-i,i),.03,.97)),t}const _t={preS:34,length:250,postS:46},Fe=.028,ro=[{p:.095,w:.055,turn:.3},{p:.186,w:.034,turn:-.44},{p:.252,w:.04,turn:.62},{p:.326,w:.036,turn:-.6},{p:.43,w:.06,turn:.14},{p:.503,w:.032,turn:-.58},{p:.566,w:.029,turn:.5},{p:.626,w:.031,turn:-.52},{p:.688,w:.026,turn:.36},{p:.8,w:.07,turn:-.34},{p:.912,w:.028,turn:.46},{p:.972,w:.02,turn:-.14},{p:1.05,w:.05,turn:1}],no=[{p:.415,w:.035,extra:.6},{p:.965,w:.03,extra:.8}],q=[{id:"awakening",number:"01",title:"The Awakening",range:[0,.18],mood:"Wonder · anticipation",intensity:5,referenceSeconds:30,stream:{halfWidth:1.75},valley:{bank:1.15,wallH:6.2,wallScale:5.2,farH:9,roll:.55},belts:{main:10.5,back:21},density:1,stems:{water:[0,.25],forward:[.15,1.35],main:[.05,.85],back:[0,.45]},lean:.25,flora:{water:{ranunculus:2,blossom:2,bud:1.2,peony:1},forward:{peony:5,ranunculus:3.2,bud:.5},main:{peony:4.2,ranunculus:3,hydrangea:.35},back:{peony:3,ranunculus:2.5}},companions:["bud","blossom","ranunculus","bud"],colors:{peony:{blush:4,softrose:2.6,ivory:2,champagne:1.4},ranunculus:{champagne:2.4,blush:3,ivory:1.3,softrose:2},hydrangea:{blush:1,ivory:1},blossom:{blush:2,ivory:2,champagne:1},bud:{softrose:2,blush:2,champagne:1}},leaves:["#4f7a34","#5d8a3c","#46703a","#6b8f45","#3f6a30"],carpet:["#f2c6c6","#f8ece0","#e7a7b6"],atmosphere:{zenith:"#8ea2d2",mid:"#dcc1d0",horizon:"#f7d8c6",sunGlow:"#fff0d8",sunAz:-.32,sunEl:.3,sun:1.22,sunTint:"#ffdcb4",fill:.5,sky:.36,ground:.24,haze:.017,hazeStart:10,clouds:.34,cloudDark:.1,wind:.75,scatter:.35,rays:0,water:"#1a1a14",gradeR:.22,gradeG:.42,gradeB:.28,wbR:-.04,wbG:.02,wbB:.08,contrast:.1,contrastPivot:.55}},{id:"dancing",number:"02",title:"The Dancing Flowers",range:[.18,.36],mood:"Curiosity · adventure",intensity:6,referenceSeconds:30,stream:{halfWidth:1.12},valley:{bank:.8,wallH:6.8,wallScale:3.4,farH:13,roll:.45},belts:{main:8,back:15},density:1.05,stems:{water:[0,.35],forward:[.6,3.2],main:[.4,2.6],back:[.2,1.4]},lean:.55,flora:{water:{anemone:1.5,tulip:1.5,bud:1,blossom:.6},forward:{tulip:5.5,anemone:3.2,spike:.5},main:{tulip:4.8,anemone:3,spike:.8},back:{tulip:3.4,anemone:2.2,spike:.5}},companions:["bud","spike","anemone","tulip"],colors:{tulip:{yellow:3.2,ruby:3.2,plum:1.6,purple:1.6},anemone:{ruby:2.6,plum:2.2,purple:2.4,ivory:.5},spike:{purple:3,plum:2,lavender:1},bud:{ruby:2,yellow:2,plum:1},blossom:{yellow:1,lavender:1}},leaves:["#3f6f2e","#4a7d35","#355f28","#5a8a3a","#2f5626"],carpet:["#d23a46","#f2c530","#6a3a8a"],atmosphere:{zenith:"#7894cc",mid:"#c9b6d2",horizon:"#f1d2bc",sunGlow:"#fff2dc",sunAz:.55,sunEl:.36,sun:1.45,sunTint:"#ffe2c0",fill:.36,sky:.3,ground:.18,haze:.015,hazeStart:9,clouds:.4,cloudDark:.12,wind:1.65,scatter:.3,rays:0,water:"#16181a"}},{id:"meadow",number:"03",title:"The Butterfly Meadow",range:[.36,.51],mood:"Freedom · relief",intensity:4,referenceSeconds:25,stream:{halfWidth:2.65},valley:{bank:1.6,wallH:1.5,wallScale:9,farH:5.5,roll:.75},belts:{main:15,back:27},density:.95,scale:.7,stems:{water:[0,.15],forward:[0,.62],main:[0,.4],back:[0,.22]},lean:.15,flora:{water:{daisy:2,cosmos:1,blossom:1.5},forward:{cosmos:4.5,daisy:4,gerbera:1.1},main:{cosmos:4,daisy:4.2,gerbera:.9},back:{daisy:4,cosmos:3}},companions:["daisy","blossom","cosmos","bud"],colors:{cosmos:{white:2.4,lavender:2.4,softpink:3,paleyellow:.6},daisy:{white:5,paleyellow:1.4,lavender:.6},gerbera:{softpink:2,paleyellow:2,white:1},blossom:{white:2,lavender:1.5,paleyellow:1},bud:{softpink:2,lavender:1}},leaves:["#6a9a45","#78a84e","#5c8e3e","#86b25a","#4f8238"],carpet:["#fbf6ec","#d8cdf0","#f6d5e0"],atmosphere:{zenith:"#7aa6e0",mid:"#c4d4ee",horizon:"#f4e9dc",sunGlow:"#fff8ea",sunAz:.2,sunEl:.62,sun:1.38,sunTint:"#fff2de",fill:.56,sky:.46,ground:.27,haze:.0095,hazeStart:14,clouds:.5,cloudDark:.06,wind:1,scatter:.25,rays:0,water:"#1a2024"}},{id:"rain",number:"04",title:"The Rain Garden",range:[.51,.72],mood:"Mystery · tension · immersion",intensity:8,referenceSeconds:35,stream:{halfWidth:1.2},valley:{bank:.85,wallH:8.5,wallScale:3.2,farH:15,roll:.5},belts:{main:8.5,back:14.5},density:1.08,stems:{water:[0,.3],forward:[.2,2.2],main:[.1,1.7],back:[0,1]},lean:.7,flora:{water:{cluster:2,hydrangea:1.2,blossom:1},forward:{hydrangea:5,camellia:3.2,cluster:1.6},main:{hydrangea:5,camellia:3,cluster:1.6},back:{hydrangea:4,camellia:2}},companions:["cluster","bud","blossom","cluster"],colors:{hydrangea:{blueviolet:3.4,lavender:2.4,purple:1.6,coolivory:.8},camellia:{coolivory:2,lavender:1,purple:1.4,blush:.8},cluster:{coolivory:3,white:2},blossom:{coolivory:2,lavender:1},bud:{lavender:1,coolivory:1}},leaves:["#4a6a4c","#3f5e46","#56705a","#4c6658","#3a5442"],carpet:["#7c80d6","#b9a8e0","#e9ebf2"],atmosphere:{zenith:"#5d6478",mid:"#7f8597",horizon:"#a2a6b0",sunGlow:"#c9ccd6",sunAz:-.4,sunEl:.42,sun:.38,sunTint:"#d8dce8",fill:.42,sky:.5,ground:.2,haze:.034,hazeStart:5,clouds:.96,cloudDark:.72,wind:1.9,scatter:.05,rays:0,water:"#141a1e"}},{id:"golden",number:"05",title:"The Golden Bloom",range:[.72,.9],mood:"Joy · release · climax",intensity:9,referenceSeconds:30,stream:{halfWidth:2.35},valley:{bank:1.3,wallH:3.4,wallScale:6.5,farH:8,roll:.7,terrace:.55},belts:{main:14,back:26},density:1.1,stems:{water:[0,.3],forward:[.1,1.7],main:[.05,1.25],back:[0,.6]},lean:.35,flora:{water:{gerbera:1.4,ranunculus:1.4,blossom:1},forward:{dahlia:4.6,gerbera:4,ranunculus:2.2},main:{dahlia:4.4,gerbera:3.8,ranunculus:2.4},back:{dahlia:3.6,gerbera:3.2,ranunculus:1.8}},companions:["ranunculus","bud","blossom","gerbera"],colors:{dahlia:{golden:3,tangerine:2.6,orange:2.2,warmruby:1.8},gerbera:{golden:3.2,orange:2.6,tangerine:2,warmruby:1},ranunculus:{golden:4,tangerine:1.2,orange:1},blossom:{golden:2,tangerine:1},bud:{golden:2,orange:1,warmruby:1}},leaves:["#3e7a2a","#4b8a30","#356b24","#58952f","#2f6020"],carpet:["#f6b51e","#f07a22","#c8283a"],atmosphere:{zenith:"#3c74cf",mid:"#a9bddb",horizon:"#ffd69c",sunGlow:"#fff0c8",sunAz:.3,sunEl:.2,sun:1.95,sunTint:"#ffd796",fill:.4,sky:.36,ground:.26,haze:.0095,hazeStart:13,clouds:.52,cloudDark:.22,wind:.85,scatter:.38,rays:.9,water:"#1e1a10"}},{id:"secret",number:"06",title:"The Secret Bloom",range:[.9,1],mood:"Anticipation · discovery",intensity:6,referenceSeconds:20,stream:{halfWidth:1.4},valley:{bank:1,wallH:6,wallScale:2.8,farH:12,roll:.35},belts:{main:7.5,back:13},density:.62,stems:{water:[0,.2],forward:[.2,1.2],main:[.1,1],back:[0,.6]},lean:.3,flora:{water:{anemone:1.2,bud:1.2,blossom:.6},forward:{peony:3.4,anemone:3.6,bud:.8},main:{peony:3.2,anemone:3.2},back:{peony:2,anemone:2}},companions:["bud","anemone","bud","blossom"],colors:{peony:{ivory:4,champagne:2.4},anemone:{deepplum:4,burgundy:2.4},bud:{ivory:2,burgundy:1,champagne:1},blossom:{champagne:1,ivory:1}},leaves:["#2f5226","#28461f","#355a2a","#3b5f30","#22401c"],carpet:["#efe4d0","#5a2a4c","#8a3a4c"],atmosphere:{zenith:"#5f628f",mid:"#a98fac",horizon:"#d4b0a8",sunGlow:"#ffe6cc",sunAz:-.85,sunEl:.18,sun:.9,sunTint:"#ffd2b0",fill:.42,sky:.3,ground:.2,haze:.032,hazeStart:6,clouds:.28,cloudDark:.2,wind:.25,scatter:.4,rays:0,water:"#141012"}}],ni=l=>Math.min(1,Math.max(0,l)),ht=(l,t,e)=>{const s=ni((e-l)/(t-l));return s*s*(3-2*s)};function le(l,t=new Float32Array(q.length)){const e=q.length;let s=1;for(let i=0;i<e;i++){if(i===e-1){t[i]=s;break}const o=q[i].range[1],a=q[i+1].blendIn??Fe,r=ht(o-a,o+a,l);t[i]=s*(1-r),s*=r}return t}function lo(l){for(let t=q.length-1;t>=0;t--)if(l>=q[t].range[0])return t;return 0}function Tt(l,t){const e=le(l);let s=t.next();for(let i=0;i<e.length;i++)if(s-=e[i],s<=0)return q[i];return q[q.length-1]}function co(l){return 1-.62*ht(.46,.5,l)*(1-ht(.525,.6,l))}function ho(l){return ht(.528,.64,l)*(1-ht(.708,.776,l))}function uo(l){return ht(.515,.565,l)*(1-ht(.72,.79,l))}function fo(l){return ht(.55,.64,l)*(1-ht(.84,.93,l))}function po(l){return ht(.735,.8,l)*(1-ht(.88,.94,l)*.55)}const vs=["stream.halfWidth","valley.bank","valley.wallH","valley.wallScale","valley.farH","valley.roll","valley.terrace","belts.main","belts.back","density","lean"],mo=(l,t)=>t.split(".").reduce((e,s)=>e?.[s],l)??0;class go{constructor(t=2e3){this.n=t,this.data={};const e=new Float32Array(q.length);for(const s of vs)this.data[s]=new Float32Array(t+1);for(let s=0;s<=t;s++){le(s/t,e);for(const i of vs){let o=0;for(let a=0;a<q.length;a++)o+=e[a]*mo(q[a],i);this.data[i][s]=o}}}at(t,e){const s=this.data[t],i=ni(e)*this.n,o=Math.min(this.n-1,Math.floor(i));return s[o]+(s[o+1]-s[o])*(i-o)}}const wt=new go;function vo(l){let t=0;for(const e of no)e.w>0&&(t+=e.extra*Math.exp(-(((l-e.p)/e.w)**2)));return t}const yt=(l,t,e)=>{const s=Math.min(1,Math.max(0,(e-l)/(t-l)));return s*s*(3-2*s)};class li{constructor(t){this.route=t,this.sMin=-26,this.sMax=t.length+36}heightAt(t,e){const s=this.route,i=s.progressAtS(t),o=Math.abs(e),a=s.halfWidthAt(t),r=wt.at("valley.bank",i),n=wt.at("valley.wallH",i)*co(i),c=wt.at("valley.wallScale",i),h=wt.at("valley.farH",i),u=wt.at("valley.roll",i),f=wt.at("valley.terrace",i),p=yt(a-.4,a+.5,o),m=-.36*(1-Math.min(1,(o/a)**2))-.06;let d=m+(.13-m)*p;const v=Math.max(0,o-(a+r)),w=Math.pow(1-Math.exp(-v/c),1.18);d+=n*w,f>0&&(d+=f*(Math.sin(v*.9-1.2)*.5+v*.12)*yt(.5,3,v)*(1-yt(18,26,v))),d+=h*.25*yt(10,22,o);const y=yt(s.routeEndS+2,s.routeEndS+26,t);y>0&&(d+=y*5*yt(a+.6,a+6,o)),d+=(.28*Math.sin(t*.37+e*.21)+.18*Math.sin(t*.83-e*.5)+.1*Math.sin(t*1.7+e*1.3))*u*yt(a+1,a+4,o);const M=yt(14,30,o);return M<=0?d:(s.toWorld(t,e,0,Ge),d+(this.farHeight(Ge.x,Ge.z,o)-d)*M)}farHeight(t,e,s){return 4.2+(1.6*Math.sin(t*.031+e*.017)+1.2*Math.sin(t*.067-e*.043+1.3)+.6*Math.sin(t*.13+e*.11))+7.5*yt(26,110,s)}effectiveLateral(t,e){const s=this.route.innerLimit(t,Math.sign(e)||1,0),i=Math.abs(e);if(!Number.isFinite(s)||i<7||s>120)return e;const o=Math.min(7,s*.6);if(i<=o)return e;const a=i<=o?i:o+(i-o)*(s-o)/(120-o);return Math.sign(e)*Math.min(i,a)}createMesh(){const t=this.route,e=[];for(let m=-120;m<=120.001;){e.push(m);const d=Math.abs(m);m+=d<5?.2:d<14?.45:d<30?1:d<70?3.5:8}const s=.4,i=Math.ceil((this.sMax-this.sMin)/s),o=e.length,a=64,r=new rt;r.name="terrain",this.material=this.createMaterial();const n=new g,c=new Float32Array(q.length),h=q.map(m=>new N(m.carpet[0])),u=q.map(m=>new N(m.carpet[1])),f=q.map(m=>new N(m.carpet[2])),p=q.map(m=>new N(m.leaves[2]));for(let m=0;m<i;m+=a){const d=Math.min(a,i-m),v=(d+1)*o,w=new Float32Array(v*3),y=new Float32Array(v*2),M=new Float32Array(v*3),x=new Float32Array(v*3),A=new Float32Array(v*3),E=new Float32Array(v*3);let k=0;const _={s:0,lateral:0};for(let F=0;F<=d;F++){const L=this.sMin+(m+F)*s,G=(C,D,S)=>{let P=0,I=0,W=0;for(let Y=0;Y<c.length;Y++)P+=C[Y].r*c[Y],I+=C[Y].g*c[Y],W+=C[Y].b*c[Y];D[S]=P,D[S+1]=I,D[S+2]=W};for(let C=0;C<o;C++){const D=this.effectiveLateral(L,e[C]);t.toWorld(L,D,0,n);let S=L,P=D;Math.abs(D)>6&&(t.project(n.x,n.z,_),S=_.s,P=_.lateral),n.y=this.heightAt(S,P),le(R.clamp(t.progressAtS(S),0,1),c),w[k*3]=n.x,w[k*3+1]=n.y,w[k*3+2]=n.z,y[k*2]=S,y[k*2+1]=P,G(h,M,k*3),G(u,x,k*3),G(f,A,k*3),G(p,E,k*3),k++}}const O=[];for(let F=0;F<d;F++)for(let L=0;L<o-1;L++){const G=F*o+L,C=G+1,D=G+o,S=D+1;O.push(G,C,D,C,S,D)}const b=new dt;b.setAttribute("position",new lt(w,3)),b.setAttribute("uv",new lt(y,2)),b.setAttribute("aCarpetA",new lt(M,3)),b.setAttribute("aCarpetB",new lt(x,3)),b.setAttribute("aCarpetC",new lt(A,3)),b.setAttribute("aMoss",new lt(E,3)),b.setIndex(O),b.computeVertexNormals(),b.computeBoundingSphere();const T=new j(b,this.material);T.name=`terrain-${m/a}`,r.add(T)}return r}createMaterial(){return new K({uniforms:{...U},vertexShader:`
        attribute vec3 aCarpetA; attribute vec3 aCarpetB; attribute vec3 aCarpetC; attribute vec3 aMoss;
        varying vec3 vWorld; varying vec3 vNormal; varying vec2 vRoute;
        varying vec3 vCA; varying vec3 vCB; varying vec3 vCC; varying vec3 vMoss;
        void main() {
          vec4 w = modelMatrix * vec4(position, 1.0);
          vWorld = w.xyz; vNormal = normalize(mat3(modelMatrix) * normal); vRoute = uv;
          vCA = aCarpetA; vCB = aCarpetB; vCC = aCarpetC; vMoss = aMoss;
          gl_Position = projectionMatrix * viewMatrix * w;
        }`,fragmentShader:`
        #include <common>
        ${mt}
${$t}
        varying vec3 vWorld; varying vec3 vNormal; varying vec2 vRoute;
        varying vec3 vCA; varying vec3 vCB; varying vec3 vCC; varying vec3 vMoss;
        vec2 cell(vec2 p) {
          vec2 i = floor(p), f = fract(p); float d1 = 8.0, d2 = 8.0;
          for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
            vec2 g = vec2(float(x), float(y));
            vec2 o = vec2(hash13(vec3(i + g, 1.0)), hash13(vec3(i + g, 7.0)));
            float d = length(g + o - f);
            if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
          }
          return vec2(d1, d2);
        }
        void main() {
          vec3 N = normalize(vNormal);
          vec3 V = normalize(cameraPosition - vWorld);
          float h = vWorld.y;
          float lat = abs(vRoute.y);
          float n = vnoise(vWorld * 1.3), n2 = vnoise(vWorld * 5.0);
          // lush foliage underlayer: rounded leaf clusters (cellular), each with its own green and a lit
          // crown, so slopes between the flowers read as dense planting rather than bare ground
          vec2 lq = vWorld.xz * 2.1 + vec2(vWorld.y * 0.8, -vWorld.y * 0.5);
          vec2 lc = cell(lq);
          float leaf = smoothstep(0.78, 0.04, lc.x);
          float hueN = hash13(vec3(floor(lq + 0.5), 5.0));
          vec3 moss = vMoss * mix(0.38, 1.12, leaf) * (0.78 + 0.45 * hueN);
          moss *= 0.85 + 0.3 * n;
          moss = mix(moss, vec3(0.025, 0.035, 0.018), (1.0 - leaf) * 0.45);
          // flower carpet: the far-distance impostor of each garden's blooms (painted colour masses)
          float pick = vnoise(vWorld * 0.55 + 4.0);
          vec3 bloom = mix(vCA, vCB, smoothstep(0.35, 0.65, pick));
          bloom = mix(bloom, vCC, smoothstep(0.62, 0.78, vnoise(vWorld * 0.9 + 11.0)));
          float speck = smoothstep(0.52, 0.72, vnoise(vWorld * 4.5 + 3.0));
          float carpetAmt = mix(speck * 0.55, 0.22 + speck * 0.5, smoothstep(14.0, 26.0, lat)) * (1.0 - smoothstep(40.0, 90.0, lat) * 0.5);
          moss = mix(moss, bloom * (0.55 + 0.25 * n2), carpetAmt * smoothstep(0.25, 1.2, h));
          // wet bank and riverbed pebbles
          vec2 c = cell(vRoute * vec2(2.3, 3.1));
          float pebble = smoothstep(0.02, 0.18, c.y - c.x);
          vec3 bed = mix(vec3(0.035, 0.028, 0.02), vec3(0.11, 0.08, 0.055) * (0.75 + 0.5 * hash13(vec3(floor(vRoute * vec2(2.3, 3.1)), 3.0))), pebble * 0.75);
          vec3 bank = mix(vec3(0.04, 0.032, 0.02), vMoss * 0.5, 0.35 + n * 0.5);
          vec3 albedo = mix(bed, bank, smoothstep(-0.12, 0.05, h));
          albedo = mix(albedo, moss, smoothstep(0.1, 0.45, h));
          // wet, darker soil right at the waterline (and everywhere while it rains)
          float wetBand = 1.0 - smoothstep(0.02, 0.32, h);
          float wet = clamp(wetBand + uWet * 0.6, 0.0, 1.0);
          albedo *= 1.0 - 0.38 * wet * (1.0 - smoothstep(0.3, 1.0, h) * (1.0 - uWet));
          vec3 col = gouacheLight(albedo, N, V, 0.0, 0.85);
          // wet sheen
          vec3 R = reflect(-V, N);
          col += uSunColor * pow(max(dot(R, uSunDir), 0.0), 40.0) * 0.06 * wet * (0.4 + uWet);
          // under water: absorb with depth (seen through the transparent stream)
          float depth = clamp(-h, 0.0, 1.0);
          col = mix(col, col * vec3(0.55, 0.5, 0.42), smoothstep(0.0, 0.25, depth));
          col = applyHaze(col, vWorld);
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          GARDEN_GRADE_OUTPUT
        }`})}}const Ge=new g,ci=l=>Math.min(1,Math.max(0,l)),me=(l,t,e)=>l+(t-l)*e,wo=l=>{const t=ci(l);return t*t*t*(t*(t*6-15)+10)};function ws(l,t,e){if(l<=0)return 0;const s=t*Math.sqrt(1-e*e);return 1-Math.exp(-e*t*l)*(Math.cos(s*l)+e*t/s*Math.sin(s*l))}const ys=[.15,.85],bs=[{name:"entrance",len:1,gap:.9,left:4,right:4,high:.5},{name:"left-bank",len:1,gap:.6,left:5,right:3,high:.4},{name:"right-bank",len:.9,gap:.7,left:3,right:5,high:.6},{name:"great-arch-1",len:1.4,gap:.6,left:7,right:7,high:.7,grand:!0},{name:"quiet",len:.9,gap:.7,left:4,right:3,high:.4},{name:"great-arch-2",len:1.3,gap:.6,left:6,right:7,high:.65,grand:!0},{name:"narrows",len:1,gap:.7,left:3,right:4,high:.5},{name:"finale",len:1.2,gap:0,left:6,right:6,high:.6,grand:!0}],yo=5.5,bo=.9,xs=10,xo=.8,Ss=2.5,So=2.6,Ms=1.9,Mo={yellow:4,ruby:3.4,purple:1,plum:.6},Ao=1.4,Re=10;function As(l,t,e,s){let i=0,o=0;const a=e/Re;for(let r=0;r<Re;r++){const n=(r+.5)*a,c=l*n+t*Math.pow(n,2.5);i+=Math.sin(c)*a,o+=Math.cos(c)*a}return s.x=i,s.y=o,s.phi=l*e+t*Math.pow(e,2.5),s}const hi=`
attribute vec3 aColor;
attribute vec4 aInfo;
attribute vec2 aExtra;
uniform vec3 uBaseColor;
varying float vFade;
varying vec3 vColor;
varying vec4 vInfo;
varying vec2 vExtra;
varying vec3 vNormal;
varying vec3 vWorld;
varying vec3 vInst;
varying vec3 vObj;
varying float vSeed;
`,ko=`
${hi}
attribute vec3 aOpenPos;
attribute vec3 aOpenNrm;
attribute float aBloom;
attribute float aSeed;
void main() {
  vec3 pos = mix(position, aOpenPos, aBloom);
  vec3 nrm = normalize(mix(normal, aOpenNrm, aBloom) + vec3(1e-5));
  mat4 m = modelMatrix;
  #ifdef USE_INSTANCING
    m = m * instanceMatrix;
  #endif
  vec4 world = m * vec4(pos, 1.0);
  vNormal = normalize(mat3(m) * nrm);
  vInst = uBaseColor;
  #ifdef USE_INSTANCING_COLOR
    vInst = instanceColor;
  #endif
  vFade = 0.0;
  vColor = aColor; vInfo = aInfo; vExtra = aExtra;
  vWorld = world.xyz; vObj = pos; vSeed = aSeed;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,zo=`
${hi}
attribute vec4 aRoot;  // root xyz, length
attribute vec4 aBend;  // bend direction (x, z), A, B
attribute vec3 aShape; // radius, scale (grow / hand-back), seed
void main() {
  float t = position.y;
  float L = aRoot.w * aShape.y;
  vec2 c = vec2(0.0);
  float h = t / ${Re}.0;
  for (int i = 0; i < ${Re}; i++) {
    float tm = (float(i) + 0.5) * h;
    float ph = aBend.z * tm + aBend.w * pow(tm, 2.5);
    c += vec2(sin(ph), cos(ph)) * h;
  }
  float ph = aBend.z * t + aBend.w * pow(t, 2.5);
  vec3 D = vec3(aBend.x, 0.0, aBend.y);
  vec3 U = vec3(0.0, 1.0, 0.0);
  vec3 K = normalize(cross(D, U));
  vec3 N = D * cos(ph) - U * sin(ph);
  vec3 off = N * position.x + K * position.z;
  float r = aShape.x * aShape.y * (1.0 - 0.35 * t);
  vec4 world = modelMatrix * vec4(aRoot.xyz + (D * c.x + U * c.y) * L + off * r, 1.0);
  vNormal = normalize(mat3(modelMatrix) * off);
  vInst = uBaseColor;
  #ifdef USE_INSTANCING_COLOR
    vInst = instanceColor;
  #endif
  vFade = 0.0;
  vColor = aColor; vInfo = aInfo; vExtra = aExtra;
  vWorld = world.xyz; vObj = position; vSeed = aShape.z;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,Ro=`
attribute vec4 aStart; // birth position, birth time (event clock)
attribute vec4 aVel;   // initial velocity, life
attribute vec3 aLook;  // world size, warmth, kind (0 mote, 1 breath)
uniform float uNow;
uniform float uPx;
varying float vA;
varying float vWarm;
varying float vKind;
void main() {
  float age = uNow - aStart.w, life = aVel.w;
  float u = age / life;
  if (age < 0.0 || u >= 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; vA = 0.0; return; }
  float k = 1.4; // air drag: a breath outward, then the mote drifts
  vec3 p = aStart.xyz + aVel.xyz * (1.0 - exp(-k * age)) / k;
  float seed = aLook.x * 97.0 + aStart.x * 13.0 + aStart.z * 7.0;
  p.y += 0.06 * age + 0.012 * age * age;
  p.x += sin(age * 1.6 + seed) * 0.05 * age;
  p.z += cos(age * 1.3 + seed * 1.7) * 0.05 * age;
  vec4 mv = viewMatrix * modelMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float grow = smoothstep(0.0, aLook.z > 0.5 ? 0.25 : 0.06, u);
  float fade = 1.0 - smoothstep(aLook.z > 0.5 ? 0.2 : 0.4, 1.0, u);
  float twinkle = aLook.z > 0.5 ? 1.0 : 0.72 + 0.28 * sin(age * 8.0 + seed * 3.1);
  vA = grow * fade * twinkle;
  vWarm = aLook.y; vKind = aLook.z;
  float size = aLook.x * (aLook.z > 0.5 ? 0.7 + 0.9 * u : 1.0);
  gl_PointSize = clamp(size * uPx / max(0.2, -mv.z), 1.5, 64.0);
}
`,_o=`
varying float vA;
varying float vWarm;
varying float vKind;
void main() {
  vec2 q = gl_PointCoord - 0.5;
  float d2 = dot(q, q) * 4.0;
  float core = exp(-d2 * (vKind > 0.5 ? 2.6 : 7.0));
  vec3 col = mix(vec3(1.0, 0.96, 0.86), vec3(1.0, 0.8, 0.42), vWarm);
  float a = core * vA * (vKind > 0.5 ? 0.32 : 1.0);
  if (a < 0.003) discard;
  gl_FragColor = vec4(col * a, 1.0);
}
`;class os extends ne{constructor(){super({id:"tulip-gate",garden:"dancing",implemented:!0,trigger:{progress:[.15,.345],exitMargin:.02},replay:"on-reenter",reverse:"fade-out",description:"Garden 02: a living tulip corridor over 70% of the garden; group after group of bowed tulips rises just ahead of the boat, buds opening with glowing pollen."}),this.plants=[],this.group=null,this.debugState={},this._arc={x:0,y:0,phi:0},this._v=new g,this._t=new g,this._q=new V,this._q2=new V,this._m=new J,this._s=new g,this._up=new g(0,1,0)}hold(t){this._held=!!t}static lead(t){return Math.min(xs,yo+bo*Math.max(0,t||0))}solveBend(t,e,s){const i=Math.atan2(e,s);let o={err:1/0,A:0,x:0,y:1};for(let r=-.3;r<=1.6;r+=.02){const n=As(r,t,1,this._arc),c=Math.abs(Math.atan2(n.x,n.y)-i);c<o.err&&(o={err:c,A:r,x:n.x,y:n.y})}const a=R.clamp(Math.hypot(e,s)/Math.hypot(o.x,o.y),1.1,4);return{A:o.A,L:a}}buildHeadGeometry(t){const e=r=>{const n=new Ee;return n.windMode=3,n.translucency=1,Lt.tulip.build(n,{openness:r,detail:t,rng:new at(4711)}),n.build()},s=e(0),i=e(1);if(s.attributes.position.count!==i.attributes.position.count)throw new Error("tulip-gate: bud / bloom topology mismatch");const o=s.attributes.position;let a=0;for(let r=0;r<o.count;r++)a=Math.max(a,o.getY(r));for(let r=0;r<o.count;r++){const n=o.getY(r),c=Math.pow(ci(n/a),1.15),h=me(.92,.3,c);o.setXYZ(r,o.getX(r)*h,n*(.95+.12*c),o.getZ(r)*h)}return s.computeVertexNormals(),s.setAttribute("aOpenPos",i.attributes.position),s.setAttribute("aOpenNrm",i.attributes.normal),i.dispose(),s}buildStemGeometry(t,e){const s=[],i=[],o=[],a=[],r=[];for(let h=0;h<=t;h++){const u=h/t;for(let f=0;f<=e;f++){const p=f/e*Math.PI*2;s.push(Math.cos(p),u,Math.sin(p)),i.push(1,1,1),o.push(.1+u*.8,0,0,.7+.3*u),a.push(1,.25)}}const n=e+1;for(let h=0;h<t;h++)for(let u=0;u<e;u++){const f=h*n+u,p=f+n;r.push(f,p,f+1,p,p+1,f+1)}const c=new dt;return c.setAttribute("position",new X(s,3)),c.setAttribute("aColor",new X(i,3)),c.setAttribute("aInfo",new X(o,4)),c.setAttribute("aExtra",new X(a,2)),c.setIndex(r),c}prepare(t){const e=t.route,s=new li(e),i=tt.quality==="low",o=new at(2202),a=q.find(b=>b.id==="dancing");this.group=new rt,this.group.name="attraction-tulip-gate",this.group.visible=!1;const[r,n]=a.range;this.gardenRange=[r,n];const c=r+ys[0]*(n-r),h=r+ys[1]*(n-r),u=e.progressToS(c),f=e.progressToS(h);this.corridor={p0:c,p1:h,s0:u,s1:f},this.titleS=e.progressToS(r);const p=i?bs.map(b=>({...b,left:Math.max(2,Math.round(b.left*.75)),right:Math.max(2,Math.round(b.right*.75))})):bs,m=(f-u)/p.reduce((b,T)=>b+T.len+T.gap,0);this.groups=[];const d=[];let v=u,w=0;p.forEach((b,T)=>{const F=v,L=v+b.len*m;v=L+b.gap*m;const G=[];for(const[S,P]of[[-1,b.left],[1,b.right]])for(let I=0;I<P;I++){const W=(I+o.float(.1,.9)+(S>0?.45:0))/(P+.5);G.push({side:S,front:!o.chance(b.high),s:me(F,L,W),group:T,grand:!!b.grand})}const C=G.map((S,P)=>P);for(let S=C.length-1;S>0;S--){const P=Math.floor(o.next()*(S+1));[C[S],C[P]]=[C[P],C[S]]}let D=Math.floor(G.length/2);G.length%2&&(D+=w,w=1-w),C.slice(0,D).forEach(S=>{G[S].bud=!0}),G.sort((S,P)=>S.s-P.s),this.groups.push({i:T,name:b.name,s0:F,s1:L,p0:e.progressAtS(F),p1:e.progressAtS(L),plants:[]}),d.push(...G)});for(let b=0;b<d.length;b++){const{side:T,front:F,s:L,group:G,grand:C}=d[b],D=this.groups[G],S=e.halfWidthAt(L),P=T*(S+(F?o.float(.02,.32):o.float(.45,.85))),I=e.toWorld(L,P,s.heightAt(L,P)-.04),W=e.tangentAt(L),Y=e.rightAt(L),et=o.float(.12,.42),gt=new g().addScaledVector(Y,-T*Math.cos(et)).addScaledVector(W,-Math.sin(et)).normalize(),Z=F?o.float(1.3,1.7):o.float(.8,1.1),H=F?o.float(.35,1.05):o.float(.15,.7),Q=F?o.float(.95,1.3):o.float(2.6,3.3)+(C?.3:0),$=(Math.abs(P)-H)/Math.cos(et),At=Q-I.y,{A:Xt,L:Ie}=this.solveBend(Z,$,At),Wt=!!d[b].bud,ce=(Wt?o.float(.52,.66):o.float(.5,.68))*(C?1.08:1),{color:Ne}=Ae(o,"tulip",Mo),he={i:b,side:T,front:F,bud:Wt,s:L,root:I,dir:gt,L:Ie,R:ce,color:Ne,A0:Xt,B0:Z,inward:Y.clone().multiplyScalar(-T),group:G,A1:o.float(-.14,-.04),B1:o.float(.06,.2),twist:o.float(0,Math.PI*2),ph:o.float(0,6.3),tempo:o.float(.75,1.25),delay:(L-D.s0)/So+(T>0?.15:0)+(F?0:.12)+o.float(-.06,.1),bloomLag:o.float(0,.3),seed:o.next(),riseAt:null,rate:1,bloomAt:null,bloom:Wt?0:1,pollen:!Wt,A:0,B:0};this.plants.push(he),D.plants.push(he)}for(const b of this.groups)b.buds=b.plants.filter(T=>T.bud).length,b.left=b.plants.filter(T=>T.side<0).length,b.right=b.plants.filter(T=>T.side>0).length,b.local0=(b.p0-r)/(n-r),b.local1=(b.p1-r)/(n-r);this.counts={plants:this.plants.length,groups:this.groups.length,buds:this.plants.filter(b=>b.bud).length,open:this.plants.filter(b=>!b.bud).length,left:this.plants.filter(b=>b.side<0).length,right:this.plants.filter(b=>b.side>0).length};const y=this.plants.length,M=this.buildHeadGeometry(i?1:2);this.aBloom=new ct(new Float32Array(y),1).setUsage(ot),M.setAttribute("aBloom",this.aBloom),M.setAttribute("aSeed",new ct(Float32Array.from(this.plants,b=>b.seed),1));const x=Yt();x.vertexShader=ko,x.name="tulip-gate-head",this.heads=new St(M,x,y),this.heads.name="tulip-gate-heads",this.heads.instanceMatrix.setUsage(ot),this.heads.frustumCulled=!1,this.plants.forEach((b,T)=>this.heads.setColorAt(T,b.color));const A=this.buildStemGeometry(i?7:12,i?5:6);this.aRoot=new ct(new Float32Array(y*4),4),this.aBend=new ct(new Float32Array(y*4),4).setUsage(ot),this.aShape=new ct(new Float32Array(y*3),3).setUsage(ot),A.setAttribute("aRoot",this.aRoot),A.setAttribute("aBend",this.aBend),A.setAttribute("aShape",this.aShape);const E=Yt();E.vertexShader=zo,E.name="tulip-gate-stem",this.stems=new St(A,E,y),this.stems.name="tulip-gate-stems",this.stems.frustumCulled=!1,this.plants.forEach((b,T)=>{this.aRoot.setXYZW(T,b.root.x,b.root.y,b.root.z,b.L),this.stems.setColorAt(T,new N(o.pick(a.leaves)).multiplyScalar(o.float(.86,1.1)*1.05))});const k=[];for(const b of this.plants){const T=b.front?2:1;for(let F=0;F<T;F++)k.push({p:b,yaw:o.float(0,Math.PI*2),size:o.float(.55,.85),pitch:o.float(.35,.75),color:new N(o.pick(a.leaves)).multiplyScalar(o.float(.82,1.12))})}this.leafSpecs=k,this.leaves=new St(oi("basal",i?1:2),Yt(),k.length),this.leaves.name="tulip-gate-leaves",this.leaves.frustumCulled=!1,k.forEach((b,T)=>this.leaves.setColorAt(T,b.color)),this.layoutLeaves(1),this.pollenPerBud=i?14:22;const _=this.counts.buds*(this.pollenPerBud+3)+this.counts.open*6+16,O=new dt;O.setAttribute("position",new X(new Float32Array(_*3),3)),this.pStart=new X(new Float32Array(_*4).fill(-1e6),4).setUsage(ot),this.pVel=new X(new Float32Array(_*4).fill(1),4).setUsage(ot),this.pLook=new X(new Float32Array(_*3),3).setUsage(ot),O.setAttribute("aStart",this.pStart),O.setAttribute("aVel",this.pVel),O.setAttribute("aLook",this.pLook),this.pollenMat=new K({uniforms:{uNow:{value:0},uPx:{value:600}},vertexShader:Ro,fragmentShader:_o,transparent:!0,depthWrite:!1,blending:Gt,toneMapped:!1}),this.pollen=new Ce(O,this.pollenMat),this.pollen.name="tulip-gate-pollen",this.pollen.frustumCulled=!1,this.pollen.layers.set(1),this.pollen.onBeforeRender=(b,T,F)=>{b.getDrawingBufferSize(this._s),this.pollenMat.uniforms.uPx.value=F.projectionMatrix.elements[5]*this._s.y*.5},this.pollenCap=_,this.pollenCursor=0,this.pollenEmitted=0,this.lastPollenAt=-1e6,this.rng=new at(9902),this.group.add(this.stems,this.heads,this.leaves,this.pollen),t.layer.add(this.group),this.reset(),this.pose(0,0)}layoutLeaves(t){const e=this._q,s=this._q2,i=this._m;this.leafSpecs.forEach((o,a)=>{e.setFromAxisAngle(this._up,o.yaw).multiply(s.setFromAxisAngle(this._t.set(0,0,1),o.pitch));const r=Math.max(1e-4,o.size*t);i.compose(this._v.copy(o.p.root).setY(o.p.root.y+.06),e,this._s.set(r,r,r)),this.leaves.setMatrixAt(a,i)}),this.leaves.instanceMatrix.needsUpdate=!0,this._leafScale=t}enter(t){super.enter(t),this.leaving=!1,this.resetGroups(),this.awakeOnEntry=this.settlePassed(t.s)>0,this.fade=t.s>=this.corridor.s0-xs?1:0,this.lastS=t.s,this.titleAt=null,this.killPollen(),this.group.visible=!0}resetGroups(){this.minRiseLead=void 0,this.guardRises=0;for(const t of this.groups||[])Object.assign(t,{triggered:!1,triggerT:null,triggerP:null,triggerLead:null,leadUsed:null,speedAtTrigger:null,completeT:null,settledOnEntry:!1});for(const t of this.plants)t.riseAt=null,t.rate=1,t.tr=void 0,t.started=!1,t.bloomAt=null,t.bloom=t.bud?0:1,t.pollen=!t.bud,t.sprinkled=!1}settlePassed(t){let e=0;for(const s of this.groups)if(!(s.triggered||t<s.s1+.5)){Object.assign(s,{triggered:!0,triggerT:-100,settledOnEntry:!0,completeT:-100});for(const i of s.plants)i.riseAt=-100,i.started=!0,i.bloomAt=-100,i.bloom=1,i.pollen=!0,i.sprinkled=!0;e++}return e}triggerGroup(t,e,s,i){t.triggered=!0,t.triggerT=e,t.triggerP=+s.progress.toFixed(4),t.triggerLead=+(t.s0-s.s).toFixed(2),t.leadUsed=+i.toFixed(2),t.speedAtTrigger=+(s.speed||0).toFixed(2);for(const o of t.plants)o.riseAt===null&&(o.riseAt=e+o.delay)}exit(){this.leaving=!0}resume(){this.leaving=!1}reset(){super.reset(),this.leaving=!1,this.fade=0,this.titleAt=null,this.lastS=null,this.resetGroups(),this.killPollen(),this.group&&(this.group.visible=!1)}killPollen(){this.pStart&&(this.pStart.array.fill(-1e6),this.pStart.needsUpdate=!0,this.pollenCursor=0,this.pollenEmitted=0,this.lastPollenAt=-1e6)}update(t,e){super.update(t,e);const s=this.elapsed;if(this.leaving?this.fade=Math.max(0,this.fade-t/.9):this.fade=Math.min(1,this.fade+t/1.2),this.leaving&&this.fade<=0){this.group.visible=!1,this.finish();return}const[i]=this.gardenRange;this.titleAt===null&&e.progress>=i?this.titleAt=s:this.titleAt!==null&&e.progress<i&&(this.titleAt=null),this.lastS!==null&&Math.abs(e.s-this.lastS)>2.5&&this.settlePassed(e.s),this.lastS=e.s;const o=os.lead(e.speed);if(!this._held)for(const d of this.groups)d.triggered||d.i===0&&(this.titleAt===null||s-this.titleAt<xo)&&e.s<d.s0-Ss||d.s0-e.s<=o&&this.triggerGroup(d,s,e,o);let a=0,r=0,n=0,c=0,h=1/0;for(const d of this.plants){if(!this._held&&(d.riseAt===null||d.riseAt>s)&&e.s>=d.s-Ss){const w=this.groups[d.group];w.triggered||this.triggerGroup(w,s,e,o),d.riseAt=s,d.rate=1.6,this.guardRises++}d.riseAt!==null&&d.riseAt<=s&&d.started!==!0&&(d.started=!0,h=Math.min(h,d.s-e.s));const v=d.riseAt===null||d.riseAt>s?0:(s-d.riseAt)*d.rate;v>Ms?a++:v>0&&n++,d.bud&&d.bloom>.001&&d.bloom<.999&&c++,d.bud&&d.bloomAt===null&&v>.05&&(d.bloomAt=s+d.bloomLag/d.rate),d.bud&&d.bloomAt!==null&&(d.bloom=wo((s-d.bloomAt)*d.rate/Ao)),d.bloom>=.999&&r++,!d.pollen&&d.bloom>.35&&(this.emitPollen(d,s,this.pollenPerBud,!0),d.pollen=!0),!d.bud&&!d.sprinkled&&v>.6&&(this.emitPollen(d,s,5,!1),d.sprinkled=!0),d.tr=v}h<1/0&&(this.minRiseLead=Math.min(this.minRiseLead??1/0,h));for(const d of this.groups)d.triggered&&d.completeT===null&&d.plants.every(v=>v.tr>Ms&&v.bloom>=.999)&&(d.completeT=s);this.pose(s,e.time??0),this.pollenMat.uniforms.uNow.value=s;const u=this.groups.some(d=>d.triggered),f=this.groups.every(d=>d.completeT!==null),p=n>0||c>0||s-this.lastPollenAt<2.8;this.phase=u?f&&!p?"release":p?"climax":"build":"start";const m=d=>d.triggered?d.completeT!==null?"upright":"rising":"bent";Object.assign(this.debugState,{phase:this.phase,fade:+this.fade.toFixed(2),lead:+o.toFixed(2),corridorUnits:+(this.corridor.s1-this.corridor.s0).toFixed(2),corridorShareOfGarden:+((this.corridor.p1-this.corridor.p0)/(this.gardenRange[1]-this.gardenRange[0])).toFixed(3),rising:n,risen:a,bloomed:r,buds:this.counts.buds,open:this.counts.open,bent:this.plants.filter(d=>d.riseAt===null).length,groupStates:this.groups.map(m).join(" "),groupsTriggered:this.groups.filter(d=>d.triggered).length,groupsComplete:this.groups.filter(d=>d.completeT!==null).length,nextGroupAhead:(()=>{const d=this.groups.find(v=>!v.triggered);return d?+(d.s0-e.s).toFixed(2):null})(),pollenEmitted:this.pollenEmitted,awakeOnEntry:this.awakeOnEntry,guardRises:this.guardRises,minRiseLead:this.minRiseLead===void 0?null:+this.minRiseLead.toFixed(2),titleAt:this.titleAt})}activationReport(){return this.groups.map(t=>({group:t.i,name:t.name,stems:t.plants.length,buds:t.buds,left:t.left,right:t.right,s:[+t.s0.toFixed(2),+t.s1.toFixed(2)],progress:[+t.p0.toFixed(4),+t.p1.toFixed(4)],garden02Local:[+t.local0.toFixed(3),+t.local1.toFixed(3)],triggered:t.triggered,settledOnEntry:t.settledOnEntry,triggerProgress:t.triggerP,triggerDistance:t.triggerLead,leadUsed:t.leadUsed,speedAtTrigger:t.speedAtTrigger,riseDuration:t.triggerT!==null&&t.completeT!==null&&!t.settledOnEntry?+(t.completeT-t.triggerT).toFixed(2):null,state:t.triggered?t.completeT!==null?"upright":"rising":"bent"}))}pose(t,e){const s=this._arc,i=Math.max(1e-4,this.fade??0);for(let o=0;o<this.plants.length;o++){const a=this.plants[o],r=a.tr??(a.riseAt===null?0:100),n=ws(r,2.9,.55),c=ws(r-.3,2.5,.45),h=(1-n)*.05*Math.sin(e*.7*a.tempo+a.ph),u=.035*Math.sin(e*.9*a.tempo+a.ph*1.3)+.02*Math.sin(e*1.7*a.tempo+a.ph);a.A=me(a.A0,a.A1,n)+h+u*.5,a.B=me(a.B0,a.B1,c)+h*.6+u;const f=.06*Math.sin(e*.6*a.tempo+a.ph*.7),p=Math.cos(f),m=Math.sin(f),d=a.dir.x*p-a.dir.z*m,v=a.dir.x*m+a.dir.z*p;this.aBend.setXYZW(o,d,v,a.A,a.B),this.aShape.setXYZ(o,R.clamp(a.R*.075,.03,.042),i,a.seed),As(a.A,a.B,1,s);const w=a.L*i,y=this._v.set(a.root.x+d*s.x*w,a.root.y+s.y*w,a.root.z+v*s.x*w),M=this._t.set(d*Math.sin(s.phi),Math.cos(s.phi),v*Math.sin(s.phi)).normalize();this._q.setFromUnitVectors(this._up,M).multiply(this._q2.setFromAxisAngle(this._up,a.twist));const x=a.R/Lt.tulip.radius*i;y.addScaledVector(M,.15*a.R*i),this._m.compose(y,this._q,this._s.set(x,x,x)),this.heads.setMatrixAt(o,this._m),this.aBloom.setX(o,a.bloom),a.tip=a.tip||new g,a.tip.copy(y),a.axis=a.axis||new g,a.axis.copy(M)}this.aBend.needsUpdate=!0,this.aShape.needsUpdate=!0,this.aBloom.needsUpdate=!0,this.heads.instanceMatrix.needsUpdate=!0,Math.abs((this._leafScale??1)-i)>.001&&this.layoutLeaves(i)}emitPollen(t,e,s,i){const o=this.rng,a=this._v.copy(t.tip).addScaledVector(t.axis,t.R*.75),r=(u,f,p,m,d,v,w)=>{const y=this.pollenCursor;this.pollenCursor=(this.pollenCursor+1)%this.pollenCap,this.pStart.setXYZW(y,u.x,u.y,u.z,e+w),this.pVel.setXYZW(y,f.x,f.y,f.z,p),this.pLook.setXYZ(y,m,d,v),this.pollenEmitted++},n=new g,c=new g,h=new V().setFromUnitVectors(this._up,t.axis);for(let u=0;u<s;u++){const f=o.float(0,Math.PI*2),p=o.float(.15,1.05),m=o.float(.18,.55)*(i?1:.6);n.set(Math.cos(f)*Math.sin(p),Math.cos(p),Math.sin(f)*Math.sin(p)).applyQuaternion(h).multiplyScalar(m),n.x+=t.inward.x*o.float(.15,.45),n.z+=t.inward.z*o.float(.15,.45),n.y+=o.float(.02,.12),c.set(o.float(-1,1),o.float(-.3,.6),o.float(-1,1)).multiplyScalar(t.R*.12).add(a),r(c,n,o.float(2.4,4),o.float(.08,.15)*(i?1:.8),o.float(.2,1),0,o.float(0,.3))}if(i)for(let u=0;u<3;u++)r(c.copy(a),n.copy(t.axis).multiplyScalar(.05+u*.03),o.float(.9,1.4),t.R*o.float(1.1,1.5),.6,1,u*.08);this.pStart.needsUpdate=!0,this.pVel.needsUpdate=!0,this.pLook.needsUpdate=!0,this.lastPollenAt=e}dispose(){if(this.group){for(const t of[this.heads,this.stems,this.leaves,this.pollen])t.geometry.dispose(),t.material.dispose();this.group.parent?.remove(this.group)}}}function Pe(l,t=!1){const e=l[0].index!==null,s=new Set(Object.keys(l[0].attributes)),i=new Set(Object.keys(l[0].morphAttributes)),o={},a={},r=l[0].morphTargetsRelative,n=new dt;let c=0;for(let h=0;h<l.length;++h){const u=l[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.attributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(r!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;n.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let f=0;f<l.length;++f){const p=l[f].index;for(let m=0;m<p.count;++m)u.push(p.getX(m)+h);h+=l[f].attributes.position.count}n.setIndex(u)}for(const h in o){const u=ks(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;n.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;n.morphAttributes=n.morphAttributes||{},n.morphAttributes[h]=[];for(let f=0;f<u;++f){const p=[];for(let d=0;d<a[h].length;++d)p.push(a[h][d][f]);const m=ks(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;n.morphAttributes[h].push(m)}}return n}function ks(l){let t,e,s,i=-1,o=0;for(let c=0;c<l.length;++c){const h=l[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=h.normalized),s!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const a=new t(o),r=new lt(a,e,s);let n=0;for(let c=0;c<l.length;++c){const h=l[c];if(h.isInterleavedBufferAttribute){const u=n/e;for(let f=0,p=h.count;f<p;f++)for(let m=0;m<e;m++){const d=h.getComponent(f,m);r.setComponent(f+u,m,d)}}else a.set(h.array,n);n+=h.count*e}return i!==void 0&&(r.gpuType=i),r}const $e=[[0,.08],[.16,.2],[.4,.33],[.7,.43],[.94,.47],[1.05,.4],[1.03,.23],[.92,.06],[.74,-.08],[.5,-.17],[.27,-.17],[.08,-.09]],Xe=[[.02,.03],[.26,.05],[.5,-.01],[.68,-.14],[.76,-.32],[.69,-.5],[.53,-.63],[.33,-.67],[.15,-.59],[.05,-.41],[0,-.18]],ui=(l,t)=>t*.5+l/1.06*.5,di=l=>(l+.76)/1.36;function To(l){const t=new ei,e=l.map(s=>new Mt(s[0],s[1]));return t.moveTo(e[0].x,e[0].y),t.splineThru([...e.slice(1),e[0]]),t}function ge(l,t,e){const s=new ti(To(l),14),i=s.attributes.position,o=s.attributes.uv,a=[];for(let r=0;r<i.count;r++){const n=i.getX(r),c=i.getY(r);o.setXY(r,ui(n,t-1),di(c));const h=-.04*Math.sin(Math.min(1,n)*Math.PI)*(t===1?1:.7);i.setXYZ(r,e?-n:n,h+(t===2?-.004:0),c),a.push(t)}return e&&s.index.array.reverse(),s.setAttribute("aPart",new X(a,1)),s.computeVertexNormals(),s}function Co(){const l=[],t=(o,a=0)=>{const r=o.attributes.position.count;o.setAttribute("aPart",new X(new Array(r).fill(a),1)),o.index||o.setIndex([...Array(r).keys()]);for(const c of Object.keys(o.attributes))["position","normal","uv","aPart"].includes(c)||o.deleteAttribute(c);const n=o.attributes.uv;for(let c=0;c<n.count;c++)n.setXY(c,.995,.995);l.push(o)},e=new ft(1,8,6);e.scale(.045,.045,.3),e.translate(0,0,-.25),t(e);const s=new ft(1,8,6);s.scale(.065,.06,.13),s.translate(0,0,.04),t(s);const i=new ft(.05,8,6);i.translate(0,.01,.2),t(i);for(const o of[-1,1]){const a=new ki([new g(.02*o,.03,.22),new g(.09*o,.12,.42),new g(.16*o,.17,.58)]);t(new zi(a,6,.007,3,!1));const r=new ft(.018,5,4);r.scale(1,1,1.6),r.translate(.16*o,.17,.59),t(r)}return Pe(l)}function Eo(){return Pe([ge($e,1,!1),ge($e,1,!0),ge(Xe,2,!1),ge(Xe,2,!0),Co()])}const Ze=1024,ie=512,xt=(l,t,e)=>[ui(l,e)*Ze,(1-di(t))*ie];function zs(l,t,e){const s=t.map(i=>xt(i[0],i[1],e));l.beginPath(),l.moveTo((s[0][0]+s[s.length-1][0])/2,(s[0][1]+s[s.length-1][1])/2);for(let i=0;i<s.length;i++){const o=s[i],a=s[(i+1)%s.length];l.quadraticCurveTo(o[0],o[1],(o[0]+a[0])/2,(o[1]+a[1])/2)}l.closePath()}function Rs(l,t){const e=l.reduce((i,o)=>i+o[0],0)/l.length,s=l.reduce((i,o)=>i+o[1],0)/l.length;return l.map(([i,o])=>{const a=i-e,r=o-s,n=Math.hypot(a,r)||1;return[i-a/n*t,o-r/n*t]})}function Fo(l,t,e,s,i,o){const[a,r]=xt(.02,t===0?0:-.04,t);l.strokeStyle=s,l.lineWidth=i,l.lineCap="round";for(let n=0;n<e;n++){const c=n/(e-1),h=o[0]+(o[1]-o[0])*c,u=1.15,[f,p]=xt(Math.cos(h)*u,Math.sin(h)*u*(t===0?.62:.8)+(t===0?.02:-.05),t);l.beginPath(),l.moveTo(a,r),l.quadraticCurveTo((a+f)/2+12,(r+p)/2-10,f,p),l.stroke()}}function Po(l,t,e,s,i,o,a=1){l.fillStyle=o;const r=t.map(h=>xt(h[0],h[1],e)),n=r.reduce((h,u)=>h+u[0],0)/r.length,c=r.reduce((h,u)=>h+u[1],0)/r.length;for(let h=1;h<r.length-1;h+=a)for(let u=0;u<2;u++){const f=r[h],p=r[h+1],m=f[0]+(p[0]-f[0])*(u*.5+.25),d=f[1]+(p[1]-f[1])*(u*.5+.25);l.beginPath(),l.arc(m+(n-m)*s,d+(c-d)*s,i,0,Math.PI*2),l.fill()}}const Io={monarch:{base:["#ffa53a","#f07818","#d4560e"],vein:"#1b1310",border:"#16100e",borderW:26,dot:"#fff6e8",apex:!0},azure:{base:["#9fdcff","#4e9fe8","#2b5cc4"],vein:"#1a2850",border:"#141a2c",borderW:22,dot:"#eaf4ff",apex:!0},lemon:{base:["#fff6b8","#f7e27a","#eac94d"],vein:"#9a8a3a",border:"#d6b440",borderW:6,dot:null,spot:"#f08a2a"},rosetip:{base:["#fffaf6","#fbe6ee","#f2c4d6"],vein:"#7a4a5a",border:"#5a2a3c",borderW:8,dot:null,tip:"#ee6f9c"}};function fi(l,t=Io[l]){const e=t,s=document.createElement("canvas");s.width=Ze,s.height=ie;const i=s.getContext("2d");i.fillStyle="#120c0c",i.fillRect(Ze-16,0,16,16),[[$e,0],[Xe,1]].forEach(([a,r])=>{i.fillStyle=e.border,i.fillRect(r*512,0,512,ie);const n=Rs(a,e.borderW/260);i.save(),zs(i,n,r),i.clip();const[c,h]=xt(0,0,r),u=i.createRadialGradient(c,h,10,c,h,470);if(u.addColorStop(0,e.base[2]),u.addColorStop(.35,e.base[1]),u.addColorStop(1,e.base[0]),i.fillStyle=u,i.fillRect(r*512,0,512,ie),e.tip&&r===0){const[f,p]=xt(.95,.42,0),m=i.createRadialGradient(f,p,5,f,p,190);m.addColorStop(0,e.tip),m.addColorStop(1,"rgba(238,111,156,0)"),i.fillStyle=m,i.fillRect(0,0,512,ie)}if(e.spot){const[f,p]=xt(r===0?.5:.42,r===0?.2:-.36,r);i.fillStyle=e.spot,i.beginPath(),i.arc(f,p,11,0,7),i.fill()}if(Fo(i,r,r===0?7:6,e.vein,l==="monarch"?7:3,r===0?[-.15,.95]:[-1.45,-.05]),e.apex&&r===0){i.fillStyle=e.border;const[f,p]=xt(.9,.42,0);i.beginPath(),i.ellipse(f,p,150,95,-.4,0,Math.PI*2),i.fill(),i.fillStyle=l==="monarch"?"#ffb347":"#cfe8ff";for(let m=0;m<4;m++){const[d,v]=xt(.68+m*.07,.42-m*.03,0);i.beginPath(),i.arc(d,v,9,0,7),i.fill()}}i.restore(),zs(i,n,r),i.strokeStyle=e.border,i.lineWidth=3,i.stroke(),e.dot&&Po(i,Rs(a,e.borderW/520),r,0,5.5,e.dot)});const o=new Ai(s);return o.colorSpace=Qs,o.anisotropy=4,o}function as(l){return new K({uniforms:{...U,uMap:{value:l},uGlow:{value:0}},side:Dt,vertexShader:`
      attribute float aPart;
      attribute vec2 aWing;
      varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorld; varying float vPart;
      vec3 rotZ(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(p.x * c - p.y * s, p.x * s + p.y * c, p.z); }
      void main() {
        vec3 p = position; vec3 n = normal;
        if (aPart > 0.5) {
          float side = sign(p.x);
          float a = (aPart < 1.5 ? aWing.x : aWing.y) * side;
          p = rotZ(p, a); n = rotZ(n, a);
        }
        mat4 m = modelMatrix;
        #ifdef USE_INSTANCING
          m = m * instanceMatrix;
        #endif
        vec4 w = m * vec4(p, 1.0);
        vUv = uv; vPart = aPart; vWorld = w.xyz; vNormal = normalize(mat3(m) * n);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      #include <common>
      ${mt}
${$t}
      uniform sampler2D uMap; uniform float uGlow;
      varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorld; varying float vPart;
      void main() {
        vec4 tex = texture2D(uMap, vUv);
        vec3 albedo = vPart > 0.5 ? tex.rgb : vec3(0.06, 0.045, 0.04);
        vec3 N = normalize(vNormal);
        if (!gl_FrontFacing) { N = -N; albedo = mix(albedo, vec3(dot(albedo, vec3(0.33))), 0.25) * 0.92; }
        vec3 V = normalize(cameraPosition - vWorld);
        vec3 col = gouacheLight(albedo, N, V, vPart > 0.5 ? 0.85 : 0.1, 1.0);
        col += albedo * uGlow * 0.6;
        col = applyHaze(col, vWorld);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        GARDEN_GRADE_OUTPUT
      }`})}const _e=new J,Ht=new V;new Ri;const No=new g,pi=new g,_s=new J,Je=new g(0,1,0);let Ts=null;const Cs={};function Te(l){return Ts||=Eo(),Cs[l]||=fi(l),{geometry:Ts,texture:Cs[l]}}const Lo=new V,Oo=new g,Do=new g(0,0,1);function mi(l,t,e){return _s.lookAt(l,Oo,Je),e.setFromRotationMatrix(_s),e.multiply(Lo.setFromAxisAngle(Do,t)),e}const Go=[{range:[0,.17],count:5,variants:{rosetip:3,lemon:2},style:"drift"},{range:[.19,.35],count:8,variants:{monarch:3,azure:2,lemon:1},style:"dart"},{range:[.37,.5],count:13,variants:{rosetip:2,lemon:2,azure:2,monarch:2},style:"cross"},{range:[.75,.89],count:7,variants:{lemon:3,monarch:3},style:"drift"}];class Wo{constructor(t,{count:e=33,seed:s=5}={}){const i=new at(s),o=e/33;this.group=new rt,this.group.name="ambient-butterflies",this.flyers=[],this.meshes={};const a={},r=[];for(const n of Go){const c=Math.max(1,Math.round(n.count*o));for(let h=0;h<c;h++){const u=n.range[0]+(h+i.float(.1,.9))/c*(n.range[1]-n.range[0]);r.push({pop:n,s:t.progressToS(u)})}}for(const{pop:n,s:c}of r){const h=i.weighted(Object.entries(n.variants).map(([d,v])=>({v:d,weight:v}))).v,u=i.sign(),f=t.halfWidthAt(c),p=n.style,m={variant:h,style:p,anchorS:c,anchorL:p==="cross"?u*i.float(0,f*.4):u*i.float(f*.4,f+2.6),anchorY:p==="dart"?i.float(.6,2.2):p==="cross"?i.float(.5,1.9):i.float(1,3),ampL:p==="cross"?f+i.float(1.5,3.5):i.float(.6,1.8),ampS:p==="dart"?i.float(1.2,3):i.float(.8,2.4),ampY:p==="dart"?i.float(.4,.9):i.float(.25,.7),fL:p==="cross"?i.float(.07,.14):p==="dart"?i.float(.25,.45):i.float(.13,.3),fS:p==="dart"?i.float(.16,.3):i.float(.08,.2),fY:i.float(.2,.45),pL:i.float(0,6.3),pS:i.float(0,6.3),pY:i.float(0,6.3),beat:p==="dart"?i.float(9,12.5):i.float(6.5,11),phase:i.float(0,6.3),clock:i.float(0,100),glideSeed:i.float(0,50),hoverSeed:i.float(0,50),scale:i.float(.19,.3)*(h==="azure"?1.1:1)*(p==="cross"?1.1:1),pos:new g,prev:new g,quat:new V,roll:0,fore:.3,hind:.3};(a[h]||=[]).push(m),this.flyers.push(m)}for(const[n,c]of Object.entries(a)){const{geometry:h,texture:u}=Te(n),f=new St(h,as(u),c.length),p=new ct(new Float32Array(c.length*2),2);p.setUsage(ot),f.geometry=h.clone(),f.geometry.setAttribute("aWing",p),f.instanceMatrix.setUsage(ot),f.frustumCulled=!1,c.forEach((m,d)=>{m.mesh=f,m.index=d,m.wingAttr=p}),this.meshes[n]=f,this.group.add(f)}this.route=t}update(t,e){const s=this.route;for(const i of this.flyers){const o=R.smoothstep(Math.sin(e*.21+i.hoverSeed)+Math.sin(e*.37+i.hoverSeed*1.3)*.5,.7,1.4);i.clock+=t*(1-.82*o);const a=i.clock,r=i.anchorS+Math.sin(a*i.fS+i.pS)*i.ampS+Math.sin(a*i.fS*2.3+i.pL)*i.ampS*.3,n=i.anchorL+Math.sin(a*i.fL+i.pL)*i.ampL+Math.sin(a*i.fL*2.7)*.25,c=i.anchorY+Math.sin(a*i.fY+i.pY)*i.ampY+Math.sin(a*1.9+i.pY)*.06;i.prev.copy(i.pos),s.toWorld(r,n,c,i.pos);const h=No.subVectors(i.pos,i.prev);if(h.length()/Math.max(t,1e-4),h.lengthSq()>1e-8){const m=h.clone().normalize(),d=R.clamp(-m.x*.4,-.5,.5);i.roll=R.damp(i.roll,d,3,t),mi(m,i.roll,Ht),i.quat.slerp(Ht,1-Math.exp(-t*5))}const u=R.smoothstep(Math.sin(e*.53+i.glideSeed)+Math.sin(e*.91+i.glideSeed)*.6,.9,1.4);i.phase+=t*i.beat*Math.PI*2*(1-u*.85)*(1+o*.25);const f=R.lerp(1.05,.18,u)*(1-o*.25),p=R.lerp(.25,.55,u);i.fore=p+Math.sin(i.phase)*f,i.hind=p+Math.sin(i.phase-.35)*f*.9,i.wingAttr.setXY(i.index,i.fore,i.hind),_e.compose(i.pos,i.quat,pi.setScalar(i.scale)),i.mesh.setMatrixAt(i.index,_e)}for(const i of Object.values(this.meshes))i.instanceMatrix.needsUpdate=!0,i.geometry.attributes.aWing.needsUpdate=!0}}class Vo{constructor({scale:t=.24}={}){const{geometry:e,texture:s}=Te("monarch");this.geometry=e.clone(),this.wing=new ct(new Float32Array(2),2),this.geometry.setAttribute("aWing",this.wing),this.material=as(s),this.mesh=new St(this.geometry,this.material,1),this.mesh.frustumCulled=!1,this.mesh.visible=!1,this.mesh.name="guide-butterfly",this.scale=t,this.phase="hidden",this.t=0,this.pos=new g,this.quat=new V,this.start=new g,this.ctrl=new g,this.land=new g,this.landNormal=new g(0,1,0),this.aside=new g,this.flap=0,this.approachSeconds=3.6}get perched(){return this.phase==="perched"}get active(){return this.phase!=="hidden"}approach(t,e,s,i,o=3.6){this.start.copy(t),this.land.copy(e),this.landNormal.copy(s).normalize(),this.aside.copy(i),this.ctrl.copy(t).lerp(e,.5).add(new g(0,1.1,0)),this.pos.copy(t),this.approachSeconds=o,this.phase="approach",this.t=0,this.mesh.visible=!0}stepAside(){this.phase!=="hidden"&&this.phase!=="departing"&&(this.phase="aside",this.t=0)}returnToPerch(){this.phase==="aside"&&(this.phase="landing",this.t=0)}depart(){this.phase!=="hidden"&&this.phase!=="departing"&&(this.phase="departing",this.t=0,this.departFrom=this.pos.clone())}reset(){this.phase="hidden",this.mesh.visible=!1}update(t,e){if(this.phase==="hidden")return;this.t+=t;const s=this.pos.clone();let i=9,o=1,a=.3,r=null;if(this.phase==="approach"){const n=Math.min(1,this.t/this.approachSeconds),c=n*n*(3-2*n),h=this.start.clone().lerp(this.ctrl,c),u=this.ctrl.clone().lerp(this.land,c);this.pos.copy(h.lerp(u,c));const f=Math.sin(n*Math.PI);this.pos.x+=Math.sin(e*2.1)*.12*f,this.pos.y+=Math.sin(e*3.3)*.08*f+.35*(1-c)*f,n>=1&&(this.phase="circling",this.t=0)}else if(this.phase==="circling"){const n=Math.min(1,this.t/1.6),c=n*Math.PI*2.2,h=.5*(1-n*.85),u=new g().crossVectors(this.landNormal,Je).normalize();u.lengthSq()<.01&&u.set(1,0,0);const f=new g().crossVectors(u,this.landNormal).normalize();this.pos.copy(this.land).addScaledVector(this.landNormal,.3+.2*(1-n)).addScaledVector(u,Math.cos(c)*h).addScaledVector(f,Math.sin(c)*h),n>=1&&(this.phase="landing",this.t=0)}else if(this.phase==="landing"){const n=Math.min(1,this.t/.9),c=this.pos.clone(),h=this.land.clone().addScaledVector(this.landNormal,.3*(1-n));this.pos.lerpVectors(c,h,1-Math.exp(-t*6)),i=R.lerp(9,4,n),o=R.lerp(1,.5,n),n>=1&&(this.phase="perched",this.t=0,this.pos.copy(this.land))}else if(this.phase==="perched"){this.pos.copy(this.land);const n=.5+.5*Math.sin(e*.6);i=.9,o=.38*n,a=.32,r="perch"}else if(this.phase==="aside")this.pos.lerp(this.aside,1-Math.exp(-t*2.2)),this.pos.y+=Math.sin(e*2.2)*.003,i=8,o=.8;else if(this.phase==="departing"){const n=this.t/3.2;if(this.pos.copy(this.departFrom).add(new g(Math.sin(n*4)*.5+n*2.2,n*n*4+n*1.2,-n*3)),n>=1){this.reset();return}}if(r==="perch"){const n=new g().crossVectors(this.landNormal,Je);n.lengthSq()<.01&&n.set(0,0,1),n.normalize();const c=new J().makeBasis(new g().crossVectors(this.landNormal,n).normalize(),this.landNormal,n);Ht.setFromRotationMatrix(c),this.quat.slerp(Ht,1-Math.exp(-t*4))}else{const n=this.pos.clone().sub(s);n.lengthSq()>1e-7&&(mi(n.normalize(),0,Ht),this.quat.slerp(Ht,1-Math.exp(-t*6)))}this.flap+=t*i*Math.PI*2,this.wing.setXY(0,a+Math.sin(this.flap)*o,a+Math.sin(this.flap-.35)*o*.9),this.wing.needsUpdate=!0,_e.compose(this.pos,this.quat,pi.setScalar(this.scale)),this.mesh.setMatrixAt(0,_e),this.mesh.instanceMatrix.needsUpdate=!0}}const Bt=(l,t,e)=>{const s=Math.min(1,Math.max(0,(e-l)/(t-l)));return s*s*(3-2*s)},Bo=l=>l*l*(3-2*l),Es={monarch:{count:12,spec:null,scale:[.24,.31]},ivory:{count:12,scale:[.22,.28],spec:{base:["#fffdf6","#fbf2dc","#eedcb4"],vein:"#b9a47a",border:"#d8c59a",borderW:6,dot:null,spot:"#e9c46e"}},lavender:{count:11,scale:[.22,.29],spec:{base:["#fdeefa","#ebc6ec","#c79bdb"],vein:"#7d5a8f",border:"#674878",borderW:10,dot:null,tip:"#f39bc8"}},golden:{count:11,scale:[.23,.3],spec:{base:["#ffeb8c","#ffcd3c","#f0a61a"],vein:"#8a5a12",border:"#5c3b0c",borderW:14,dot:"#fff3c6"}},bluet:{count:8,scale:[.24,.3],spec:{base:["#d6d0ff","#9483f2","#5a44c6"],vein:"#2a1f5c",border:"#1d1742",borderW:18,dot:"#ece8ff",apex:!0}}},Fs=1.8,Ct=3.6,Qt=7.2,Ps=9.4,Uo=1.5;class jo extends ne{constructor(){super({id:"butterfly-waltz",garden:"meadow",implemented:!0,trigger:{progress:[.385,.5],exitMargin:.02},replay:"on-reenter",reverse:"fade-out",description:"Garden 03: 54 butterflies of five species emerge from the banks, form two rings, waltz in a rising double helix and release into the sky."}),this.flyers=[],this.meshes=[],this.group=null,this.debugState={},this._p=new g,this._q=new V,this._m=new J,this._sv=new g}prepare(t){const e=new at(303),s=tt.quality==="low"?.75:1;this.group=new rt,this.group.name="attraction-butterfly-waltz",this.group.visible=!1;const{geometry:i}=Te("monarch");let o=0,a=0;for(const[c,h]of Object.entries(Es)){const u=Math.max(2,Math.round(h.count*s)),f=h.spec?fi(c,h.spec):Te("monarch").texture,p=i.clone(),m=new ct(new Float32Array(u*2),2);m.setUsage(ot),p.setAttribute("aWing",m);const d=new St(p,as(f),u);d.instanceMatrix.setUsage(ot),d.frustumCulled=!1,d.name=`waltz-${c}`,d.userData.ownTexture=!!h.spec,this.meshes.push(d),this.group.add(d);for(let v=0;v<u;v++){const w=e.sign();this.flyers.push({species:c,mesh:d,index:v,wing:m,scale:e.float(h.scale[0],h.scale[1]),s0:e.float(-4.5,3),side:w,l0:e.float(.4,2.4),y0:e.float(.2,.75),delay:e.float(0,1.25),arc:e.float(.35,.9),ring:0,slot:0,tier:e.float(-1,1),beat:e.float(8,11),phase:e.float(0,6.3),glide:e.float(0,40),relDelay:e.float(0,.45),relTurn:e.float(.6,1.4)*(e.chance(.5)?1:-1),pos:new g,prev:new g,quat:new V,roll:0,has:!1})}}const r=this.flyers.map((c,h)=>h).sort((c,h)=>c*7919%97-h*7919%97),n=Math.round(r.length*.56);r.forEach((c,h)=>{const u=this.flyers[c];h<n?(u.ring=0,u.slot=o++):(u.ring=1,u.slot=a++)});for(const c of this.flyers){const h=c.ring===0?o:a;c.theta=c.slot/h*Math.PI*2,c.partner=c.ring===0?c.slot%2===0?1:-1:0}this.counts={total:this.flyers.length,ringA:o,ringB:a,species:Object.fromEntries(Object.keys(Es).map(c=>[c,this.flyers.filter(h=>h.species===c).length]))},t.layer.add(this.group)}enter(t){super.enter(t),this.anchorS=t.s+6.8,this.phiA=0,this.phiB=0,this.releaseAt=Qt,this.releaseRate=1,this.leaving=!1;for(const e of this.flyers)e.has=!1;this.group.visible=!0}exit(){this.leaving||(this.leaving=!0,this.elapsed<this.releaseAt&&(this.releaseAt=this.elapsed,this.releaseRate=1.7))}update(t,e){super.update(t,e);const s=this.elapsed,i=e.route,o=Math.max(this.anchorS,e.s+6);this.anchorS+=(o-this.anchorS)*(1-Math.exp(-t*1.3));const a=Bt(Fs,Ct,s)*(1+.35*Bt(Ct,Ct+1.5,s));this.phiA+=t*.85*a,this.phiB-=t*1.2*a;const r=Math.max(0,(s-this.releaseAt)*this.releaseRate);if(r>Ps-Qt+.5){this.group.visible=!1,this.finish();return}this.phase=s<Fs?"start":s<Ct?"build":s<this.releaseAt?"climax":"release";const c=s/Uo%1,h=Math.exp(-c*c*40)+Math.exp(-((1-c)**2)*40),u=Bt(Ct-.4,Ct+.8,s),f=Bt(Ct,Qt,s)*.85,p=1.25;let m=0;for(const d of this.flyers){const v=d.ring===0?1.85:1.05,w=d.theta+(d.ring===0?this.phiA:this.phiB),y=1+.13*h*u;let M=Math.cos(w)*v*y,x=Math.sin(w)*v*y*1.15,A=p+(d.ring===0?.42:-.32)*Math.sin(w*1+s*.9)*u+f+d.tier*.12;if(d.partner){const C=s*2.4*d.partner+d.theta*3;M+=Math.cos(C)*.2*u,x+=Math.sin(C)*.2*u,A+=Math.sin(C*.5)*.06*u}let E=this.anchorS+M,k=x,_=A;const O=Math.min(1,Math.max(0,(s-d.delay)/(Ct-.5-d.delay)));if(O<1){const C=Bo(O),D=i.halfWidthAt(this.anchorS+d.s0),S=this.anchorS+d.s0,P=d.side*(D+d.l0),I=d.y0,W=Math.sin(O*Math.PI)*.9*d.side;E=S+(E-S)*C+W*.4,k=P+(k-P)*C-W*.3,_=I+(_-I)*C+Math.sin(O*Math.PI)*d.arc}let b=d.scale;if(r>0){const C=Math.max(0,r-d.relDelay)/(Ps-Qt),D=1+2.6*Math.pow(C,1.4),S=C*C*2.2*d.relTurn,P=E-this.anchorS,I=Math.cos(S),W=Math.sin(S);E=this.anchorS+(P*I-k*W)*D,k=(P*W+k*I)*D,_+=7.5*C*C+.6*C,b*=1-Bt(.78,1.05,C)}_+=Math.sin(s*3.1+d.phase)*.05,k+=Math.sin(s*2.3+d.glide)*.04,d.prev.copy(d.pos),i.toWorld(E,k,_,d.pos),d.has||(d.prev.copy(d.pos),d.has=!0);const T=this._sv.subVectors(d.pos,d.prev);if(T.lengthSq()>1e-9){const C=T.normalize(),D=R.clamp(-C.x*.5,-.6,.6);d.roll+=(D-d.roll)*(1-Math.exp(-t*3)),Xo(C,d.roll,this._q),d.quat.slerp(this._q,t>0?1-Math.exp(-t*6):1)}const F=Bt(.9,1.4,Math.sin(s*.6+d.glide)+Math.sin(s*1.1+d.glide)*.6)*(1-.6*u);d.phase+=t*d.beat*Math.PI*2*(1-F*.8);const L=R.lerp(1,.2,F)*(1+.25*h*u),G=R.lerp(.25,.55,F);d.wing.setXY(d.index,G+Math.sin(d.phase)*L,G+Math.sin(d.phase-.35)*L*.9),this._m.compose(d.pos,d.quat,this._p.setScalar(Math.max(b,1e-4))),d.mesh.setMatrixAt(d.index,this._m),b>.01&&m++}for(const d of this.meshes)d.instanceMatrix.needsUpdate=!0,d.geometry.attributes.aWing.needsUpdate=!0;Object.assign(this.debugState,{phase:this.phase,elapsed:+s.toFixed(2),visible:m,aheadOfBoat:+(this.anchorS-e.s).toFixed(2),release:this.releaseAt<Qt?"early":"scheduled",counts:this.counts})}reset(){super.reset(),this.group&&(this.group.visible=!1),this.leaving=!1}dispose(){for(const t of this.meshes)t.geometry.dispose(),t.userData.ownTexture&&t.material.uniforms.uMap.value.dispose(),t.material.dispose()}}const Is=new J,qo=new g,Ho=new V,Yo=new g(0,0,1),$o=new g(0,1,0);function Xo(l,t,e){return Is.lookAt(l,qo,$o),e.setFromRotationMatrix(Is),e.multiply(Ho.setFromAxisAngle(Yo,t))}const Zo=new N("#5f6676"),Jo=new N("#8f95a2"),Ko=new N("#b4b8c1"),rs=l=>Math.min(1,Math.max(0,l)),qt=(l,t,e)=>{const s=rs((e-l)/(t-l));return s*s*(3-2*s)},Qo=q.find(l=>l.id==="rain"),pt=Qo.range.slice(),ta=.3,ea=l=>(l-pt[0])/(pt[1]-pt[0]),sa=l=>pt[0]+l*(pt[1]-pt[0]),Ot=[sa(ta),pt[1]];pt[0],Ot[0];const gi=pt[0]-Fe,it=(()=>{const l=le(gi),t=h=>q.reduce((u,f,p)=>l[p]>0?u.add(new N(f.atmosphere[h]).multiplyScalar(l[p])):u,new N(0,0,0)),e=h=>q.reduce((u,f,p)=>u+(f.atmosphere[h]??0)*l[p],0),s=h=>.2126*h.r+.7152*h.g+.0722*h.b,i=rs(e("clouds")),o=1-.82*R.smoothstep(i,.58,.95),a=t("zenith"),r=t("mid"),n=t("horizon"),c=t("sunGlow");return{zenith:a,mid:r,horizon:n,sunGlow:c,clouds:i,sunVis:o,cloudDark:e("cloudDark"),haze:e("haze"),hazeStart:e("hazeStart"),scatter:e("scatter"),wind:e("wind"),sunLum:s(t("sunTint"))*e("sun")*(.35+.65*o),fillLum:s(new N(.96,.84,.86).lerp(new N(.62,.68,.82),1-o))*e("fill"),skyFillLum:s(a.clone().lerp(r,.5))*e("sky")*1.1,rimLum:s(c)*(.55+.45*o)}})(),ia=l=>.2126*l.r+.7152*l.g+.0722*l.b,oa=pt[1]+Fe,Ns=[pt[1],.75],aa=[{stage:1,name:"first rain",from:0,to:.2},{stage:2,name:"rain build-up",from:.2,to:.5},{stage:3,name:"full downpour",from:.5,to:.8},{stage:4,name:"gentle clearing (Garden 04 exit toward Garden 05)",from:.8,to:1}],ra=l=>(l-Ot[0])/(Ot[1]-Ot[0]),Ls=l=>Ot[0]+l*(Ot[1]-Ot[0]),na=l=>l<0||l>1?0:l<.2?1:l<.5?2:l<.8?3:4,ve=[0,.15,.5,.9,1],ke=[0,.2,.5,.8,1],vi=l=>{for(let t=1;t<ve.length;t++)if(l<=ve[t]){const e=ve[t-1],s=ve[t];return ke[t-1]+(l-e)/(s-e)*(ke[t]-ke[t-1])}return 1};function la(l,t){if(l<=t[0][0])return t[0][1];for(let e=1;e<t.length;e++){const[s,i]=t[e];if(l<=s){const[o,a]=t[e-1];return a+(i-a)*qt(o,s,l)}}return t[t.length-1][1]}const ca={streaks:[[0,0],[.04,.16],[.15,.24],[.22,.38],[.5,.64],[.56,1],[.9,1],[.95,.45],[.985,.05],[1,0]],drizzle:[[0,0],[.04,.3],[.15,.5],[.5,.85],[.9,1],[.98,.04],[1,0]],layer:[[0,0],[.03,.1],[.15,.14],[.24,.3],[.5,.5],[.56,1],[.9,1],[.95,.3],[.98,0],[1,0]],sky:[[0,0],[.06,1],[1,1]],masses:[[0,0],[.06,.45],[.15,.62],[.5,.9],[.56,1],[.9,1],[1,0]],coverage:[[0,.78],[.15,.84],[.5,.92],[.56,.95],[.9,.95],[1,.9]],darkness:[[0,.5],[.15,.62],[.5,.82],[.56,.95],[.9,.95],[1,.55]],contrast:[[0,.15],[.15,.35],[.5,.7],[.56,1],[.9,1],[1,0]],cloudLight:[[0,1],[.15,1.04],[.5,1.12],[.56,1.2],[.9,1.2],[1,1]],skyTone:[[0,.35],[.15,.5],[.5,.7],[.56,.85],[.9,.85],[1,0]],horizon:[[0,.6],[.5,.7],[.56,.85],[.9,.85],[1,.6]],sunVis:[[0,.6],[.15,.5],[.5,.35],[.56,.25],[.9,.25],[1,.35]],sunLight:[[0,.82],[.15,.74],[.5,.6],[.56,.52],[.9,.52],[1,1]],fill:[[0,.96],[.15,.93],[.5,.89],[.56,.86],[.9,.86],[1,1]],rim:[[0,.85],[.5,.7],[.56,.6],[.9,.6],[1,1]],haze:[[0,0],[.15,.001],[.5,.004],[.56,.0075],[.9,.0075],[1,0]],windW:[[0,0],[.05,1],[.9,1],[1,0]],wind:[[0,1.6],[.15,1.9],[.5,2.45],[.56,3.1],[.9,3.1],[1,1.5]],gust:[[0,0],[.05,.05],[.15,.22],[.5,.55],[.56,1],[.9,1],[1,0]],rings:[[0,0],[.04,.16],[.15,.24],[.22,.38],[.5,.66],[.56,1],[.9,1],[.95,.42],[.985,.04],[1,0]],impact:[[0,0],[.04,.45],[.15,.5],[.5,.7],[.56,1],[.9,1],[.96,.3],[.99,0],[1,0]],chop:[[0,1],[.15,1.08],[.5,1.38],[.56,1.8],[.9,1.8],[1,1]],reflect:[[0,1],[.15,1.1],[.5,1.6],[.56,2.1],[.9,2.1],[1,1]],wet:[[0,.1],[.15,.4],[.5,.75],[.56,.9],[.9,.95],[1,.6]]},Os=Object.fromEntries(Object.entries(ca).map(([l,t])=>[l,t.map(([e,s])=>[vi(e),s])])),ha=vi(.56);function ua(l){const t=rs(l),e={};for(const s in Os)e[s]=la(t,Os[s]);return e}const Ds=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;Object.fromEntries(aa.map(l=>[`stage${l.stage}`,[Ls(l.from),Ls(l.to)]]));class da extends ne{constructor(){super({id:"spring-storm",garden:"rain",implemented:!0,trigger:{progress:[gi,oa],exitMargin:.02},replay:"on-reenter",reverse:"fade-out",description:"Garden 04: the first 30 % kept dry for the hydrangeas, then a four-stage spring rain on one route-progress envelope over the last 70 % (first rain 20 %, build-up 30 %, full downpour 30 %, gentle clearing 20 % ending at the Garden 04 exit) driving rain, storm cloud masses, travelling gusts through the flowers and water impacts together."}),this.leaving=!1,this.hand=1,this.rain=null,this.drift=0,this.ringRate=0,this.lastRings=null,this.lastP=null,this.debugState={stage:0,sp:0}}prepare(t){this.rain=new fa({count:tt.quality==="low"?1800:4200}),t.layer.add(this.rain.mesh)}enter(t){super.enter(t),this.leaving=!1,this.hand=1,this.lastRings=null,this.lastP=null}exit(){this.leaving=!0,this.phase="release"}resume(){this.leaving=!1}update(t,e){if(super.update(t,e),this.leaving?this.hand=Math.max(0,this.hand-t/1.2):this.hand=Math.min(1,this.hand+t/.6),this.leaving&&this.hand<=0){this.rain.setAmount(0),this.finish();return}const s=e.progress,i=ra(s),o=ea(s),a=ua(i),r=this.hand,n=na(i),c=1-qt(0,.08,i),h=1-qt(0,ke[1],i),u=e.weather||{};this.phase=n===3?"climax":n===4||this.leaving||i>1?"release":n>0?"build":"start";const f=this.lastP===null||Math.abs(s-this.lastP)>.01||!(t>0);this.lastP=s;const p=e.env,m=this.id,d={priority:10},v=i>1?1-qt(Ns[0],Ns[1],s):1,w=a.sky*r*v;p.set(m,"cloudCoverage",a.coverage,{...d,weight:w}),p.set(m,"cloudDarkness",a.darkness,{...d,weight:w}),p.set(m,"cloudContrast",a.contrast*w,d),p.set(m,"cloudBrightness",1+(a.cloudLight-1)*w,d);const y=a.masses*w;this.drift+=(f?0:t)*(.012+.03*a.wind)*(Ds?.6:1),p.set(m,"stormCloudMasses",y,d),y>0&&p.set(m,"stormCloudDrift",this.drift,d),p.set(m,"skyZenith",Zo,{...d,weight:w*a.skyTone}),p.set(m,"skyMid",Jo,{...d,weight:w*a.skyTone*.92}),p.set(m,"skyHorizon",Ko,{...d,weight:w*a.skyTone*a.horizon}),p.set(m,"sunlightVisibility",a.sunVis,{...d,mode:"multiply",weight:w}),p.set(m,"sunlightIntensity",a.sunLight,{...d,mode:"multiply",weight:w}),p.set(m,"fillLight",a.fill,{...d,mode:"multiply",weight:w}),p.set(m,"skyFill",a.fill,{...d,mode:"multiply",weight:w}),p.set(m,"rimLight",a.rim,{...d,mode:"multiply",weight:w}),p.set(m,"sunRays",0,{...d,weight:w}),p.set(m,"hazeDensity",a.haze*r,{...d,mode:"add"}),p.set(m,"hazeStart",1-.3*qt(.5,ha,i)*(1-qt(.8,1,i))*r,{...d,mode:"multiply"}),p.set(m,"windIntensity",a.wind,{...d,weight:a.windW*r}),p.set(m,"flowerGust",a.gust*r*(Ds?.4:1),d);const M=h*r;M>1e-4&&this.holdFair(p,M,a,w);const x=i>1||i<0?1:r;p.set(m,"rainDropDensity",a.streaks,{...d,weight:x}),p.set(m,"rainDrizzle",a.drizzle,{...d,weight:x});const A=a.rings*r;if(f||this.lastRings===null)this.ringRate=0;else{const E=Math.max(-1.5,Math.min(1.5,(A-this.lastRings)/t));this.ringRate+=(E-this.ringRate)*(1-Math.exp(-t*2.5))}this.lastRings=A,p.set(m,"rainIntensity",a.rings,{...d,weight:x}),Math.abs(this.ringRate)>1e-4&&p.set(m,"rainRingRate",this.ringRate,d),this.blend(p,"wetness",Math.max(u.wet??0,a.wet),a.sky*r*v,0,c,d),p.set(m,"rainImpactStrength",a.impact*r,d),p.set(m,"waterRippleStrength",1+(a.chop-1)*r,d),p.set(m,"reflectionDistortion",1+(a.reflect-1)*r,d),this.rain.setAmount(a.layer*r),a.layer*r>.003&&this.rain.update(e.camera,e.time,a.wind),Object.assign(this.debugState,{sp:+i.toFixed(4),g:+o.toFixed(4),dry:i<0,dryHold:+c.toFixed(3),fairHold:+(h*r).toFixed(3),stage:n,hand:+r.toFixed(3),handoff:+v.toFixed(3),streaks:+a.streaks.toFixed(3),drizzle:+a.drizzle.toFixed(3),layer:+a.layer.toFixed(3),coverage:+a.coverage.toFixed(3),darkness:+a.darkness.toFixed(3),contrast:+(a.contrast*w).toFixed(3),cloudLight:+a.cloudLight.toFixed(3),masses:+y.toFixed(3),drift:+this.drift.toFixed(3),wind:+a.wind.toFixed(3),windBase:+a.wind.toFixed(3),gust:+a.gust.toFixed(3),rings:+a.rings.toFixed(3),ringRate:+this.ringRate.toFixed(3),impact:+a.impact.toFixed(3),chop:+a.chop.toFixed(3),reflect:+a.reflect.toFixed(3)})}blend(t,e,s,i,o,a,r){const n=i+(1-i)*a;t.set(this.id,e,n>1e-6?(i*s+(1-i)*a*o)/n:s,{...r,weight:n})}holdFair(t,e,s,i){const o=this.id,a={priority:11,weight:e},r=U;t.set(o,"cloudCoverage",it.clouds,a),t.set(o,"cloudDarkness",it.cloudDark,a),t.set(o,"cloudContrast",0,a),t.set(o,"cloudBrightness",1,a),t.set(o,"stormCloudMasses",0,a),t.set(o,"sunlightVisibility",it.sunVis,a),t.set(o,"hazeDensity",it.haze,a),t.set(o,"hazeStart",it.hazeStart,a),t.set(o,"sunScatter",it.scatter,a),t.set(o,"windIntensity",it.wind,a),t.set(o,"skyZenith",it.zenith,a),t.set(o,"skyMid",it.mid,a),t.set(o,"skyHorizon",it.horizon,a),t.set(o,"sunGlow",it.sunGlow,a);const n=(c,h,u,f)=>{const p=ia(h.value)*(1+(f-1)*i);p>1e-5&&t.set(o,c,u/p,{...a,mode:"multiply"})};n("sunlightIntensity",r.uSunColor,it.sunLum,s.sunLight),n("fillLight",r.uFillColor,it.fillLum,s.fill),n("skyFill",r.uSkyFill,it.skyFillLum,s.fill),n("rimLight",r.uRimColor,it.rimLum,s.rim)}reset(){super.reset(),this.leaving=!1,this.hand=1,this.ringRate=0,this.lastRings=null,this.lastP=null,this.rain&&this.rain.setAmount(0)}dispose(){this.rain&&(this.rain.mesh.geometry.dispose(),this.rain.mesh.material.dispose())}}class fa{constructor({count:t=4200,seed:e=47}={}){const s=new at(e),i=new Pt(1,1,1,1),o=new si;o.index=i.index,o.setAttribute("position",i.attributes.position),o.setAttribute("uv",i.attributes.uv);const a=new Float32Array(t*4);for(let n=0;n<t;n++)a.set([s.float(-1,1),s.next(),s.float(-1,1),s.next()],n*4);o.setAttribute("aDrop",new ct(a,4)),o.instanceCount=t,this.uniforms={uTime:U.uTime,uCenter:{value:new g},uAmount:{value:0},uWindVec:{value:new Mt(.6,.2)},uSkyFill:U.uSkyFill,uSunColor:U.uSunColor};const r=new K({uniforms:this.uniforms,transparent:!0,depthWrite:!1,vertexShader:`
        attribute vec4 aDrop;
        uniform float uTime; uniform vec3 uCenter; uniform float uAmount; uniform vec2 uWindVec;
        varying float vA; varying vec2 vUv;
        void main() {
          vUv = uv;
          float on = step(aDrop.w, uAmount);
          float far = step(0.62, fract(aDrop.w * 7.31));          // ~38% far veil, the rest near curtain
          vec3 box = mix(vec3(15.0, 11.0, 15.0), vec3(34.0, 15.0, 34.0), far);
          float speed = mix(13.0, 16.5, aDrop.y) * mix(1.0, 0.85, far);
          vec3 p = vec3(aDrop.x * box.x * 0.5, 0.0, aDrop.z * box.z * 0.5);
          float fall = mod(aDrop.y * box.y - uTime * speed, box.y);
          p.y = fall - 1.2;
          vec2 slant = uWindVec;
          p.xz += slant * (fall - box.y * 0.5) * 0.2;
          vec3 rel = vec3(mod(p.x - uCenter.x + box.x * 0.5, box.x) - box.x * 0.5, p.y, mod(p.z - uCenter.z + box.z * 0.5, box.z) - box.z * 0.5);
          vec3 world = vec3(uCenter.x + rel.x, rel.y, uCenter.z + rel.z);
          float len = mix(0.5, 0.95, aDrop.y) * mix(1.0, 1.4, far);
          vec3 fallDir = normalize(vec3(-slant.x * 0.2, -1.0, -slant.y * 0.2));
          vec3 toCam = normalize(cameraPosition - world);
          vec3 side = normalize(cross(fallDir, toCam));
          float width = mix(0.012, 0.03, far);
          world += side * position.x * width + fallDir * position.y * len;
          float d = length(rel.xz);
          float fade = far > 0.5 ? (1.0 - smoothstep(12.0, 17.0, d)) * smoothstep(3.0, 6.0, d) : (1.0 - smoothstep(5.0, 7.5, d)) * smoothstep(0.35, 0.9, d);
          vA = on * fade * smoothstep(0.0, 1.2, rel.y + 0.6) * mix(0.42, 0.26, far);
          gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
        }`,fragmentShader:`
        uniform vec3 uSkyFill; uniform vec3 uSunColor;
        varying float vA; varying vec2 vUv;
        void main() {
          if (vA < 0.002) discard;
          float edge = 1.0 - abs(vUv.x - 0.5) * 2.0;
          float tail = smoothstep(0.0, 0.7, vUv.y);
          vec3 c = mix(vec3(0.66, 0.7, 0.78), uSkyFill * 1.5 + uSunColor * 0.2, 0.45);
          gl_FragColor = vec4(c, vA * edge * tail);
          #include <colorspace_fragment>
        }`});this.mesh=new j(o,r),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6,this.mesh.name="attraction-storm-rain",this.mesh.layers.set(1),this.mesh.visible=!1}setAmount(t){this.uniforms.uAmount.value=t,this.mesh.visible=t>.003}update(t,e,s){this.uniforms.uCenter.value.copy(t.position),this.uniforms.uWindVec.value.set(Math.sin(e*.13)*.4+.5,Math.cos(e*.1)*.3).multiplyScalar(s*.75)}}const ut=(l,t,e)=>{const s=Math.min(1,Math.max(0,(e-l)/(t-l)));return s*s*(3-2*s)},pa=new N("#ffe2a8"),ma={rainStops:[.72,.75],cloudsOpen:[.75,.79],breakthrough:[.79,.84],sparkleRainbow:[.84,.875],handBack:[.875,.93]},We=[.835,.85],Gs=[.85,.885],Ws=[.875,.895];class re extends ne{constructor(){super({id:"golden-awakening",garden:"golden",implemented:!0,trigger:{progress:[.72,.93],exitMargin:.02},replay:"on-reenter",reverse:"fade-out",description:"Garden 05: clouds open, sunlight breakthrough with flash peak, rays, sunstar and hexagonal lens flare, wet sparkle, pastel rainbow."}),this.cur={stop:0,open:0,B:0,sparkle:0,rainbow:0,end:1,tail:1,flare:1},this.bt=-1,this.flareSpent=!1,this.lastP=null,this.leaving=!1,this.occlusion=1,this.debugState={},this._sunNdc=new g,this._v=new g}prepare(t){this.flare=new ga,this.probes=new va,this.rainbow=new wa,t.layer.add(this.flare.mesh,this.probes.group,this.rainbow.mesh)}enter(t){super.enter(t),this.leaving=!1,this.lastP=null}exit(){this.leaving=!0,this.phase="release"}resume(){this.leaving=!1}static intensity(t){if(t<0)return 0;const e=ut(0,1.2,t),s=.42*Math.exp(-(((t-1.5)/.5)**2));return e+s}static targets(t){const e=1-ut(.895,.93,t),s=1-ut(Gs[0],Gs[1],t);return{stop:ut(.72,.75,t)*(1-ut(.8,.83,t)),open:ut(.75,.79,t)*s,sparkle:ut(.82,.85,t)*e,rainbow:ut(.835,.865,t)*(1-ut(Ws[0],Ws[1],t)),end:e,tail:s}}static beatAt(t){for(const[e,[s,i]]of Object.entries(ma))if(t>=s&&t<i)return e;return t>=.93?"after":"before"}update(t,e){super.update(t,e);const s=e.progress,i=this.lastP===null||Math.abs(s-this.lastP)>.01||t<=0;this.lastP=s;const o=this.leaving?{stop:0,open:0,sparkle:0,rainbow:0,end:0,tail:0}:re.targets(s),a=this.cur;!this.leaving&&this.bt<0&&s>=.79&&(this.bt=i?3.2:0),this.bt>=0&&(this.bt+=t);const r=!this.leaving&&this.bt>=0&&s>=.775?o.end:0,n=i?1:1-Math.exp(-t*1.4),c=i?1:1-Math.exp(-t*.9);a.stop+=(o.stop-a.stop)*n,a.open+=(o.open-a.open)*c,a.B+=(r-a.B)*n,a.sparkle+=(o.sparkle*Math.min(1,a.B*1.5)-a.sparkle)*n,a.rainbow+=(o.rainbow*(a.B>.5?1:0)-a.rainbow)*(i?1:1-Math.exp(-t*.7)),a.end+=(o.end-a.end)*n,a.tail+=(o.tail-a.tail)*n,this.bt>=0&&a.B<.01&&s<.775&&(this.bt=-1,this.flareSpent=!1),s>=We[1]&&(this.flareSpent=!0);const h=this.flareSpent?0:1-ut(We[0],We[1],s);a.flare+=(h-a.flare)*n;const u=re.intensity(this.bt)*a.B,f=Math.max(0,u-a.B),p=a.stop+a.open+a.B+a.sparkle+a.rainbow;if(this.leaving&&p<.002){this.hideAll(),this.finish();return}this.phase=a.B>.5?a.rainbow>.3?"release":"climax":a.open>.3?"build":"start";const m=e.env,d=this.id,v={priority:20};m.owners("rainDropDensity").some(b=>b!==d)||(m.set(d,"rainDropDensity",0,{...v,weight:a.stop}),m.set(d,"rainDrizzle",0,{...v,weight:a.stop}),m.set(d,"rainIntensity",0,{...v,weight:a.stop}));const w=a.stop*(1-a.open);m.set(d,"cloudCoverage",.9,{...v,weight:w}),m.set(d,"cloudDarkness",.55,{...v,weight:w*.8}),m.set(d,"sunlightVisibility",.35,{...v,mode:"multiply",weight:w}),m.set(d,"cloudOpening",a.open,v),m.set(d,"cloudCoverage",1-.3*a.open*a.B,{...v,mode:"multiply"});const y=a.B*a.tail;m.set(d,"cloudBrightness",1+.06*y,v),m.set(d,"sunlightVisibility",1,{...v,weight:Math.min(1,u)*a.tail}),m.set(d,"sunlightIntensity",1+.08*y+.4*f,{...v,mode:"multiply"}),m.set(d,"sunRays",.55+.3*f,{...v,weight:y*a.end}),m.set(d,"sunScatter",.04*y+.12*f,{...v,mode:"add"}),m.set(d,"sunGlow",pa,{...v,weight:.35*y}),m.set(d,"rimLight",1+.25*y,{...v,mode:"multiply"}),m.set(d,"wetness",Math.max(e.weather?.wet??0,.7),{...v,weight:a.sparkle}),m.set(d,"wetSparkle",1,{...v,weight:a.sparkle});const M=e.camera;M.updateMatrixWorld();const x=U.uSunDir.value,A=this._sunNdc.copy(M.position).addScaledVector(x,400).project(M),k=x.dot(M.getWorldDirection(this._v))>.05?(1-ut(.95,1.3,Math.abs(A.x)))*(1-ut(.95,1.3,Math.abs(A.y))):0,_=a.B*a.end*a.flare*k;this.probes.update(M,x,_>.002);const O=this.probes.visibility;this.occlusion+=(O-this.occlusion)*(i?1:1-Math.exp(-t*9)),this.flare.set(A,M.aspect,_*this.occlusion,u,e.time),this.rainbow.update(M,a.rainbow,e),Object.assign(this.debugState,{beat:re.beatAt(s),stop:+a.stop.toFixed(3),open:+a.open.toFixed(3),B:+a.B.toFixed(3),I:+u.toFixed(3),bt:+this.bt.toFixed(2),sparkle:+a.sparkle.toFixed(3),rainbow:+a.rainbow.toFixed(3),end:+a.end.toFixed(3),tail:+a.tail.toFixed(3),flareLife:+a.flare.toFixed(3),flareSpent:this.flareSpent,sunNdc:[+A.x.toFixed(3),+A.y.toFixed(3)],edge:+k.toFixed(3),occlusion:+this.occlusion.toFixed(3),flare:+(_*this.occlusion).toFixed(3),probesSupported:this.probes.supported})}hideAll(){this.flare&&(this.flare.set(null,1,0,0,0),this.probes.update(null,null,!1),this.rainbow.update(null,0,null))}reset(){super.reset(),Object.assign(this.cur,{stop:0,open:0,B:0,sparkle:0,rainbow:0,end:1,tail:1,flare:1}),this.bt=-1,this.leaving=!1,this.lastP=null,this.occlusion=1,this.flareSpent=!1,this.hideAll()}dispose(){for(const t of[this.flare?.mesh,this.rainbow?.mesh])t&&(t.geometry.dispose(),t.material.dispose());this.probes?.dispose()}}class ga{constructor(){this.uniforms={uSun:{value:new Mt},uAspect:{value:16/9},uAmount:{value:0},uIntensity:{value:0},uTime:{value:0},uSunVis:U.uSunVis};const t=new K({uniforms:this.uniforms,transparent:!0,depthTest:!1,depthWrite:!1,blending:Gt,vertexShader:`
        varying vec2 vNdc;
        void main() { vNdc = position.xy; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
        uniform vec2 uSun; uniform float uAspect; uniform float uAmount; uniform float uIntensity; uniform float uTime; uniform float uSunVis;
        varying vec2 vNdc;
        float hexD(vec2 p, float r) { p = abs(p); return max(dot(p, vec2(0.8660254, 0.5)), p.y) - r; }
        mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
        void main() {
          float amt = uAmount * uSunVis;
          if (amt < 0.002) discard;
          vec2 asp = vec2(uAspect, 1.0);
          vec2 d = (vNdc - uSun) * asp * 0.5;
          float r = length(d);
          float ang = atan(d.y, d.x) + uTime * 0.02;
          vec3 col = vec3(0.0);
          // sunstar: six long spikes, six short ones between, a hot core and a soft bloom
          float spikes = pow(abs(cos(ang * 3.0)), 90.0) * exp(-r * 6.5) * 0.9 + pow(abs(sin(ang * 3.0)), 140.0) * exp(-r * 11.0) * 0.45;
          float core = exp(-r * r * 2600.0) * 1.6 + exp(-r * 16.0) * 0.3 + exp(-r * 4.5) * 0.03;
          col += vec3(1.0, 0.93, 0.8) * (spikes + core) * (0.7 + 0.3 * uIntensity);
          // chromatic halo ring
          float ringR = 0.31;
          col += vec3(exp(-pow((r - ringR * 1.02) / 0.012, 2.0)), exp(-pow((r - ringR) / 0.012, 2.0)), exp(-pow((r - ringR * 0.98) / 0.012, 2.0))) * vec3(0.08, 0.065, 0.09);
          // hexagonal ghosts along the optical axis sun -> screen centre -> beyond
          vec2 axis = -uSun;
          for (int i = 0; i < 7; i++) {
            float fi = float(i);
            float t = fi < 0.5 ? 0.32 : fi < 1.5 ? 0.62 : fi < 2.5 ? 0.86 : fi < 3.5 ? 1.18 : fi < 4.5 ? 1.42 : fi < 5.5 ? 1.75 : 2.15;
            float rad = fi < 0.5 ? 0.022 : fi < 1.5 ? 0.05 : fi < 2.5 ? 0.016 : fi < 3.5 ? 0.075 : fi < 4.5 ? 0.034 : fi < 5.5 ? 0.11 : 0.06;
            vec3 tint = fi < 0.5 ? vec3(1.0, 0.8, 0.5) : fi < 1.5 ? vec3(0.55, 0.85, 0.75) : fi < 2.5 ? vec3(1.0, 0.65, 0.7) : fi < 3.5 ? vec3(0.7, 0.62, 1.0) : fi < 4.5 ? vec3(1.0, 0.85, 0.55) : fi < 5.5 ? vec3(0.55, 0.75, 1.0) : vec3(1.0, 0.7, 0.85);
            vec2 gp = uSun + axis * t;
            vec2 q = rot(0.26) * ((vNdc - gp) * asp * 0.5);
            float h = hexD(q, rad);
            float body = smoothstep(0.004, -0.003, h);
            float rim = exp(-pow(h / 0.0035, 2.0));
            col += tint * (body * 0.11 + rim * 0.1) * (0.6 + 0.4 * uIntensity);
          }
          // light shafts in the air: soft radial streaks fanning down from the sun
          float st = 0.5 + 0.5 * sin(ang * 21.0 + sin(ang * 5.0 + uTime * 0.07) * 2.3);
          st *= 0.5 + 0.5 * sin(ang * 37.0 - uTime * 0.05 + 1.7);
          float shafts = pow(st, 3.0) * exp(-r * 2.4) * smoothstep(0.02, 0.18, r);
          col += vec3(1.0, 0.84, 0.58) * shafts * 0.2 * uIntensity * smoothstep(-0.7, 0.15, vNdc.y);
          // display-space additive light: no colour-space conversion (it would lift every faint term)
          gl_FragColor = vec4(col * amt, 1.0);
        }`});this.mesh=new j(new Pt(2,2),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1e3,this.mesh.name="attraction-lens-flare",this.mesh.layers.set(1),this.mesh.visible=!1}set(t,e,s,i,o){const a=this.uniforms;a.uAmount.value=s,a.uIntensity.value=i,a.uTime.value=o,a.uAspect.value=e,t&&a.uSun.value.set(t.x,t.y),this.mesh.visible=s>.002}}class va{constructor(){this.group=new rt,this.group.name="attraction-sun-probes",this.supported=null,this.visibility=1,this.results=[1,1,1,1,1];const t=new Pt(1,1),e=new Ke({colorWrite:!1,depthWrite:!1,depthTest:!0});this.offsets=[[0,0],[1,0],[-1,0],[0,1],[0,-1]],this.probes=this.offsets.map((s,i)=>{const o=new j(t,e);return o.layers.set(1),o.renderOrder=999,o.frustumCulled=!1,o.userData={query:null,pending:!1,issued:!1,i},o.onBeforeRender=a=>this._begin(a,o),o.onAfterRender=a=>this._end(a,o),this.group.add(o),o}),this.group.visible=!1,this._right=new g,this._up=new g}_begin(t,e){const s=t.getContext();if(this.supported===null&&(this.supported=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext),!this.supported)return;const i=e.userData;if(i.pending)if(s.getQueryParameter(i.query,s.QUERY_RESULT_AVAILABLE))this.results[i.i]=s.getQueryParameter(i.query,s.QUERY_RESULT)?1:0,i.pending=!1;else{i.issued=!1;return}i.query||(i.query=s.createQuery()),s.beginQuery(s.ANY_SAMPLES_PASSED_CONSERVATIVE,i.query),i.issued=!0}_end(t,e){const s=e.userData;if(!this.supported||!s.issued)return;const i=t.getContext();i.endQuery(i.ANY_SAMPLES_PASSED_CONSERVATIVE),s.issued=!1,s.pending=!0}update(t,e,s){if(this.group.visible=!!s,!s)return;const i=400,o=i*.016;this._right.setFromMatrixColumn(t.matrixWorld,0),this._up.setFromMatrixColumn(t.matrixWorld,1);for(let a=0;a<this.probes.length;a++){const r=this.probes[a],[n,c]=this.offsets[a];r.position.copy(t.position).addScaledVector(e,i).addScaledVector(this._right,n*o*1.4).addScaledVector(this._up,c*o*1.4),r.quaternion.copy(t.quaternion),r.scale.setScalar(o)}this.visibility=this.supported===!1?1:this.results.reduce((a,r)=>a+r,0)/this.results.length}dispose(){this.probes[0].geometry.dispose(),this.probes[0].material.dispose()}}class wa{constructor(){this.uniforms={uOpacity:{value:0}};const t=new _i(.86,1,160,1,0,Math.PI),e=new K({uniforms:this.uniforms,transparent:!0,depthWrite:!1,side:Dt,vertexShader:`
        varying vec2 vP;
        void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        uniform float uOpacity;
        varying vec2 vP;
        vec3 spectrum(float u) {
          // inner violet -> blue -> green -> yellow -> orange -> outer red
          vec3 c = mix(vec3(0.62, 0.48, 0.95), vec3(0.45, 0.62, 1.0), smoothstep(0.0, 0.2, u));
          c = mix(c, vec3(0.5, 0.88, 0.62), smoothstep(0.2, 0.42, u));
          c = mix(c, vec3(1.0, 0.95, 0.5), smoothstep(0.42, 0.6, u));
          c = mix(c, vec3(1.0, 0.7, 0.42), smoothstep(0.6, 0.8, u));
          c = mix(c, vec3(1.0, 0.5, 0.52), smoothstep(0.8, 1.0, u));
          return c;
        }
        void main() {
          float r = length(vP);
          float u = clamp((r - 0.86) / 0.14, 0.0, 1.0);
          vec3 c = mix(spectrum(u), vec3(1.0), 0.32); // pastel
          float band = pow(sin(u * 3.14159), 0.9);
          float feet = smoothstep(0.02, 0.45, vP.y / r);   // the ends dissolve into the haze
          float a = band * feet * uOpacity * 0.44;
          if (a < 0.002) discard;
          gl_FragColor = vec4(c, a); // display-space pastel colours
        }`});this.mesh=new j(t,e),this.mesh.name="attraction-rainbow",this.mesh.frustumCulled=!1,this.mesh.renderOrder=-5,this.mesh.visible=!1,this.dir=null}update(t,e,s){if(this.uniforms.uOpacity.value=e,this.mesh.visible=e>.002,!this.mesh.visible||!t)return;if(!this.dir){const o=s.route,a=o?o.tangentAt(o.progressToS(.87)):new g(0,0,-1),r=Math.atan2(a.x,-a.z)-.56,n=-.06;this.dir=new g(Math.sin(r)*Math.cos(n),Math.sin(n),-Math.cos(r)*Math.cos(n)).normalize()}const i=160;this.mesh.position.copy(t.position).addScaledVector(this.dir,i),this.mesh.position.y=t.position.y+this.dir.y*i,this.mesh.scale.setScalar(i*.62),this.mesh.lookAt(t.position)}}const we=new g(0,1,0),Ve=new J,Be=new V,ya=new V,Et=new g,It=new g,te=new g(1,0,0),Vs=new g,Bs=new g,ba=new g;function Ut(l,t){const e=l.attributes.position.count;l.setAttribute("aPart",new X(new Array(e).fill(t),1));for(const s of Object.keys(l.attributes))["position","normal","aPart"].includes(s)||l.deleteAttribute(s);return l}function xa(){const l=[],t=new ft(1,16,12);t.scale(.16,.15,.36),l.push(Ut(t,0));const e=new ft(.13,14,10);e.translate(0,.08,.3),l.push(Ut(e,2));const s=new ft(1,12,8);s.scale(.115,.095,.11),s.translate(0,-.005,.31),l.push(Ut(s,1));const i=new Ti(.017,.4,6);i.rotateX(Math.PI/2),i.translate(0,.065,.6),l.push(Ut(i,3));for(const a of[-1,1]){const r=new ft(.026,8,6);r.translate(a*.085,.11,.37),l.push(Ut(r,4))}for(let a=0;a<5;a++){const r=(a-2)*.2,n=new Pt(.07,.34,1,2);n.translate(0,-.17,0),n.rotateX(-Math.PI/2+.35),n.rotateY(r),n.translate(Math.sin(r)*.03,-.02,-.3),l.push(Ut(n,5))}const o=l.map(a=>a.index?a.toNonIndexed():a);return Pe(o)}function Sa(){const l=new ei,t=[[0,.03],[.14,.07],[.38,.075],[.6,.04],[.68,0],[.62,-.035],[.4,-.06],[.16,-.06],[0,-.03]];l.moveTo(t[0][0],t[0][1]),l.splineThru(t.slice(1).map(i=>new Mt(i[0],i[1])).concat([new Mt(t[0][0],t[0][1])]));const e=[];for(const i of[-1,1]){const o=new ti(l,10),a=o.attributes.position,r=[],n=[];for(let c=0;c<a.count;c++){const h=a.getX(c),u=a.getY(c);a.setXYZ(c,i*h,0,u),r.push(i),n.push(h/.68)}o.setAttribute("aSide",new X(r,1)),o.setAttribute("aSpan",new X(n,1)),o.deleteAttribute("uv"),e.push(o.toNonIndexed())}const s=Pe(e);return s.computeVertexNormals(),s}const Us=`
  // thin-film style hue shift with view angle: turquoise -> cobalt -> violet
  vec3 irid(float t) {
    vec3 c = mix(vec3(0.03, 0.72, 0.68), vec3(0.08, 0.26, 0.86), smoothstep(0.05, 0.6, t));
    return mix(c, vec3(0.5, 0.2, 0.86), smoothstep(0.55, 0.95, t));
  }`;class Ma{constructor({camera:t,scale:e=.8}={}){this.camera=t,this.scale=e,this.mesh=new rt,this.mesh.name="attraction-hummingbird",this.mesh.visible=!1,this.uniforms={...U,uShimmer:{value:0},uFlap:{value:0},uSweep:{value:0}},this.body=new j(xa(),new K({uniforms:this.uniforms,side:Dt,vertexShader:`
        attribute float aPart;
        varying vec3 vN; varying vec3 vLocalN; varying vec3 vWorld; varying float vPart; varying vec3 vLocal;
        void main() {
          vec4 w = modelMatrix * vec4(position, 1.0);
          vN = normalize(mat3(modelMatrix) * normal); vLocalN = normal; vWorld = w.xyz; vPart = aPart; vLocal = position;
          gl_Position = projectionMatrix * viewMatrix * w;
        }`,fragmentShader:`
        #include <common>
        ${mt}
        ${Us}
        uniform float uShimmer;
        varying vec3 vN; varying vec3 vLocalN; varying vec3 vWorld; varying float vPart; varying vec3 vLocal;
        void main() {
          vec3 N = normalize(vN); if (!gl_FrontFacing) N = -N;
          vec3 V = normalize(cameraPosition - vWorld);
          float ndv = clamp(dot(N, V), 0.0, 1.0);
          float t = 1.0 - ndv;
          vec3 R = reflect(-V, N);
          float sunR = max(dot(R, uSunDir), 0.0);
          vec3 albedo; float sheen = 0.0; vec3 sheenCol = vec3(0.0);
          if (vPart < 0.5) {
            float belly = smoothstep(0.15, -0.45, vLocalN.y);
            vec3 back = irid(t * 0.9 + 0.08 * sin(vLocal.z * 18.0));
            albedo = mix(back, mix(vec3(0.86, 0.88, 0.84), vec3(0.42, 0.7, 0.55), smoothstep(-0.9, -0.2, vLocalN.y) * 0.5), belly);
            sheen = (1.0 - belly) * 0.9; sheenCol = irid(t + 0.25);
          } else if (vPart < 1.5) {
            albedo = mix(vec3(0.55, 0.04, 0.3), vec3(1.0, 0.32, 0.62), pow(ndv, 1.4));
            sheen = 1.6; sheenCol = vec3(1.0, 0.45, 0.75);
          } else if (vPart < 2.5) {
            albedo = irid(t * 0.7 + 0.35); sheen = 1.0; sheenCol = irid(t + 0.5);
          } else if (vPart < 3.5) {
            albedo = vec3(0.05, 0.045, 0.05);
          } else if (vPart < 4.5) {
            albedo = vec3(0.01);
            sheen = 3.0; sheenCol = vec3(1.0);
          } else {
            albedo = mix(irid(0.55 + t * 0.4), vec3(0.06, 0.05, 0.12), smoothstep(-0.38, -0.6, vLocal.z));
            sheen = 0.5; sheenCol = irid(t + 0.6);
          }
          vec3 col = gouacheLight(albedo, N, V, 0.15, 1.0);
          // iridescent flash toward the sun and a soft view-facing jewel glint
          col += sheenCol * uSunColor * (pow(sunR, 14.0) * 1.1 + pow(sunR, 3.0) * 0.12) * sheen * (0.6 + 0.4 * uSunVis);
          col += sheenCol * pow(ndv, 6.0) * 0.12 * sheen * (1.0 + uShimmer);
          col = applyHaze(col, vWorld);
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`})),this.body.frustumCulled=!1,this.wings=new j(Sa(),new K({uniforms:this.uniforms,side:Dt,transparent:!0,depthWrite:!1,vertexShader:`
        attribute float aSide; attribute float aSpan;
        uniform float uFlap; uniform float uSweep;
        varying vec3 vWorld; varying float vSpan; varying vec3 vN;
        vec3 rotZ(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(p.x * c - p.y * s, p.x * s + p.y * c, p.z); }
        vec3 rotY(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(p.x * c + p.z * s, p.y, -p.x * s + p.z * c); }
        void main() {
          vec3 p = rotY(position, -uSweep * aSide);
          p = rotZ(p, uFlap * aSide);
          p += vec3(aSide * 0.1, 0.11, 0.08);
          vec4 w = modelMatrix * vec4(p, 1.0);
          vWorld = w.xyz; vSpan = aSpan; vN = normalize(mat3(modelMatrix) * rotZ(vec3(0.0, 1.0, 0.0), uFlap * aSide));
          gl_Position = projectionMatrix * viewMatrix * w;
        }`,fragmentShader:`
        #include <common>
        ${mt}
        ${Us}
        varying vec3 vWorld; varying float vSpan; varying vec3 vN;
        void main() {
          vec3 V = normalize(cameraPosition - vWorld);
          float ndv = abs(dot(normalize(vN), V));
          vec3 col = mix(vec3(0.42, 0.44, 0.46), irid(1.0 - ndv), 0.35) * (0.55 + 0.45 * uSunVis);
          col += uSunColor * 0.08;
          float a = mix(0.62, 0.3, vSpan); // root denser, tips blur out
          col = applyHaze(col, vWorld);
          gl_FragColor = vec4(col, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`})),this.wings.frustumCulled=!1,this.wings.renderOrder=3,this.bird=new rt,this.bird.add(this.body,this.wings),this.bird.scale.setScalar(e),this.mesh.add(this.bird),this.shimmer=ka(this.uniforms),this.mesh.add(this.shimmer),this.phase="hidden",this.t=0,this.pos=new g,this.prev=new g,this.start=new g,this.land=new g,this.landNormal=new g(0,1,0),this.aside=new g,this.hover=new g,this.from=new g,this.ctrl=new g,this.quat=new V,this.seconds=3.8,this.flapPhase=0,this.appear=0,this.shimmerAmt=0}get perched(){return this.phase==="hover"}get active(){return this.phase!=="hidden"}approach(t,e,s,i,o=3.8){if(this.start.copy(t),this.start.y+=.1,this.land.copy(e),this.landNormal.copy(s).normalize(),this.aside.copy(i),this.hover.copy(e).addScaledVector(this.landNormal,.22),this.camera){const a=Et.copy(e).sub(this.camera.position).setY(0).normalize(),r=It.crossVectors(we,a).normalize(),n=this.camera.getWorldDirection(new g).setY(0).normalize(),c=this.hover.clone().addScaledVector(r,.75),h=this.hover.clone().addScaledVector(r,-.75),u=f=>n.angleTo(f.sub(this.camera.position).setY(0).normalize());this.hover.addScaledVector(r,u(c.clone())<u(h.clone())?.75:-.75)}if(this.hover.y+=.1,this.pos.copy(this.start),this.prev.copy(this.start),this.startSide=1,this.camera){const a=this.camera.getWorldDirection(Vs).setY(0).normalize();this.startSide=Math.sign(Et.copy(this.start).sub(this.camera.position).dot(Bs.set(-a.z,0,a.x)))||1}this.seconds=o,this.phase="appear",this.t=0,this.appear=0,this.mesh.visible=!0,this.camera&&this.quat.setFromRotationMatrix(Ve.lookAt(Et.copy(this.camera.position).sub(this.pos).setY(0).normalize(),It.set(0,0,0),we))}_keepAhead(t){if(!this.camera)return;const e=this.camera.getWorldDirection(Vs).setY(0).normalize(),s=ba.copy(this.camera.position).addScaledVector(e,2.8).addScaledVector(Bs.set(-e.z,0,e.x),this.startSide*.55);s.y=.98,this.start.lerp(s,t>0?1-Math.exp(-t*3):1)}stepAside(){this.phase!=="hidden"&&this.phase!=="departing"&&(this.from.copy(this.pos),this.phase="aside",this.t=0)}depart(){this.phase!=="hidden"&&this.phase!=="departing"&&(this.from.copy(this.pos),this.phase="departing",this.t=0)}reset(){this.phase="hidden",this.mesh.visible=!1,this.shimmerAmt=0,this.uniforms.uShimmer.value=0}update(t,e){if(this.phase==="hidden")return;this.t+=t;const s=this.seconds,i=.3*s,o=.22*s,a=.3*s;let r=null,n=.32,c=40,h=1.05,u=0;if(this.prev.copy(this.pos),this.phase==="appear"){const d=Math.min(1,this.t/i);this.appear=d,this._keepAhead(t),this.pos.copy(this.start),this.pos.y+=Math.sin(e*4.2)*.025+(1-d)*.15,r=this.camera?Et.copy(this.camera.position).sub(this.pos):null,u=.5*(1-d),d>=1&&(this.phase="invite",this.t=0)}else if(this.phase==="invite"){const d=Math.min(1,this.t/o);if(this._keepAhead(t),this.pos.copy(this.start),this.pos.y+=Math.sin(e*4.2)*.02-Math.abs(Math.sin(d*Math.PI*2))*.07,r=Et.copy(this.land).sub(this.pos),d>=1){this.phase="dart",this.t=0,this.from.copy(this.pos);const v=It.copy(this.land).sub(this.from).cross(we).normalize();this.ctrl.copy(this.from).lerp(this.hover,.5).addScaledVector(v,.7).add(te.set(0,.45,0)),te.set(1,0,0)}}else if(this.phase==="dart"){const d=Math.min(1,this.t/a),v=1-Math.pow(1-d,3),w=Et.copy(this.from).lerp(this.ctrl,v),y=It.copy(this.ctrl).lerp(this.hover,v);this.pos.copy(w.lerp(y,v)),this.pos.y+=Math.sin(d*Math.PI)*.08,c=46,n=.08,r=null,d>=1&&(this.phase="hover",this.t=0)}else if(this.phase==="hover"){const d=Math.sin(this.t*2.6)*.5+.5;this.pos.copy(this.hover).addScaledVector(It.copy(this.land).sub(this.hover).normalize(),.07*d-.02),this.pos.x+=Math.sin(e*.9)*.02,this.pos.y+=Math.sin(e*3.7)*.012,r=Et.copy(this.land).sub(this.pos),u=1}else if(this.phase==="aside"){const d=Math.min(1,this.t/.9),v=1-Math.pow(1-d,3);this.pos.copy(this.from).lerp(this.aside,v),this.pos.y+=Math.sin(e*3.4)*.015+Math.sin(d*Math.PI)*.12,r=Et.copy(this.land).sub(this.pos),u=.45}else if(this.phase==="departing"){const d=this.t/1.6;if(this.pos.copy(this.from).add(It.set(Math.sin(d*3)*.4+d*1.6,d*d*5+d*1,-d*2.6)),c=48,n=0,d>=1){this.reset();return}}const f=It.copy(this.pos).sub(this.prev),p=r||(f.lengthSq()>1e-8?f:null);p&&(p.y*=.35,p.lengthSq()>1e-8&&(p.normalize(),Ve.lookAt(p,te.set(0,0,0),we),Be.setFromRotationMatrix(Ve),Be.multiply(ya.setFromAxisAngle(te.set(1,0,0),-n)),this.quat.slerp(Be,t>0?1-Math.exp(-t*(this.phase==="dart"?14:7)):1))),te.set(1,0,0),this.flapPhase+=t*c*Math.PI*2,this.uniforms.uFlap.value=.25+Math.sin(this.flapPhase)*h,this.uniforms.uSweep.value=.35*Math.sin(this.flapPhase*2+.6)-.15,this.shimmerAmt+=(u-this.shimmerAmt)*(1-Math.exp(-t*2.5)),this.uniforms.uShimmer.value=this.shimmerAmt;const m=this.phase==="appear"?Aa(this.appear):1;this.bird.position.copy(this.pos),this.bird.quaternion.copy(this.quat),this.bird.scale.setScalar(this.scale*Math.max(m,.001)),this.shimmer.position.copy(this.pos),this.shimmer.material.uniforms.uTimeS.value=e,this.shimmer.visible=this.shimmerAmt>.01}dispose(){for(const t of[this.body,this.wings,this.shimmer])t.geometry.dispose(),t.material.dispose()}}function Aa(l){return 1+2.7*Math.pow(l-1,3)+1.7*Math.pow(l-1,2)}function ka(l){const e=new Float32Array(126),s=new Float32Array(168);let i=7;const o=()=>(i=i*16807%2147483647)/2147483647;for(let c=0;c<42;c++){const h=o()*Math.PI*2,u=Math.acos(o()*2-1),f=.22+o()*.42;e.set([Math.sin(u)*Math.cos(h)*f,Math.cos(u)*f*.7,Math.sin(u)*Math.sin(h)*f],c*3),s.set([o(),o()*6.28,1.5+o()*3,o()],c*4)}const a=new dt;a.setAttribute("position",new lt(e,3)),a.setAttribute("aSeed",new lt(s,4));const r=new K({uniforms:{uShimmer:l.uShimmer,uTimeS:{value:0}},transparent:!0,depthWrite:!1,blending:Gt,vertexShader:`
      attribute vec4 aSeed; uniform float uTimeS; uniform float uShimmer;
      varying float vA; varying vec3 vC;
      void main() {
        float a = aSeed.y + uTimeS * (0.6 + aSeed.x * 0.8);
        vec3 p = position;
        p.xz = mat2(cos(a), -sin(a), sin(a), cos(a)) * p.xz;
        p.y += sin(uTimeS * 1.3 + aSeed.y) * 0.05;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float tw = pow(0.5 + 0.5 * sin(uTimeS * aSeed.z * 2.0 + aSeed.y * 3.0), 5.0);
        vA = tw * uShimmer;
        vC = aSeed.w < 0.33 ? vec3(0.4, 1.0, 0.92) : aSeed.w < 0.66 ? vec3(1.0, 0.55, 0.85) : vec3(1.0, 0.9, 0.6);
        gl_PointSize = (5.0 + 7.0 * tw) * (3.0 / max(-mv.z, 0.5));
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      varying float vA; varying vec3 vC;
      void main() {
        vec2 d = gl_PointCoord - 0.5; float r = length(d);
        float core = exp(-r * r * 60.0), cross = exp(-abs(d.x) * 40.0) * exp(-abs(d.y) * 6.0) + exp(-abs(d.y) * 40.0) * exp(-abs(d.x) * 6.0);
        float a = (core + cross * 0.45) * vA;
        if (a < 0.003) discard;
        gl_FragColor = vec4(vC * a, 1.0);
      }`}),n=new Ce(a,r);return n.frustumCulled=!1,n.visible=!1,n.renderOrder=7,n}class za extends ne{constructor(){super({id:"secret-hummingbird",garden:"secret",implemented:!0,trigger:{progress:[.9,1],exitMargin:.03,states:["JOURNEY","DISCOVERY_INVITATION","DISCOVERY_REVEAL","RETURN_TO_JOURNEY","ENDING"]},replay:"on-reenter",reverse:"fade-out",description:"Garden 06: jewel hummingbird guides the boat to the hero ivory peony; reuses the discovery flow."}),this.bird=null,this.debugState={}}createGuide({camera:t,layer:e}){return this.bird||(this.bird=new Ma({camera:t}),e.add(this.bird.mesh)),this.bird}persistentUpdate(t,e){this.bird&&(this.bird.update(t,e.time),this.debugState={guidePhase:this.bird.phase,perched:this.bird.perched,shimmer:+this.bird.shimmerAmt.toFixed(3),state:e.experienceState})}update(t,e){super.update(t,e),this.phase=this.bird?.perched?"climax":this.bird?.active?"build":"start"}dispose(){this.bird?.dispose()}}class Ra{constructor(){this.events=[],this.byId=new Map}register(t){if(this.byId.has(t.id))throw new Error(`Duplicate attraction id "${t.id}"`);return this.events.push(t),this.byId.set(t.id,t),t}get(t){return this.byId.get(t)}implemented(){return this.events.filter(t=>t.implemented)}}function _a(){const l=new Ra;return l.register(new os),l.register(new jo),l.register(new da),l.register(new re),l.register(new za),l}class Ta{constructor({enabled:t=!1,scene:e=null,debug:s=!1,registry:i=_a()}={}){this.enabled=t,this.registry=i,this.env=new Zi({debug:s}),this.layer=null,this.scene=e,t&&e&&(this.layer=new rt,this.layer.name="attraction-layer",e.add(this.layer)),this.state=new Map;for(const o of i.events)this.state.set(o.id,{active:!1,exiting:!1,played:!1,ms:0});this.frameMs=0,this._cameraLayer=!1}update(t,e){if(!this.enabled)return;const s=performance.now();this.env.beginFrame();const i={...e,env:this.env,layer:this.layer,dt:t};!this._cameraLayer&&e.camera&&(e.camera.layers.enable(1),this._cameraLayer=!0);for(const o of this.registry.events)o.implemented&&o.persistentUpdate&&o.persistentUpdate(t,i);for(const o of this.registry.events){if(!o.implemented)continue;const a=this.state.get(o.id),[r,n]=o.trigger.progress,c=e.progress,h=o.trigger.states.includes(e.experienceState),u=h&&c>=r-o.trigger.enterMargin&&c<=n+o.trigger.enterMargin,f=!h||c<r-o.trigger.exitMargin||c>n+o.trigger.exitMargin;if(!a.active&&u&&!(o.replay==="once"&&a.played)?(o.prepared||(o.prepare(i),o.prepared=!0),o.enter(i),a.active=!0,a.exiting=!1,a.played=!0):a.active&&a.exiting&&u&&typeof o.resume=="function"&&!o.finished?(a.exiting=!1,o.resume(i)):a.active&&f&&!a.exiting&&(o.reverse==="continue"&&c<r||(a.exiting=!0,o.exit(i))),a.active){const p=performance.now();o.update(t,i),a.ms=performance.now()-p,o.finished&&f&&(a.active=!1,a.exiting=!1,o.reset())}}this.env.apply(),this.frameMs=performance.now()-s}guideCreature({camera:t}={}){if(!this.enabled||!this.layer)return null;for(const e of this.registry.events)if(e.implemented&&typeof e.createGuide=="function")return e.createGuide({camera:t,layer:this.layer});return null}async warmup(t){if(!this.enabled||!this.layer)return;const{renderer:e,scene:s,camera:i}=t,o={layer:this.layer,route:t.route,camera:i,env:this.env};for(const h of this.registry.events)h.implemented&&!h.prepared&&(h.prepare(o),h.prepared=!0);i.layers.enable(1),this._cameraLayer=!0;const a=[];this.layer.traverse(h=>{h.visible||(a.push(h),h.visible=!0)});const r=async()=>{try{await e.compileAsync(s,i)}catch{e.compile(s,i)}};await r();const n=e.getRenderTarget();t.water?.reflection?.enabled&&(e.setRenderTarget(t.water.reflection.target),await r());const c=new Qe(64,64);e.setRenderTarget(c),e.render(s,i),e.setRenderTarget(n),c.dispose();for(const h of a)h.visible=!1}reset(t={}){for(const e of this.registry.events){const s=this.state.get(e.id);s.active&&e.exit({...t,env:this.env,layer:this.layer}),e.reset(),s.active=!1,s.exiting=!1,s.played=!1}this.env.beginFrame(),this.env.restoreNeutral()}dispose(){for(const t of this.registry.events)t.dispose();this.layer&&this.scene&&this.scene.remove(this.layer)}summary(){return{enabled:this.enabled,implemented:this.registry.implemented().length,active:[...this.state.entries()].filter(([,t])=>t.active).map(([t])=>t),ms:+this.frameMs.toFixed(3),conflicts:this.env.stats.conflicts,ignored:this.env.stats.ignored}}}function js(l="all"){const t=[];let e="hull";const s=(m,d,v,w=1,y=0)=>{(l==="all"||l===e)&&t.push({a:m,b:d,c:v,tone:w,shade:y})},i=[-.3,0,-.13],o=[.3,0,-.13],a=[.3,0,.13],r=[-.3,0,.13],n=[-.57,.31,0],c=[.57,.3,0];for(const m of[1,-1]){const d=S=>[S[0],S[1],S[2]*m],v=d([-.31,.215,.145]),w=d([0,.19,.165]),y=d([.31,.215,.145]),M=m>0?r:i,x=m>0?a:o,A=(S,P,I,W)=>m>0?s(S,P,I,W):s(S,I,P,W);A(n,M,v,.96),A(M,w,v,1),A(M,x,w,.98),A(x,y,w,1),A(x,c,y,.95);const E=.006*m,k=[-.47,.27,.05*m+E],_=[-.16,.06,.15*m+E],O=[-.02,.19,.17*m+E],b=[.46,.265,.05*m+E],T=[.16,.06,.15*m+E],F=[.02,.19,.17*m+E];A(k,_,O,1.04),A(b,F,T,1.03),e="sail";const L=[.02,.62,0],G=[-.26,.2,.036*m],C=[.27,.2,.036*m],D=[0,.2,.065*m];A(L,G,D,1.02),A(L,D,C,.97),A(G,[-.2,.06,.08*m],D,.82),A(D,[.2,.06,.08*m],C,.8),e="hull"}s(n,r,i,.9),s(c,o,a,.9),s(i,a,o,.75),s(i,r,a,.75);const h=[],u=[],f=[];for(const m of t)h.push(...m.a,...m.b,...m.c),u.push(1,0,0,0,1,0,0,0,1),f.push(m.tone,m.tone,m.tone);const p=new dt;return p.setAttribute("position",new X(h,3)),p.setAttribute("aBary",new X(u,3)),p.setAttribute("aTone",new X(f,1)),p.computeVertexNormals(),p}function Ca(l="#f2a5b8"){return new K({uniforms:{...U,uPaper:{value:new N(l)}},side:Dt,vertexShader:`
      attribute vec3 aBary; attribute float aTone;
      varying vec3 vBary; varying float vTone; varying vec3 vNormal; varying vec3 vWorld; varying vec3 vObj;
      void main() {
        vBary = aBary; vTone = aTone; vObj = position;
        vec4 w = modelMatrix * vec4(position, 1.0);
        vWorld = w.xyz; vNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      #include <common>
      ${mt}
${$t}
      uniform vec3 uPaper;
      varying vec3 vBary; varying float vTone; varying vec3 vNormal; varying vec3 vWorld; varying vec3 vObj;
      void main() {
        vec3 N = normalize(vNormal);
        if (!gl_FrontFacing) N = -N;
        vec3 V = normalize(cameraPosition - vWorld);
        float fibre = vnoise(vObj * vec3(90.0, 260.0, 90.0)) * 0.6 + vnoise(vObj * 31.0) * 0.4;
        vec3 albedo = uPaper * vTone * (0.95 + 0.08 * fibre);
        float edge = 1.0 - smoothstep(0.0, 0.035, min(vBary.x, min(vBary.y, vBary.z)));
        albedo = mix(albedo, vec3(1.0, 0.9, 0.9), edge * 0.35);
        float ao = mix(0.55, 1.0, smoothstep(0.0, 0.2, vObj.y));
        vec3 col = gouacheLight(albedo, N, V, 0.55, ao) + albedo * 0.12;
        col = applyHaze(col, vWorld);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        GARDEN_GRADE_OUTPUT
      }`})}function Ea(l){const t=(.13+.035*(l/.19))*.97,e=(.3+.9*l)*.97,s=[[-e,0],[-.3,-t],[.3,-t],[e,0],[.3,t],[-.3,t]],i=[];for(let a=1;a<s.length-1;a++)i.push(s[0][0],l,s[0][1],s[a][0],l,s[a][1],s[a+1][0],l,s[a+1][1]);const o=new dt;return o.setAttribute("position",new X(i,3)),o}class wi{constructor({scale:t=.5}={}){this.material=Ca(),this.hull=new j(js("hull"),this.material),this.sail=new j(js("sail"),this.material),this.hull.position.y=this.sail.position.y=-.035,this.rocker=new rt,this.rocker.add(this.hull,this.sail),this.waterMask=new j(Ea(.11),new Ke({colorWrite:!1,side:Dt})),this.waterMask.renderOrder=1,this.waterMask.position.y=this.hull.position.y,this.waterMask.name="boat-water-mask",this.rocker.add(this.waterMask),this.group=new rt,this.group.add(this.rocker),this.group.scale.setScalar(t),this.group.name="origami-boat",this.heading=0,this.wiggle=0,this.buoyancyGain=.75}setFirstPerson(t){this.sail.visible=!t}float(t,e,s){const i=t.s,o=t.heightScale*this.buoyancyGain,a=.35,r=.12,n=t.heightAt(0,i+a,e),c=t.heightAt(0,i-a,e),h=t.heightAt(r,i,e),u=t.heightAt(-r,i,e),f=(n+c+h+u)*.25,p=(t.rain||0)*(Math.sin(e*7.3)*.5+Math.sin(e*11.1+1.3)*.5),m=Math.atan2((n-c)*o,2*a)-this.wiggle*.02,d=-Math.atan2((h-u)*o,2*r)+p*.012,v=(f-.5)*o/this.group.scale.y,w=1-Math.exp(-s*3.2);this.rocker.rotation.z+=(R.clamp(m,-.09,.09)-this.rocker.rotation.z)*w,this.rocker.rotation.x+=(R.clamp(d,-.11,.11)-this.rocker.rotation.x)*w,this.rocker.position.y+=(v+p*.004-this.rocker.position.y)*(1-Math.exp(-s*4))}place(t,e,s,i,o,a=null){const r=i*$i;this.group.position.set(t.x,0,t.z);let c=Math.atan2(-e.z,e.x)-this.heading;c=Math.atan2(Math.sin(c),Math.cos(c)),this.heading+=c*(1-Math.exp(-o*4)),this.wiggle=R.damp(this.wiggle,R.clamp(s,-3,3),2.5,o);const h=Math.min(0,this.wiggle)*.05*Math.sin(r*.9);this.group.rotation.y=this.heading+h;const u=Math.abs(this.wiggle);a?this.float(a,r,o):(this.rocker.position.y=Math.sin(r*1.7)*.022+Math.sin(r*2.9+1)*.01,this.rocker.rotation.x=Math.sin(r*1.25)*.045+Math.sin(r*.7)*.02,this.rocker.rotation.z=Math.sin(r*1.05+.8)*.03-this.wiggle*.02),this.rocker.rotation.y=Math.sin(r*.55)*.03*(1+u*.3)}}class yi{constructor({height:t=0,scale:e=.5,clipBias:s=.003,samples:i=0}={}){this.height=t,this.scale=e,this.clipBias=s,this.camera=new ts,this.camera.matrixAutoUpdate=!0,this.textureMatrix=new J,this.target=new Qe(16,16,{type:Ci,samples:i,depthBuffer:!0}),this.target.texture.generateMipmaps=!1,this.enabled=!0,this._plane=new Ei,this._normal=new g(0,1,0),this._pos=new g,this._camPos=new g,this._rot=new J,this._look=new g,this._view=new g,this._target=new g,this._clip=new hs,this._q=new hs}setSize(t,e){this.target.setSize(Math.max(16,Math.round(t*this.scale)),Math.max(16,Math.round(e*this.scale)))}update(t,e,s,{before:i,after:o}={}){if(!this.enabled)return!1;const a=this._normal;if(this._pos.set(0,this.height,0),this._camPos.setFromMatrixPosition(s.matrixWorld),this._view.subVectors(this._pos,this._camPos),this._view.dot(a)>0)return!1;this._view.reflect(a).negate().add(this._pos),this._view.x=this._camPos.x,this._view.z=this._camPos.z,this._view.y=2*this.height-this._camPos.y,this._rot.extractRotation(s.matrixWorld),this._look.set(0,0,-1).applyMatrix4(this._rot).add(this._camPos),this._target.subVectors(this._pos,this._look).reflect(a).negate().add(this._pos),this._target.x=this._look.x,this._target.z=this._look.z,this._target.y=2*this.height-this._look.y;const r=this.camera;r.position.copy(this._view),r.up.set(0,1,0).applyMatrix4(this._rot).reflect(a),r.lookAt(this._target),r.near=s.near,r.far=s.far,r.fov=s.fov,r.aspect=s.aspect,r.updateMatrixWorld(),r.projectionMatrix.copy(s.projectionMatrix),this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(r.projectionMatrix).multiply(r.matrixWorldInverse),this._plane.setFromNormalAndCoplanarPoint(a,this._pos).applyMatrix4(r.matrixWorldInverse);const n=this._clip.set(this._plane.normal.x,this._plane.normal.y,this._plane.normal.z,this._plane.constant),c=r.projectionMatrix,h=c.elements,u=this._q;u.x=(Math.sign(n.x)+h[8])/h[0],u.y=(Math.sign(n.y)+h[9])/h[5],u.z=-1,u.w=(1+h[10])/h[14],n.multiplyScalar(2/n.dot(u)),h[2]=n.x,h[6]=n.y,h[10]=n.z+1-this.clipBias,h[14]=n.w,r.projectionMatrixInverse.copy(c).invert();const f=t.getRenderTarget(),p=t.xr.enabled,m=t.shadowMap.autoUpdate;return t.xr.enabled=!1,t.shadowMap.autoUpdate=!1,i?.(),t.setRenderTarget(this.target),t.state.buffers.depth.setMask(!0),t.autoClear===!1&&t.clear(),t.render(e,r),o?.(),t.xr.enabled=p,t.shadowMap.autoUpdate=m,t.setRenderTarget(f),!0}}class Fa{constructor(t){this.renderer=t,this.scene=new es,this.camera=new ts(38,1,.05,200);const e=this.scene,s=new j(new ft(1,48,24),new K({side:ss,depthWrite:!1,uniforms:{...U},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * mat4(mat3(viewMatrix)) * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`
        #include <common>
        ${mt}
        varying vec3 vDir;
        float bokeh(vec2 uv, float scale, float seed) {
          vec2 g = uv * scale; vec2 i = floor(g); vec2 f = fract(g);
          float acc = 0.0;
          for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
            vec2 c = i + vec2(float(x), float(y));
            float h = hash13(vec3(c, seed));
            if (h < 0.68) continue;
            vec2 o = vec2(hash13(vec3(c, seed + 1.0)), hash13(vec3(c, seed + 2.0)));
            float r = length(vec2(float(x), float(y)) + o - f);
            float size = 0.18 + 0.25 * hash13(vec3(c, seed + 3.0));
            acc += exp(-pow(r / size, 2.0) * 2.2) * (0.4 + 0.6 * h);
          }
          return acc;
        }
        void main() {
          vec3 d = normalize(vDir);
          float h = d.y;
          vec2 uv = vec2(atan(d.x, -d.z) * 2.0, h * 3.0);
          // dark green-brown bank with vertical tree masses
          float trees = vnoise(vec3(uv.x * 3.0, uv.y * 0.6, 1.0));
          vec3 col = mix(vec3(0.03, 0.035, 0.03), vec3(0.16, 0.13, 0.1), smoothstep(0.0, 0.9, h + trees * 0.3));
          col = mix(col, vec3(0.22, 0.17, 0.17), smoothstep(0.35, 0.9, h) * 0.6);
          float b1 = bokeh(uv, 3.0, 1.0), b2 = bokeh(uv + 7.3, 6.0, 5.0);
          vec3 pink = vec3(1.0, 0.55, 0.7), warm = vec3(1.0, 0.85, 0.65);
          col += (pink * b1 * 0.38 + warm * b2 * 0.12) * smoothstep(0.02, 0.35, h);
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}));s.frustumCulled=!1,s.renderOrder=-10,e.add(s),this.reflection=new yi({height:0,scale:1,samples:4}),this.waterUniforms={...U,uReflection:{value:this.reflection.target.texture},uTextureMatrix:{value:this.reflection.textureMatrix}};const i=new j(new Pt(80,80,1,1),new K({uniforms:this.waterUniforms,vertexShader:"uniform mat4 uTextureMatrix; varying vec3 vWorld; varying vec4 vRefl; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz; vRefl = uTextureMatrix * w; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
        #include <common>
        ${mt}
        uniform sampler2D uReflection;
        varying vec3 vWorld; varying vec4 vRefl;
        vec2 cell(vec2 p) {
          vec2 i = floor(p), f = fract(p); float d1 = 8.0, d2 = 8.0;
          for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
            vec2 g = vec2(float(x), float(y)); vec2 o = vec2(hash13(vec3(i + g, 1.0)), hash13(vec3(i + g, 7.0)));
            float d = length(g + o - f); if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
          }
          return vec2(d1, d2);
        }
        float H(vec2 p) {
          float r = length(p);
          float rings = sin(r * 20.0 - uTime * 2.2) * exp(-r * 1.6) * 0.08;
          return rings + vnoise(vec3(p * 1.2, uTime * 0.12)) * 0.12 + vnoise(vec3(p * 3.5, uTime * 0.25)) * 0.03;
        }
        void main() {
          vec2 p = vWorld.xz;
          float e = 0.03;
          vec2 g = vec2(H(p + vec2(e, 0.0)) - H(p), H(p + vec2(0.0, e)) - H(p)) / e;
          vec3 N = normalize(vec3(-g.x * 0.25, 1.0, -g.y * 0.25));
          vec3 V = normalize(cameraPosition - vWorld);
          float fres = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
          fres = mix(fres, 1.0, 0.58);
          vec2 uv = vRefl.xy / vRefl.w + N.xz * 0.05;
          // soft, slightly vertically stretched blur: close taps only, so edges soften instead of doubling
          vec2 px = vec2(0.0012, 0.0022);
          vec3 refl = texture2D(uReflection, uv).rgb * 0.36;
          refl += (texture2D(uReflection, uv + vec2(0.0, px.y)).rgb + texture2D(uReflection, uv - vec2(0.0, px.y)).rgb) * 0.2;
          refl += (texture2D(uReflection, uv + vec2(px.x, 0.0)).rgb + texture2D(uReflection, uv - vec2(px.x, 0.0)).rgb) * 0.12;
          // art direction: the mirror image is 10% less saturated and 10% darker than the scene it reflects
          refl = mix(vec3(dot(refl, vec3(0.2126, 0.7152, 0.0722))), refl, 0.9) * 0.9;
          // pebbles seen through the water (refraction offset by view angle)
          vec2 rp = p * 2.6 + V.xz / max(V.y, 0.2) * 0.12 + N.xz * 0.15;
          vec2 c = cell(rp);
          float pebble = smoothstep(0.62, 0.18, c.x) * smoothstep(0.0, 0.12, c.y - c.x);
          float tone = hash13(vec3(floor(rp + 0.5), 3.0));
          vec3 stoneCol = mix(vec3(0.16, 0.11, 0.07), vec3(0.26, 0.2, 0.14), tone);
          vec3 bed = mix(vec3(0.025, 0.02, 0.015), stoneCol * (0.75 + 0.35 * (1.0 - c.x)), pebble);
          bed *= vec3(0.5, 0.45, 0.38) * smoothstep(9.0, 2.5, length(vWorld - cameraPosition));
          vec3 col = mix(bed, refl, fres);
          vec3 R = reflect(-V, N);
          col += uSunColor * pow(max(dot(R, normalize(vec3(-0.3, 0.5, -1.0))), 0.0), 160.0) * 1.3;
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}));i.rotation.x=-Math.PI/2,i.renderOrder=2,this.water=i,e.add(i),this.boat=new wi({scale:1}),e.add(this.boat.group);const o=new at(31),a=Yt(),r=["cosmos","blossom","camellia"],n=new ii;for(const c of r){const h=c==="blossom"?9:4,u=new St(is(c,{detail:2,seed:9}),a,h);for(let f=0;f<h;f++){let p,m;do p=o.float(-4.5,4.5),m=o.float(-6,2.2);while(Math.hypot(p,m)<1);n.position.set(p,.015,m),n.rotation.set(o.float(-.06,.06),o.float(0,6.3),o.float(-.06,.06)),n.scale.setScalar(o.float(.2,.32)),n.updateMatrix(),u.setMatrixAt(f,n.matrix),u.setColorAt(f,new N(o.pick(["#f6a9bf","#f4b7c9","#efa0b8","#f8c3d1"])))}e.add(u)}}setSize(t,e,s){this.camera.aspect=t/e,this.camera.fov=t/e<.9?52:38,this.camera.updateProjectionMatrix(),this.reflection.setSize(t*s,e*s)}update(t,e){const s=Math.sin(e*.07)*.35-.55,i=3.1+Math.sin(e*.11)*.25,a=this.camera.aspect>1.1?.7:0;this.camera.position.set(Math.sin(s)*i,1.15+Math.sin(e*.13)*.08,Math.cos(s)*i);const r=new g(Math.cos(s),0,-Math.sin(s));this.camera.lookAt(r.multiplyScalar(-a).add(new g(0,.2,0))),this.camera.updateMatrixWorld();const n=s+.42+Math.sin(e*.09)*.12;this.boat.place(new g(0,0,0),new g(Math.cos(n),0,-Math.sin(n)),0,e,Math.max(t,1/60))}render(t){this.water.visible=!1,this.reflection.update(t,this.scene,this.camera),this.water.visible=!0,t.render(this.scene,this.camera)}}const Ft=.1;class Pa{constructor(){this.routeStartS=_t.preS,this.routeLength=_t.length,this.routeEndS=_t.preS+_t.length,this.length=this.routeEndS+_t.postS;const t=this.samples=Math.ceil(this.length/Ft);this.lutPos=new Float32Array((t+1)*3),this.lutTan=new Float32Array((t+1)*3),this.lutK=new Float32Array(t+1);let e=0,s=0,i=0;for(let o=0;o<=t;o++){const a=o*Ft,r=this.authoredCurvature(a);this.lutK[o]=r,this.lutPos.set([s,0,i],o*3),this.lutTan.set([Math.sin(e),0,-Math.cos(e)],o*3);const n=this.authoredCurvature(a+Ft*.5),c=e+n*Ft*.5;s+=Math.sin(c)*Ft,i-=Math.cos(c)*Ft,e+=n*Ft}this.buildProjectionGrid(),this.buildFoldTable()}authoredCurvature(t){const e=(t-_t.preS)/_t.length;let s=0;for(const i of ro){const o=(e-i.p)/i.w;o<=-1||o>=1||(s+=i.turn/(i.w*_t.length)*.5*(1+Math.cos(Math.PI*o)))}return s}_index(t){const e=R.clamp(t/Ft,0,this.samples),s=Math.min(this.samples-1,Math.floor(e));return[s,e-s]}pointAt(t,e=new g){if(t<0||t>this.length){const n=t<0?0:this.length;this.pointAt(n,e);const c=this.tangentAt(n,ee);return e.addScaledVector(c,t-n)}const[s,i]=this._index(t),o=s*3,a=o+3,r=this.lutPos;return e.set(r[o]+(r[a]-r[o])*i,0,r[o+2]+(r[a+2]-r[o+2])*i)}tangentAt(t,e=new g){const[s,i]=this._index(t),o=s*3,a=o+3,r=this.lutTan;return e.set(r[o]+(r[a]-r[o])*i,0,r[o+2]+(r[a+2]-r[o+2])*i).normalize()}curvatureAt(t){const[e,s]=this._index(t);return this.lutK[e]+(this.lutK[e+1]-this.lutK[e])*s}innerLimit(t,e,s=3){const i=this.curvatureAt(t)*e,o=i>1e-4?(s>0?.82:1.08)/i:1/0;return Math.min(o,this.foldLimit(t,e)-s)}buildFoldTable(){const s=Math.ceil((this.length+80)/.5),i=[new Float32Array(s+1),new Float32Array(s+1)],o=this.grid,a=new g;for(let r=0;r<=s;r++){const n=-40+r*.5;R.clamp(n,0,this.length);for(let c=0;c<2;c++){const h=c?1:-1;let u=140;for(let f=4;f<=140;f+=1){this.toWorld(n,h*f,0,a);const p=Math.round((a.x-o.x0)/o.cell),m=Math.round((a.z-o.z0)/o.cell);if(p<0||m<0||p>=o.nx||m>=o.nz)break;const d=o.dist[m*o.nx+p];if(d<1e8&&d<f-1.4-f*.03){u=f+2;break}}i[c][r]=u}}this.fold={s0:-40,ds:.5,n:s,sides:i.map(r=>{const n=new Float32Array(r.length),c=new Float32Array(r.length);for(let h=0;h<r.length;h++){let u=1/0;for(let f=-2;f<=2;f++)u=Math.min(u,r[R.clamp(h+f,0,r.length-1)]);n[h]=u}for(let h=0;h<r.length;h++){let u=0;for(let f=-3;f<=3;f++)u+=n[R.clamp(h+f,0,r.length-1)];c[h]=u/7}return c})}}foldLimit(t,e){const s=this.fold,i=R.clamp((t-s.s0)/s.ds,0,s.n-.001),o=Math.floor(i),a=s.sides[e>0?1:0];return a[o]+(a[o+1]-a[o])*(i-o)}rightAt(t,e=new g){return this.tangentAt(t,e),e.set(-e.z,0,e.x).normalize()}toWorld(t,e,s=0,i=new g){this.pointAt(t,i);const o=this.rightAt(R.clamp(t,0,this.length),Ue);return i.addScaledVector(o,e),i.y=s,i}progressAtS(t){return(t-this.routeStartS)/this.routeLength}halfWidthAt(t){const e=this.progressAtS(t);return wt.at("stream.halfWidth",e)*(1+.1*Math.sin(t*.21+.7)+.06*Math.sin(t*.57+2.1))+vo(e)}buildProjectionGrid(){let s=1/0,i=-1/0,o=1/0,a=-1/0;for(let u=0;u<=this.samples;u+=10){const f=this.lutPos[u*3],p=this.lutPos[u*3+2];s=Math.min(s,f),i=Math.max(i,f),o=Math.min(o,p),a=Math.max(a,p)}const r=this.grid={x0:s-128,z0:o-128,cell:1};r.nx=Math.ceil((i-s+256)/1)+1,r.nz=Math.ceil((a-o+256)/1)+1,r.s=new Float32Array(r.nx*r.nz).fill(-1);const n=new Float32Array(r.nx*r.nz).fill(1e9),c=new g,h=new g;for(let u=0;u<=this.length;u+=.25){this.pointAt(u,c),this.rightAt(u,h);for(let f=-128;f<=128;f+=.5){const p=Math.round((c.x+h.x*f-r.x0)/1),m=Math.round((c.z+h.z*f-r.z0)/1);if(p<0||m<0||p>=r.nx||m>=r.nz)continue;const d=m*r.nx+p,v=Math.abs(f);v<n[d]&&(n[d]=v,r.s[d]=u)}}r.dist=n;for(let u=0;u<3;u++)for(let f=1;f<r.nz-1;f++)for(let p=1;p<r.nx-1;p++){const m=f*r.nx+p;if(r.s[m]>=0)continue;const d=[m-1,m+1,m-r.nx,m+r.nx].find(v=>r.s[v]>=0);d!==void 0&&(r.s[m]=r.s[d])}}project(t,e,s={s:0,lateral:0}){const i=this.grid,o=Math.round((t-i.x0)/i.cell),a=Math.round((e-i.z0)/i.cell);let r=o>=0&&a>=0&&o<i.nx&&a<i.nz?i.s[a*i.nx+o]:-1;if(r<0){const f=this.pointAt(0,ee),p=(f.x-t)**2+(f.z-e)**2,m=this.pointAt(this.length,Ue),d=(m.x-t)**2+(m.z-e)**2;r=p<d?0:this.length}let n=r,c=1/0;for(let f=r-2.5;f<=r+2.5;f+=.25){const p=this.pointAt(f,ee),m=(p.x-t)**2+(p.z-e)**2;m<c&&(c=m,n=f)}for(let f=n-.25;f<=n+.25;f+=.025){const p=this.pointAt(f,ee),m=(p.x-t)**2+(p.z-e)**2;m<c&&(c=m,n=f)}const h=this.pointAt(n,ee),u=this.rightAt(R.clamp(n,0,this.length),Ue);return s.s=n,s.lateral=(t-h.x)*u.x+(e-h.z)*u.z,s}progressToS(t){return this.routeStartS+R.clamp(t,0,1)*this.routeLength}sToProgress(t){return(t-this.routeStartS)/this.routeLength}}const ee=new g,Ue=new g;function Ia(){const l=new ft(1,48,24),t=new K({uniforms:{...U},side:ss,depthWrite:!1,vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = position;
        vec4 p = projectionMatrix * mat4(mat3(viewMatrix)) * vec4(position, 1.0);
        gl_Position = p.xyww;
      }`,fragmentShader:`
      #include <common>
      ${mt}
${$t}
      varying vec3 vDir;
      // V4.8 attraction hooks, neutral at 0 / 1 / 0 (see Atmosphere.js)
      uniform float uCloudContrast; uniform float uCloudBright; uniform float uCloudOpen;
      // V4.9.3 hooks, neutral 0 (Garden 04 storm masses)
      uniform float uStormDeck; uniform float uStormDrift;
      float fbm(vec2 p, float z) {
        float a = 0.5, s = 0.0;
        for (int i = 0; i < 5; i++) { s += a * vnoise(vec3(p, z)); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; }
        return s;
      }
      float cloudDensity(vec2 uv, float t, float cover) {
        float base = fbm(uv * 0.42 + vec2(t, t * 0.35), 0.0);
        float detail = fbm(uv * 1.35 - vec2(t * 1.7, t * 0.2), 4.0);
        float n = base * 0.78 + detail * 0.34;
        // coverage: 0 = a few wisps, 1 = closed overcast
        float lo = mix(0.78, 0.18, cover);
        return smoothstep(lo, lo + mix(0.18, 0.42, cover), n);
      }
      void main() {
        vec3 dir = normalize(vDir);
        vec3 col = skyGradient(dir);
        float h = dir.y;
        float sun = max(dot(dir, uSunDir), 0.0);
        float cover = uCloudAmount;
        // overcast darkens and greys the whole dome
        col = mix(col, mix(col, vec3(dot(col, vec3(0.3, 0.55, 0.15))) * 0.82, 0.6), smoothstep(0.6, 1.0, cover) * uCloudDark);
        if (h > -0.03) {
          vec2 uv = dir.xz / (h + 0.16);
          float t = uTime * 0.0075 * (0.6 + uWind * 0.5);
          float d = cloudDensity(uv, t, cover);
          // self-shadowing: sample again a little toward the sun
          vec2 sunUV = normalize(uSunDir.xz + 1e-4) * 0.35;
          float d2 = cloudDensity(uv + sunUV, t, cover);
          float lit = clamp(1.0 - (d2 - d) * 2.2 - d * 0.35, 0.0, 1.0);
          vec3 litCol = mix(vec3(1.0, 0.94, 0.88), uSunGlow * 1.05, 0.35 + 0.4 * pow(sun, 3.0));
          vec3 belly = mix(vec3(0.66, 0.62, 0.76), vec3(0.42, 0.44, 0.52), uCloudDark);
          if (uCloudOpen > 0.0) {
            // the deck parts around the sun: a ragged, slowly widening hole
            float rag = fbm(uv * 0.9 + vec2(t * 3.0, 1.3), 7.0);
            float hole = smoothstep(0.62, 0.9, sun + (rag - 0.5) * 0.35 + uCloudOpen * 0.32 - 0.32);
            float k = clamp(uCloudOpen * 1.25, 0.0, 1.0) * hole;
            d *= 1.0 - k;
            lit = mix(lit, 1.0, k * 0.3);
          }
          if (uCloudContrast > 0.0) {
            // storm deck: harder edges, near-black bellies, sharp bright tops
            d = mix(d, smoothstep(0.12, 0.62, d), uCloudContrast);
            lit = mix(lit, smoothstep(0.42, 0.9, lit), uCloudContrast);
            belly *= 1.0 - 0.62 * uCloudContrast;
            litCol *= 1.0 + 0.35 * uCloudContrast;
          }
          if (uCloudBright != 1.0) litCol *= uCloudBright;
          vec3 cloud = mix(belly, litCol * mix(1.0, 0.72, uCloudDark), lit * uSunVis + (1.0 - uSunVis) * 0.35);
          // silver lining toward the light at thin edges
          cloud += uSunGlow * pow(sun, 6.0) * (1.0 - d) * 0.9 * uSunVis;
          float fade = smoothstep(-0.02, 0.1, h) * (1.0 - smoothstep(0.8, 1.0, h) * 0.4);
          col = mix(col, cloud, d * fade * 0.95);
          // distant cumulus masses on the horizon
          float az = atan(dir.x, -dir.z);
          float m = fbm(vec2(az * 2.6, h * 9.0) + vec2(t * 2.0, 3.0), 3.0);
          float mass = smoothstep(0.62 - cover * 0.2, 0.8 - cover * 0.2, m) * smoothstep(0.34, 0.03, h) * smoothstep(-0.02, 0.04, h);
          vec3 massCol = mix(belly * 1.15, litCol, 0.35 + 0.5 * pow(sun, 2.0) * uSunVis);
          col = mix(col, massCol, mass * 0.6);
          if (uStormDeck > 0.0) {
            // V4.9.3 storm masses (off at 0): a lower, nearer layer of large cumulonimbus masses that fills the band
            // of sky seen from the boat. Near-black bellies, silver edges lit from above, an inner churn, drifting
            // downwind on uStormDrift (integrated by the storm, so a wind change never jumps them). The threshold
            // falls as uStormDeck grows: masses gather, merge, and break apart again instead of fading as a sheet.
            vec2 suv = dir.xz / (h + 0.42) * 0.95;
            vec2 drift = vec2(uStormDrift, uStormDrift * 0.22);
            float n2 = fbm(suv * 2.4 + drift * 1.7 + vec2(0.0, uStormDrift * 0.35), 17.0);
            float n = fbm(suv + drift, 13.0) * 0.78 + n2 * 0.3;
            float nUp = fbm(suv * 0.9 + drift, 13.0) * 0.78 + n2 * 0.3; // the same mass a little higher up
            float thr = mix(0.7, 0.47, uStormDeck);
            float ds = smoothstep(thr, thr + 0.15, n);
            float dsUp = smoothstep(thr, thr + 0.15, nUp);
            float sLit = clamp((ds - dsUp) * 2.6, 0.0, 1.0); // thinning upward = an upper edge facing the light
            float core = smoothstep(0.35, 0.95, ds);
            vec3 sBody = vec3(0.13, 0.135, 0.16);
            vec3 sBelly = vec3(0.03, 0.034, 0.045);
            vec3 sRim = vec3(0.8, 0.82, 0.88) * uCloudBright;
            vec3 sc = mix(sBody, sBelly, core * smoothstep(0.5, 0.04, h));
            sc = mix(sc, sRim, sLit * (1.0 - core * 0.55));
            sc += sRim * ds * (1.0 - ds) * 0.9;
            float sFade = smoothstep(-0.01, 0.07, h) * (1.0 - smoothstep(0.5, 0.85, h));
            col = mix(col, sc, ds * sFade * min(1.0, uStormDeck * 1.6) * 0.96);
          }
          // crepuscular rays: radial light through gaps once the sun breaks through
          if (uRays > 0.001) {
            vec3 axis = uSunDir;
            vec3 tA = normalize(cross(axis, vec3(0.0, 1.0, 0.0)));
            vec3 tB = cross(tA, axis);
            float ang = atan(dot(dir, tB), dot(dir, tA));
            float streak = vnoise(vec3(ang * 9.0, 0.0, uTime * 0.03)) * 0.6 + vnoise(vec3(ang * 23.0, 5.0, uTime * 0.05)) * 0.4;
            // rays live where the cloud deck is broken: strongest at partial cover, not in clear sky
            float gap = smoothstep(0.05, 0.45, d) * (1.0 - smoothstep(0.75, 1.0, d)) + 0.25;
            float rays = smoothstep(0.5, 0.88, streak) * pow(sun, 4.0) * gap * uRays;
            col += uSunGlow * rays * 0.4;
          }
        }
        col += uSunGlow * pow(sun, 18.0) * 0.5 * uSunVis;
        col += uSunGlow * pow(sun, 400.0) * 2.0 * uSunVis;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        GARDEN_GRADE_SCALED(uGradeSky) // the luminous dawn sky moves only slightly
      }`}),e=new j(l,t);return e.frustumCulled=!1,e.renderOrder=-10,e.name="sky",e}class Na{constructor(t,{reflections:e="planar",reflectionScale:s=.5}={}){this.route=t,this.mode=e,this.reflection=new yi({height:0,scale:s}),this.reflection.enabled=e==="planar",this.uniforms={...U,uReflection:{value:this.reflection.target.texture},uTextureMatrix:{value:this.reflection.textureMatrix},uUsePlanar:{value:this.reflection.enabled?1:0},uBoat:{value:new g(0,0,9999)},uBoatSpeed:{value:0},uBoatDir:{value:new Mt(0,-1)},uWaterBody:U.uWaterBody},this.mesh=this.createMesh()}createMesh(){const t=this.route,e=-24,s=t.length+34,i=.35,o=[-1,-.82,-.62,-.4,-.2,0,.2,.4,.62,.82,1],a=Math.ceil((s-e)/i),r=[],n=[],c=[],h=[],u=new g;for(let v=0;v<=a;v++){const w=e+v*i,y=t.halfWidthAt(w),M=y+.9;for(const x of o)t.toWorld(w,x*M,0,u),r.push(u.x,0,u.z),n.push(w,x*M),c.push(y)}const f=o.length;for(let v=0;v<a;v++)for(let w=0;w<f-1;w++){const y=v*f+w,M=y+1,x=y+f,A=x+1;h.push(y,M,x,M,A,x)}const p=new dt;p.setAttribute("position",new X(r,3)),p.setAttribute("uv",new X(n,2)),p.setAttribute("aHW",new X(c,1)),p.setIndex(h),p.computeBoundingSphere();const m=new K({uniforms:this.uniforms,transparent:!0,depthWrite:!1,vertexShader:`
        uniform mat4 uTextureMatrix;
        attribute float aHW;
        varying vec3 vWorld; varying vec2 vRoute; varying vec4 vRefl; varying float vHW;
        void main() {
          vec4 w = modelMatrix * vec4(position, 1.0);
          vWorld = w.xyz; vRoute = uv; vHW = aHW;
          vRefl = uTextureMatrix * w;
          gl_Position = projectionMatrix * viewMatrix * w;
        }`,fragmentShader:`
        #include <common>
        ${mt}
${$t}
        uniform sampler2D uReflection;
        uniform float uUsePlanar;
        uniform vec3 uBoat;
        uniform float uBoatSpeed;
        uniform vec2 uBoatDir;
        uniform vec3 uWaterBody;
        // V4.8 attraction hooks, neutral at 1 / 1 / 0 (see Atmosphere.js)
        uniform float uRippleGain; uniform float uReflectDistort; uniform float uImpactBoost;
        // V4.9.3 hook, neutral 0: d(uRain)/dt. A ring is tested against the rain level of the moment it was born,
        // so as the rain thins, rings already on the water finish their life instead of vanishing mid-ring.
        uniform float uRainRate;
        varying vec3 vWorld; varying vec2 vRoute; varying vec4 vRefl; varying float vHW;

        float waterH(vec2 p) {
          float t = uTime;
          // p.x = lateral, p.y = downstream distance. Flow carries detail downstream.
          float h = vnoise(vec3(p.x * 0.9, (p.y - t * 0.55) * 0.55, t * 0.12)) * 0.55;
          h += vnoise(vec3(p.x * 2.3, (p.y - t * 0.8) * 1.7, t * 0.3 + 4.0)) * 0.28;
          h += vnoise(vec3(p.x * 6.0, (p.y - t * 1.1) * 4.5, t * 0.6 + 9.0)) * 0.12;
          h += sin(p.y * 3.1 - t * 1.6 + sin(p.x * 1.7) * 1.2) * 0.04;
          return h;
        }

        vec3 approxReflection(vec3 r, vec3 world) {
          vec3 c = skyGradient(normalize(vec3(r.x, max(r.y, 0.02), r.z)));
          // procedural "flower wall" colour bands where the reflected ray would hit the corridor walls
          float wall = smoothstep(0.42, 0.08, r.y);
          float n = vnoise(vec3(world.z * 0.35, r.y * 6.0, sign(r.x) * 3.0));
          float m = vnoise(vec3(world.z * 0.9, r.y * 12.0, sign(r.x) * 7.0 + 2.0));
          vec3 a = mix(vec3(0.62, 0.04, 0.12), vec3(0.95, 0.38, 0.08), n);
          vec3 b = mix(vec3(0.85, 0.2, 0.45), vec3(0.95, 0.72, 0.18), m);
          vec3 flowers = mix(a, b, smoothstep(0.3, 0.7, vnoise(vec3(world.z * 0.6, r.y * 9.0, 1.0))));
          flowers = mix(flowers, vec3(0.45, 0.3, 0.7), smoothstep(0.75, 0.9, vnoise(vec3(world.z * 0.4, r.y * 5.0, 5.0))) * 0.6);
          return mix(c, flowers * 0.8, wall * 0.92);
        }

        // spring-shower impact rings: two jittered cell layers, each cell drops at its own rhythm
        vec2 rainRipples(vec2 p) {
          vec2 g = vec2(0.0);
          for (int k = 0; k < 2; k++) {
            float fk = float(k);
            vec2 q = p * (2.8 + fk * 1.3) + fk * 7.31;
            vec2 i = floor(q), f = fract(q);
            for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
              vec2 o = vec2(float(x), float(y));
              vec2 c = o + vec2(hash13(vec3(i + o, 3.0 + fk)), hash13(vec3(i + o, 9.0 + fk))) * 0.8 + 0.1 - f;
              float ph = hash13(vec3(i + o, 17.0 + fk));
              float th = uRain;
              if (uRainRate != 0.0) th -= uRainRate * fract(uTime * (0.85 + ph * 0.7) + ph * 5.0) / (0.85 + ph * 0.7);
              if (ph > th * 0.97) continue;
              float t = fract(uTime * (0.85 + ph * 0.7) + ph * 5.0);
              float r = length(c);
              float w = r - t * 0.75;
              float amp = (1.0 - t) * (1.0 - t);
              g += normalize(c + 1e-4) * sin(w * 46.0) * exp(-w * w * 160.0) * amp * amp;
            }
          }
          return g;
        }

        // V4.8 storm impacts (only when uImpactBoost > 0): bigger, brighter crowned rings on a coarser grid.
        // xy = normal gradient, z = crest brightness. Density follows uRain like the shower rings.
        vec3 stormImpacts(vec2 p) {
          vec3 g = vec3(0.0);
          for (int k = 0; k < 2; k++) {
            float fk = float(k);
            vec2 q = p * (1.55 + fk * 0.9) + fk * 3.17 + 11.0;
            vec2 i = floor(q), f = fract(q);
            for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
              vec2 o = vec2(float(x), float(y));
              vec2 c = o + vec2(hash13(vec3(i + o, 23.0 + fk)), hash13(vec3(i + o, 29.0 + fk))) * 0.8 + 0.1 - f;
              float ph = hash13(vec3(i + o, 37.0 + fk));
              float th = uRain;
              if (uRainRate != 0.0) th -= uRainRate * fract(uTime * (0.7 + ph * 0.6) + ph * 7.0) / (0.7 + ph * 0.6);
              if (ph > th * 0.98) continue;
              float t = fract(uTime * (0.7 + ph * 0.6) + ph * 7.0);
              float r = length(c);
              float w = r - t * 0.62;
              float amp = (1.0 - t) * (1.0 - t);
              float ringW = exp(-w * w * 110.0) * amp;
              g.xy += normalize(c + 1e-4) * sin(w * 34.0) * ringW * amp;
              g.z += max(sin(w * 34.0), 0.0) * ringW + exp(-r * r * 900.0) * smoothstep(0.12, 0.0, t) * 2.0;
            }
          }
          return g;
        }

        void main() {
          vec2 p = vec2(vRoute.y, vRoute.x);
          float e = 0.06;
          float h0 = waterH(p);
          float hx = waterH(p + vec2(e, 0.0));
          float hz = waterH(p + vec2(0.0, e));
          vec2 grad = vec2(hx - h0, hz - h0) / e;

          // hull ripples and wake around the boat
          vec2 d2 = vWorld.xz - uBoat.xz;
          float d = length(d2);
          float ring = sin(d * 26.0 - uTime * 4.2) * exp(-d * 2.6) * 0.5;
          float back = max(dot(normalize(d2 + 1e-4), -uBoatDir), 0.0);
          float wake = sin(d * 18.0 - uTime * 6.0) * exp(-d * 1.1) * smoothstep(0.55, 0.95, back) * uBoatSpeed * 0.6;
          vec2 rippleGrad = normalize(d2 + 1e-4) * (ring + wake) * 1.3;

          // distance inside the water from the bank line (negative = under the bank)
          float lat = abs(vRoute.y);
          float edge = vHW - lat;
          // lapping lines that run along the shore and fade toward the middle
          float lap = sin(edge * 24.0 - uTime * 1.9 + vRoute.x * 0.7) * exp(-max(edge, 0.0) * 4.0) * smoothstep(-0.25, 0.05, edge);

          vec3 N = normalize(vec3(-(grad.x + rippleGrad.x) * 0.22, 1.0, -(grad.y * 0.18 + rippleGrad.y * 0.22)));
          if (uRippleGain != 1.0) {
            // V4.8 storm wind: steeper chop plus a fast fine agitation layer
            vec2 fine = vec2(vnoise(vec3(p * 7.0, uTime * 2.2)) - 0.5, vnoise(vec3(p * 7.0 + 5.3, uTime * 2.4)) - 0.5);
            vec2 gg = (grad + rippleGrad) * uRippleGain + fine * 2.4 * max(uRippleGain - 1.0, 0.0);
            N = normalize(vec3(-gg.x * 0.22, 1.0, -(gg.y * 0.18 + rippleGrad.y * 0.04 * uRippleGain)));
          }
          N = normalize(N + vec3(sign(vRoute.y) * lap * 0.05, 0.0, 0.0));
          if (uRain > 0.01) {
            vec2 rg = rainRipples(vWorld.xz);
            N = normalize(N + vec3(-rg.x, 0.0, -rg.y) * 0.2 * smoothstep(0.0, 0.4, uRain));
          }
          float impactCrest = 0.0;
          if (uImpactBoost > 0.0) {
            vec3 si = stormImpacts(vWorld.xz);
            N = normalize(N + vec3(-si.x, 0.0, -si.y) * 0.32 * uImpactBoost);
            impactCrest = si.z * uImpactBoost;
          }
          vec3 V = normalize(cameraPosition - vWorld);
          float ndv = max(dot(N, V), 0.0);
          float fresnel = 0.02 + 0.98 * pow(1.0 - ndv, 5.0);
          fresnel = clamp(mix(fresnel, 1.0, 0.22), 0.0, 1.0);

          vec3 R = reflect(-V, N);
          vec3 refl;
          if (uUsePlanar > 0.5) {
            vec2 distort = N.xz * (0.055 + 0.03 * uRain);
            if (uReflectDistort != 1.0) distort *= uReflectDistort;
            vec4 c = vRefl;
            vec2 uv = c.xy / c.w + distort;
            refl = texture2D(uReflection, uv).rgb * 0.4;
            refl += texture2D(uReflection, uv + vec2(0.0, 0.006)).rgb * 0.22;
            refl += texture2D(uReflection, uv - vec2(0.0, 0.006)).rgb * 0.22;
            refl += texture2D(uReflection, uv + vec2(0.003, 0.014)).rgb * 0.16;
          } else {
            refl = approxReflection(R, vWorld);
          }
          // rain roughens and greys the mirror a little
          refl = mix(refl, vec3(dot(refl, vec3(0.3, 0.55, 0.15))), 0.2 * uRain);

          // water body: per-garden tint, deeper toward the middle, light scattering toward the sun
          float sunSide = pow(max(dot(-V, uSunDir), 0.0), 3.0);
          float deep = smoothstep(0.1, 1.2, edge);
          vec3 body = mix(uWaterBody * 1.6, uWaterBody * 0.7, deep) + uSunColor * 0.04 * sunSide;
          vec3 col = mix(body, refl, fresnel);
          // soft bank shadow: overhanging vegetation darkens the water near the shore
          col *= mix(1.0, 0.66, smoothstep(0.75, -0.1, edge));
          float sunR = max(dot(R, uSunDir), 0.0);
          float spec = pow(sunR, 220.0) * 6.0 + pow(sunR, 24.0) * 0.35;
          col += uSunColor * spec * (0.6 + 0.4 * fresnel) * uSunVis;
          // glitter: tiny sun points dancing on the surface once the sun is back on wet ground
          // (Garden 05 speckle repair, approved 2026-11-15, V4.9.7: only along the sun's glitter path (lobe 48, was 5)
          //  and only the noise peaks (0.93-0.99, was 0.86-0.97), so the glints are points instead of pale flakes
          //  spread over the whole stream)
          if (uSparkle > 0.01) {
            float gN = vnoise(vec3(vWorld.xz * 15.0 + N.xz * 6.0, uTime * 1.6));
            float glint = smoothstep(0.93, 0.99, gN) * pow(sunR, 48.0);
            col += uSunColor * glint * uSparkle * 2.6;
          }
          col += vec3(0.05, 0.045, 0.04) * max(lap, 0.0) * fresnel;
          col += vec3(0.12, 0.1, 0.09) * max(ring, 0.0) * exp(-d * 1.5);
          if (impactCrest > 0.0) col += (uSkyFill * 0.7 + vec3(0.14, 0.15, 0.17)) * min(impactCrest, 1.6) * (0.35 + 0.65 * fresnel);

          float alpha = mix(0.74, 1.0, fresnel);
          col = applyHaze(col, vWorld);
          gl_FragColor = vec4(col, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          GARDEN_GRADE_SCALED(uGradeWater) // deeper water and richer reflected colour
        }`}),d=new j(p,m);return d.name="water",d.renderOrder=1,d.frustumCulled=!1,d}setMode(t){this.mode=t,this.reflection.enabled=t==="planar",this.uniforms.uUsePlanar.value=this.reflection.enabled?1:0}setSize(t,e){this.reflection.setSize(t,e)}setBoat(t,e,s){this.uniforms.uBoat.value.copy(t),this.uniforms.uBoatSpeed.value=e,this.uniforms.uBoatDir.value.set(s.x,s.z).normalize()}renderReflection(t,e,s,i){if(!this.reflection.enabled)return!1;this.mesh.visible=!1;const o=this.reflection.update(t,e,s,i);return this.mesh.visible=!0,o}}const se=["zenith","mid","horizon","sunGlow","sunTint","water"],je=["sun","fill","sky","ground","haze","hazeStart","clouds","cloudDark","wind","scatter","rays","gradeR","gradeG","gradeB"],ye=["wbR","wbG","wbB","contrast"];class La{constructor(t,{quality:e="high"}={}){this.route=t,this.weights=new Float32Array(q.length),this.presets=q.map(s=>{const i=s.atmosphere,o=(s.range[0]+s.range[1])/2,a=t.tangentAt(t.progressToS(o)),r=Math.atan2(a.x,-a.z)+i.sunAz,n=new g(Math.sin(r)*Math.cos(i.sunEl),Math.sin(i.sunEl),-Math.cos(r)*Math.cos(i.sunEl)).normalize(),c={};for(const h of se)c[h]=new N(i[h]);return{colors:c,scalars:i,dir:n}}),this.lookPivot=q.find(s=>s.atmosphere.contrast)?.atmosphere.contrastPivot??.6,this.target={colors:{},scalars:{},dir:new g,rain:0,drizzle:0,wet:0,breakthrough:0},this.current={colors:{},scalars:{},dir:new g,rain:0,drizzle:0,wet:0,breakthrough:0};for(const s of se)this.target.colors[s]=new N,this.current.colors[s]=new N;this.introSnapshot={};for(const[s,i]of Object.entries(U))this.introSnapshot[s]=i.value?.clone?i.value.clone():i.value;this.rain=new Da({count:e==="low"?1400:3200}),this.state={progress:0,rain:0,drizzle:0,wet:0,breakthrough:0,clouds:0,wind:0,sunVis:1},this.initialised=!1}computeTarget(t){const e=le(R.clamp(t,0,1),this.weights),s=this.target;for(const i of se)s.colors[i].setRGB(0,0,0);for(const i of je)s.scalars[i]=0;s.dir.set(0,0,0);for(let i=0;i<e.length;i++){if(e[i]<=0)continue;const o=this.presets[i];for(const a of se)s.colors[a].r+=o.colors[a].r*e[i],s.colors[a].g+=o.colors[a].g*e[i],s.colors[a].b+=o.colors[a].b*e[i];for(const a of je)s.scalars[a]+=(o.scalars[a]??0)*e[i];s.dir.addScaledVector(o.dir,e[i])}s.dir.normalize();for(const i of ye)s.scalars[i]=0;for(let i=0;i<q.length;i++){const o=this.presets[i];if(!ye.some(h=>o.scalars[h]))continue;const[a,r]=q[i].range,n=2*Fe,c=(a>0?ht(a,a+n,t):1)*(r<1?1-ht(r-n,r,t):1);if(c>0)for(const h of ye)s.scalars[h]+=(o.scalars[h]??0)*c}return s.rain=ho(t),s.drizzle=uo(t),s.wet=fo(t),s.breakthrough=po(t),s.scalars.clouds=R.lerp(s.scalars.clouds,Math.max(s.scalars.clouds,.97),s.drizzle),s.scalars.clouds=R.lerp(s.scalars.clouds,.6,s.breakthrough*.7),s.scalars.cloudDark=Math.max(s.scalars.cloudDark,.75*s.rain),s.scalars.wind+=.6*s.rain,s.scalars.haze+=.012*s.rain,s.scalars.rays=Math.max(s.scalars.rays*s.breakthrough,0),s.scalars.scatter+=.25*s.breakthrough,s}snap(t){this.computeTarget(t),this.copy(this.current,this.target,1),this.initialised=!0,this.apply()}copy(t,e,s){for(const i of se)t.colors[i].lerp(e.colors[i],s);for(const i of je)t.scalars[i]=R.lerp(t.scalars[i]??e.scalars[i],e.scalars[i],s);for(const i of ye)t.scalars[i]=R.lerp(t.scalars[i]??e.scalars[i],e.scalars[i],s);t.dir.lerp(e.dir,s).normalize();for(const i of["rain","drizzle","wet","breakthrough"])t[i]=R.lerp(t[i],e[i],s)}update(t,e,s,i){this.computeTarget(e),this.initialised||this.snap(e),this.copy(this.current,this.target,1-Math.exp(-t*1.4)),this.apply(),this.rain.update(s,this.current.rain,this.current.drizzle,U.uWind.value,i),Object.assign(this.state,{progress:e,rain:this.current.rain,drizzle:this.current.drizzle,wet:this.current.wet,breakthrough:this.current.breakthrough})}apply(){const t=this.current,e=t.scalars,s=U;s.uZenith.value.copy(t.colors.zenith),s.uMidSky.value.copy(t.colors.mid),s.uHorizon.value.copy(t.colors.horizon),s.uSunGlow.value.copy(t.colors.sunGlow),s.uSunDir.value.copy(t.dir),s.uWaterBody.value.copy(t.colors.water);const i=R.clamp(e.clouds,0,1),o=1-.82*R.smoothstep(i,.58,.95);s.uSunVis.value=o,s.uSunColor.value.copy(t.colors.sunTint).multiplyScalar(e.sun*(.35+.65*o)),s.uFillColor.value.setRGB(.96,.84,.86).lerp(Oa.setRGB(.62,.68,.82),1-o).multiplyScalar(e.fill),s.uSkyFill.value.copy(t.colors.zenith).lerp(t.colors.mid,.5).multiplyScalar(e.sky*1.1),s.uGroundFill.value.setRGB(.3,.22,.2).multiplyScalar(e.ground/.24),s.uRimColor.value.copy(t.colors.sunGlow).multiplyScalar(.55+.45*o),s.uHazeDensity.value=e.haze,s.uHazeStart.value=e.hazeStart,s.uWind.value=e.wind,s.uCloudAmount.value=i,s.uCloudDark.value=e.cloudDark,s.uRain.value=Math.max(t.rain,t.drizzle*.3),s.uWet.value=t.wet,s.uSparkle.value=t.wet*t.breakthrough,s.uScatter.value=e.scatter,s.uRays.value=e.rays,s.uGrade.value.set(e.gradeR,e.gradeG,e.gradeB),s.uGradeWB.value.set(e.wbR,e.wbG,e.wbB),s.uGradeContrast.value.set(e.contrast,this.lookPivot),this.state.clouds=i,this.state.wind=e.wind,this.state.sunVis=o}applyIntro(){for(const[t,e]of Object.entries(this.introSnapshot)){if(t==="uTime")continue;const s=U[t];s.value?.copy?s.value.copy(e):s.value=e}this.rain.mesh.visible=!1,this.initialised=!1}}const Oa=new N;class Da{constructor({count:t=3e3,seed:e=31}={}){const s=new at(e),i=new Pt(1,1,1,1),o=new si;o.index=i.index,o.setAttribute("position",i.attributes.position),o.setAttribute("uv",i.attributes.uv);const a=new Float32Array(t*4);for(let n=0;n<t;n++)a.set([s.float(-1,1),s.next(),s.float(-1,1),s.next()],n*4);o.setAttribute("aDrop",new ct(a,4)),o.instanceCount=t,this.uniforms={uTime:U.uTime,uCenter:{value:new g},uRain:{value:0},uDrizzle:{value:0},uWindVec:{value:new Mt(.3,.1)},uSunColor:U.uSunColor,uSkyFill:U.uSkyFill};const r=new K({uniforms:this.uniforms,transparent:!0,depthWrite:!1,vertexShader:`
        attribute vec4 aDrop;
        uniform float uTime; uniform vec3 uCenter; uniform float uRain; uniform float uDrizzle; uniform vec2 uWindVec;
        varying float vA; varying vec2 vUv;
        void main() {
          vUv = uv;
          float heavy = smoothstep(0.0, 1.0, uRain);
          // fraction of drops active: drizzle shows a few, rain shows all
          float activeFrac = max(uDrizzle * 0.32, uRain);
          float on = step(aDrop.w, activeFrac);
          vec3 box = vec3(26.0, 13.0, 26.0);
          float speed = mix(4.2, 10.5, heavy) * (0.85 + 0.3 * aDrop.y);
          vec3 p = vec3(aDrop.x * box.x * 0.5, 0.0, aDrop.z * box.z * 0.5);
          float fall = mod(aDrop.y * box.y - uTime * speed, box.y);
          p.y = fall - 1.0;
          vec2 slant = uWindVec * (0.6 + 0.4 * heavy);
          p.xz += slant * (fall - box.y * 0.5) * 0.12;
          // wrap around the camera in xz so the shower is world-stable
          vec3 rel = vec3(mod(p.x - uCenter.x + box.x * 0.5, box.x) - box.x * 0.5, p.y, mod(p.z - uCenter.z + box.z * 0.5, box.z) - box.z * 0.5);
          vec3 world = vec3(uCenter.x + rel.x, rel.y, uCenter.z + rel.z);
          float len = mix(0.14, 0.42, heavy) * (0.7 + 0.6 * aDrop.y);
          // camera-facing streak along the fall direction
          vec3 fallDir = normalize(vec3(-slant.x * 0.12, -1.0, -slant.y * 0.12));
          vec3 toCam = normalize(cameraPosition - world);
          vec3 side = normalize(cross(fallDir, toCam));
          float width = mix(0.006, 0.011, heavy);
          world += side * position.x * width + fallDir * position.y * len;
          float d = length(rel.xz);
          vA = on * (1.0 - smoothstep(9.0, 13.0, d)) * smoothstep(0.0, 1.5, rel.y + 0.5) * mix(0.35, 0.55, heavy);
          gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
        }`,fragmentShader:`
        uniform vec3 uSunColor; uniform vec3 uSkyFill;
        varying float vA; varying vec2 vUv;
        void main() {
          if (vA < 0.002) discard;
          float edge = 1.0 - abs(vUv.x - 0.5) * 2.0;
          float tail = smoothstep(0.0, 0.6, vUv.y);
          vec3 c = mix(vec3(0.78, 0.82, 0.9), uSkyFill * 1.6 + uSunColor * 0.25, 0.4);
          gl_FragColor = vec4(c, vA * edge * tail);
          #include <colorspace_fragment>
        }`});this.mesh=new j(o,r),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6,this.mesh.name="rain",this.mesh.visible=!1}update(t,e,s,i,o){const a=this.uniforms;a.uRain.value=e,a.uDrizzle.value=s,a.uCenter.value.copy(t.position),a.uWindVec.value.set(Math.sin(o*.13)*.4+.5,Math.cos(o*.1)*.3).multiplyScalar(i),this.mesh.visible=Math.max(e,s*.32)>.003}}const nt=new g(0,1,0),Ga=new Set(["peony","ranunculus","tulip","camellia","anemone","cosmos","dahlia"]),qs={water:"near",forward:"near",main:"slope",back:"back"},Wa={near:2,slope:2,back:1},Va=[{species:"peony",s:75.7,lateral:-2.13,within:.3,inside:.75}],Hs={peony:1.12,hydrangea:1.05,dahlia:1.05,gerbera:.92,ranunculus:.8,camellia:.82,anemone:.85,cosmos:.82,tulip:.78,daisy:.62,blossom:.6,cluster:.7,spike:.8,bud:1},be={peony:{leaf:"stem",kinds:["broad","broad","heart"],leafN:[2,3],clump:[1,3],spread:1,nod:.32,stem:1,skirt:[1,3]},ranunculus:{leaf:"stem",kinds:["cut","cut","lance"],leafN:[1,2],clump:[1,3],spread:.7,nod:.12,stem:.95},tulip:{leaf:"basal",kinds:["basal"],leafN:[1,2],clump:[1,4],spread:.55,nod:0,stem:1.25},anemone:{leaf:"whorl",kinds:["cut"],leafN:[3,3],clump:[1,3],spread:.6,nod:.08,stem:1},cosmos:{leaf:"stem",kinds:["feather"],leafN:[2,4],clump:[2,4],spread:.9,nod:.22,stem:1.25},daisy:{leaf:"basal",kinds:["lance","strap","lance"],leafN:[2,4],clump:[3,6],spread:.75,nod:.05,stem:.75},gerbera:{leaf:"basal",kinds:["broad","lance"],leafN:[3,5],clump:[1,1],spread:.4,nod:.08,stem:1},hydrangea:{leaf:"shrub",kinds:["broad","heart","broad"],leafN:[5,8],clump:[2,5],spread:1.15,nod:.2,stem:.55},camellia:{leaf:"shrub",kinds:["oval"],leafN:[7,11],clump:[1,3],spread:.95,nod:.22,stem:.5},dahlia:{leaf:"stem",kinds:["broad","lance","cut"],leafN:[2,3],clump:[1,3],spread:1,nod:.18,stem:1,skirt:[1,2]},blossom:{leaf:"none",clump:[1,2],spread:.5,nod:.1,stem:.6},cluster:{leaf:"stem",kinds:["oval"],leafN:[1,2],clump:[1,3],spread:.6,nod:.15,stem:.8},spike:{leaf:"basal",kinds:["lance","strap"],leafN:[2,3],clump:[1,3],spread:.45,nod:0,stem:1},bud:{leaf:"stem",kinds:["lance"],leafN:[0,1],clump:[1,2],spread:.4,nod:.05,stem:1}};class Ba{constructor(t=2.6){this.cell=t,this.map=new Map}key(t,e,s){return(t+512)*1048576+(e+512)*1024+(s+512)}insert(t,e){const s=this.cell,i=this.key(Math.floor(t.x/s),Math.floor(t.y/s),Math.floor(t.z/s));let o=this.map.get(i);o||this.map.set(i,o=[]),o.push(t.x,t.y,t.z,e)}free(t,e,s){const i=this.cell,o=Math.floor(t.x/i),a=Math.floor(t.y/i),r=Math.floor(t.z/i);for(let n=-1;n<=1;n++)for(let c=-1;c<=1;c++)for(let h=-1;h<=1;h++){const u=this.map.get(this.key(o+n,a+c,r+h));if(u)for(let f=0;f<u.length;f+=4){const p=u[f]-t.x,m=u[f+1]-t.y,d=u[f+2]-t.z,v=(u[f+3]+e)*s;if(p*p+m*m+d*d<v*v)return!1}}return!0}}class Ua{constructor({route:t,terrain:e,seed:s=2027,quality:i="high",reserved:o=[],sightlines:a=[],accent:r=null}){this.accent=r,this.route=t,this.terrain=e,this.rng=new at(s),this.quality=i,this.density=i==="low"?.55:1,this.sMin=-8,this.sMax=t.length+10,this.records=[],this.hash=new Ba,this.patches={water:new Map,forward:new Map,main:new Map,back:new Map},this.counts={heads:0,stems:0,leaves:0,plants:0,byArchetype:{},byGarden:{}},this.reserved=o;for(const n of o)this.hash.insert(n.position,n.radius);this.sightlines=a,this.material=Yt(),this.group=new rt,this.group.name="flora",this.cells=new Map,this.geometryCache=new Map}progress(t){return R.clamp(this.route.progressAtS(t),0,1)}beltRange(t,e){const s=this.route.halfWidthAt(e),i=this.progress(e),o=wt.at("belts.main",i),a=wt.at("belts.back",i);return t==="water"?[s-.3,s+.9]:t==="forward"?[s+.15,s+3.1]:t==="main"?[s+2.5,s+o]:[s+o-.5,s+a]}leafColor(t,e){return new N(t.pick(e.leaves)).multiplyScalar(t.float(.82,1.12))}speciesColor(t,e,s){return Ae(t,s,e.colors[s]||null).color}patchFor(t,e,s,i){const o=this.patches[t],a=Math.floor(e/6)*2+(s<0?0:1);let r=o.get(a);if(!r){r=[];const h=Math.floor(e/6)*6,u=t==="back"?1:2,f=s<0?-1:1;for(let p=0;p<u;p++){const m=h+(p+i.float(.1,.9))*6/u,d=Tt(this.progress(m),i),v=d.flora[t],w=i.weighted(Object.entries(v).map(([A,E])=>({k:A,weight:E}))).k,y=Ae(i,w,d.colors[w]||null).family,[M,x]=this.beltRange(t,m);r.push({s:m,l:f*i.float(M,x),species:w,family:y,biome:d})}o.set(a,r)}let n=r[0],c=1/0;for(const h of r){const u=(h.s-e)**2+((h.l-s)*.7)**2;u<c&&(c=u,n=h)}return n}blocksSightline(t,e){for(const s of this.sightlines){const i=s.b.clone().sub(s.a),o=R.clamp(t.clone().sub(s.a).dot(i)/i.lengthSq(),0,1);if(s.a.clone().addScaledVector(i,o).distanceTo(t)<s.radius+e*.85)return!0}return!1}intrudesCorridor(t,e,s){return e-s<1.45&&t-s*.92<.85}addRecord(t,e,s,i){this.records.push({type:t,cell:e,matrix:s,color:i})}cellKey(t,e){return`${e}:${Math.floor((t-this.sMin)/12)}`}populate(){const t=[{belt:"forward",per:24,r:[.85,1.35],f:.66,hero:!0},{belt:"forward",per:30,r:[.48,.85],f:.62},{belt:"main",per:30,r:[.8,1.25],f:.64},{belt:"main",per:40,r:[.48,.8],f:.6},{belt:"back",per:22,r:[.95,1.55],f:.64},{belt:"back",per:16,r:[.6,.95],f:.6},{belt:"water",per:20,r:[.26,.5],f:.64},{belt:"forward",per:40,r:[.22,.46],f:.62,filler:!0},{belt:"main",per:44,r:[.24,.48],f:.6,filler:!0}],e=this.sMax-this.sMin;this.addSanctuaryGrove();for(const s of t){const i=this.rng.fork(s.per*13+s.r[0]*100+(s.filler?7:0)),o=Math.round(s.per*e*this.density);for(let a=0;a<o;a++)this.tryPlant(i,s)}this.addBankLeaves(),this.addSlopeUnderlayer(),this.addFloatingBlooms(),this.applyLocalFixes()}recordSphere(t){const e=this.geometriesFor(t.type)[2];e.boundingSphere||e.computeBoundingSphere();const s=new g;return t.matrix.decompose(new g,new V,s),{c:e.boundingSphere.center.clone().applyMatrix4(t.matrix),r:e.boundingSphere.radius*Math.max(s.x,s.y,s.z)}}applyLocalFixes(){const t=o=>o.type==="stem"||o.type.startsWith("leaf|"),e=new Set,s={s:0,lateral:0},i=new g;for(const o of Va)this.records.forEach((a,r)=>{if(!a.type.startsWith(o.species+"|")||(i.setFromMatrixPosition(a.matrix),this.route.project(i.x,i.z,s),Math.abs(s.s-o.s)>o.within||Math.abs(s.lateral-o.lateral)>o.within))return;const n=new Set;for(let u=r+1;u<this.records.length&&t(this.records[u]);u++)n.add(this.records[u]);const c=this.recordSphere(a),h=c.r*o.inside;for(const u of this.records){if(n.has(u)||!u.type.startsWith("leaf|"))continue;const f=u.matrix.elements;Math.abs(f[12]-c.c.x)>h+2||Math.abs(f[14]-c.c.z)>h+2||this.recordSphere(u).c.distanceTo(c.c)<h&&e.add(u)}});e.size&&(this.records=this.records.filter(o=>!e.has(o)),this.counts.leaves-=e.size,this.counts.localFixLeavesRemoved=e.size)}tryPlant(t,e){const s=t.float(this.sMin,this.sMax),i=this.progress(s);if(t.next()>wt.at("density",i)/1.1||s>this.route.routeEndS+3&&e.belt!=="water"&&Math.abs(Math.sin(s*91.7+e.per*7.3+e.r[0]*13.1)*43758.5453)%1>.35)return;const o=t.sign(),[a,r]=this.beltRange(e.belt,s);if(r<=a)return;const n=e.belt==="forward"?a+(r-a)*Math.pow(t.next(),1.25):t.float(a,r);if(n>this.route.innerLimit(s,o))return;const c=o*n,h=this.patchFor(e.belt,s,c,t);let u=h.biome,f=h.species,p=h.family;if(e.filler)u=Tt(i,t),f=t.pick(u.companions),p=null;else if(t.chance(.22)){u=Tt(i,t);const A=u.flora[e.belt];f=t.weighted(Object.entries(A).map(([E,k])=>({k:E,weight:k}))).k,p=null}const m=be[f],d=u.stems[e.belt];let v=t.float(e.r[0],e.r[1])*Hs[f]*(u.scale||1);f==="bud"&&(v=t.float(.16,.3)),f==="spike"&&(v=t.float(.55,.9));const w=(n-a)/Math.max(.01,r-a);let y=t.float(d[0],d[1])*m.stem*(e.belt==="forward"?.55+.6*w:1);if(f==="spike"&&(y=t.float(0,.35)+(u.id==="dancing"?t.float(.3,1.4):0)),!this.placeHead(t,{pass:e,biome:u,species:f,family:p,s,l:c,side:o,R:v,stem:y,primary:!0}))return;this.counts.plants++,this.counts.byGarden[u.id]=(this.counts.byGarden[u.id]||0)+1;const x=t.int(m.clump[0],m.clump[1])-1;for(let A=0;A<x;A++){const E=t.float(0,Math.PI*2),k=v*m.spread*t.float(.7,1.4),_=s+Math.cos(E)*k,O=c+Math.sin(E)*k;if(Math.abs(O)<a-.1)continue;const b=t.chance(f==="tulip"||f==="daisy"?.12:.3),T=b?v*t.float(.3,.42):v*t.float(.6,.88),F=Math.max(0,y*t.float(.6,1.25)+t.float(-.15,.2));this.placeHead(t,{pass:e,biome:u,species:b&&Lt[f].facing!=="upright"?"bud":f,family:p,s:_,l:O,side:o,R:T,stem:F,primary:!1,satelliteOf:f})}}placeFloating(t,e,s){const{pass:i,biome:o,species:a,s:r,side:n}=e,c=this.route,h=Lt[a],u=c.halfWidthAt(r),f=e.R*.85;let p=null;for(let y=0;y<4&&!p;y++){const M=(s*7.31+.13+y*.37)%1,x=u-.08-M*Math.min(.75,u*.5);if(x-f<.45||this.terrain.heightAt(r,n*x)>-.03)continue;const A=c.toWorld(r,n*x,.02);this.hash.free(A,f,i.f)&&(p=A)}if(!p)return!1;this.hash.insert(p,f);const m=e.family&&t.chance(.85)?De(t,e.family):this.speciesColor(t,o,a),d=new g(t.gauss()*.04,1,t.gauss()*.04).normalize(),v=new V().setFromUnitVectors(nt,d).multiply(new V().setFromAxisAngle(nt,t.float(0,Math.PI*2))),w=f/h.radius;return this.addRecord(`${a}|open`,this.cellKey(r,"near"),new J().compose(p,v,new g(w,w*.8,w)),m),this.counts.heads++,this.counts.floating=(this.counts.floating||0)+1,this.counts.byArchetype[a]=(this.counts.byArchetype[a]||0)+1,!0}placeHead(t,e){const{pass:s,biome:i,species:o,s:a,l:r,side:n,R:c}=e,h=this.route,u=this.terrain,f=Lt[o],p=be[e.satelliteOf||o]||be[o],m=Math.abs(r);if(s.belt==="water"&&f.facing!=="upright"){const S=Math.abs(Math.sin(a*12.9898+r*78.233)*43758.5453)%1;if(S<.64){const P=o==="bud"||o==="tulip"?{...e,species:"blossom",family:null,R:e.R*.9}:e;return this.placeFloating(t,P,S)}}const d=u.heightAt(a,r);let v=0;(s.belt==="forward"||s.belt==="water")&&f.facing!=="upright"&&(v=Math.min(e.stem*.55,1.6)*i.lean*t.float(.35,1));const w=n*Math.max(m-v,.3),y=d+e.stem+c*.25,M=h.toWorld(a,w,y);if(this.intrudesCorridor(Math.abs(w),y,c)||Math.abs(w)<h.halfWidthAt(a)*.55+c*.5&&y-c<3.2||s.belt!=="water"&&Math.abs(w)-c*.42<h.halfWidthAt(a)+.05&&M.y<1.3+v*.6||this.blocksSightline(M,o==="spike"?c*2.5:c))return!1;const x=o==="spike"?c*.7:c;if(!this.hash.free(M,x,s.f))return!1;this.hash.insert(M,x);const A=o!=="bud"&&o!=="spike"&&Ga.has(o)&&t.chance(e.primary?.18:.42)?"half":"open";let E=e.family&&t.chance(.85)?De(t,e.family):this.speciesColor(t,i,o==="bud"&&e.satelliteOf?e.satelliteOf:o);o==="bud"&&!e.satelliteOf&&(E=this.speciesColor(t,i,"bud")),this.accent&&M.distanceTo(this.accent.position)<this.accent.radius&&o!=="bud"&&(E=De(t,t.pick(this.accent.families)));const k=this.facing(t,a,n,M,s.belt,f,p),_=new V().setFromUnitVectors(nt,k).multiply(new V().setFromAxisAngle(nt,t.float(0,Math.PI*2))),O=c/f.radius*(A==="half"?.85:1),b=new J().compose(M,_,new g(O,O,O)),T=this.cellKey(a,qs[s.belt]);this.addRecord(`${o}|${A}`,T,b,E),this.counts.heads++,s.belt==="water"&&(this.counts.submerged=(this.counts.submerged||0)+1),this.counts.byArchetype[o]=(this.counts.byArchetype[o]||0)+1;const F=M.clone().addScaledVector(k,-.15*c);f.facing==="upright"&&F.copy(M);const L=h.toWorld(a,r,d-.05),G=F.y-L.y,C=new g(F.x-L.x,0,F.z-L.z),D=R.clamp(c*(p===be.cosmos?.03:.05),.012,.065);if(G>.12){this.addStem(t,T,L,F,D,i);const S=I=>new g(L.x+C.x*I*I,L.y+G*I,L.z+C.z*I*I),P=c*(p.leaf==="shrub"?.95:1);if(p.leaf==="stem"&&G>.4){const I=t.int(p.leafN[0],p.leafN[1]);for(let W=0;W<I;W++)this.addLeaf(t,T,S(t.float(.15,.7)),t.float(0,Math.PI*2),t.pick(p.kinds),P*t.float(.65,1.05),t.float(-.1,.3),null,i)}else if(p.leaf==="whorl"){const W=S(.62),Y=t.float(0,6.3);for(let et=0;et<3;et++)this.addLeaf(t,T,W,Y+et*2.09,"cut",c*t.float(.5,.7),t.float(-.25,.05),null,i)}else if(p.leaf==="shrub"){const I=t.int(p.leafN[0],p.leafN[1]);for(let W=0;W<I;W++){const Y=t.float(0,Math.PI*2),et=c*t.float(.55,1.1),gt=new g(F.x+Math.cos(Y)*et,F.y-c*t.float(.35,1),F.z+Math.sin(Y)*et);gt.y=Math.max(gt.y,d+.05),this.addLeaf(t,T,gt,-Y,t.pick(p.kinds),P*t.float(.55,.85),t.float(-.35,.2),null,i)}}}if(p.leaf==="basal"&&e.primary){const S=t.int(p.leafN[0],p.leafN[1]);for(let P=0;P<S;P++){const I=t.pick(p.kinds),W=I==="basal"||o==="spike",Y=(I==="basal"?Math.min(G*.3+.35,1):c*t.float(.75,1.1))*t.float(.8,1.1);this.addLeaf(t,T,L.clone().setY(d+.02),t.float(0,Math.PI*2),I,Y,W?t.float(.35,.75):t.float(-.35,.05),null,i)}}if(s.hero&&e.primary&&p.skirt){const S=t.int(p.skirt[0],p.skirt[1]);for(let P=0;P<S;P++){const I=t.float(0,Math.PI*2),W=h.toWorld(a+Math.cos(I)*.3,r+Math.sin(I)*.3,0);W.y=u.heightAt(a+Math.cos(I)*.3,r+Math.sin(I)*.3)+.02,this.addLeaf(t,T,W,I,t.pick(["broad","heart","lance"]),t.float(.6,1.15),t.float(-.25,.1),null,i)}}return!0}facing(t,e,s,i,o,a,r){const n=this.route,c=n.rightAt(e),h=n.tangentAt(e),u=c.clone().multiplyScalar(-s);if(a.facing==="upright")return nt.clone().add(new g(t.gauss()*.06,0,t.gauss()*.06)).normalize();const f=new g;if(a.facing==="up")f.copy(nt).addScaledVector(u,.3+t.float(0,.25)).addScaledVector(h,-.15);else if(o==="forward"||o==="water")f.copy(u).multiplyScalar(.8).addScaledVector(h,-.55).addScaledVector(nt,.32+Math.max(0,.6-i.y)*.4);else{const m=n.pointAt(e-4);m.y=.8,f.subVectors(m,i).normalize().multiplyScalar(.75).addScaledVector(nt,o==="back"?.3:.22).addScaledVector(h,-.25)}f.addScaledVector(nt,-r.nod*t.float(.3,1.2));const p=t.chance(o==="back"?.35:.18)?.65:o==="back"?.36:.24;return f.x+=t.gauss()*p,f.y+=t.gauss()*.18,f.z+=t.gauss()*p,f.normalize()}addStem(t,e,s,i,o,a){const r=t.float(0,Math.PI*2),n=new g(Math.cos(r),0,Math.sin(r)),c=new g(-Math.sin(r),0,Math.cos(r)),h=i.clone().sub(s),u=new J().set(n.x*o,h.x,c.x*o,s.x,n.y*o,h.y,c.y*o,s.y,n.z*o,h.z,c.z*o,s.z,0,0,0,1);this.addRecord("stem",e,u,this.leafColor(t,a).multiplyScalar(1.05)),this.counts.stems++}addLeaf(t,e,s,i,o,a,r=0,n=null,c=null){const h=new V().setFromAxisAngle(nt,i);h.multiply(new V().setFromAxisAngle(new g(0,0,1),r)),n&&h.premultiply(new V().setFromUnitVectors(nt,n));const u=new J().compose(s,h,new g(a,a,a));c||(c=Tt(this.progress(this.route.project(s.x,s.z).s),t)),this.addRecord(`leaf|${o}`,e,u,this.leafColor(t,c)),this.counts.leaves++}addBankLeaves(){const t=this.rng.fork(77),e=this.route;for(let s=this.sMin;s<this.sMax;s+=t.float(.16,.36)/this.density)for(const i of[-1,1]){if(t.chance(.2))continue;const o=this.progress(s),a=Tt(o,t),r=e.halfWidthAt(s),n=t.next(),c=e.tangentAt(s),h=e.rightAt(s).multiplyScalar(-i);if(n<.62){const u=i*(r+t.float(-.1,.6)),f=e.toWorld(s,u,Math.max(.03,this.terrain.heightAt(s,u)+.02)),p=h.clone().multiplyScalar(.8).addScaledVector(c,t.float(-.9,.9)).normalize(),m=a.id==="meadow"||a.id==="golden"?t.pick(["lance","strap","broad","heart"]):t.pick(["broad","heart","strap","lance","heart"]);this.addLeaf(t,this.cellKey(s,"near"),f,Math.atan2(-p.z,p.x),m,t.float(.45,1.05),t.float(-.45,-.05),null,a)}else if(n<.8){const u=i*(r+t.float(-.25,.35)),f=e.toWorld(s,u,Math.max(-.05,this.terrain.heightAt(s,u)));for(let p=0;p<t.int(2,4);p++)this.addLeaf(t,this.cellKey(s,"near"),f,t.float(0,6.3),"strap",t.float(.5,1),t.float(.55,.95),null,a)}else{const u=i*(r-t.float(.05,.55));if(Math.abs(u)<.95)continue;const f=e.toWorld(s,u,.012);this.addLeaf(t,this.cellKey(s,"near"),f,t.float(0,6.3),t.pick(["heart","broad","oval"]),t.float(.28,.5),-.55,null,a)}}}addSlopeUnderlayer(){const t=this.rng.fork(91),e=Math.round((this.sMax-this.sMin)*24*this.density);for(let s=0;s<e;s++){const i=t.float(this.sMin,this.sMax),o=t.sign(),a=t.chance(.7)?"main":"forward",[r,n]=this.beltRange(a,i),c=t.float(Math.max(r,this.route.halfWidthAt(i)+.9),n);if(c>this.route.innerLimit(i,o))continue;const h=o*c,u=this.terrain.heightAt(i,h),f=this.route.toWorld(i,h,u+.03),p=.3,m=(this.terrain.heightAt(i,h+p)-this.terrain.heightAt(i,h-p))/(2*p),d=this.route.rightAt(i),v=new g(0,1,0).addScaledVector(d,-m).normalize(),w=Tt(this.progress(i),t);this.addLeaf(t,this.cellKey(i,qs[a]),f,t.float(0,Math.PI*2),t.pick(["broad","heart","lance"]),t.float(.7,1.4),t.float(-.3,.05),v,w)}}addSanctuaryGrove(){const t=new at(23164),e=this.route,s={belt:"main",f:.62};let i=0;for(let o=0;o<40&&i<8;o++){const a=e.routeEndS+6+t.float(0,22),r=t.sign(),c=e.halfWidthAt(a)+t.float(3.2,8.5);if(c>e.innerLimit(a,r))continue;const h=Tt(1,t),u=t.chance(.55)?"anemone":"peony",f=t.float(1.9,2.8)*Hs[u],p=u==="anemone"?t.pick(["deepplum","burgundy"]):t.pick(["burgundy","deepplum","ivory"]);this.placeHead(t,{pass:s,biome:h,species:u,family:p,s:a,l:r*c,side:r,R:f,stem:t.float(.5,1.8),primary:!0})&&(i++,this.counts.plants++)}this.counts.sanctuaryGrove=i}addFloatingBlooms(){const t=this.rng.fork(123);for(let e=this.route.progressToS(.015);e<this.route.length;e+=t.float(3,8)){const s=this.route.halfWidthAt(e),i=t.sign()*t.float(.75,Math.max(.8,s-.12)),o=Tt(this.progress(e),t),a=t.pick(["blossom","blossom",o.companions[0],"blossom"]),r=a==="bud"||a==="spike"||a==="tulip"?"blossom":a,n=Lt[r],c=t.float(.16,.28),h=this.route.toWorld(e,i,.02),u=new V().setFromUnitVectors(nt,new g(t.gauss()*.05,1,t.gauss()*.05).normalize()).multiply(new V().setFromAxisAngle(nt,t.float(0,6.3))),f=c/n.radius,p=o.colors[r]||o.colors[Object.keys(o.colors)[0]];this.addRecord(`${r}|open`,this.cellKey(e,"near"),new J().compose(h,u,new g(f,f*.8,f)),Ae(t,r,p).color),this.counts.heads++}}geometriesFor(t){if(this.geometryCache.has(t))return this.geometryCache.get(t);const[e,s]=t.split("|");let i;return e==="stem"?i=[0,1,2].map(o=>eo(o)):e==="leaf"?i=[0,1,2].map(o=>oi(s,o)):i=[0,1,2].map(o=>is(e,{stage:s,detail:o,seed:3})),this.geometryCache.set(t,i),i}build(){const t=this.route,e=new Map,s=new Map,i=new g,o=new g,a=new V,r={s:0,lateral:0};for(const n of this.records)e.has(n.type)||e.set(n.type,{key:n.type,records:[]}),e.get(n.type).records.push(n);this.types=[];for(const n of e.values()){const c=this.geometriesFor(n.key);for(const f of c)f.computeBoundingSphere();const h=c[2].boundingSphere,u=n.records.length;n.lods=c,n.skipFar=n.key==="stem",n.isLeaf=n.key.startsWith("leaf"),n.noFade=n.isLeaf||n.key==="stem",n.matrices=new Float32Array(u*16),n.colors=new Float32Array(u*3),n.spheres=new Float32Array(u*4),n.cur=new Int8Array(u).fill(-1),n.prev=new Int8Array(u).fill(-1),n.t0=new Float32Array(u).fill(-1e9),n.seen=new Int32Array(u).fill(-10),n.route=new Float32Array(u*4),n.records.forEach((f,p)=>{f.matrix.toArray(n.matrices,p*16),n.colors.set([f.color.r,f.color.g,f.color.b],p*3),f.matrix.decompose(i,a,o);const m=h.center.clone().applyMatrix4(f.matrix),d=h.radius*Math.max(o.x,o.y,o.z);n.spheres.set([m.x,m.y,m.z,d],p*4);const v=f.cell.split(":")[0];t.project(m.x,m.z,r);{const M=f.matrix.elements,x=t.project(M[12],M[14],{s:0,lateral:0}),A=t.tangentAt(x.s,o.clone());n.route.set([x.s,x.lateral,A.x,A.z],p*4)}const w=`${v}:${r.lateral<0?"L":"R"}:${Math.floor((r.s-this.sMin)/10)}`;s.has(w)||s.set(w,{key:w,band:v,box:new Fi,lists:new Map});const y=s.get(w);y.box.expandByPoint(i.set(m.x-d,m.y-d,m.z-d)),y.box.expandByPoint(i.set(m.x+d,m.y+d,m.z+d)),y.lists.has(n)||y.lists.set(n,[]),y.lists.get(n).push(p)}),n.buckets=[0,1,2].map(f=>{const p=new ct(new Float32Array(u*2),2),m=new ct(new Float32Array(u*4),4);m.setUsage(ot),p.setUsage(ot);const d=c.map(w=>{const y=new dt;for(const[M,x]of Object.entries(w.attributes))y.setAttribute(M,x);return y.setIndex(w.index),y.boundingSphere=w.boundingSphere,y.setAttribute("aFade",p),y.setAttribute("aRoute",m),y}),v=new St(d[f],this.material,u);return v.userData.views=d,v.userData.fade=p,v.userData.route=m,v.instanceMatrix.setUsage(ot),v.instanceColor=new ct(new Float32Array(u*3),3),v.instanceColor.setUsage(ot),v.count=0,v.frustumCulled=!1,v.name=`${n.key}#${f}`,this.group.add(v),v}),this.types.push(n)}for(const n of s.values())n.box.expandByScalar(.4),n.typeLists=[...n.lists.entries()].map(([c,h])=>[c,Int32Array.from(h)]);return this.cellList=[...s.values()],this.cells=s,this._frustumA=new us,this._frustumB=new us,this._pv=new J,this._lastPos=new g(1e9,0,0),this._lastVisible="",this.forceUpdate=!0,this.lodScale=this.quality==="low"?.7:1,this.farCull=88,this.fadeSeconds=.35,this._serial=0,this._activeFades=0,this.lastDithered=0,this.group}_frustumFor(t,e){return this._pv.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),e.setFromProjectionMatrix(this._pv)}targetLevel(t,e,s,i,o,a){const r=(3.2+2.8*e)*s,n=(8.5+6*e)*s,c=.1*r+.3,h=.08*n+.6;let u=t<r?2:t<n?1:0;const f=a<0?o.skipFar?0:-1:a;if(f>=0&&Math.abs(f-u)===1){const p=Math.max(f,u),m=p===2?r:n,d=p===2?c:h;Math.abs(t-m)<d&&(u=f)}return u>i&&(u=i),u===0&&o.skipFar?-1:u}updateLOD(t,e=null){const s=this._frustumFor(t,this._frustumA),i=e?this._frustumFor(e,this._frustumB):null,o=[];let a="";for(let x=0;x<this.cellList.length;x++){const A=this.cellList[x];(s.intersectsBox(A.box)||i&&i.intersectsBox(A.box))&&(o.push(A),a+=x+",")}const r=t.position;if(!this.forceUpdate&&this._activeFades===0&&a===this._lastVisible&&r.distanceToSquared(this._lastPos)<.09)return!1;this.forceUpdate=!1,this._lastVisible=a;const n=r.distanceToSquared(this._lastPos)>4;this._lastPos.copy(r);const c=performance.now()/1e3,h=this.fadeSeconds,u=++this._serial+(n?1:0);n&&this._serial++;let f=0,p=0;const m=r.x,d=r.y,v=r.z,w=this.lodScale;for(const x of this.types)x.counts=[0,0,0];for(const x of o){if(x.box.distanceToPoint(r)>this.farCull)continue;const E=Wa[x.band];for(const[k,_]of x.typeLists){const O=k.spheres,b=k.cur,T=k.prev,F=k.t0,L=k.seen,G=k.isLeaf?34:this.farCull,C=k.isLeaf?6:16;for(let D=0;D<_.length;D++){const S=_[D],P=O[S*4]-m,I=O[S*4+1]-d,W=O[S*4+2]-v,Y=O[S*4+3],et=Math.sqrt(P*P+I*I+W*W)-Y;if(et>G)continue;const gt=L[S]===u-1;L[S]=u;const Z=this.targetLevel(et,Y,w,E,k,gt?b[S]:-1);gt?Z!==b[S]&&(T[S]=k.noFade?Z:b[S],b[S]=Z,F[S]=c):(b[S]=Z,T[S]=Z,F[S]=-1e9);let H=0;if(et>G-C){const $=(G-et)/C;H=1-$*$*(3-2*$)}let Q=(c-F[S])/h;Q>=1||T[S]===b[S]?b[S]>=0&&this._emit(k,b[S],S,0,H):(f++,Q=Math.max(.01,Q*Q*(3-2*Q)),b[S]>=0&&(this._emit(k,b[S],S,Q,H),p++),T[S]>=0&&(this._emit(k,T[S],S,-Q,H),p++))}}}this._activeFades=f,this.lastDithered=p;let y=0,M=0;for(const x of this.types)for(let A=0;A<3;A++){const E=x.buckets[A],k=x.counts[A];if(E.count=k,E.visible=k>0,M+=k,k>0){E.instanceMatrix.clearUpdateRanges(),E.instanceMatrix.addUpdateRange(0,k*16),E.instanceMatrix.needsUpdate=!0,E.instanceColor.clearUpdateRanges(),E.instanceColor.addUpdateRange(0,k*3),E.instanceColor.needsUpdate=!0;const _=E.userData.fade;_.clearUpdateRanges(),_.addUpdateRange(0,k*2),_.needsUpdate=!0;const O=E.userData.route;O.clearUpdateRanges(),O.addUpdateRange(0,k*4),O.needsUpdate=!0,y+=k*x.lods[A].index.count/3}}return this.lastBucketTriangles=Math.round(y),this.lastInstances=M,!0}_emit(t,e,s,i,o){const a=t.buckets[e],r=t.counts[e]++;a.instanceMatrix.array.set(t.matrices.subarray(s*16,s*16+16),r*16);const n=a.instanceColor.array,c=t.colors;n[r*3]=c[s*3],n[r*3+1]=c[s*3+1],n[r*3+2]=c[s*3+2];const h=a.userData.fade.array;h[r*2]=i,h[r*2+1]=o,a.userData.route.array.set(t.route.subarray(s*4,s*4+4),r*4)}pushReflectionLOD(){for(const t of this.types)t.buckets[2].geometry=t.buckets[2].userData.views[1],t.buckets[1].geometry=t.buckets[1].userData.views[0],t._vis=t.buckets.map(e=>e.visible),t.key==="stem"&&t.buckets.forEach(e=>{e.visible=!1}),t.isLeaf&&(t.buckets[0].visible=!1)}popReflectionLOD(){for(const t of this.types)t.buckets[2].geometry=t.buckets[2].userData.views[2],t.buckets[1].geometry=t.buckets[1].userData.views[1],t._vis&&t.buckets.forEach((e,s)=>{e.visible=t._vis[s]})}stats(){const t=[0,0,0];for(const s of this.types)for(let i=0;i<3;i++)t[i]+=s.lods[i].index.count/3*s.records.length;const e={};for(const s of this.types)e[s.key]=s.lods.map(i=>i.index.count/3);return{...this.counts,records:this.records.length,cells:this.cellList.length,types:this.types.length,meshes:this.group.children.length,trianglesIfAll:t.map(Math.round),trianglesPerInstance:e}}}class ja extends es{constructor(){super();const t=new Pi;t.deleteAttribute("uv");const e=new ds({side:ss}),s=new ds,i=new Ii(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const o=new j(t,e);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const a=new St(t,s,6),r=new ii;r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),r.updateMatrix(),a.setMatrixAt(0,r.matrix),r.position.set(-5.607,-.754,-.758),r.rotation.set(0,.994,0),r.scale.set(1.97,1.534,3.955),r.updateMatrix(),a.setMatrixAt(1,r.matrix),r.position.set(6.167,.857,7.803),r.rotation.set(0,.561,0),r.scale.set(3.927,6.285,3.687),r.updateMatrix(),a.setMatrixAt(2,r.matrix),r.position.set(-2.017,.018,6.124),r.rotation.set(0,.333,0),r.scale.set(2.002,4.566,2.064),r.updateMatrix(),a.setMatrixAt(3,r.matrix),r.position.set(2.291,-.756,-2.621),r.rotation.set(0,-.286,0),r.scale.set(1.546,1.552,1.496),r.updateMatrix(),a.setMatrixAt(4,r.matrix),r.position.set(-2.193,-.369,-5.547),r.rotation.set(0,.516,0),r.scale.set(3.875,3.487,2.986),r.updateMatrix(),a.setMatrixAt(5,r.matrix),this.add(a);const n=new j(t,jt(50));n.position.set(-16.116,14.37,8.208),n.scale.set(.1,2.428,2.739),this.add(n);const c=new j(t,jt(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new j(t,jt(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new j(t,jt(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new j(t,jt(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const p=new j(t,jt(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function jt(l){return new Ni({color:0,emissive:16777215,emissiveIntensity:l})}class qa{constructor(t){const e=new Li(t);this.env=e.fromScene(new ja,.04).texture,e.dispose(),this.group=new rt,this.group.name="product-reveal-placeholder",this.root=new rt,this.group.add(this.root);const s=new j(new Oi(.16,0),new fs({color:"#ffe9f0",metalness:0,roughness:.04,transmission:0,envMap:this.env,envMapIntensity:1.6,iridescence:1,iridescenceIOR:1.6,clearcoat:1,flatShading:!0,emissive:"#ffb8c8",emissiveIntensity:.18}));s.scale.set(1,1.35,1);const i=new j(new Di(.22,.012,10,64),new fs({color:"#e8c37a",metalness:1,roughness:.18,envMap:this.env,envMapIntensity:1.4}));i.rotation.x=Math.PI/2;const o=i.clone();o.rotation.set(.35,0,.2),o.scale.setScalar(1.12),this.root.add(s,i,o),this.halo=new j(new Pt(1.3,1.3),new K({transparent:!0,depthWrite:!1,blending:Gt,uniforms:{uStrength:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uStrength; varying vec2 vUv; void main(){ float r = length(vUv - 0.5) * 2.0; float a = exp(-r * r * 5.0) * uStrength; gl_FragColor = vec4(vec3(1.0, 0.82, 0.68) * a, 1.0); }"})),this.group.add(this.halo),this.group.visible=!1,this.amount=0,this.targetAmount=0}show(){this.group.visible=!0,this.targetAmount=1}hide(){this.targetAmount=0}update(t,e,s){this.amount=R.damp(this.amount,this.targetAmount,2.2,t),this.targetAmount===0&&this.amount<.01&&(this.group.visible=!1,this.amount=0);const i=this.amount;this.root.scale.setScalar(Math.max(.001,i)),this.root.position.y=.05+i*.42+Math.sin(e*1.3)*.02*i,this.root.rotation.y=e*.5,this.halo.position.copy(this.root.position),this.halo.material.uniforms.uStrength.value=i*.9,this.halo.quaternion.copy(s.quaternion),this.group.parent&&this.halo.quaternion.premultiply(this.group.getWorldQuaternion(new V).invert())}}const Ys=new g(0,1,0),ze=(l,t,e)=>{const s=Math.min(1,Math.max(0,(e-l)/(t-l)));return s*s*(3-2*s)},bi=.85,Ha=.35,Ya=.3,$a=.5,lr={warmth:0,shadow:0,blush:0,glow:1,halo:1},Xa={warmth:.85,shadow:.6,blush:.5,glow:.8,halo:.45},xe={outer:new N("#F2DDC9"),middle:new N("#E6C5B2"),shadow:new N("#CFA895"),blush:new N("#E8B8A6")},Nt=new N,$s=new N;function Za(l){const t=l.attributes.aHinge,e=l.attributes.aOpen,s=l.attributes.position,i=new Float32Array(e?e.count:0).fill(-1),o=new Float32Array(e?e.count:0);if(!t||!e)return{layerT:i,alongV:o};const a=e.count,r=[];for(let u=0,f=1;f<=a;f++)f<a&&t.getX(f)===t.getX(u)&&t.getY(f)===t.getY(u)&&t.getZ(f)===t.getZ(u)&&t.getW(f)===t.getW(u)||(r.push([u,f]),u=f);const n=r.map(([u])=>e.getX(u)).filter(u=>u>0);if(!n.length)return{layerT:i,alongV:o};const c=Math.min(...n),h=Math.max(...n);for(const[u,f]of r){const p=e.getX(u);if(p<=0)continue;const m=(p-c)/Math.max(1e-6,h-c),d=t.getX(u),v=t.getY(u),w=t.getZ(u);let y=1e-6;for(let x=u;x<f;x++)y=Math.max(y,Math.hypot(s.getX(x)-d,s.getY(x)-v,s.getZ(x)-w));const M=1-ze(.25,.8,m);for(let x=u;x<f;x++){const A=Math.hypot(s.getX(x)-d,s.getY(x)-v,s.getZ(x)-w)/y;e.setX(x,(M*(.32+.1*A)-(1-M)*.3*Math.pow(A,1.2))/bi),i[x]=m,o[x]=A}}return e.needsUpdate=!0,{layerT:i,alongV:o}}class Ja{constructor({renderer:t,position:e,facing:s,radius:i=1.05,color:o="#ef6f9c",key:a="peony"}){this.position=e.clone(),this.facing=s.clone().normalize(),this.radius=i,this.group=new rt,this.group.name="interactive-flower",this.group.position.copy(e),this.group.quaternion.setFromUnitVectors(Ys,this.facing);const r=is(a,{stage:"open",detail:2,seed:41,hinge:!0});this.petalMap=Za(r),this.material=Yt({opening:!0,baseColor:o}),this.head=new j(r,this.material),this.baseTint=Float32Array.from(r.attributes.aColor.array),this.baseAO=Float32Array.from(r.attributes.aInfo.array),this.head.scale.setScalar(i),this.group.add(this.head),this.hit=new j(new ft(i*1.45,12,8),new Ke({visible:!1})),this.group.add(this.hit),this.halo=new j(new Pt(i*4.2,i*4.2),new K({transparent:!0,depthWrite:!1,blending:Gt,uniforms:{uStrength:{value:0},uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uStrength; uniform float uTime; varying vec2 vUv;
        void main(){ vec2 p = vUv - 0.5; float r = length(p) * 2.0;
          float pulse = 0.85 + 0.15 * sin(uTime * 2.0);
          float a = (exp(-r * r * 3.0) * 0.75 + exp(-r * r * 12.0) * 0.45) * uStrength * pulse;
          float rays = pow(abs(sin(atan(p.y, p.x) * 6.0 + uTime * 0.3)), 18.0) * exp(-r * 2.2) * 0.12 * uStrength;
          gl_FragColor = vec4(vec3(1.0, 0.78, 0.58) * (a + rays), 1.0); }`})),this.halo.renderOrder=5,this.halo.position.copy(e);const n=40,c=new dt,h=new Float32Array(n*3);for(let u=0;u<n;u++)h[u*3]=Math.random(),h[u*3+1]=Math.random(),h[u*3+2]=Math.random();c.setAttribute("position",new lt(new Float32Array(n*3),3)),c.setAttribute("aSeed",new lt(h,3)),this.motes=new Ce(c,new K({transparent:!0,depthWrite:!1,blending:Gt,uniforms:{uTime:{value:0},uStrength:{value:0},uCenter:{value:e.clone()},uRadius:{value:i}},vertexShader:`attribute vec3 aSeed; uniform float uTime; uniform vec3 uCenter; uniform float uRadius; uniform float uStrength; varying float vA;
        void main(){ float t = fract(aSeed.x + uTime * (0.08 + aSeed.y * 0.06));
          float ang = aSeed.z * 6.2831 + uTime * 0.4;
          vec3 p = uCenter + vec3(cos(ang) * uRadius * (0.4 + aSeed.y), t * 2.2 - 0.4, sin(ang) * uRadius * (0.4 + aSeed.y));
          vA = sin(t * 3.14159) * uStrength;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = (40.0 + aSeed.y * 50.0) / -mv.z;
          gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying float vA; void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; float a = exp(-r * r * 4.0) * vA;
          gl_FragColor = vec4(vec3(1.0, 0.86, 0.6) * a, 1.0); }`})),this.motes.frustumCulled=!1,this.placeholder=new qa(t),this.group.add(this.placeholder.group),this.placeholder.group.position.set(0,.45,0),this.jewelShown=!1,this.glow=0,this.glowTarget=0,this.hover=!1,this.open=0,this.openTarget=0,this.invited=!1,this.look={...Xa},this.setLook()}setLook(t={}){Object.assign(this.look,t);const{warmth:e,shadow:s,blush:i}=this.look,o=this.head.geometry,a=o.attributes.aColor,r=o.attributes.aInfo,{layerT:n,alongV:c}=this.petalMap,h=this.material.uniforms.uBaseColor.value;for(let u=0;u<a.count;u++){const f=n[u];if(f<0||r.getY(u)>.5){a.setXYZ(u,this.baseTint[u*3],this.baseTint[u*3+1],this.baseTint[u*3+2]),r.setW(u,this.baseAO[u*4+3]);continue}const p=c[u];Nt.copy(h),$s.copy(xe.outer).lerp(xe.middle,ze(.1,.75,f)),Nt.lerp($s,e),Nt.lerp(xe.blush,i*.8*ze(.45,1,f));const m=Math.pow(1-p,1.6);Nt.lerp(xe.shadow,s*.75*m);const d=.45*ze(.78,1,p),v=R.lerp(Nt.r/h.r,1,d),w=R.lerp(Nt.g/h.g,1,d),y=R.lerp(Nt.b/h.b,1,d);a.setXYZ(u,this.baseTint[u*3]*v,this.baseTint[u*3+1]*w,this.baseTint[u*3+2]*y),r.setW(u,this.baseAO[u*4+3]*(1-.28*s*m))}a.needsUpdate=!0,r.needsUpdate=!0}addTo(t){t.add(this.group,this.halo,this.motes)}landingPoint(){const t=new g().crossVectors(this.facing,Ys).normalize(),e=new g().crossVectors(t,this.facing).normalize(),s=this.position.clone().addScaledVector(e,this.radius*.5).addScaledVector(t,-this.radius*.22).addScaledVector(this.facing,this.radius*.42),i=this.facing.clone().multiplyScalar(.9).addScaledVector(e,.35).normalize();return{point:s,normal:i}}invite(){this.invited=!0,this.glowTarget=.85}uninvite(){this.invited=!1,this.glowTarget=0,this.hover=!1}reveal(){this.invited=!1,this.openTarget=1,this.glowTarget=.55,this.jewelShown=!1}close(){this.openTarget=0,this.glowTarget=0,this.jewelShown=!1,this.placeholder.hide()}reset(){this.uninvite(),this.open=this.openTarget=0,this.glow=0,this.jewelShown=!1,this.placeholder.hide()}update(t,e,s){const i=this.invited?this.hover?1:this.glowTarget:this.glowTarget;this.glow=R.damp(this.glow,i,2.4,t),this.open=R.damp(this.open,this.openTarget,this.openTarget>this.open?1.6:2.2,t),this.material.uniforms.uGlow.value=this.glow*Ya*this.look.glow,this.material.uniforms.uOpen.value=this.open*bi,this.openTarget===1&&!this.jewelShown&&this.open>=Ha&&(this.jewelShown=!0,this.placeholder.show()),this.halo.material.uniforms.uStrength.value=this.glow*this.look.glow*this.look.halo,this.halo.material.uniforms.uTime.value=e,this.halo.quaternion.copy(s.quaternion),this.halo.visible=this.glow>.005,this.motes.material.uniforms.uTime.value=e,this.motes.material.uniforms.uStrength.value=this.glow*this.look.glow,this.motes.visible=this.glow>.005,this.head.rotation.z=Math.sin(e*.7)*.025,this.head.rotation.x=Math.sin(e*.53+1)*.02,this.placeholder.update(t,e,s),this.placeholder.halo.material.uniforms.uStrength.value*=$a}}const Se=()=>new Promise(l=>setTimeout(l,16));function Ka(l=260){const t=new dt,e=new Float32Array(l*3),s=new Float32Array(l),i=new at(99);for(let r=0;r<l;r++)e[r*3]=i.float(-14,14),e[r*3+1]=i.float(.1,6),e[r*3+2]=i.float(-14,14),s[r]=i.next();t.setAttribute("position",new lt(e,3)),t.setAttribute("aSeed",new lt(s,1));const o=new K({transparent:!0,depthWrite:!1,blending:Gt,uniforms:{uTime:U.uTime,uCenter:{value:new g},uPixel:{value:1}},vertexShader:`
      attribute float aSeed; uniform float uTime; uniform vec3 uCenter; uniform float uPixel; varying float vA;
      void main() {
        vec3 box = vec3(28.0, 6.0, 28.0);
        vec3 drift = vec3(sin(uTime * 0.2 + aSeed * 30.0) * 0.6, sin(uTime * 0.31 + aSeed * 11.0) * 0.4 + uTime * 0.05, cos(uTime * 0.17 + aSeed * 20.0) * 0.6);
        vec3 rel = mod(position + drift - uCenter + box * 0.5, box) - box * 0.5;
        rel.y = mod(position.y + drift.y, 6.0) + 0.1;
        vec3 w = vec3(uCenter.x + rel.x, rel.y, uCenter.z + rel.z);
        float edge = 1.0 - smoothstep(9.0, 14.0, length(rel.xz));
        float tw = 0.55 + 0.45 * sin(uTime * (1.5 + aSeed * 2.5) + aSeed * 40.0);
        vA = edge * tw;
        vec4 mv = viewMatrix * vec4(w, 1.0);
        gl_PointSize = uPixel * (10.0 + aSeed * 22.0) / -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      varying float vA;
      void main() { float r = length(gl_PointCoord - 0.5) * 2.0; float a = exp(-r * r * 5.0) * vA * 0.75;
        gl_FragColor = vec4(vec3(1.0, 0.88, 0.62) * a, 1.0); }`}),a=new Ce(t,o);return a.frustumCulled=!1,a.name="motes",a}class Qa{constructor(t,e){this.renderer=t,this.config=e,this.route=new Pa,this.terrain=new li(this.route),this.scene=new es,this.camera=new ts(e.fov,1,.02,700),this.ready=!1}async build(t){const{route:e,terrain:s,scene:i,config:o}=this;t?.(.05),i.add(Ia()),this.terrainMesh=s.createMesh(),i.add(this.terrainMesh),this.water=new Na(e,{reflections:o.quality==="low"?"approx":"planar",reflectionScale:.42}),i.add(this.water.mesh),this.weather=new La(e,{quality:o.quality}),i.add(this.weather.rain.mesh),await Se();const a=o.discoveries[0],r=e.progressToS(a.progress),n=r+a.ahead,c=e.halfWidthAt(n),h=a.side*(c+1.05),u=s.heightAt(n,h),f=e.toWorld(n,h,u+1.2),p=e.pointAt(n-5.5);p.y=.7;const m=p.sub(f).normalize().add(new g(0,.22,0)).normalize();this.spot=a;const d=[-2.6,-1.2,.6].map(_=>{const O=e.pointAt(r+_-o.eyeBack);return O.y=o.eyeHeight,{a:O,b:f.clone(),radius:.6}});this.flora=new Ua({route:e,terrain:s,seed:o.seed,quality:o.quality,reserved:[{position:f,radius:2.2}],sightlines:d,accent:{position:f,radius:4.5,families:["deepplum","burgundy","deepplum"]}}),this.flora.populate(),t?.(.35),await Se();const v=this.flora.cellKey(n,"near"),w=f.clone().addScaledVector(m,-.15),y=u-.05;this.flora.addRecord("stem",v,new J().compose(new g(w.x,y,w.z),new V,new g(.06,w.y-y,.06)),new N("#2f5226"));const M=new at(7);for(let _=0;_<4;_++)this.flora.addLeaf(M,v,new g(w.x,y+.25+_*.22,w.z),_*1.7+.4,"broad",1,.1);i.add(this.flora.build()),t?.(.7),await Se(),this.flower=new Ja({renderer:this.renderer,position:f,facing:m,radius:1.35,color:"#f8efe2",key:"peony"}),this.flower.addTo(i),this.boat=new wi({scale:o.boatScale}),this.boat.setFirstPerson(!0),i.add(this.boat.group),this.butterflies=new Wo(e,{count:o.quality==="low"?18:33}),i.add(this.butterflies.group),this.guide=new Vo({scale:.5}),i.add(this.guide.mesh),this.motes=Ka(o.quality==="low"?140:280),i.add(this.motes),t?.(.85),await Se(),this.camera.position.copy(e.pointAt(e.routeStartS-2)),this.camera.position.y=.6,this.camera.lookAt(e.pointAt(e.routeStartS+6)),this.camera.updateMatrixWorld();const x=[];i.traverse(_=>{_.visible||(x.push(_),_.visible=!0)});const A=async()=>{try{await this.renderer.compileAsync(i,this.camera)}catch{this.renderer.compile(i,this.camera)}};if(await A(),this.water.reflection.enabled){const _=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.water.reflection.target),await A(),this.renderer.setRenderTarget(_)}this.flora.updateLOD(this.camera);const E=new Qe(64,64),k=this.renderer.getRenderTarget();this.renderer.setRenderTarget(E),this.renderer.render(i,this.camera),this.renderer.setRenderTarget(k),E.dispose();for(const _ of x)_.visible=!1;this.flora.updateLOD(this.camera),t?.(1),this.ready=!0}setSize(t,e,s){this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.water?.setSize(t*s,e*s),this.motes&&(this.motes.material.uniforms.uPixel.value=e*s/900*1.4)}update(t,e){this.butterflies.update(t,e),this.guide.update(t,e),this.flower.update(t,e,this.camera),this.motes.material.uniforms.uCenter.value.copy(this.camera.position)}render(t){const e=this.flora;if(e.updateLOD(this.camera,this.water.reflection.enabled?this.water.reflection.camera:null),this.water.reflection.enabled){this.motes.visible=!1,this.flower.halo.visible=!1;const s=this.weather.rain.mesh.visible;this.weather.rain.mesh.visible=!1,this.water.renderReflection(t,this.scene,this.camera,{before:()=>e.pushReflectionLOD(),after:()=>e.popReflectionLOD()}),this.motes.visible=!0,this.flower.halo.visible=this.flower.glow>.005,this.weather.rain.mesh.visible=s}t.render(this.scene,this.camera)}}class tr{constructor(t,{unitsPerNotch:e=1,onTravel:s,onActivity:i}={}){this.element=t,this.unitsPerNotch=e,this.onTravel=s,this.onActivity=i,this.enabled=!1,this.lastEvent={deltaY:0,mode:0,units:0},this.touch=null,this._wheel=o=>{if(o.preventDefault(),!this.enabled)return;let a=o.deltaY;o.deltaMode===1?a*=40:o.deltaMode===2&&(a*=800),Math.abs(a)<.01&&o.shiftKey&&(a=o.deltaX),a=Math.max(-320,Math.min(320,a));const r=a/100*this.unitsPerNotch;this.lastEvent={deltaY:o.deltaY,mode:o.deltaMode,units:r},r!==0&&(this.onTravel?.(r),this.onActivity?.())},t.addEventListener("wheel",this._wheel,{passive:!1}),t.addEventListener("touchstart",o=>{o.touches.length===2&&(this.touch=(o.touches[0].clientY+o.touches[1].clientY)/2)},{passive:!0}),t.addEventListener("touchmove",o=>{if(!this.enabled||o.touches.length!==2||this.touch===null)return;const a=(o.touches[0].clientY+o.touches[1].clientY)/2,r=this.touch-a;this.touch=a,this.onTravel?.(r/60*this.unitsPerNotch),this.onActivity?.()},{passive:!0}),t.addEventListener("touchend",o=>{o.touches.length<2&&(this.touch=null)},{passive:!0})}setEnabled(t){this.enabled=t}}class er{constructor(t,{smoothTime:e=.38,maxSpeed:s=7.5,maxLeadUnits:i=5.5,travelSpeedFactor:o=1}={}){this.route=t,this.smoothTime=e,this.maxSpeed=s,this.maxLead=i,this.speedFactor=o>0&&o<1?o:1,this.progress=0,this.target=0,this.velocity=0,this.position=new g,this.tangent=new g(0,0,-1),this.s=t.progressToS(0),this.sync()}speedFactorAt(){return this.speedFactor}get maxSpeedUnits(){return this.maxSpeed*this.speedFactorAt(this.progress)}reset(t=0){this.progress=this.target=R.clamp(t,0,1),this.velocity=0,this.sync()}travel(t){const e=this.route.routeLength;let s=this.target+t/e;const i=this.maxLead*this.speedFactorAt(this.progress)/e;s=R.clamp(s,this.progress-i,this.progress+i),this.target=R.clamp(s,0,1)}hold(){this.target=this.progress}get speedUnits(){return this.velocity*this.route.routeLength}get moving(){return Math.abs(this.target-this.progress)>1e-6||Math.abs(this.velocity)>1e-6}update(t){if(t<=0)return;const e=this.route.routeLength,s=Math.max(1e-4,this.smoothTime),i=this.speedFactorAt(this.progress),o=this.maxSpeed*i/e;if(i<1){const m=this.maxLead*i/e;this.target=R.clamp(this.target,this.progress-m,this.progress+m)}const a=2/s,r=a*t,n=1/(1+r+.48*r*r+.235*r*r*r);let c=this.progress-this.target;const h=o*s;c=R.clamp(c,-h,h);const u=this.progress-c,f=(this.velocity+a*c)*t;this.velocity=(this.velocity-a*f)*n;let p=u+(c+f)*n;this.target-this.progress>0==p>this.target&&(p=this.target,this.velocity=0),this.progress=R.clamp(p,0,1),Math.abs(this.target-this.progress)*e<.012&&Math.abs(this.velocity)*e<.05&&(this.progress=this.target,this.velocity=0),this.sync()}sync(){this.s=this.route.progressToS(this.progress),this.route.pointAt(this.s,this.position),this.route.tangentAt(this.s,this.tangent)}}const qe=new g(0,1,0),Xs=new g(1,0,0),sr=new g(0,0,1);class ir{constructor(t,e,s,{eyeBack:i=.3,eyeHeight:o=.5,lookAhead:a=6,lookHeight:r=.42,recenterAfter:n=6}={}){this.camera=t,this.route=e,this.element=s,this.eyeBack=i,this.eyeHeight=o,this.lookAhead=a,this.lookHeight=r,this.recenterAfter=n,this.boat=null,this.float=0,this.yaw=0,this.pitch=0,this.targetYaw=0,this.targetPitch=0,this.idle=0,this.enabled=!1,this.dragging=!1,this.focus=0,this.focusTarget=0,this.focusSeconds=1.8,this.focusPos=new g,this.focusLook=new g,this.heading=new g(0,0,-1),this._pos=new g,this._look=new g,this._fwd=new g,this._q=new V,this._qf=new V,this._qa=new V,this._m=new J,this._last=[0,0],s.addEventListener("pointerdown",h=>{if(!(!this.enabled||h.button>0)){this.dragging=!0,this._last=[h.clientX,h.clientY];try{s.setPointerCapture?.(h.pointerId)}catch{}s.classList.add("is-dragging")}});const c=()=>{this.dragging=!1,s.classList.remove("is-dragging")};s.addEventListener("pointerup",c),s.addEventListener("pointercancel",c),s.addEventListener("pointermove",h=>{if(!this.dragging||!this.enabled)return;const u=h.clientX-this._last[0],f=h.clientY-this._last[1];this._last=[h.clientX,h.clientY],this.targetYaw=R.clamp(this.targetYaw-u*.0034,-1.45,1.45),this.targetPitch=R.clamp(this.targetPitch-f*.0026,-.38,.85),this.idle=0})}setEnabled(t){this.enabled=t,t||(this.dragging=!1)}poke(){this.idle=0}resetView(){this.yaw=this.pitch=this.targetYaw=this.targetPitch=0}setFocus(t,e,s){this.focusPos.copy(t),this.focusLook.copy(e),this.focusSeconds=s,this.focusTarget=1}releaseFocus(t){this.focusSeconds=t,this.focusTarget=0}get focusSettled(){return Math.abs(this.focus-this.focusTarget)<.01}lookDirection(t,e){const s=this.route.pointAt(t,Zs),i=this.route.pointAt(t+this.lookAhead,He);return e.subVectors(i,s).setY(0).normalize()}computePose(t,e,s,i,o=0){const a=this.boat,r=a?a.group.position:this.route.pointAt(t,Zs),n=a?He.set(Math.cos(a.heading),0,-Math.sin(a.heading)):this.route.tangentAt(t,He),c=this.float,h=a&&c>0?a.rocker.position.y*a.group.scale.y*.7*c:0;s.copy(r).addScaledVector(n,-this.eyeBack),s.y=this.eyeHeight+h,this._look.copy(s).addScaledVector(e,6),this._look.y=this.lookHeight+h*.5,this._m.lookAt(s,this._look,qe),i.setFromRotationMatrix(this._m),a&&c>0&&(i.multiply(this._qa.setFromAxisAngle(sr,-a.rocker.rotation.x*.35*c)),i.multiply(this._qa.setFromAxisAngle(Xs,a.rocker.rotation.z*.25*c))),i.premultiply(this._qa.setFromAxisAngle(qe,this.yaw)),i.multiply(this._qa.setFromAxisAngle(Xs,this.pitch))}snap(t,e=0){this.lookDirection(t,this.heading),this.computePose(t,this.heading,this.camera.position,this.camera.quaternion,e),this.camera.updateMatrixWorld()}update(t,e,s){this.idle+=t,this.idle>this.recenterAfter&&!this.dragging&&(this.targetYaw=R.damp(this.targetYaw,0,.45,t),this.targetPitch=R.damp(this.targetPitch,0,.45,t)),this.yaw=R.damp(this.yaw,this.targetYaw,7,t),this.pitch=R.damp(this.pitch,this.targetPitch,7,t),this.lookDirection(e,this._fwd),this.heading.lerp(this._fwd,1-Math.exp(-t*3.2)).normalize(),this.computePose(e,this.heading,this._pos,this._q,s);const i=1/Math.max(.1,this.focusSeconds);this.focus=this.focusTarget>this.focus?Math.min(this.focusTarget,this.focus+t*i):Math.max(this.focusTarget,this.focus-t*i);const o=this.focus*this.focus*(3-2*this.focus);o>0&&(this._m.lookAt(this.focusPos,this.focusLook,qe),this._qf.setFromRotationMatrix(this._m),this._pos.lerp(this.focusPos,o),this._q.slerp(this._qf,o)),this.camera.position.copy(this._pos),this.camera.quaternion.copy(this._q),this.camera.updateMatrixWorld()}}const Zs=new g,He=new g;class or{constructor({state:t,journey:e,followCamera:s,guide:i,flower:o,spot:a,canvas:r,camera:n,route:c,config:h,onReveal:u,onReturn:f}){Object.assign(this,{state:t,journey:e,followCamera:s,guide:i,flower:o,spot:a,canvas:r,camera:n,route:c,config:h,onReveal:u,onReturn:f}),this.phase="idle",this.raycaster=new Gi,this.pointer=new Mt,this.down=null,this.timer=0,r.addEventListener("pointerdown",p=>{this.down=[p.clientX,p.clientY]}),r.addEventListener("pointermove",p=>{this.state.current===B.DISCOVERY_INVITATION&&(this.flower.hover=this.hitTest(p),r.classList.toggle("is-pointer",this.flower.hover))}),r.addEventListener("pointerup",p=>{if(!this.down)return;const m=Math.hypot(p.clientX-this.down[0],p.clientY-this.down[1]);this.down=null,m<8&&this.state.current===B.DISCOVERY_INVITATION&&this.hitTest(p)&&this.discover()})}hitTest(t){const e=this.canvas.getBoundingClientRect();return this.pointer.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera),this.raycaster.intersectObject(this.flower.hit,!1).length>0}distance(){return Math.abs(this.journey.progress-this.spot.progress)}summon(){const{point:t,normal:e}=this.flower.landingPoint(),s=this.journey.position,i=this.journey.tangent,o=new g(-i.z,0,i.x),a=s.clone().addScaledVector(i,2.4).addScaledVector(o,-this.spot.side*.9);a.y=1.15;const r=this.flower.position.clone().addScaledVector(this.flower.facing,1.1).add(new g(0,.55,0)).addScaledVector(o,-this.spot.side*.55);this.guide.approach(a,t,e,r,this.config.guideApproachSeconds),this.phase="guiding"}dismiss(){this.guide.depart(),this.flower.uninvite(),this.canvas.classList.remove("is-pointer"),this.state.current===B.DISCOVERY_INVITATION&&this.state.to(B.JOURNEY)}discover(){if(this.phase!=="invited")return;this.phase="revealing",this.journey.hold(),this.state.to(B.DISCOVERY_REVEAL),this.flower.reveal(),this.guide.stepAside(),this.canvas.classList.remove("is-pointer");const t=this.flower,e=t.position.clone().addScaledVector(t.facing,t.radius*2.6+.6).add(new g(0,.35,0));e.y=Math.max(e.y,.5);const s=t.position.clone().addScaledVector(t.facing,t.radius*.35);this.followCamera.setFocus(e,s,this.config.discoveryCameraSeconds),this.onReveal?.()}continueJourney(){this.state.current===B.DISCOVERY_REVEAL&&(this.state.to(B.RETURN_TO_JOURNEY),this.phase="returning",this.flower.close(),this.guide.depart(),this.followCamera.releaseFocus(this.config.discoveryCameraSeconds),this.timer=0)}reset(){this.phase="idle",this.guide.reset(),this.flower.reset(),this.canvas.classList.remove("is-pointer")}update(t){const e=this.distance(),{enterRadius:s,exitRadius:i}=this.spot,o=this.state.current;switch(this.phase){case"idle":o===B.JOURNEY&&e<s&&this.summon();break;case"guiding":if(e>i){this.dismiss(),this.phase="idle";break}this.guide.perched&&o===B.JOURNEY&&(this.state.to(B.DISCOVERY_INVITATION),this.flower.invite(),this.phase="invited");break;case"invited":e>i&&(this.dismiss(),this.phase="idle");break;case"returning":this.timer+=t,this.followCamera.focusSettled&&this.timer>.2&&(this.state.to(B.JOURNEY),this.phase="cooldown",this.onReturn?.());break;case"cooldown":e>i&&(this.phase="idle");break}}}class ar{constructor(){this.app=document.querySelector("#app"),this.startButton=document.querySelector("#start"),this.pauseButton=document.querySelector("#pause"),this.curtainEl=document.querySelector("#curtain"),this.video=document.querySelector("#intro-video"),this.progressFill=document.querySelector(".progress-fill"),this.progressMark=document.querySelector(".progress-mark"),this.debugEl=document.querySelector("#debug"),this.invitation=document.querySelector("#invitation"),this.gardenTitle=document.querySelector("#garden-title"),this._gardenTimer=0,this.handlers={},this.startButton.addEventListener("click",()=>this.emit("start")),document.querySelector("#continue").addEventListener("click",()=>this.emit("continue")),this.pauseButton.addEventListener("click",()=>this.emit("pause")),document.querySelector("#return-intro").addEventListener("click",()=>this.emit("return")),this._debugTick=0}on(t,e){this.handlers[t]=e}emit(t){this.handlers[t]?.()}setState(t){this.app.dataset.state=t}setLoading(t){this.startButton.querySelector(".label").textContent=`PREPARING THE GARDEN · ${Math.round(t*100)}%`}setReady(){this.startButton.disabled=!1,this.startButton.querySelector(".label").textContent="START JOURNEY",this.app.classList.add("is-ready")}placeInvitation(t,e,s){s&&(this.invitation.style.left=`${Math.round(t)}px`,this.invitation.style.top=`${Math.round(e)}px`)}setPaused(t){this.pauseButton.textContent=t?"RESUME":"PAUSE",this.app.classList.toggle("is-paused",t)}curtain(t){this.curtainEl.classList.toggle("is-visible",t)}showGarden(t){const e=this.gardenTitle;e.querySelector(".garden-number").textContent=`GARDEN ${t.number}`,e.querySelector(".garden-name").textContent=t.title,e.querySelector(".garden-mood").textContent=t.mood,e.classList.remove("is-visible"),e.offsetWidth,e.classList.add("is-visible"),clearTimeout(this._gardenTimer),this._gardenTimer=setTimeout(()=>e.classList.remove("is-visible"),3600)}setGardenTicks(t){const e=document.querySelector(".progress-track");for(const s of t.slice(1)){const i=document.createElement("div");i.className="progress-tick",i.style.left=`${s.range[0]*100}%`,e.appendChild(i)}}setProgress(t,e){this.progressFill.style.transform=`scaleX(${t})`,this.progressMark.style.left=`${e*100}%`}setupIntroMedia(t){const e=this.video;t.introPoster&&(e.poster=t.introPoster),t.introVideo&&(e.src=t.introVideo,e.addEventListener("loadeddata",()=>e.classList.add("is-ready")),e.addEventListener("error",()=>e.classList.remove("is-ready")),e.play().catch(()=>{}))}stopIntroVideo(){this.video.pause(),this.video.classList.remove("is-ready")}resumeIntroVideo(t){t.introVideo&&(this.video.classList.add("is-ready"),this.video.play().catch(()=>{}))}debug(t){if(++this._debugTick%15)return;this.debugEl.hidden=!1;const{flora:e,...s}=t;this.debugEl.textContent=Object.entries(s).map(([i,o])=>`${i}: ${o}`).join(`
`)}}class rr{constructor(t){this.gl=t,this.ext=t.getExtension("EXT_disjoint_timer_query_webgl2"),this.pending=[],this.active=null,this.ms=0,this.samples=[]}get available(){return!!this.ext}begin(){if(!this.ext||this.active||this.pending.length>6)return;const t=this.gl.createQuery();this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,t),this.active=t}end(){this.active&&(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.pending.push(this.active),this.active=null)}poll(){const t=this.gl;if(!this.ext)return;const e=t.getParameter(this.ext.GPU_DISJOINT_EXT);for(;this.pending.length;){const s=this.pending[0];if(!t.getQueryParameter(s,t.QUERY_RESULT_AVAILABLE))break;if(this.pending.shift(),!e){const i=t.getQueryParameter(s,t.QUERY_RESULT)/1e6;this.ms=this.ms?this.ms*.85+i*.15:i,this.samples.push(i),this.samples.length>2e3&&this.samples.shift()}t.deleteQuery(s)}}reset(){this.samples=[]}stats(){const t=[...this.samples].sort((s,i)=>s-i);if(!t.length)return null;const e=t.reduce((s,i)=>s+i,0)/t.length;return{n:t.length,avg:+e.toFixed(2),p95:+t[Math.floor(t.length*.95)].toFixed(2),max:+t[t.length-1].toFixed(2)}}}const Ye=l=>new Promise(t=>setTimeout(t,l));class Js{constructor(){this.canvas=document.querySelector("#stage"),this.ui=new ar,this.state=new Hi,this.state.onChange(e=>{this.ui.setState(e),this.syncInput()});const t=this.renderer=new Wi({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio||1,tt.maxPixelRatio)),t.outputColorSpace=Qs,t.toneMapping=Vi,t.toneMappingExposure=.96,t.info.autoReset=!1,this.gpu=new rr(t.getContext()),this.intro=new Fa(t),this.garden=new Qa(t,tt),this.active="intro",this.time=0,this.paused=!1,this.fixedTime=null,this.frames=0,this.frameTime=0,this.fps=0,this.frameMs=0,this.clock=new Bi,this.metrics={state:this.state.current},window.__garden={metrics:this.metrics,app:this},this.ui.setupIntroMedia(tt),this.ui.on("start",()=>this.start()),this.ui.on("continue",()=>this.discovery?.continueJourney()),this.ui.on("pause",()=>this.togglePause()),this.ui.on("return",()=>this.returnToIntro()),window.addEventListener("resize",()=>this.resize()),document.addEventListener("visibilitychange",()=>document.hidden?this.stopLoop():this.startLoop()),this.resize(),this.startLoop(),setTimeout(()=>this.prepareGarden(),120)}async prepareGarden(){const t=performance.now();await this.garden.build(i=>this.ui.setLoading(i)),this.metrics.buildMs=Math.round(performance.now()-t);const e=this.garden;this.attractions=new Ta({enabled:tt.attractionsEnabled,scene:e.scene,debug:tt.debug}),window.__garden.attractions=this.attractions;const s=this.attractions.guideCreature({camera:e.camera})||e.guide;if(this.attractions.enabled&&await this.attractions.warmup(e),this.journey=new er(e.route,tt),this.scroll=new tr(this.canvas,{unitsPerNotch:tt.unitsPerNotch,onTravel:i=>this.journey.travel(i),onActivity:()=>this.follow.poke()}),this.follow=new ir(e.camera,e.route,this.canvas,tt),this.follow.float=tt.cameraFloat,this._water={s:0,rain:0,heightAt:Xi,heightScale:Yi},this.follow.boat=e.boat,this.discovery=new or({state:this.state,journey:this.journey,followCamera:this.follow,guide:s,flower:e.flower,spot:e.spot,canvas:this.canvas,camera:e.camera,route:e.route,config:tt,onReveal:()=>this.syncInput(),onReturn:()=>this.syncInput()}),this.attractions.enabled){const i=e.weather.rain,o=i.uniforms,a=()=>{i.mesh.visible=Math.max(o.uRain.value,o.uDrizzle.value*.32)>.003};this.attractions.env.bindTarget("rainDropDensity",o.uRain,{after:a}),this.attractions.env.bindTarget("rainDrizzle",o.uDrizzle,{after:a})}this.resize(),this.ui.setReady(),this.ui.setGardenTicks(q),this.metrics.flora=e.flora.stats(),window.__garden.api={travel:i=>this.journey.travel(i),jump:i=>{this.journey.reset(i),this.placeBoat(),this.follow.snap(this.journey.s,this.time),e.weather.snap(i)},discover:()=>this.discovery.discover(),quality:i=>e.water.setMode(i)}}placeBoat(){const t=this.garden.boat;t.heading=Math.atan2(-this.journey.tangent.z,this.journey.tangent.x),t.place(this.journey.position,this.journey.tangent,0,this.time,1e-4)}syncInput(){const t=this.state.navigationEnabled&&!this.paused;this.scroll?.setEnabled(t),this.follow?.setEnabled(this.state.lookEnabled&&!this.paused),t||this.journey?.hold()}async start(){!this.state.is(B.INTRO)||!this.garden.ready||(this.state.to(B.TRANSITION),this.ui.curtain(!0),await Ye(tt.transitionSeconds*550),this.active="garden",this.ui.stopIntroVideo(),this.journey.reset(0),this.garden.weather.snap(0),this.discovery.reset(),this.attractions.reset(),this.follow.resetView(),this.follow.releaseFocus(.01),this.follow.focus=0,this.garden.boat.heading=Math.atan2(-this.journey.tangent.z,this.journey.tangent.x),this.placeBoat(),this.follow.snap(this.journey.s,this.time),this.state.to(B.JOURNEY),this.gardenIndex=-1,await Ye(250),this.ui.curtain(!1))}async returnToIntro(){this.state.is(B.INTRO,B.TRANSITION)||(this.ui.curtain(!0),await Ye(650),this.state.to(B.INTRO),this.active="intro",this.attractions.reset(),this.garden.weather.applyIntro(),this.discovery.reset(),this.journey.reset(0),this.paused&&this.togglePause(),this.ui.resumeIntroVideo(tt),this.ui.curtain(!1))}updateChapters(){const t=this.journey.progress,e=this.state,s=lo(t);s!==this.gardenIndex&&e.is(B.JOURNEY)&&(this.gardenIndex=s,this.ui.showGarden(q[s]));const i=!this.journey.moving;e.is(B.JOURNEY)&&t>=tt.endingProgress&&i?e.to(B.ENDING):e.is(B.ENDING)&&t<tt.endingProgress-.01&&e.to(B.JOURNEY)}togglePause(){this.paused=!this.paused,this.ui.setPaused(this.paused),this.syncInput()}resize(){const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight,s=this.renderer.getPixelRatio();this.renderer.setSize(t,e,!1),this.intro.setSize(t,e,s),this.garden.ready&&this.garden.setSize(t,e,s)}startLoop(){if(this.running)return;this.running=!0,this.clock.start();const t=()=>{this.running&&(this.raf=requestAnimationFrame(t),this.frame())};t()}stopLoop(){this.running=!1,cancelAnimationFrame(this.raf),this.clock.stop()}frame(){const t=performance.now(),e=Math.min(this.clock.getDelta(),.05);let s=this.paused?0:e;this.fixedTime!==null?(this.time=this.fixedTime,s=0):this.time+=s,U.uTime.value=this.time;const i=this.renderer;if(i.info.reset(),this.gpu.poll(),this.gpu.begin(),this.active==="intro")this.intro.update(s,this.time),this.intro.render(i);else{const a=this.garden;if(this.journey.update(s),this._water.s=this.journey.s,this._water.rain=U.uRain.value,a.boat.place(this.journey.position,this.journey.tangent,this.journey.speedUnits,this.time,Math.max(s,1e-4),this._water),a.water.setBoat(a.boat.group.position,Math.min(1,Math.abs(this.journey.speedUnits)/3),this.journey.tangent),this.follow.update(s,this.journey.s,this.time),this.discovery.update(s),a.weather.update(s,this.journey.progress,a.camera,this.time),this.attractions.update(s,{time:this.time,progress:this.journey.progress,s:this.journey.s,experienceState:this.state.current,camera:a.camera,weather:a.weather.state,speed:this.journey.speedUnits,route:a.route}),a.update(s,this.time),a.render(i),this.ui.setProgress(this.journey.progress,a.spot.progress),this.updateChapters(),this.state.is(B.DISCOVERY_INVITATION)){const r=a.flower.position.clone().add(new g(0,-a.flower.radius*.95,0)).project(a.camera);this.ui.placeInvitation((r.x+1)/2*this.canvas.clientWidth,(1-r.y)/2*this.canvas.clientHeight,r.z<1)}}this.gpu.end(),this.frames++,this.frameTime+=e,this.frameMs=this.frameMs*.9+(performance.now()-t)*.1,this.frameTime>=1&&(this.fps=Math.round(this.frames/this.frameTime),this.frames=0,this.frameTime=0);const o=this.metrics;if(o.fps=this.fps,o.cpuFrameMs=+this.frameMs.toFixed(2),o.gpuMs=+this.gpu.ms.toFixed(2),o.drawCalls=i.info.render.calls,o.triangles=i.info.render.triangles,o.geometries=i.info.memory.geometries,o.textures=i.info.memory.textures,o.programs=i.info.programs?.length,o.pixelRatio=i.getPixelRatio(),o.state=this.state.current,o.paused=this.paused,this.journey){o.progress=+this.journey.progress.toFixed(4),o.target=+this.journey.target.toFixed(4),o.speed=+this.journey.speedUnits.toFixed(3),o.discovery=this.discovery.phase,o.guide=this.garden.guide.phase,o.focus=+this.follow.focus.toFixed(3),o.reflections=this.garden.water.mode,o.attractions=this.attractions.enabled?this.attractions.summary():"disabled";const a=this.garden.weather.state;o.weather=`rain ${a.rain.toFixed(2)} drizzle ${a.drizzle.toFixed(2)} wet ${a.wet.toFixed(2)} sun ${a.sunVis.toFixed(2)} clouds ${a.clouds.toFixed(2)} wind ${a.wind.toFixed(2)}`}performance.memory&&(o.jsHeapMB=Math.round(performance.memory.usedJSHeapSize/1048576)),tt.debug&&this.ui.debug(o)}}const Ks=l=>(new URLSearchParams(location.search).get("audio")!=="0"&&Me(async()=>{const{installAudio:t}=await import("./audio-BKLz871Z.js");return{installAudio:t}},__vite__mapDeps([0,1]),import.meta.url).then(({installAudio:t})=>t(l)).catch(t=>console.warn("[audio] not loaded:",t)),l);if(tt.testMode)Me(async()=>{const{installTestHooks:l}=await import("./TestHooks-DDuFZOWR.js");return{installTestHooks:l}},__vite__mapDeps([2,1]),import.meta.url).then(({installTestHooks:l})=>{const t=l();Ks(t(new Js))});else{const l=Ks(new Js),t=new URLSearchParams(location.search).get("tune");t==="peony"?Me(async()=>{const{installPeonyTuner:e}=await import("./PeonyTuner-CCKCaKof.js");return{installPeonyTuner:e}},__vite__mapDeps([3,1]),import.meta.url).then(({installPeonyTuner:e})=>e(l)):t!==null&&Me(async()=>{const{installGradeTuner:e}=await import("./GradeTuner-jvnpcuZK.js");return{installGradeTuner:e}},[],import.meta.url).then(({installGradeTuner:e})=>e(l))}export{Xa as H,Me as _,lr as a,Ki as m};
