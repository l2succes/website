'use strict';
const LIB = window.LIBRARY, $ = id => document.getElementById(id);
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- world dimensions, metres, taken from the wide photo at 2 mm per pixel ---------- */
const BAY = { left: [-1.77, -0.87], right: [0.87, 1.77] };
const SHELF_Y = { T: 1.804, M: 1.46, L: 1.12 };
const COUNTER_Y = 0.73, BAY_TOP = 2.08, UNIT_TOP = 2.14, CEILING = 2.3;
const BACK_Z = -0.345, SPINE_Z = -0.028;

const renderer = (() => {
  try { return new THREE.WebGLRenderer({ canvas: $('stage'), antialias: true, powerPreference: 'high-performance' }); }
  catch (e) { return null; }
})();
const books = LIB.data.shelves.flatMap(s => s.books);
const unreadN = books.filter(b => b.conf === 'unread').length;
const partialN = books.filter(b => b.conf === 'partial').length;
$('tally').textContent = `${books.length} books, ${books.length - unreadN - partialN} read clearly, ${partialN} partly, ${unreadN} unread`;
const cleanAuthor = b => (b.author || '').replace(/\(.*?\)/g, '').split(/\s*(?:&|,| with )\s*/)[0].trim();
const LINKS = {
  amazon: b => 'https://www.amazon.com/s?i=stripbooks&k=' + encodeURIComponent([b.title, cleanAuthor(b)].filter(Boolean).join(' ')),
  audible: b => b.asin ? 'https://www.audible.com/pd/' + b.asin : null,
};
buildCatalogue();

if (!renderer) {
  $('loading').style.opacity = 0;
  $('hint').textContent = 'This browser has WebGL turned off, so the 3D shelves cannot load. The catalogue still works.';
  ['viewWall', 'viewLeft', 'viewRight', 'tod'].forEach(id => $(id).hidden = true);
  $('drawer').classList.add('on');
  throw new Error('WebGL unavailable');
}

const SMALL_GPU = matchMedia('(pointer: coarse)').matches || Math.min(innerWidth, innerHeight) < 500;
renderer.setPixelRatio(Math.min(devicePixelRatio, SMALL_GPU ? 1.75 : 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.autoUpdate = false;

const scene = new THREE.Scene();
renderer.setClearColor(0x14110c, 1);
renderer.autoClear = false;
const camera = new THREE.PerspectiveCamera(32, 1, 0.05, 80);
scene.add(camera);

let dirty = 3;
const invalidate = (n = 2) => { dirty = Math.max(dirty, n); };
const reshadow = () => { renderer.shadowMap.needsUpdate = true; invalidate(); };

/* ---------- textures ---------- */
const loadTex = src => {
  const t = new THREE.TextureLoader().load(src, () => invalidate(4));
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return t;
};
const atlasTex = loadTex(LIB.atlas);
const atlasImg = new Image(); atlasImg.src = LIB.atlas;
const decorTex = Object.fromEntries(Object.entries(LIB.decor).map(([k, v]) => [k, loadTex(v)]));

function canvasTex(w, h, draw, opts = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (!opts.data) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  if (opts.repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...opts.repeat); }
  return t;
}
const rnd = (() => { let s = 7; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();

/* ---------- materials ---------- */
const paint = new THREE.MeshStandardMaterial({ color: 0xdedbd2, roughness: 0.6 });
const paintDeep = new THREE.MeshStandardMaterial({ color: 0xd2cec3, roughness: 0.78 });
const brass = new THREE.MeshStandardMaterial({ color: 0xb58a45, metalness: 1, roughness: 0.32 });
const agedBrass = new THREE.MeshStandardMaterial({ color: 0x8c6a3a, metalness: 1, roughness: 0.42 });
const ctx2 = {
  wall: new THREE.MeshStandardMaterial({ color: 0xbdb8aa, roughness: 0.92 }),
  ceiling: new THREE.MeshStandardMaterial({ color: 0xcfc9ba, roughness: 0.95 }),
};
const floorTex = canvasTex(1024, 1024, (g, w, h) => {
  const planks = 6;
  for (let i = 0; i < planks; i++) {
    const x = i / planks * w, pw = w / planks;
    let y = -rnd() * 400;
    while (y < h) {
      const len = 260 + rnd() * 340, l = 62 + rnd() * 10;
      g.fillStyle = `hsl(${32 + rnd() * 5},${34 + rnd() * 8}%,${l}%)`; g.fillRect(x, y, pw, len);
      g.strokeStyle = 'rgba(95,65,35,.10)';
      for (let k = 0; k < 26; k++) { g.beginPath(); const gx = x + rnd() * pw; g.moveTo(gx, y); g.bezierCurveTo(gx + 6, y + len * .3, gx - 6, y + len * .6, gx + rnd() * 5, y + len); g.stroke(); }
      g.fillStyle = 'rgba(50,32,16,.5)'; g.fillRect(x, y + len - 1, pw, 1.5);
      y += len;
    }
    g.fillStyle = 'rgba(50,32,16,.5)'; g.fillRect(x, 0, 1.5, h);
  }
}, { repeat: [39, 25] });
const pagesEdge = canvasTex(64, 256, (g, w, h) => {
  g.fillStyle = '#e8dfca'; g.fillRect(0, 0, w, h);
  for (let x = 0; x < w; x += 1) { g.fillStyle = `rgba(90,70,45,${rnd() * .22})`; g.fillRect(x, 0, 1, h); }
});
const pageTopMat = new THREE.MeshStandardMaterial({ map: pagesEdge, roughness: 0.9 });
const shadeTex = canvasTex(8, 256, (g, w, h) => {
  const a = g.createLinearGradient(0, 0, 0, h);
  a.addColorStop(0, 'rgba(0,0,0,.62)'); a.addColorStop(.35, 'rgba(0,0,0,.2)'); a.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = a; g.fillRect(0, 0, w, h);
});
const blobTex = canvasTex(128, 128, (g, w, h) => {
  const a = g.createRadialGradient(w / 2, h / 2, 4, w / 2, h / 2, w / 2);
  a.addColorStop(0, 'rgba(0,0,0,.55)'); a.addColorStop(.6, 'rgba(0,0,0,.22)'); a.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = a; g.fillRect(0, 0, w, h);
});

/* ---------- cabinet ---------- */
const room = new THREE.Group(); scene.add(room);
function box(w, h, d, x, y, z, mat = paint, cast = true) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z); m.castShadow = cast; m.receiveShadow = true; room.add(m); return m;
}
function cyl(rt, rb, h, x, y, z, mat, seg = 32) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
  m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; room.add(m); return m;
}
function shaker(x0, x1, y0, y1, z) {
  const w = x1 - x0, h = y1 - y0, cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, s = 0.058, d = 0.018;
  box(w - 0.004, h - 0.004, 0.006, cx, cy, z - 0.008, paintDeep);
  box(s, h, d, x0 + s / 2, cy, z, paint); box(s, h, d, x1 - s / 2, cy, z, paint);
  box(w - s * 2, s, d, cx, y0 + s / 2, z, paint); box(w - s * 2, s, d, cx, y1 - s / 2, z, paint);
}
function knob(x, y, z, r = 0.016, mat = agedBrass) {
  const pts = [[0, 0], [r * .45, 0], [r * .4, r * .7], [r, r * 1.3], [r * .95, r * 1.8], [r * .4, r * 2.2], [0, r * 2.25]].map(p => new THREE.Vector2(p[0], p[1]));
  const m = new THREE.Mesh(new THREE.LatheGeometry(pts, 24), mat);
  m.rotation.x = Math.PI / 2; m.position.set(x, y, z); m.castShadow = true; room.add(m); return m;
}

// shell: wall, floor, ceiling
{
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(42, 5), ctx2.wall); wall.position.set(0, 2.5, -0.35); wall.receiveShadow = true; room.add(wall);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(42, 42), new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.62 }));
  floor.rotation.x = -Math.PI / 2; floor.position.set(0, 0, 20.6); floor.receiveShadow = true; room.add(floor);
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(42, 42), ctx2.ceiling);
  ceil.rotation.x = Math.PI / 2; ceil.position.set(0, CEILING, 20.6); room.add(ceil);
  [-1.25, -0.05, 1.15].forEach(x => {
    const r = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.011, 10, 32), paint); r.rotation.x = Math.PI / 2; r.position.set(x, CEILING - 0.004, 0.42); room.add(r);
    const d = new THREE.Mesh(new THREE.CircleGeometry(0.045, 24), new THREE.MeshBasicMaterial({ color: 0xfff1d6 })); d.rotation.x = Math.PI / 2; d.position.set(x, CEILING - 0.002, 0.42); room.add(d);
  });
  // light switch
  box(0.11, 0.075, 0.006, -1.96, 1.29, -0.346, paint, false);
  [-0.02, 0.02].forEach(o => box(0.024, 0.045, 0.008, -1.96 + o, 1.29, -0.344, paint, false));
}

// crown and upper carcass
box(3.8, 0.03, 0.42, 0, UNIT_TOP + 0.015, -0.14);
box(3.74, 0.06, 0.36, 0, UNIT_TOP + 0.06, -0.17);
box(3.84, 0.022, 0.46, 0, UNIT_TOP + 0.1, -0.12);
box(3.9, 0.05, 0.48, 0, CEILING - 0.03, -0.11);

for (const side of [-1, 1]) {
  const [x0, x1] = side < 0 ? BAY.left : BAY.right, cx = (x0 + x1) / 2, w = x1 - x0;
  const outer = side < 0 ? x0 - 0.06 : x1 + 0.06, inner = side < 0 ? x1 + 0.02 : x0 - 0.02;
  box(w + 0.1, 0.012, 0.01, cx, UNIT_TOP - 0.004, -0.34, paintDeep, false);
  box(w, BAY_TOP - COUNTER_Y, 0.012, cx, (BAY_TOP + COUNTER_Y) / 2, BACK_Z, paintDeep, false);
  box(0.06, UNIT_TOP - COUNTER_Y, 0.345, side < 0 ? x0 - 0.03 : x1 + 0.03, (UNIT_TOP + COUNTER_Y) / 2, -0.172);
  box(0.02, UNIT_TOP - COUNTER_Y, 0.345, side < 0 ? x1 + 0.01 : x0 - 0.01, (UNIT_TOP + COUNTER_Y) / 2, -0.172);
  box(w, UNIT_TOP - BAY_TOP, 0.345, cx, (UNIT_TOP + BAY_TOP) / 2, -0.172);
  Object.values(SHELF_Y).forEach(y => box(w, 0.032, 0.33, cx, y - 0.016, -0.165));
  // ambient-occlusion cards under each shelf and over the books
  const tops = [BAY_TOP, SHELF_Y.T - 0.032, SHELF_Y.M - 0.032, SHELF_Y.L - 0.032];
  tops.forEach(y => {
    const h = 0.25;
    const card = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: shadeTex, transparent: true, depthWrite: false }));
    card.position.set(cx, y - h / 2, -0.005); card.renderOrder = 2; room.add(card);
    const back = card.clone(); back.position.z = BACK_Z + 0.01; back.renderOrder = 1; room.add(back);
  });
  // counter and base cabinet
  box(w + 0.11, 0.03, 0.40, cx + side * 0.015, COUNTER_Y - 0.015, -0.135);
  box(w + 0.08, COUNTER_Y - 0.03 - 0.06, 0.32, cx + side * 0.03, (COUNTER_Y - 0.03 + 0.06) / 2, -0.19);
  box(w + 0.05, 0.06, 0.3, cx + side * 0.03, 0.03, -0.2);
  const a = side < 0 ? -1.75 : 0.87, b = side < 0 ? -0.86 : 1.76, mid = (a + b) / 2;
  shaker(a, mid, 0.075, 0.69, -0.02); shaker(mid, b, 0.075, 0.69, -0.02);
  knob(mid - 0.022, 0.645, -0.012); knob(mid + 0.022, 0.645, -0.012);
}
// centre base, sits proud of the side cabinets
box(1.74, 0.028, 0.44, 0, 0.75, -0.08);
box(1.70, 0.68, 0.34, 0, 0.40, -0.14);
box(1.66, 0.06, 0.32, 0, 0.03, -0.15);
[[-0.81, -0.4], [-0.4, 0.002], [-0.002, 0.41], [0.41, 0.81]].forEach(([p, q]) => shaker(p, q, 0.07, 0.70, 0.03));
[-0.4, 0, 0.41].forEach(x => { knob(x - 0.022, 0.655, 0.038); knob(x + 0.022, 0.655, 0.038); });

// barn doors with X bracing
const DOOR_Y0 = 0.765, DOOR_Y1 = 2.155;
for (const [x0, x1] of [[-0.86, -0.002], [0.002, 0.86]]) {
  const w = x1 - x0, h = DOOR_Y1 - DOOR_Y0, cx = (x0 + x1) / 2, cy = (DOOR_Y0 + DOOR_Y1) / 2, sx = 0.085, sy = 0.07;
  box(w, h, 0.34, cx, cy, -0.13, paintDeep);
  box(w, h, 0.012, cx, cy, 0.05, paint);
  box(sx, h, 0.02, x0 + sx / 2, cy, 0.066); box(sx, h, 0.02, x1 - sx / 2, cy, 0.066);
  box(w - sx * 2, sy, 0.02, cx, DOOR_Y0 + sy / 2, 0.066); box(w - sx * 2, sy, 0.02, cx, DOOR_Y1 - sy / 2, 0.066);
  const fw = w - sx * 2, fh = h - sy * 2, len = Math.hypot(fw, fh), ang = Math.atan2(fh, fw);
  [ang, -ang].forEach(a => { const d = box(len - 0.03, 0.05, 0.02, cx, cy, 0.066); d.rotation.z = a; });
  const ros = cyl(0.062, 0.066, 0.024, cx, cy, 0.074, paint, 48); ros.rotation.x = Math.PI / 2;
  const plate = cyl(0.03, 0.033, 0.006, cx, cy, 0.088, agedBrass); plate.rotation.x = Math.PI / 2;
  knob(cx, cy, 0.09, 0.03, brass);
}

/* ---------- decor ---------- */
function blob(x, z, w, d, y = COUNTER_Y + 0.001) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, depthWrite: false }));
  m.rotation.x = -Math.PI / 2; m.position.set(x, y, z); room.add(m);
}
function picture(tex, x, w, h, z, frame) {
  const g = new THREE.Group(); g.position.set(x, COUNTER_Y, z); g.rotation.x = -0.09; room.add(g);
  const f = new THREE.Mesh(new THREE.BoxGeometry(w + 0.012, h + 0.012, 0.016), new THREE.MeshStandardMaterial({ color: frame, roughness: 0.7 }));
  f.position.y = h / 2 + 0.006; f.castShadow = true; g.add(f);
  const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5 }));
  p.position.set(0, h / 2 + 0.006, 0.0085); g.add(p);
}
function vessel(tex, x, z, r, h, side, rim) {
  cyl(r, r, h, x, COUNTER_Y + h / 2, z, new THREE.MeshStandardMaterial({ color: side, roughness: 0.45 }));
  const front = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.004, r * 1.004, h, 32, 1, true, -Math.PI / 2, Math.PI), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.35 }));
  front.position.set(x, COUNTER_Y + h / 2, z); room.add(front);
  const top = new THREE.Mesh(new THREE.CircleGeometry(r * .92, 32), new THREE.MeshStandardMaterial({ color: rim, roughness: 0.8 }));
  top.rotation.x = -Math.PI / 2; top.position.set(x, COUNTER_Y + h + 0.001, z); room.add(top);
  blob(x, z, r * 3.4, r * 3.4);
}
function belljar(x, z, plinthW, inner) {
  const y = COUNTER_Y;
  box(plinthW, 0.02, plinthW * .75, x, y + 0.01, z, new THREE.MeshStandardMaterial({ color: 0x1d1a16, roughness: 0.55 }));
  box(plinthW * .86, 0.022, plinthW * .62, x, y + 0.03, z, brass);
  const dev = new THREE.MeshStandardMaterial({ color: 0x3c3128, metalness: .8, roughness: .45 });
  inner.forEach(([dx, h, r]) => cyl(r, r * 1.1, h, x + dx, y + 0.041 + h / 2, z, dev, 16));
  const glass = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.04, metalness: 0, transparent: true, opacity: 0.16, envMapIntensity: 1.6, depthWrite: false });
  const r = plinthW * .32, hh = 0.075;
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r, r, hh, 32, 1, true), glass); body.position.set(x, y + 0.041 + hh / 2, z); room.add(body);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), glass); dome.position.set(x, y + 0.041 + hh, z); room.add(dome);
  blob(x, z, plinthW * 1.6, plinthW * 1.3);
}
// left bay
picture(decorTex.painting, -1.29, 0.27, 0.215, -0.28, 0x222018);
vessel(decorTex.cup, -1.58, -0.07, 0.044, 0.118, 0x25231f, 0x34302a);
vessel(decorTex.mug, -1.03, -0.07, 0.046, 0.112, 0xe9e6dc, 0x43382d);
cyl(0.024, 0.024, 0.05, -1.655, COUNTER_Y + 0.025, -0.14, new THREE.MeshStandardMaterial({ color: 0xece4cf, roughness: 0.3 }));
cyl(0.02, 0.024, 0.062, -0.965, COUNTER_Y + 0.031, -0.16, new THREE.MeshStandardMaterial({ color: 0x3b2413, roughness: 0.25 }));
[-0.008, 0.006, 0.001].forEach((o, i) => { const s = cyl(0.0014, 0.0014, 0.15, -0.965 + o, COUNTER_Y + 0.13, -0.16, new THREE.MeshStandardMaterial({ color: 0xc9a56d }), 6); s.rotation.z = o * 8 + (i - 1) * .06; });
blob(-0.965, -0.16, 0.13, 0.13);
{ // mantel clock
  const w = 0.128, h = 0.09, r = 0.03, sh = new THREE.Shape();
  sh.moveTo(-w / 2 + r, -h / 2); sh.lineTo(w / 2 - r, -h / 2); sh.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r); sh.lineTo(w / 2, h / 2 - r); sh.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
  sh.lineTo(-w / 2 + r, h / 2); sh.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r); sh.lineTo(-w / 2, -h / 2 + r); sh.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
  const body = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, { depth: 0.035, bevelEnabled: true, bevelSize: 0.002, bevelThickness: 0.002, bevelSegments: 2 }), brass);
  body.position.set(-1.3, COUNTER_Y + h / 2 + 0.002, -0.06); body.rotation.x = -0.1; body.castShadow = true; room.add(body);
  const fg = new THREE.ShapeGeometry(sh, 8), pos = fg.attributes.position, uv = fg.attributes.uv;
  for (let i = 0; i < pos.count; i++) uv.setXY(i, pos.getX(i) / w + .5, pos.getY(i) / h + .5);
  const face = new THREE.Mesh(fg, new THREE.MeshStandardMaterial({ map: decorTex.mantel, roughness: 0.25 }));
  face.position.z = 0.038; body.add(face); blob(-1.3, -0.04, 0.22, 0.14);
}
{ // melting clock, standing in front of the top shelf as in the first photos
  const [bx0, by0, bx1, by1] = LIB.data.clockBox, s = 0.00165;
  const cxp = 366, cyp = 245;
  const shape = new THREE.Shape(LIB.data.clock.map(([x, y]) => new THREE.Vector2((x - cxp) * s, (cyp - y) * s)));
  const clk = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth: 0.014, bevelEnabled: true, bevelSize: 0.003, bevelThickness: 0.003, bevelSegments: 3 }), brass);
  clk.position.set(-1.325, SHELF_Y.T + 0.165, SPINE_Z + 0.008); clk.rotation.x = -0.05; clk.castShadow = true; room.add(clk);
  const fg = new THREE.ShapeGeometry(shape, 12), pos = fg.attributes.position, uv = fg.attributes.uv;
  for (let i = 0; i < pos.count; i++) uv.setXY(i, ((pos.getX(i) / s + cxp) - bx0) / (bx1 - bx0), 1 - ((cyp - pos.getY(i) / s) - by0) / (by1 - by0));
  const face = new THREE.Mesh(fg, new THREE.MeshStandardMaterial({ map: decorTex.meltclock, roughness: 0.28 }));
  face.position.z = 0.0175; clk.add(face);
}
// right bay
picture(decorTex.nyc, 1.16, 0.288, 0.22, -0.28, 0x2a2926);
belljar(0.965, -0.1, 0.105, [[-0.012, 0.05, 0.012], [0.014, 0.036, 0.009]]);
belljar(1.5, -0.1, 0.125, [[-0.02, 0.04, 0.013], [0.012, 0.055, 0.012], [0.03, 0.028, 0.008]]);
box(0.178, 0.078, 0.11, 1.225, COUNTER_Y + 0.039, -0.08, new THREE.MeshStandardMaterial({ color: 0x62211c, roughness: 0.48 }));
box(0.178, 0.004, 0.11, 1.225, COUNTER_Y + 0.056, -0.08, brass, false);
blob(1.225, -0.06, 0.28, 0.2);
// chair, throw and paper lamp at the right edge of the frame
{
  const noise = canvasTex(256, 256, (g, w, h) => { const d = g.createImageData(w, h); for (let i = 0; i < d.data.length; i += 4) { const v = 90 + rnd() * 165; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 255; } g.putImageData(d, 0, 0); }, { data: true, repeat: [8, 8] });
  const knit = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#6a6a6a'; g.fillRect(0, 0, w, h); for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) { const a = g.createRadialGradient((x + .5) * 32 + (y % 2) * 16, (y + .5) * 32, 2, (x + .5) * 32 + (y % 2) * 16, (y + .5) * 32, 20); a.addColorStop(0, '#fff'); a.addColorStop(1, 'rgba(90,90,90,0)'); g.fillStyle = a; g.fillRect(0, 0, w, h); } }, { data: true, repeat: [6, 6] });
  const puff = (mat, x, y, z, sx, sy, sz, rz = 0) => { const m = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 32), mat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); m.rotation.z = rz; m.castShadow = true; m.receiveShadow = true; room.add(m); return m; };
  const boucle = new THREE.MeshStandardMaterial({ color: 0x5a3a28, roughness: 1, bumpMap: noise, bumpScale: 1.5 });
  puff(boucle, 2.3, 0.22, 0.95, 0.72, 0.26, 0.62, 0.05); puff(boucle, 2.46, 0.48, 0.92, 0.5, 0.42, 0.46, -0.3);
  const wool = new THREE.MeshStandardMaterial({ color: 0xe8dfca, roughness: 1, bumpMap: knit, bumpScale: 5 });
  puff(wool, 2.3, 0.56, 1.14, 0.34, 0.26, 0.24, 0.5); puff(wool, 2.1, 0.32, 1.32, 0.22, 0.2, 0.2, -0.2);
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.11, 32, 24), new THREE.MeshStandardMaterial({ color: 0xece4d2, roughness: 0.9, emissive: 0xffc98a, emissiveIntensity: 0.1 }));
  lamp.position.set(2.1, 0.6, -0.2); room.add(lamp);
  cyl(0.005, 0.005, 0.5, 2.1, 0.25, -0.2, new THREE.MeshStandardMaterial({ color: 0x2a241d }), 8);
}

/* ---------- sun through a side window, as in the wide photo ---------- */
const SUN_DIR = new THREE.Vector3(1, 0.457, 0.8).normalize();
const sun = new THREE.DirectionalLight(0xffc27a, 0);
sun.position.copy(SUN_DIR).multiplyScalar(14).add(new THREE.Vector3(0, 1.1, 0)); sun.target.position.set(0, 1.1, 0);
sun.castShadow = true; sun.shadow.mapSize.setScalar(SMALL_GPU ? 2048 : 4096);
Object.assign(sun.shadow.camera, { left: -3.2, right: 3.2, top: 2.6, bottom: -2.6, near: 2, far: 26 });
sun.shadow.camera.updateProjectionMatrix();
sun.shadow.bias = -0.0003; sun.shadow.normalBias = 0.006; sun.shadow.radius = 3;
scene.add(sun, sun.target);
{
  const occ = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false });
  const wx = 3.2, block = (y0, y1, z0, z1) => { const m = new THREE.Mesh(new THREE.BoxGeometry(0.02, y1 - y0, z1 - z0), occ); m.position.set(wx, (y0 + y1) / 2, (z0 + z1) / 2); m.castShadow = true; room.add(m); };
  const Y0 = 1.2, Y1 = 3.1, Z0 = 1.86, Z1 = 3.22;
  block(Y1, 12, -12, 22); block(-8, Y0, -12, 22); block(Y0, Y1, -12, Z0); block(Y0, Y1, Z1, 22);
  block(Y0, Y1, 2.55, 2.61);                 // central mullion
  block(1.86, 1.91, Z0, Z1);                 // lower glazing bar
}
const hemi = new THREE.HemisphereLight(0xfff1de, 0xb89f7c, 0);
scene.add(hemi);
const downs = [-1.25, -0.05, 1.15].map(x => {
  const s = new THREE.SpotLight(0xffe2b8, 0, 4, 1.15, 0.9, 1.6);
  s.position.set(x, CEILING - 0.02, 0.62); s.target.position.set(x, 0.5, -0.2); scene.add(s, s.target); return s;
});
const readerLamp = new THREE.PointLight(0xfff1dc, 0, 3, 1.4); camera.add(readerLamp); readerLamp.position.set(-0.25, 0.2, -0.1);

{ // soft room reflections
  const envScene = new THREE.Scene();
  envScene.add(new THREE.Mesh(new THREE.SphereGeometry(10, 16, 12), new THREE.MeshBasicMaterial({ side: THREE.BackSide, map: canvasTex(64, 64, (g, w, h) => { const a = g.createLinearGradient(0, 0, 0, h); a.addColorStop(0, '#fff4e2'); a.addColorStop(.5, '#b9a888'); a.addColorStop(1, '#4e3d2a'); g.fillStyle = a; g.fillRect(0, 0, w, h); }) })));
  const panel = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), new THREE.MeshBasicMaterial({ color: 0xffffff })); panel.position.set(7, 3, 5); panel.lookAt(0, 0, 0); envScene.add(panel);
  const pm = new THREE.PMREMGenerator(renderer);
  scene.environment = pm.fromScene(envScene, 0.04).texture; pm.dispose();
}

const MOODS = {
  golden: { sun: 5.4, sunColor: new THREE.Color(0xffbd72), hemi: 1.15, down: 2.2, env: 0.3, exposure: 1.0 },
  day: { sun: 0.0, sunColor: new THREE.Color(0xfff4e6), hemi: 2.5, down: 3.4, env: 0.7, exposure: 1.0 },
};
const light = { sun: 0, hemi: 0.4, down: 0, env: 0.2, exposure: 1 };
function applyLight() {
  sun.intensity = light.sun; hemi.intensity = light.hemi;
  downs.forEach(s => s.intensity = light.down);
  scene.traverse(o => {
    for (const m of [].concat(o.material || [])) if ('envMapIntensity' in m && !m.transparent) m.envMapIntensity = m.metalness > 0.5 ? light.env * 3.2 : light.env;
  });
  renderer.toneMappingExposure = light.exposure; invalidate();
}
function setMood(name, t = 1.4) {
  const m = MOODS[name];
  sun.color.copy(m.sunColor);
  gsap.to(light, { sun: m.sun, hemi: m.hemi, down: m.down, env: m.env, exposure: m.exposure, duration: REDUCED ? 0 : t, ease: 'power2.inOut', onUpdate: applyLight });
}

/* ---------- books ---------- */
const shelfOf = id => id[1] === 'T' ? SHELF_Y.T : id[1] === 'M' ? SHELF_Y.M : SHELF_Y.L;
const meshes = [];
function spineUV(geo, uv) {
  // BoxGeometry face +z is vertices 16-19 (for widthSegments 1); find them by normal so segments don't matter
  const u = geo.attributes.uv, n = geo.attributes.normal;
  for (let i = 0; i < u.count; i++) if (n.getZ(i) > 0.9) u.setXY(i, uv[0] + u.getX(i) * uv[2], 1 - uv[1] - uv[3] + u.getY(i) * uv[3]);
  u.needsUpdate = true;
}
function bookGeometry(w, h, d, uv) {
  const g = new THREE.BoxGeometry(w, h, d, 6, 1, 1);
  spineUV(g, uv);
  const p = g.attributes.position, n = g.attributes.normal, bulge = Math.min(0.0045, w * 0.1);
  for (let i = 0; i < p.count; i++) if (n.getZ(i) > 0.9) {
    const t = p.getX(i) / (w / 2);
    p.setZ(i, p.getZ(i) + bulge * (1 - t * t));
    n.setXYZ(i, t * 0.55, 0, 1);
  }
  g.attributes.normal.needsUpdate = true;
  g.translate(0, h / 2, -d / 2);
  return g;
}
for (const s of LIB.data.shelves) {
  const [x0] = BAY[s.case], k = (BAY[s.case][1] - x0) / (s.span[1] - s.span[0]);
  for (const b of s.books) {
    const w = Math.max(0.005, b.w * k), h = b.h * k, d = Math.min(0.26, h * (b.w * k > 0.03 ? 0.72 : 0.66));
    const geo = bookGeometry(w * 0.985, h, d, b.uv);
    const edge = new THREE.Color().setRGB(b.edge[0] / 255, b.edge[1] / 255, b.edge[2] / 255, THREE.SRGBColorSpace);
    const cover = new THREE.MeshStandardMaterial({ color: edge, roughness: 0.6 });
    const spine = new THREE.MeshStandardMaterial({ map: atlasTex, roughness: 0.52, emissive: 0xffffff, emissiveMap: atlasTex, emissiveIntensity: 0 });
    const mesh = new THREE.Mesh(geo, [cover, cover, pageTopMat, pageTopMat, spine, cover]);
    const cx = x0 + (((b.x0 + b.x1) / 2) - s.span[0]) * k;
    const lift = b.tilt ? Math.abs(Math.sin(b.tilt)) * w / 2 : 0;
    mesh.position.set(cx, shelfOf(s.id) + lift, SPINE_Z - rnd() * 0.007);     // real spines are never quite flush
    mesh.rotation.z = b.tilt;
    mesh.castShadow = true; mesh.receiveShadow = true;
    mesh.userData = { book: b, spine, cover, w, h, d, home: mesh.position.clone(), hover: 0, offset: 0 };
    b.mesh = mesh; room.add(mesh); meshes.push(mesh);
  }
}
function placeBook(m) {
  const u = m.userData;
  m.position.z = u.home.z + u.offset + u.hover * 0.022;
  m.position.y = u.home.y + u.hover * 0.004;
  u.spine.emissiveIntensity = u.hover * 0.2;
}

/* ---------- camera rig ---------- */
const WALL = { target: new THREE.Vector3(0, 1.17, 0), w: 4.3, h: 2.75 };
const rig = { target: WALL.target.clone(), radius: 8, az: -0.2, el: 0.02 };
const goal = { target: WALL.target.clone(), radius: 6, az: 0, el: 0 };
function fitRadius(w, h) {
  const v = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
  return Math.max((h / 2) / v, (w / 2) / (v * camera.aspect)) + 0.05;
}
function goToWall() { goal.target.copy(WALL.target); goal.radius = fitRadius(WALL.w, WALL.h); goal.az = 0; goal.el = 0; invalidate(); }
function goToCase(side) {
  const [a, b] = BAY[side];
  goal.target.set((a + b) / 2, 1.42, 0); goal.radius = fitRadius(1.2, 1.62); goal.az = side === 'left' ? 0.05 : -0.05; goal.el = 0; invalidate();
}
const isPhone = () => innerWidth < 760 || innerHeight < 500;
function applyView() { if (state.view === 'left' || state.view === 'right') goToCase(state.view); else goToWall(); }
const pixelsPerMetre = r => innerHeight / (2 * r * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
const tapRadius = () => THREE.MathUtils.clamp(innerHeight / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * 820), 0.55, 2.2);
// on a phone a spine has to be big enough to hit, so the first tap on a distant shelf moves closer
const needsCloser = m => isPhone() && rig.radius > tapRadius() * 1.15 && m.userData.w * pixelsPerMetre(rig.radius) < 15;
function moveCloser(m) {
  const u = m.userData; state.touched = true;
  goal.target.set(u.home.x, u.home.y + 0.1, 0); goal.radius = tapRadius(); goal.az = 0; goal.el = 0; clampGoal(); invalidate();
}
function clampGoal() {
  goal.radius = THREE.MathUtils.clamp(goal.radius, 0.55, fitRadius(WALL.w, WALL.h) * 1.2);
  const room = THREE.MathUtils.smoothstep(goal.radius, 1, fitRadius(WALL.w, WALL.h));
  const xr = THREE.MathUtils.lerp(1.9, 0.25, room), lo = THREE.MathUtils.lerp(0.25, 1.0, room), hi = THREE.MathUtils.lerp(2.1, 1.25, room);
  goal.target.x = THREE.MathUtils.clamp(goal.target.x, -xr, xr);
  goal.target.y = THREE.MathUtils.clamp(goal.target.y, lo, hi);
  goal.az = THREE.MathUtils.clamp(goal.az, -0.6, 0.6);
  goal.el = THREE.MathUtils.clamp(goal.el, -0.16, 0.22);
}
function updateCamera(dt) {
  const f = 1 - Math.exp(-dt * 7);
  if (!Number.isFinite(rig.radius)) rig.radius = goal.radius;
  const before = rig.radius + rig.az + rig.el + rig.target.x + rig.target.y;
  rig.target.lerp(goal.target, f); rig.radius += (goal.radius - rig.radius) * f; rig.az += (goal.az - rig.az) * f; rig.el += (goal.el - rig.el) * f;
  const moved = Math.abs(before - (rig.radius + rig.az + rig.el + rig.target.x + rig.target.y)) > 1e-4;
  camera.position.set(
    rig.target.x + rig.radius * Math.sin(rig.az) * Math.cos(rig.el),
    rig.target.y + rig.radius * Math.sin(rig.el),
    rig.target.z + rig.radius * Math.cos(rig.az) * Math.cos(rig.el));
  camera.lookAt(rig.target);
  if (moved) invalidate();
}

function resize() {
  const w = innerWidth, h = innerHeight;
  if (!w || !h) return;                       // pane still collapsed; a later resize event supplies real numbers
  renderer.setSize(w, h, false);
  camera.aspect = w / h; camera.updateProjectionMatrix();
  if (!state.touched && !state.reading) applyView();
  invalidate();
}
const state = { reading: null, busy: false, touched: false, drag: null, hovered: null, view: 'wall' };

/* ---------- input ---------- */
const canvas = $('stage'), ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
ray.layers.enable(1);
const wallPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -SPINE_Z);
const pointers = new Map();
function pick(cx, cy) {
  ndc.set(cx / innerWidth * 2 - 1, -(cy / innerHeight) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const hit = ray.intersectObjects(meshes.filter(m => m.visible), false)[0];
  return hit ? hit.object : null;
}
function setHover(m, cx, cy) {
  if (state.hovered !== m) {
    if (state.hovered) { const o = state.hovered; gsap.to(o.userData, { hover: 0, duration: .25, ease: 'power2.out', onUpdate() { placeBook(o); invalidate(); }, onComplete: reshadow }); }
    state.hovered = m;
    if (m) gsap.to(m.userData, { hover: 1, duration: .22, ease: 'power2.out', onUpdate() { placeBook(m); invalidate(); } });
    canvas.style.cursor = m ? 'pointer' : 'grab';
  }
  const tip = $('tip');
  if (m) {
    const b = m.userData.book;
    tip.innerHTML = '';
    const t = document.createElement('b'); t.textContent = b.title || 'Unidentified book';
    const a = document.createElement('span'); a.textContent = b.author || (b.conf === 'unread' ? 'Spine not legible in the photos' : '');
    tip.append(t, a);
    const tw = tip.offsetWidth, th = tip.offsetHeight;
    tip.style.transform = `translate(${Math.min(cx + 14, innerWidth - tw - 10)}px,${Math.max(cy - th - 12, 10)}px)`;
    tip.style.opacity = 1;
  } else tip.style.opacity = 0;
}
canvas.addEventListener('pointerdown', e => {
  canvas.setPointerCapture(e.pointerId);
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pointers.size === 1) state.drag = { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, moved: false };
  if (pointers.size === 2) { const [a, b] = [...pointers.values()]; state.pinch = Math.hypot(a.x - b.x, a.y - b.y); }
});
canvas.addEventListener('pointermove', e => {
  if (pointers.has(e.pointerId)) pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (state.reading) return;
  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()], d = Math.hypot(a.x - b.x, a.y - b.y);
    if (state.pinch) { goal.radius *= state.pinch / d; clampGoal(); state.touched = true; }
    state.pinch = d; if (state.drag) state.drag.moved = true; return;
  }
  if (state.drag && pointers.size === 1) {
    const dx = e.clientX - state.drag.x, dy = e.clientY - state.drag.y;
    state.drag.x = e.clientX; state.drag.y = e.clientY;
    if (Math.hypot(e.clientX - state.drag.sx, e.clientY - state.drag.sy) > 6) state.drag.moved = true;
    if (state.drag.moved) {
      state.touched = true; setHover(null);
      const span = 2 * goal.radius * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) / innerHeight;
      if (goal.radius < fitRadius(WALL.w, WALL.h) * 0.7) { goal.target.x -= dx * span; goal.target.y += dy * span; }
      else { goal.az -= dx * 0.0022; goal.el += dy * 0.0016; }
      clampGoal(); canvas.style.cursor = 'grabbing'; invalidate();
    }
    return;
  }
  if (e.pointerType === 'mouse') setHover(pick(e.clientX, e.clientY), e.clientX, e.clientY);
});
function endPointer(e) {
  pointers.delete(e.pointerId); state.pinch = null;
  if (pointers.size) return;
  const d = state.drag; state.drag = null; canvas.style.cursor = state.hovered ? 'pointer' : 'grab';
  if (!d || d.moved || e.type === 'pointercancel') return;
  if (state.reading) {
    ndc.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera);
    if (!state.busy && state.R && !ray.intersectObject(state.R, true).length) closeBook();
    return;
  }
  const m = pick(e.clientX, e.clientY);
  if (m) { setHover(null); if (needsCloser(m)) moveCloser(m); else openBook(m.userData.book); }
}
canvas.addEventListener('pointerup', endPointer);
canvas.addEventListener('pointercancel', endPointer);
canvas.addEventListener('pointerleave', () => { if (!state.reading) setHover(null); });
canvas.addEventListener('wheel', e => {
  e.preventDefault(); if (state.reading) return;
  state.touched = true;
  const factor = Math.exp(e.deltaY * 0.0012), old = goal.radius;
  goal.radius *= factor; clampGoal();
  // keep the point under the cursor in place while dollying
  ndc.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const p = new THREE.Vector3();
  if (ray.ray.intersectPlane(wallPlane, p)) {
    const t = 1 - goal.radius / old;
    goal.target.x += (p.x - goal.target.x) * t; goal.target.y += (p.y - goal.target.y) * t;
    clampGoal();
  }
  invalidate();
}, { passive: false });

/* ---------- covers and pages ---------- */
const FONT = { display: '"Libre Caslon Display","Iowan Old Style",Georgia,serif', text: '"Libre Caslon Text","Iowan Old Style",Georgia,serif', ui: '"Instrument Sans","Helvetica Neue",Arial,sans-serif' };
function wrapText(g, text, maxW) {
  const lines = []; let line = '';
  for (const w of String(text).split(/\s+/)) {
    const t = line ? line + ' ' + w : w;
    if (g.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t;
  }
  if (line) lines.push(line); return lines;
}
function fitTitle(g, text, maxW, maxH, start, min, weight = '') {
  for (let s = start; s >= min; s -= 4) {
    g.font = `${weight} ${s}px ${FONT.display}`;
    const lines = wrapText(g, text, maxW), lh = s * 1.1;
    if (lines.length * lh <= maxH && lines.every(l => g.measureText(l).width <= maxW)) return { lines, size: s, lh };
  }
  g.font = `${weight} ${min}px ${FONT.display}`;
  return { lines: wrapText(g, text, maxW), size: min, lh: min * 1.1 };
}
const lum = c => (0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]) / 255;
const bookColor = b => { const c = b.edge; return lum(c) > .94 ? [228, 222, 208] : c; };

function coverCanvas(b) {
  return canvasTex(768, 1100, (g, w, h) => {
    const c = bookColor(b), ink = lum(c) > 0.55 ? '#1b1712' : '#f6efe0', soft = lum(c) > 0.55 ? 'rgba(27,23,18,.65)' : 'rgba(246,239,224,.7)';
    g.fillStyle = `rgb(${c})`; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 2400; i++) { g.fillStyle = `rgba(${rnd() > .5 ? '255,255,255' : '0,0,0'},${rnd() * .035})`; g.fillRect(rnd() * w, rnd() * h, 2 + rnd() * 4, 1); }
    // the real spine, wrapped round the hinge edge
    const u = b.uv, W = atlasImg.naturalWidth, H = atlasImg.naturalHeight;
    if (W) { g.globalAlpha = .9; g.drawImage(atlasImg, (u[0] + u[2] * .55) * W, u[1] * H, u[2] * .45 * W, u[3] * H, 0, 0, 34, h); g.globalAlpha = 1; }
    const a = g.createLinearGradient(0, 0, 90, 0); a.addColorStop(0, 'rgba(0,0,0,.28)'); a.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = a; g.fillRect(0, 0, 90, h);
    g.fillStyle = ink; g.textBaseline = 'top';
    const t = fitTitle(g, b.title || 'Unidentified', w - 170, h * .55, 110, 40);
    t.lines.forEach((l, i) => g.fillText(l, 95, 130 + i * t.lh));
    g.font = `400 34px ${FONT.text}`; g.fillStyle = soft;
    wrapText(g, b.author || '', w - 170).slice(0, 3).forEach((l, i, arr) => g.fillText(l, 95, h - 110 - (arr.length - 1 - i) * 44));
  });
}
const CONF = {
  clear: 'Read clearly from the spine.',
  partial: 'Partly legible. The details here are a best reading.',
  unread: 'Not legible in the photos.',
};
function pageCanvases(b) {
  const PW = 1024, PH = 1448, paper = '#f4ecdb', ink = '#231c13', soft = '#6f6450', accent = '#8d6a2c', mx = 110;
  const bg = (g, gutterRight) => {
    g.fillStyle = paper; g.fillRect(0, 0, PW, PH);
    for (let i = 0; i < 1400; i++) { g.fillStyle = `rgba(120,95,60,${rnd() * .03})`; g.fillRect(rnd() * PW, rnd() * PH, 1 + rnd() * 3, 1); }
    const a = gutterRight ? g.createLinearGradient(PW, 0, PW - 150, 0) : g.createLinearGradient(0, 0, 150, 0);
    a.addColorStop(0, 'rgba(60,40,20,.28)'); a.addColorStop(1, 'rgba(60,40,20,0)'); g.fillStyle = a; g.fillRect(0, 0, PW, PH);
  };
  const left = canvasTex(PW, PH, (g) => {
    bg(g, true);
    g.textBaseline = 'top'; g.fillStyle = accent; g.font = `600 25px ${FONT.ui}`;
    const caseName = b.case === 'left' ? 'Left case' : 'Right case';
    g.fillText(`${caseName}  ·  ${b.shelfName}  ·  Book ${b.pos} of ${b.count}`.toUpperCase(), mx, 110);
    g.fillStyle = ink;
    const t = fitTitle(g, b.title || 'Unidentified book', PW - mx * 2, 560, 118, 46);
    t.lines.forEach((l, i) => g.fillText(l, mx, 190 + i * t.lh));
    let y = 190 + t.lines.length * t.lh + 36;
    g.fillStyle = accent; g.fillRect(mx, y, 120, 3); y += 34;
    g.font = `italic 400 42px ${FONT.text}`; g.fillStyle = ink;
    wrapText(g, b.author || 'Author unknown', PW - mx * 2).slice(0, 4).forEach(l => { g.fillText(l, mx, y); y += 54; });
    y += 10; g.font = `400 31px ${FONT.ui}`; g.fillStyle = soft;
    const line = [b.year, b.cat].filter(Boolean).join('  ·  ');
    if (line) g.fillText(line, mx, y);
    // the real spine as it stands on the shelf
    const u = b.uv, W = atlasImg.naturalWidth, H = atlasImg.naturalHeight, sh = Math.min(PW - mx * 2, 804), ratio = (u[2] * W) / (u[3] * H), st = Math.max(30, Math.min(150, sh * ratio));
    g.font = `600 22px ${FONT.ui}`; g.fillStyle = soft; g.fillText('THE SPINE AS PHOTOGRAPHED', mx, PH - 150 - st - 40);
    g.save(); g.translate(mx, PH - 150); g.rotate(-Math.PI / 2);   // spine top on the left, so the print reads upright
    g.shadowColor = 'rgba(40,25,10,.35)'; g.shadowBlur = 14;
    g.drawImage(atlasImg, u[0] * W, u[1] * H, u[2] * W, u[3] * H, 0, 0, st, sh);
    g.restore();
  });
  const right = canvasTex(PW, PH, (g) => {
    bg(g, false);
    g.textBaseline = 'top'; let y = 110;
    g.fillStyle = accent; g.font = `600 25px ${FONT.ui}`; g.fillText('ABOUT THIS BOOK', mx, y); y += 60;
    g.fillStyle = ink; g.font = `400 50px ${FONT.text}`;
    wrapText(g, b.about || '', PW - mx * 2).forEach(l => { g.fillText(l, mx, y); y += 72; });
    y += 70;
    g.fillStyle = accent; g.font = `600 25px ${FONT.ui}`; g.fillText('WHERE IT STANDS', mx, y); y += 54;
    // that shelf in miniature, in the books' own colours
    const shelf = LIB.data.shelves.find(s => s.id === b.shelf), span = shelf.span[1] - shelf.span[0], mw = PW - mx * 2, mh = 260, maxH = Math.max(...shelf.books.map(x => x.h));
    shelf.books.forEach(x => {
      const bx = mx + (x.x0 - shelf.span[0]) / span * mw, bw = Math.max(3, (x.x1 - x.x0) / span * mw - 1.5), bh = x.h / maxH * mh;
      g.fillStyle = `rgb(${x.color})`; g.globalAlpha = x.id === b.id ? 1 : .55;
      g.fillRect(bx, y + mh - (x.id === b.id ? bh + 16 : bh), bw, x.id === b.id ? bh + 16 : bh);
      if (x.id === b.id) { g.globalAlpha = 1; g.fillStyle = accent; g.fillRect(bx - 2, y + mh + 10, bw + 4, 6); }
      g.globalAlpha = 1;
    });
    g.fillStyle = soft; g.fillRect(mx, y + mh + 1, mw, 3);
    y += mh + 54;
    g.font = `400 30px ${FONT.ui}`; g.fillStyle = soft;
    g.fillText(`${b.case === 'left' ? 'Left' : 'Right'} case, ${b.shelfName.toLowerCase()}, book ${b.pos} from the left.`, mx, y);
    g.font = `italic 400 29px ${FONT.text}`; g.fillStyle = b.conf === 'clear' ? soft : '#9c4a2c';
    wrapText(g, CONF[b.conf], PW - mx * 2).forEach((l, i) => g.fillText(l, mx, PH - 170 + i * 40));
  });
  return { left, right };
}

/* ---------- the book you take down ---------- */
const READER_LAYER = 1;
[sun, hemi, readerLamp, ...downs].forEach(l => l.layers.enable(READER_LAYER));
function drawFrame() {
  renderer.clear();
  camera.layers.set(0);
  renderer.render(scene, camera);
  if (state.R) {
    // still sliding off the shelf it stays among its neighbours; once clear it floats over the whole room
    if (state.R.position.z > SPINE_Z + 0.03) renderer.clearDepth();
    camera.layers.set(READER_LAYER);
    renderer.render(scene, camera);
    camera.layers.set(0);
  }
}
const dimmer = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ color: 0x0b0906, transparent: true, opacity: 0, depthWrite: false, depthTest: false }));
dimmer.visible = false; dimmer.renderOrder = 5; camera.add(dimmer);

function curvedPage(W, H, flip) {
  const g = new THREE.PlaneGeometry(W, H, 18, 1), p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const u = (p.getX(i) + W / 2) / W;                       // 0 at gutter for right pages
    p.setZ(i, 0.0075 * Math.sin(Math.min(1, u * 1.15) * Math.PI) * (1 - u * .4));
  }
  g.computeVertexNormals();
  return g;
}
function buildReader(b) {
  const u = b.mesh.userData, H = u.h, W = Math.min(u.d, H * .72), T = Math.max(u.w * .92, 0.014), c = 0.0028;
  const coverMat = new THREE.MeshStandardMaterial({ map: coverCanvas(b), roughness: 0.55 });
  const plain = new THREE.MeshStandardMaterial({ color: new THREE.Color().setRGB(...bookColor(b).map(v => v / 255), THREE.SRGBColorSpace), roughness: 0.6 });
  const endpaper = new THREE.MeshStandardMaterial({ color: 0xece2cb, roughness: 0.9 });
  const pagesMat = new THREE.MeshStandardMaterial({ map: pagesEdge, roughness: 0.92 });
  const pg = pageCanvases(b);
  const rootG = new THREE.Group();

  // right half stays still: back cover and half the pages
  const back = new THREE.Mesh(new THREE.BoxGeometry(W, H, c), plain); back.position.set(W / 2, 0, -T / 2 - c / 2); rootG.add(back);
  const rBlock = new THREE.Mesh(new THREE.BoxGeometry(W - 0.004, H - 0.006, T / 2), pagesMat); rBlock.position.set((W - 0.004) / 2, 0, -T / 4); rootG.add(rBlock);
  const rPage = new THREE.Mesh(curvedPage(W - 0.004, H - 0.006), new THREE.MeshBasicMaterial({ map: pg.right, toneMapped: false }));
  rPage.position.set((W - 0.004) / 2, 0, 0.0004); rootG.add(rPage);

  // left half swings on the hinge: front cover and the other half of the pages
  const hinge = new THREE.Group(); rootG.add(hinge);
  const front = new THREE.Mesh(new THREE.BoxGeometry(W, H, c), [plain, plain, plain, plain, coverMat, endpaper]); front.position.set(W / 2, 0, T / 2 + c / 2); hinge.add(front);
  const lBlock = new THREE.Mesh(new THREE.BoxGeometry(W - 0.004, H - 0.006, T / 2), pagesMat); lBlock.position.set((W - 0.004) / 2, 0, T / 4); hinge.add(lBlock);
  const lPage = new THREE.Mesh(curvedPage(W - 0.004, H - 0.006), new THREE.MeshBasicMaterial({ map: pg.left, toneMapped: false }));
  lPage.rotation.y = Math.PI; lPage.position.set((W - 0.004) / 2, 0, -0.0004); hinge.add(lPage);

  // spine folds flat behind the pages as the book opens
  const spineG = new THREE.BoxGeometry(T + c * 2, H, c);
  spineUV(spineG, b.uv);
  const spine = new THREE.Mesh(spineG, [plain, plain, plain, plain, new THREE.MeshStandardMaterial({ map: atlasTex, roughness: .5 }), plain]);
  spine.rotation.y = -Math.PI / 2; spine.position.set(-c / 2, 0, 0); rootG.add(spine);

  // a few loose leaves that riffle across when it opens
  const leaves = [0, 1, 2, 3].map(() => {
    const piv = new THREE.Group(); piv.visible = false;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(W - 0.006, H - 0.008), new THREE.MeshStandardMaterial({ color: 0xf1e8d6, roughness: .92, side: THREE.DoubleSide }));
    m.position.x = (W - 0.006) / 2; piv.position.z = 0.009; piv.add(m); rootG.add(piv); return piv;
  });
  rootG.userData = { W, H, T, c, hinge, spine, leaves, dispose() { rootG.traverse(o => { if (o.geometry) o.geometry.dispose(); }); [coverMat.map, pg.left, pg.right].forEach(t => t.dispose()); } };
  return rootG;
}
function setOpen(R, v) {
  const u = R.userData;
  u.hinge.rotation.y = -Math.PI * v;
  u.spine.rotation.y = -Math.PI / 2 - (Math.PI / 2) * v;
  u.spine.position.set(-u.c / 2 + (u.c / 2) * v, 0, -(u.T / 2 + u.c * 1.5) * v);
}
function readingPose(W, H) {
  const v = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)), phoneSheet = innerWidth < 760;
  const below = phoneSheet ? $('sheet').offsetHeight : $('bar').offsetHeight + 28;
  const free = Math.max(0.3, (innerHeight - below - 20) / innerHeight);
  const d = Math.max(H / (Math.min(free, phoneSheet ? 1 : 0.84) * 2 * v), (2 * W) / (0.94 * 2 * v * camera.aspect));
  return { d, up: d * v * (below / innerHeight) };
}

function setBar(b) {
  const known = b.conf !== 'unread' && b.title;
  $('amazon').hidden = !known; $('audible').hidden = !(known && b.asin);
  if (known) { $('amazon').href = LINKS.amazon(b); if (b.asin) $('audible').href = LINKS.audible(b); }
  $('sheetTitle').textContent = b.title || 'Unidentified book';
  $('sheetMeta').textContent = [b.author, b.year].filter(Boolean).join(', ');
  $('sheetAbout').textContent = b.about || '';
  $('sheetWhere').textContent = `${b.case === 'left' ? 'Left' : 'Right'} case, ${b.shelfName.toLowerCase()}, book ${b.pos} of ${b.count}` + (b.cat ? ` · ${b.cat}` : '');
  const short = innerWidth < 760;
  $('bar').classList.toggle('one-link', !b.asin);
  if (short) $('sheet').style.paddingBottom = `calc(${$('bar').offsetHeight + 26}px + env(safe-area-inset-bottom, 0px))`;
}

function neighbour(b) {
  const shelf = LIB.data.shelves.find(s => s.id === b.shelf);
  return shelf.books[b.pos] || null;      // the book to its right
}
const leanNeighbour = (b, on) => {
  const n = neighbour(b); if (!n || n.tilt) return;
  const nm = n.mesh, u = nm.userData;
  const angle = on ? Math.min(0.1, Math.atan(b.mesh.userData.w / u.h) * 0.75) : 0;
  gsap.to(nm.rotation, { z: angle, duration: on ? .45 : .35, ease: on ? 'back.out(2.2)' : 'power2.out', delay: on ? .18 : 0,
    onUpdate() { nm.position.x = u.home.x - (u.w / 2) * (1 - Math.cos(nm.rotation.z)); nm.position.y = u.home.y + (u.w / 2) * Math.sin(nm.rotation.z); invalidate(); }, onComplete: reshadow });
};

async function openBook(b) {
  if (state.busy) return;
  state.busy = true; state.touched = true;
  // freeze the camera where it is: the book's reading position is computed from it
  goal.target.copy(rig.target); goal.radius = rig.radius; goal.az = rig.az; goal.el = rig.el;
  try { await Promise.race([document.fonts.load(`40px "Libre Caslon Display"`), new Promise(r => setTimeout(r, 400))]); } catch (e) {}
  const m = b.mesh, u = m.userData;
  const R = buildReader(b);
  R.traverse(o => o.layers.set(READER_LAYER));
  scene.add(R);
  state.reading = b; document.body.classList.add('reading');
  setBar(b);

  state.R = R;
  const { W, H, T } = R.userData;
  // start exactly where the shelf copy stands: spine facing out, hinge just behind it
  R.position.set(u.home.x, u.home.y + H / 2, SPINE_Z - T / 2 - 0.0028 * 0 - 0.004);
  R.position.x = u.home.x;
  R.rotation.set(0, Math.PI / 2, 0); setOpen(R, 0);
  R.quaternion.setFromEuler(new THREE.Euler(0, Math.PI / 2, b.tilt, 'ZYX'));
  m.visible = false; reshadow(); leanNeighbour(b, true);

  const pose = readingPose(W, H);
  camera.updateMatrixWorld();
  const fwd = camera.getWorldDirection(new THREE.Vector3()), up = new THREE.Vector3(0, 1, 0).applyQuaternion(camera.quaternion), rightV = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
  const centre = camera.position.clone().addScaledVector(fwd, pose.d).addScaledVector(up, pose.up);
  const closedAt = centre.clone().addScaledVector(rightV, -W / 2);
  const openAt = centre.clone();
  const qEnd = camera.quaternion.clone(), qStart = R.quaternion.clone();
  const pulled = R.position.clone(); pulled.z += d0(u.d);

  const vH = 2 * 0.2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
  dimmer.scale.set(vH * camera.aspect * 1.2, vH * 1.2, 1); dimmer.position.set(0, 0, -0.2); dimmer.visible = true;

  const prog = { fly: 0, open: 0 }, start = R.position.clone(), arc = new THREE.Vector3();
  const tl = gsap.timeline({ onUpdate: invalidate, onComplete() { state.busy = false; } });
  tl.to(R.position, { x: pulled.x, y: pulled.y + 0.004, z: pulled.z, duration: .42, ease: 'power2.out' }, 0);
  tl.to(dimmer.material, { opacity: .74, duration: .8, ease: 'power1.inOut' }, .15);
  tl.to(readerLamp, { intensity: 1.7, duration: .8 }, .15);
  const p0 = new THREE.Vector3();
  tl.call(() => p0.copy(R.position), null, .42);
  tl.to(prog, {
    fly: 1, duration: .85, ease: 'power3.inOut', onUpdate() {
      const t = prog.fly;
      arc.copy(p0).lerp(closedAt, t); arc.z += Math.sin(t * Math.PI) * 0.07;
      R.position.copy(arc); R.quaternion.copy(qStart).slerp(qEnd, t);
    }
  }, .42);
  tl.to(prog, {
    open: 1, duration: 1.05, ease: 'power2.inOut', onUpdate() {
      setOpen(R, prog.open); R.position.copy(closedAt).lerp(openAt, prog.open);
    }
  }, 1.2);
  R.userData.leaves.forEach((l, i) => {
    tl.call(() => { l.visible = true; }, null, 1.5 + i * .09);
    tl.fromTo(l.rotation, { y: 0 }, { y: -Math.PI, duration: .52, ease: 'power1.inOut', onComplete() { l.visible = false; } }, 1.5 + i * .09);
  });
  tl.call(() => { if (tl.reversed()) return; $('bar').classList.add('on'); $('sheet').classList.add('on'); }, null, 1.65);
  if (REDUCED) tl.timeScale(30);
  state.tl = tl;
  await tl.then();
}
const d0 = d => Math.min(0.2, d * 0.95);

function closeBook(then) {
  if (!state.reading || !state.tl) return;
  const b = state.reading, R = state.R;
  state.busy = true;
  $('bar').classList.remove('on'); $('sheet').classList.remove('on');
  document.body.classList.remove('reading');
  state.tl.eventCallback('onReverseComplete', () => {
    b.mesh.visible = true; leanNeighbour(b, false);
    scene.remove(R); R.userData.dispose();
    dimmer.visible = false;
    state.reading = null; state.tl = null; state.R = null; state.busy = false; reshadow();
    if (then) then();
  });
  state.tl.timeScale(then ? 3.4 : 1.7).reverse();
}
function step(dir) {
  if (!state.reading || state.busy) return;
  const i = books.indexOf(state.reading), n = books[(i + dir + books.length) % books.length];
  closeBook(() => flyToBook(n, () => openBook(n)));
}
function flyToBook(b, done) {
  const u = b.mesh.userData;
  state.touched = true;
  const near = goal.radius > 1.7;
  if (near) { goal.target.set(u.home.x, u.home.y + 0.12, 0); goal.radius = 1.45; goal.az = 0; goal.el = 0; clampGoal(); invalidate(); setTimeout(done, REDUCED ? 0 : 750); }
  else {
    const dx = Math.abs(goal.target.x - u.home.x), dy = Math.abs(goal.target.y - u.home.y);
    goal.target.set(u.home.x, u.home.y + 0.12, 0); clampGoal(); invalidate();
    setTimeout(done, REDUCED ? 0 : (dx + dy > 0.05 ? 650 : 0));
  }
}

$('shut').onclick = () => { if (!state.busy) closeBook(); };
$('prev').onclick = () => step(-1);
$('next').onclick = () => step(1);
addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') { if (e.key === 'Escape') toggleDrawer(false); return; }
  if (e.key === 'Escape') { if ($('drawer').classList.contains('on')) toggleDrawer(false); else if (state.reading && !state.busy) closeBook(); }
  if (state.reading && e.key === 'ArrowLeft') step(-1);
  if (state.reading && e.key === 'ArrowRight') step(1);
  if (!state.reading && e.key === '/') { e.preventDefault(); toggleDrawer(true); $('search').focus(); }
});

/* ---------- toolbar and catalogue ---------- */
const setView = v => { state.view = v; state.touched = false; applyView(); };
$('viewWall').onclick = () => setView('wall');
$('viewLeft').onclick = () => setView('left');
$('viewRight').onclick = () => setView('right');
let mood = 'golden';
$('tod').onclick = () => { mood = mood === 'golden' ? 'day' : 'golden'; $('tod').setAttribute('aria-pressed', mood === 'day'); setMood(mood); };
function toggleDrawer(on) { $('drawer').classList.toggle('on', on); if (on) setTimeout(() => $('search').focus({ preventScroll: true }), 60); }
$('openDrawer').onclick = () => toggleDrawer(true);
$('closeDrawer').onclick = () => toggleDrawer(false);
function buildCatalogue() {
  let activeCat = null;
  const tally = new Map();
  books.forEach(b => { if (b.cat) tally.set(b.cat, (tally.get(b.cat) || 0) + 1); });
  const chips = [[null, 'All', books.length], ...[...tally].sort((x, y) => y[1] - x[1]).map(([c, n]) => [c, c, n])].map(([cat, label, n]) => {
    const c = document.createElement('button'); c.textContent = label;
    const count = document.createElement('small'); count.textContent = n; c.append(count);
    c.onclick = () => { activeCat = cat; render(); $('list').scrollTop = 0; };
    $('filters').append(c);
    return [cat, c];
  });
  const render = () => {
    chips.forEach(([cat, c]) => c.setAttribute('aria-pressed', cat === activeCat));
    const q = $('search').value.trim().toLowerCase(), list = $('list'); list.replaceChildren();
    let shown = 0;
    for (const s of LIB.data.shelves) {
      const rows = s.books.filter(b => (!activeCat || b.cat === activeCat) && (!q || [b.title, b.author, b.cat].join(' ').toLowerCase().includes(q)));
      if (!rows.length) continue;
      const h = document.createElement('h3'); h.textContent = `${s.case === 'left' ? 'Left' : 'Right'} case, ${s.name.toLowerCase()}`; list.append(h);
      for (const b of rows) {
        const r = document.createElement('button'); r.className = 'row' + (b.conf === 'unread' ? ' unknown' : '');
        const sw = document.createElement('span'); sw.className = 'swatch'; sw.style.background = `rgb(${b.color})`;
        const t = document.createElement('span'); t.className = 't'; t.textContent = b.title || 'Unidentified book';
        if (b.conf !== 'clear') { const em = document.createElement('em'); em.textContent = b.conf === 'partial' ? 'partly read' : 'unread'; t.append(em); }
        const a = document.createElement('span'); a.className = 'a'; a.textContent = [[b.author, b.year].filter(Boolean).join(', ') || 'Spine not legible in the photos', b.cat].filter(Boolean).join(' · '); t.append(a);
        r.append(sw, t);
        r.onclick = () => {
          if (!b.mesh) return;
          toggleDrawer(false);
          const go = () => flyToBook(b, () => openBook(b));
          if (state.reading) closeBook(go); else go();
        };
        const entry = document.createElement('div'); entry.className = 'entry'; entry.append(r);
        if (b.conf !== 'unread' && b.title) {
          const links = document.createElement('div'); links.className = 'links';
          const link = (label, href) => { const l = document.createElement('a'); l.textContent = label; l.href = href; l.target = '_blank'; l.rel = 'noopener'; l.setAttribute('aria-label', `${label}: ${b.title}`); links.append(l); };
          link('Amazon', LINKS.amazon(b));
          if (b.asin) link('Audible', LINKS.audible(b));
          entry.append(links);
        }
        list.append(entry); shown++;
      }
    }
    if (!shown) { const e = document.createElement('p'); e.id = 'empty'; e.textContent = activeCat ? `No book in ${activeCat} matches that search.` : 'No book matches that search.'; list.append(e); }
  };
  $('search').oninput = render; render();
}

/* ---------- start ---------- */
addEventListener('resize', resize);
state.view = innerHeight > innerWidth * 1.1 ? 'left' : 'wall';
resize();
applyView();
rig.radius = goal.radius * 1.28; rig.az = -0.22; rig.el = -0.02; rig.target.copy(goal.target);

let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  updateCamera(dt);
  if (gsap.globalTimeline.getChildren(true, true, false).length) dirty = Math.max(dirty, 1);
  if (dirty > 0) { drawFrame(); dirty--; }
}
requestAnimationFrame(frame);

function prepare() {
  $('loading').style.opacity = 0;
  setTimeout(() => $('loading').remove(), 1000);
  light.sun = 0; light.hemi = 1.0; light.down = 1.6; light.env = 0.3;
  applyLight();
  meshes.forEach(m => { if (!REDUCED) m.userData.offset = -0.18; placeBook(m); });
  reshadow();
}
let played = false;
function intro() {
  if (played) return; played = true;
  if (isPhone()) $('hint').textContent = 'Tap a shelf to move closer, then tap a book to open it.';
  setTimeout(() => { $('hint').style.opacity = 0; }, 8000);
  if (REDUCED) { setMood('golden', 0); reshadow(); return; }
  const tl = gsap.timeline({ onUpdate: invalidate, onComplete: reshadow });
  meshes.forEach((m, i) => tl.to(m.userData, { offset: 0, duration: .75, ease: 'back.out(1.5)', onUpdate() { placeBook(m); } }, 0.25 + i * 0.008));
  setMood('golden', 2.4);
  // the sun's shadow map stays current while the books slide forward
  const iv = setInterval(reshadow, 240); setTimeout(() => clearInterval(iv), 2400);
}
const noteSeen = () => { try { return localStorage.getItem('note-read') === '1'; } catch (e) { return false; } };
function showNote(on) {
  $('note').classList.toggle('off', !on);
  if (on) $('closeNote').focus({ preventScroll: true });
  else { try { localStorage.setItem('note-read', '1'); } catch (e) {} intro(); canvas.focus({ preventScroll: true }); }
}
$('closeNote').onclick = () => showNote(false);
$('openNote').onclick = () => showNote(true);
$('note').addEventListener('click', e => { if (e.target === $('note')) showNote(false); });
addEventListener('keydown', e => { if (e.key === 'Escape' && !$('note').classList.contains('off')) showNote(false); });
function begin() { prepare(); if (noteSeen()) showNote(false); else $('closeNote').focus({ preventScroll: true }); }
if (document.readyState === 'complete') begin(); else addEventListener('load', begin);
