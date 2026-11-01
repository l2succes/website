'use strict';
const LIB = window.LIBRARY, $ = id => document.getElementById(id);
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const EMBED = new URLSearchParams(location.search).has('embed');   // inside a blog post: the page around it keeps scrolling
if (EMBED) document.body.classList.add('embed');

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
  amazon: b => b.meta && b.meta.a10 ? 'https://www.amazon.com/dp/' + b.meta.a10 : 'https://www.amazon.com/s?i=stripbooks&k=' + encodeURIComponent([b.title, cleanAuthor(b)].filter(Boolean).join(' ')),
  sample: b => b.meta && b.meta.gb ? 'https://books.google.com/books?id=' + b.meta.gb + '&lpg=PP1&pg=PP1&output=embed' : null,
  sampleOut: b => b.meta && b.meta.gb ? 'https://books.google.com/books?id=' + b.meta.gb + '&printsec=frontcover' : null,
  audible: b => b.asin ? 'https://www.audible.com/pd/' + b.asin : null,
};
const SAVED_KEY = 'austin-library-saved';
const saved = new Set((() => { try { return JSON.parse(localStorage.getItem(SAVED_KEY)) || []; } catch (e) { return []; } })());
const persistSaved = () => { try { localStorage.setItem(SAVED_KEY, JSON.stringify([...saved])); } catch (e) {} };
let renderCatalogue = () => {};
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
  wall: new THREE.MeshStandardMaterial({ color: 0xd6d3ca, roughness: 0.92 }),
  ceiling: new THREE.MeshStandardMaterial({ color: 0xcfc9ba, roughness: 0.95 }),
};
const floorTex = canvasTex(1024, 1024, (g, w, h) => {
  const planks = 6;
  for (let i = 0; i < planks; i++) {
    const x = i / planks * w, pw = w / planks;
    let y = -rnd() * 400;
    while (y < h) {
      const len = 260 + rnd() * 340, l = 66 + rnd() * 5;
      g.fillStyle = `hsl(${33 + rnd() * 4},${28 + rnd() * 6}%,${l}%)`; g.fillRect(x, y, pw, len);
      g.strokeStyle = 'rgba(95,65,35,.10)';
      for (let k = 0; k < 26; k++) { g.beginPath(); const gx = x + rnd() * pw; g.moveTo(gx, y); g.bezierCurveTo(gx + 6, y + len * .3, gx - 6, y + len * .6, gx + rnd() * 5, y + len); g.stroke(); }
      g.fillStyle = 'rgba(50,32,16,.5)'; g.fillRect(x, y + len - 1, pw, 1.5);
      y += len;
    }
    g.fillStyle = 'rgba(50,32,16,.5)'; g.fillRect(x, 0, 1.5, h);
  }
}, { repeat: [6.3, 2.6] });
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
const ROOM = { x0: -3.6, x1: 3.2, z1: 4.05 };
const overhead = new THREE.Group(); room.add(overhead);   // ceiling fittings, hidden when the camera looks in from above
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
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(ROOM.x1 - ROOM.x0, CEILING), ctx2.wall); wall.position.set((ROOM.x0 + ROOM.x1) / 2, CEILING / 2, -0.35); wall.receiveShadow = true; room.add(wall);
  const span = ROOM.x1 - ROOM.x0, depth = ROOM.z1 + 0.4, midX = (ROOM.x0 + ROOM.x1) / 2, midZ = (ROOM.z1 - 0.4) / 2;
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(span, depth), new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.62 }));
  floor.rotation.x = -Math.PI / 2; floor.position.set(midX, 0, midZ); floor.receiveShadow = true; room.add(floor);
  box(span + .04, .14, depth + .04, midX, -.071, midZ, new THREE.MeshStandardMaterial({ color: 0x3a3127, roughness: .9 }), false);
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(span, depth), ctx2.ceiling);
  ceil.rotation.x = Math.PI / 2; ceil.position.set(midX, CEILING, midZ); room.add(ceil);
  [-1.25, -0.05, 1.15].forEach(x => {
    const r = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.011, 10, 32), paint); r.rotation.x = Math.PI / 2; r.position.set(x, CEILING - 0.004, 0.42); overhead.add(r);
    const d = new THREE.Mesh(new THREE.CircleGeometry(0.045, 24), new THREE.MeshBasicMaterial({ color: 0xfff1d6 })); d.rotation.x = Math.PI / 2; d.position.set(x, CEILING - 0.002, 0.42); overhead.add(d);
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
/* ---------- the living room, measured by eye from the room photos ---------- */
const living = new THREE.Group(); room.add(living);
const noiseMap = canvasTex(256, 256, (g, w, h) => { const d = g.createImageData(w, h); for (let i = 0; i < d.data.length; i += 4) { const v = 90 + rnd() * 165; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 255; } g.putImageData(d, 0, 0); }, { data: true, repeat: [6, 6] });
const knitMap = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#6a6a6a'; g.fillRect(0, 0, w, h); for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) { const cx = (x + .5) * 32 + (y % 2) * 16, cy = (y + .5) * 32, a = g.createRadialGradient(cx, cy, 2, cx, cy, 20); a.addColorStop(0, '#fff'); a.addColorStop(1, 'rgba(90,90,90,0)'); g.fillStyle = a; g.fillRect(0, 0, w, h); } }, { data: true, repeat: [6, 14] });
function woodTex(base, dark, repeat) {
  return canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = base; g.fillRect(0, 0, w, h); g.strokeStyle = dark;
    for (let i = 0; i < 150; i++) { g.globalAlpha = .05 + rnd() * .2; g.lineWidth = .5 + rnd() * 2; const x = rnd() * w, s = 8 + rnd() * 18; g.beginPath(); g.moveTo(x, 0); g.bezierCurveTo(x + s, h * .3, x - s, h * .7, x + rnd() * 8, h); g.stroke(); }
    g.globalAlpha = 1;
  }, { repeat });
}
const leather = new THREE.MeshStandardMaterial({ color: 0x8d5030, roughness: 0.44, bumpMap: noiseMap, bumpScale: 0.25 });
const leatherDark = new THREE.MeshStandardMaterial({ color: 0x783f24, roughness: 0.5, bumpMap: noiseMap, bumpScale: 0.25 });
const chrome = new THREE.MeshStandardMaterial({ color: 0xa9adb1, metalness: 1, roughness: 0.14 });
const blackMetal = new THREE.MeshStandardMaterial({ color: 0x17171a, metalness: .5, roughness: 0.45 });
const ashWood = new THREE.MeshStandardMaterial({ map: woodTex('#bd8f58', '#7c5529', [2, 2]), roughness: 0.5 });
const cherry = new THREE.MeshStandardMaterial({ map: woodTex('#6d3518', '#2c1208', [2, 1]), roughness: 0.2 });
const maple = new THREE.MeshStandardMaterial({ map: woodTex('#b4824a', '#7b4f25', [1, 1]), roughness: 0.3 });
const place = (parent, m, x, y, z, ry = 0, rx = 0, rz = 0) => { m.position.set(x, y, z); m.rotation.set(rx, ry, rz); m.castShadow = true; m.receiveShadow = true; parent.add(m); return m; };
const shape3 = (g, mat) => new THREE.Mesh(g, mat);
// a box with truly round edges and a slight pillow to its faces
function puffBox(w, h, d, r, puff, mat, seg = 8) {
  const g = new THREE.BoxGeometry(w, h, d, seg, seg, seg), p = g.attributes.position, n = g.attributes.normal, half = [w / 2, h / 2, d / 2];
  for (let i = 0; i < p.count; i++) {
    const v = [p.getX(i), p.getY(i), p.getZ(i)], inner = v.map((c, a) => THREE.MathUtils.clamp(c, -(half[a] - r), half[a] - r));
    let o = v.map((c, a) => c - inner[a]), len = Math.hypot(...o);
    o = len > 1e-6 ? o.map(c => c / len) : [n.getX(i), n.getY(i), n.getZ(i)];
    const rel = v.map((c, a) => c / half[a]), main = o.map(Math.abs).indexOf(Math.max(...o.map(Math.abs)));
    const f = rel.reduce((acc, c, a) => a === main ? acc : acc * (1 - c * c), 1) * puff;
    const out = inner.map((c, a) => c + o[a] * (r + f));
    p.setXYZ(i, ...out);
    const b = puff ? puff / r * .35 : 0, nn = o.map((c, a) => c + (a === main ? 0 : rel[a] * b)), nl = Math.hypot(...nn);
    n.setXYZ(i, ...nn.map(c => c / nl));
  }
  return shape3(g, mat);
}
function tube(parent, a, b, r, mat) {
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), m = shape3(new THREE.CylinderGeometry(r, r, A.distanceTo(B), 12), mat);
  m.position.copy(A).add(B).multiplyScalar(.5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), B.clone().sub(A).normalize());
  m.castShadow = true; parent.add(m); return m;
}
function railLoop(parent, pts, r, mat, closed = true) {
  pts.forEach((p, i) => {
    const q = pts[i + 1] || (closed ? pts[0] : null); if (q) tube(parent, p, q, r, mat);
    const s = shape3(new THREE.SphereGeometry(r, 12, 8), mat); s.position.set(...p); parent.add(s);
  });
}
const floorBlob = (x, z, w, d) => blob(x, z, w, d, 0.014);

// carved rug: ribbed lines with two sets of concentric ovals, as in the photos
{
  const paint = (g, W, H, line, base) => {
    g.fillStyle = base; g.fillRect(0, 0, W, H); g.strokeStyle = line; g.lineCap = 'round';
    const ovals = [[W * .27, H * .44, H * .3], [W * .83, H * .62, H * .24]], step = 34;
    g.lineWidth = 12;
    for (let y = 0; y < H + step; y += step) {
      g.beginPath();
      for (let x = 0; x <= W; x += 12) { const v = y + Math.sin(x / 210 + y / 300) * 22; x ? g.lineTo(x, v) : g.moveTo(x, v); }
      g.stroke();
    }
    ovals.forEach(([cx, cy, R]) => {
      const stad = (r, extra) => { g.beginPath(); g.moveTo(cx - extra, cy - r); g.lineTo(cx + extra, cy - r); g.arc(cx + extra, cy, r, -Math.PI / 2, Math.PI / 2); g.lineTo(cx - extra, cy + r); g.arc(cx - extra, cy, r, Math.PI / 2, Math.PI * 1.5); g.closePath(); };
      const save = g.strokeStyle; stad(R + 8, R * .55); g.fillStyle = base; g.fill();
      g.strokeStyle = save;
      for (let r = step * .5; r <= R; r += step) { stad(r, R * .55); g.stroke(); }
    });
  };
  const color = canvasTex(2048, 1536, (g, W, H) => paint(g, W, H, '#d9d0bf', '#ece6d9'));
  const bump = canvasTex(1024, 768, (g, W, H) => { g.scale(.5, .5); paint(g, W * 2, H * 2, '#3c3c3c', '#c8c8c8'); }, { data: true });
  const rug = shape3(new THREE.BoxGeometry(3.25, 0.012, 2.45), [0, 1, 2, 3, 4, 5].map(i => new THREE.MeshStandardMaterial(i === 2 ? { map: color, bumpMap: bump, bumpScale: 3.5, roughness: 1 } : { color: 0xe2dbcc, roughness: 1 })));
  rug.castShadow = false; place(living, rug, -0.35, 0.006, 2.1);
}

// three-seat tubular-frame sofa in cognac leather
{
  const S = new THREE.Group(); place(living, S, 0, 0, 3.15);
  const W = 2.02, D = 0.74, ax = W / 2 - .1, seatW = (W - .4) / 3;
  place(S, puffBox(W - .02, .2, D - .02, .025, 0, leatherDark, 4), 0, .25, 0);
  [-1, 1].forEach(side => place(S, puffBox(.2, .46, D, .035, .006, leather), side * ax, .42, 0));
  place(S, puffBox(W - .4, .39, .1, .025, 0, leatherDark, 4), 0, .46, D / 2 - .06);
  [-1, 0, 1].forEach(i => {
    place(S, puffBox(seatW - .004, .15, D - .2, .04, .014, leather), i * seatW, .42, -.08);
    place(S, puffBox(seatW - .004, .33, .17, .04, .012, leather), i * seatW, .52, D / 2 - .19, 0, -.05);
  });
  const hx = W / 2 + .014, hz = D / 2 + .014;
  [.17, .6].forEach((y, i) => railLoop(S, [[-hx, y, -hz], [-hx, y, hz], [hx, y, hz], [hx, y, -hz]], .012, chrome, !i));
  [[-hx, -hz], [-hx, hz], [hx, -hz], [hx, hz]].forEach(([x, z]) => tube(S, [x, .012, z], [x, .6, z], .012, chrome));
  const furMap = canvasTex(512, 512, (g, w, h) => { g.fillStyle = '#c7b19a'; g.fillRect(0, 0, w, h); for (let i = 0; i < 5000; i++) { const x = rnd() * w, y = rnd() * h, a = rnd() * 6.3, l = 8 + rnd() * 16; g.strokeStyle = rnd() > .5 ? 'rgba(236,222,205,.35)' : 'rgba(112,90,70,.28)'; g.lineWidth = 1 + rnd(); g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke(); } });
  const fur = new THREE.MeshStandardMaterial({ map: furMap, roughness: 1, bumpMap: noiseMap, bumpScale: 4 });
  place(S, puffBox(.44, .42, .1, .04, .055, fur), -.56, .67, .08, .28, -.3, .2);
  place(S, puffBox(.44, .42, .1, .04, .055, fur), .56, .67, .08, -.28, -.3, -.16);
  floorBlob(0, 3.15, 2.7, 1.2);
}

// matching ottoman
{
  const O = new THREE.Group(); place(living, O, -1.52, 0, 2.1, .04);
  const W = .78, D = .62;
  place(O, puffBox(W - .02, .2, D - .02, .025, 0, leatherDark, 4), 0, .25, 0);
  place(O, puffBox(W + .01, .15, D + .01, .04, .014, leather), 0, .41, 0);
  const hx = W / 2 + .014, hz = D / 2 + .014, c = [[-hx, -hz], [-hx, hz], [hx, hz], [hx, -hz]];
  railLoop(O, c.map(([x, z]) => [x, .17, z]), .012, chrome);
  railLoop(O, c.map(([x, z]) => [x, .34, z]), .012, chrome);
  c.forEach(([x, z]) => tube(O, [x, .012, z], [x, .34, z], .012, chrome));
  floorBlob(-1.52, 2.1, 1.15, 1);
}

// coffee table: two interlocking bent-wood legs under a rounded glass triangle
{
  const T = new THREE.Group(); place(living, T, 0.05, 0, 1.78, -.1);
  const leg = new THREE.Shape();
  leg.moveTo(-.44, .02); leg.quadraticCurveTo(-.42, 0, -.36, 0); leg.lineTo(.18, 0); leg.quadraticCurveTo(.42, .02, .46, .36); leg.lineTo(.3, .36);
  leg.quadraticCurveTo(.25, .12, .08, .1); leg.lineTo(-.26, .1); leg.quadraticCurveTo(-.4, .12, -.44, .02);
  const legG = new THREE.ExtrudeGeometry(leg, { depth: .05, bevelEnabled: true, bevelSize: .005, bevelThickness: .005, bevelSegments: 2, curveSegments: 18 });
  legG.translate(0, 0, -.025);
  place(T, shape3(legG, ashWood), -.02, .005, .06, .55);
  place(T, shape3(legG, ashWood), .03, .005, -.08, Math.PI - .35);
  tube(T, [.0, .34, -.1], [.0, .34, .1], .012, brass);
  const top = new THREE.Shape();
  top.moveTo(-.66, -.14); top.bezierCurveTo(-.7, .24, -.36, .42, -.1, .4); top.bezierCurveTo(.22, .38, .64, .2, .68, .0);
  top.bezierCurveTo(.7, -.14, .5, -.2, .34, -.26); top.bezierCurveTo(.1, -.34, -.2, -.42, -.4, -.4); top.bezierCurveTo(-.58, -.38, -.64, -.28, -.66, -.14);
  const glassFace = new THREE.MeshPhysicalMaterial({ color: 0xe8f4ee, transparent: true, opacity: .16, roughness: .03, envMapIntensity: 2, depthWrite: false });
  const glassEdge = new THREE.MeshPhysicalMaterial({ color: 0xbfe0d2, transparent: true, opacity: .6, roughness: .08, depthWrite: false });
  const glass = shape3(new THREE.ExtrudeGeometry(top, { depth: .016, bevelEnabled: false, curveSegments: 24 }), [glassFace, glassEdge]);
  glass.rotation.x = -Math.PI / 2; glass.position.y = .385; glass.renderOrder = 3; glass.raycast = () => {}; T.add(glass);
  const coverTex = canvasTex(360, 280, (g, w, h) => { g.fillStyle = '#14161d'; g.fillRect(0, 0, w, h); g.strokeStyle = '#c8b27a'; g.lineWidth = 5; g.beginPath(); g.arc(w * .55, h * .5, 60, 0, 7); g.moveTo(w * .55 - 60, h * .5); g.lineTo(w * .55 + 60, h * .5); g.stroke(); g.fillStyle = '#c8a25c'; g.fillRect(w * .16, h * .42, 74, 30); });
  const black = new THREE.MeshStandardMaterial({ color: 0x14161d, roughness: .5 });
  place(T, shape3(new THREE.BoxGeometry(.36, .055, .28), [black, black, new THREE.MeshStandardMaterial({ map: coverTex, roughness: .5 }), black, black, black]), -.22, .43, .08, .22);
  const candle = new THREE.MeshStandardMaterial({ color: 0x17171a, roughness: .35 });
  place(T, shape3(new THREE.CylinderGeometry(.04, .04, .1, 24), candle), .36, .452, -.1);
  place(T, shape3(new THREE.CylinderGeometry(.05, .05, .004, 24), blackMetal), .36, .403, -.1);
  place(T, shape3(new THREE.BoxGeometry(.17, .016, .04), blackMetal), .08, .41, -.2, .3);
  floorBlob(0.05, 1.78, 1.5, 1.1);
}

// burl-wood waterfall console against the mirror wall
{
  const burl = new THREE.MeshStandardMaterial({ roughness: .36, map: canvasTex(1024, 512, (g, w, h) => {
    g.fillStyle = '#d8bb8e'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 760; i++) { const x = rnd() * w, y = rnd() * h, r = 4 + rnd() * 26, a = g.createRadialGradient(x, y, 1, x, y, r); a.addColorStop(0, rnd() > .82 ? 'rgba(110,72,36,.5)' : 'rgba(170,128,80,.28)'); a.addColorStop(.55, 'rgba(150,108,62,.16)'); a.addColorStop(1, 'rgba(235,210,165,0)'); g.fillStyle = a; g.fillRect(x - r, y - r, r * 2, r * 2); }
  }) });
  const C = new THREE.Group(); place(living, C, -1.72, 0, 3.66);
  const L = 1.2, H = .76, D = .46, t = .045;
  place(C, shape3(new THREE.BoxGeometry(L, t, D), burl), 0, H - t / 2, 0);
  [-1, 1].forEach(s => place(C, shape3(new THREE.BoxGeometry(t, H - t, D), burl), s * (L / 2 - t / 2), (H - t) / 2, 0));
  const book = new THREE.MeshStandardMaterial({ color: 0x1f2a2c, roughness: .6 });
  place(C, shape3(new THREE.BoxGeometry(.26, .04, .18), book), .12, H + .02, -.06, .2);
  place(C, shape3(new THREE.CylinderGeometry(.04, .04, .1, 20), new THREE.MeshStandardMaterial({ color: 0x3a2417, roughness: .3 })), -.34, H + .05, .08);
  floorBlob(-1.72, 3.66, 1.6, .85);
}

// writing desk with sabre X legs, by the windows
{
  const K = new THREE.Group(); place(living, K, 2.15, 0, 3.52);
  const L = 1.42, H = .76, D = .72;
  place(K, puffBox(L, .036, D, .012, 0, cherry, 4), 0, H - .018, 0);
  place(K, shape3(new THREE.BoxGeometry(L - .1, .09, D - .1), cherry), 0, H - .08, 0);
  [-.31, .31].forEach(x => {
    place(K, shape3(new THREE.BoxGeometry(.56, .066, .008), maple), x, H - .08, -D / 2 + .046);
    place(K, shape3(new THREE.SphereGeometry(.009, 12, 8), brass), x, H - .08, -D / 2 + .036);
  });
  place(K, shape3(new THREE.CylinderGeometry(.022, .022, .002, 20), blackMetal), -.18, H + .001, .04);
  place(K, shape3(new THREE.CylinderGeometry(.022, .022, .002, 20), blackMetal), .22, H + .001, -.03);
  const bottom = H - .125, ex = L / 2 - .2, reach = D / 2 - .05;
  [-1, 1].forEach(sx => [-1, 1].forEach(sz => {
    const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(sx * ex, .012, sz * reach), new THREE.Vector3(sx * ex, .1, -sz * .02), new THREE.Vector3(sx * ex, bottom, -sz * reach));
    place(K, shape3(new THREE.TubeGeometry(curve, 26, .016, 10), cherry), 0, 0, 0);
    tube(K, [sx * ex, .012, 0], [sx * ex, .012, sz * reach], .013, cherry);
  }));
  tube(K, [-ex, .13, 0], [ex, .13, 0], .009, cherry);
  floorBlob(2.15, 3.52, 1.8, 1.05);
}

// swivel chair in grey weave
{
  const R = new THREE.Group(); place(living, R, 2.45, 0, 2.62, .4);
  const weave = new THREE.MeshStandardMaterial({ color: 0xb4b2ab, roughness: 1, bumpMap: noiseMap, bumpScale: 1, side: THREE.DoubleSide });
  const prof = [[.21, 0], [.25, .03], [.275, .12], [.29, .22], [.295, .3], [.287, .318], [.27, .305], [.255, .2], [.235, .08], [.2, .03]].map(p => new THREE.Vector2(p[0], p[1]));
  const shell = shape3(new THREE.LatheGeometry(prof, 28, Math.PI * .36, Math.PI * 1.28), weave);
  place(R, shell, 0, .44, 0);
  place(R, puffBox(.42, .07, .42, .034, .012, weave), 0, .49, -.01);
  tube(R, [0, .1, 0], [0, .44, 0], .022, chrome);
  for (let i = 0; i < 5; i++) {
    const a = i / 5 * Math.PI * 2, x = Math.cos(a) * .29, z = Math.sin(a) * .29;
    tube(R, [0, .1, 0], [x, .07, z], .014, blackMetal);
    place(R, shape3(new THREE.SphereGeometry(.028, 12, 10), blackMetal), x, .03, z);
  }
  floorBlob(2.45, 2.62, .9, .9);
}

// low folded lounger with a chunky throw
{
  const G = new THREE.Group(); place(living, G, 2.28, 0, 1.0, -.72); G.scale.set(.95, .8, 1);
  const boucle = new THREE.MeshStandardMaterial({ color: 0x52231f, roughness: 1, bumpMap: noiseMap, bumpScale: 1.6 });
  [[.5, .14, .28, .38, .06], [.2, .16, .32, .38, 0], [-.1, .18, .36, .36, -.05], [-.28, .42, .4, .3, -.26], [-.38, .67, .34, .25, -.34]].forEach(([z, y, h, d, tilt]) => place(G, puffBox(.92, h, d, .11, .025, boucle, 6), 0, y, z, 0, tilt));
  const path = [[-.54, .72], [-.5, .84], [-.34, .88], [-.2, .68], [-.1, .46], [.05, .37], [.25, .34], [.5, .34], [.68, .26], [.72, .12]].map(p => new THREE.Vector3(0, p[1], p[0]));
  const curve = new THREE.CatmullRomCurve3(path), plane = new THREE.PlaneGeometry(.52, 1, 30, 110), pp = plane.attributes.position, u = plane.attributes.uv;
  for (let i = 0; i < pp.count; i++) {
    const s = u.getY(i), x = pp.getX(i), c = curve.getPoint(s), bob = Math.sin(s * 64) * .008 + Math.sin(x * 40) * .006;
    pp.setXYZ(i, x + .06 + Math.sin(s * 5) * .03, c.y + .045 + bob, c.z);
    u.setXY(i, u.getX(i), s);
  }
  plane.computeVertexNormals();
  const wool = new THREE.MeshStandardMaterial({ color: 0xece4d3, roughness: 1, bumpMap: knitMap, bumpScale: 3, side: THREE.DoubleSide });
  place(G, shape3(plane, wool), 0, 0, 0);
  floorBlob(2.28, 1.0, 1.5, 1.5);
}

// breakfast bar and its four stools, which close the room on the kitchen side
{
  const marble = new THREE.MeshStandardMaterial({ roughness: .22, map: canvasTex(512, 512, (g, w, h) => { g.fillStyle = '#ece9e2'; g.fillRect(0, 0, w, h); for (let i = 0; i < 26; i++) { g.strokeStyle = `rgba(120,120,125,${.05 + rnd() * .12})`; g.lineWidth = .5 + rnd(); g.beginPath(); let x = rnd() * w, y = rnd() * h; g.moveTo(x, y); for (let k = 0; k < 6; k++) { x += (rnd() - .4) * 120; y += (rnd() - .5) * 120; g.lineTo(x, y); } g.stroke(); } }) });
  const whiteFront = new THREE.MeshStandardMaterial({ color: 0xe8e5dc, roughness: .6 });
  place(living, shape3(new THREE.BoxGeometry(.5, 1.03, 2.55), whiteFront), -3.2, .515, 2.62);
  place(living, shape3(new THREE.BoxGeometry(.62, .035, 2.65), marble), -3.16, 1.05, 2.62);
  place(living, shape3(new THREE.BoxGeometry(.56, 1.03, .03), marble), -3.16, .515, 1.31);
  [1.62, 2.22, 2.82, 3.42].forEach((z, i) => {
    const St = new THREE.Group(); place(living, St, -2.62, 0, z, Math.PI / 2 + (i - 1.5) * .07);
    place(St, shape3(new THREE.CylinderGeometry(.2, .22, .018, 32), brass), 0, .012, 0);
    tube(St, [0, .02, 0], [0, .62, 0], .024, brass);
    const ring = shape3(new THREE.TorusGeometry(.15, .008, 8, 32), brass); ring.rotation.x = Math.PI / 2; ring.position.y = .26; St.add(ring);
    place(St, puffBox(.44, .07, .4, .034, .018, leather), 0, .66, 0);
    place(St, puffBox(.38, .28, .045, .022, .008, leather), 0, .83, .19, 0, .2);
  });
  floorBlob(-2.62, 2.5, .9, 2.6);
}

// window wall, curtains and the city beyond; side walls are one-sided so the camera can stand outside them
{
  const WX = 3.2, wallMat = ctx2.wall, A = (y0, y1, z0, z1) => { const m = shape3(new THREE.PlaneGeometry(z1 - z0, y1 - y0), wallMat); m.rotation.y = -Math.PI / 2; m.position.set(WX, (y0 + y1) / 2, (z0 + z1) / 2); m.receiveShadow = true; room.add(m); };
  A(0, CEILING, -.35, .92); A(0, .24, .92, ROOM.z1); A(2.12, CEILING, .92, ROOM.z1);
  const kitchen = shape3(new THREE.PlaneGeometry(ROOM.z1 + .35, CEILING), wallMat); kitchen.rotation.y = Math.PI / 2; kitchen.position.set(ROOM.x0, CEILING / 2, (ROOM.z1 - .35) / 2); kitchen.receiveShadow = true; room.add(kitchen);
  const city = canvasTex(1400, 1000, (g, w, h) => {
    const sky = g.createLinearGradient(0, 0, 0, h); sky.addColorStop(0, '#6bb0e6'); sky.addColorStop(.75, '#cfe6f3'); g.fillStyle = sky; g.fillRect(0, 0, w, h);
    const tower = (x, top, tw, c) => { g.fillStyle = c; g.fillRect(x, top, tw, h - top); g.fillStyle = 'rgba(225,232,240,.28)'; for (let y = top + 12; y < h; y += 22) for (let wx = x + 7; wx < x + tw - 7; wx += 17) if (rnd() > .1) g.fillRect(wx, y, 10, 13); };
    for (let i = 0; i < 16; i++) tower(i * 92 - 20 + rnd() * 30, 420 + rnd() * 330, 80 + rnd() * 60, ['#5c6876', '#76818c', '#4d5866', '#8a8f94'][i % 4]);
    [[360, 90, 210, '#a9b4bd'], [720, 180, 150, '#47525e'], [1050, 260, 170, '#909aa3']].forEach(([x, t, tw, c]) => tower(x, t, tw, c));
  });
  const skyPlane = shape3(new THREE.PlaneGeometry(ROOM.z1 - .92, 1.88), new THREE.MeshBasicMaterial({ map: city, toneMapped: false }));
  skyPlane.rotation.y = -Math.PI / 2; skyPlane.position.set(WX + .02, 1.18, (ROOM.z1 + .92) / 2); skyPlane.raycast = () => {}; room.add(skyPlane);
  const bars = (w, h, d, x, y, z) => box(w, h, d, x, y, z, paint, false);
  [.96, 1.86, 2.58, 3.3, 3.94].forEach(z => bars(.05, 1.9, .05, WX - .02, 1.17, z));
  bars(.05, .05, 3.05, WX - .02, 2.11, 2.45); bars(.05, .05, 3.05, WX - .02, .26, 2.45);
  bars(.09, .22, 3.05, WX - .05, .13, 2.45);
  const drape = new THREE.MeshStandardMaterial({ roughness: .95, map: canvasTex(512, 64, (g, w, h) => { const a = g.createLinearGradient(0, 0, w, 0); for (let i = 0; i <= 8; i++) a.addColorStop(i / 8, i % 2 ? '#e6dccb' : '#a89d8c'); g.fillStyle = a; g.fillRect(0, 0, w, h); }) });
  [[.98, 1.76], [2.62, 3.46]].forEach(([z0, z1]) => {
    const w = z1 - z0, g = new THREE.PlaneGeometry(w, 2.12, 70, 8), p = g.attributes.position;
    for (let i = 0; i < p.count; i++) { const t = (p.getX(i) + w / 2) / w, y = (p.getY(i) + 1.06) / 2.12; p.setZ(i, Math.cos(t * 8 * Math.PI) * (.03 + (1 - y) * .014) + Math.sin(t * 9 + y * 2) * .012); }
    g.computeVertexNormals();
    const m = shape3(g, drape); m.rotation.y = -Math.PI / 2; m.position.set(WX - .1, 1.07, (z0 + z1) / 2); m.receiveShadow = true; room.add(m);
  });
  box(.03, .03, 3.1, WX - .1, 2.12, 2.45, blackMetal, false);
  // the framed print of a tower beside the windows
  const print = canvasTex(360, 460, (g, w, h) => { g.fillStyle = '#f2f1ee'; g.fillRect(0, 0, w, h); for (let i = 0; i < 4; i++) { const y = 56 + i * 90, a = g.createLinearGradient(0, y, 0, y + 80); a.addColorStop(0, '#26313f'); a.addColorStop(1, '#7c8791'); g.fillStyle = a; g.fillRect(95, y, 170, 80); g.fillStyle = '#10151c'; g.beginPath(); g.moveTo(180, y + 8); g.lineTo(196, y + 80); g.lineTo(164, y + 80); g.fill(); } });
  const pm = shape3(new THREE.PlaneGeometry(.36, .46), new THREE.MeshStandardMaterial({ map: print, roughness: .4 })); pm.rotation.y = -Math.PI / 2; pm.position.set(WX - .01, 1.52, .36); room.add(pm);
  // tray ceiling moulding
  const crown = [[0, 2.26, 1.08, 6.36, .08, .06], [0, 2.26, 3.92, 6.36, .08, .06], [-3.15, 2.26, 2.5, .06, .08, 2.9], [3.15, 2.26, 2.5, .06, .08, 2.9]];
  crown.forEach(([x, y, z, w, h, d]) => overhead.add(box(w, h, d, x, y, z, paint, false)));
}

/* ---------- sun through a side window, as in the wide photo ---------- */
const SUN_DIR = new THREE.Vector3(1, 0.457, 0.8).normalize();
const WINDOW_C = new THREE.Vector3(3.2, 2.15, 2.54);
const sun = new THREE.SpotLight(0xffc27a, 0, 0, 0.13, 0.05, 0);
sun.position.copy(SUN_DIR).multiplyScalar(12).add(WINDOW_C); sun.target.position.copy(WINDOW_C);
sun.castShadow = true; sun.shadow.mapSize.setScalar(SMALL_GPU ? 2048 : 4096);
Object.assign(sun.shadow.camera, { near: 6, far: 24 });
sun.shadow.bias = -0.00015; sun.shadow.normalBias = 0.005;
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
  [[0, -1.2, -8], [-8, .5, 0], [7, -.6, -7], [-3, -.2, 8]].forEach(([x, y, z]) => { const d = new THREE.Mesh(new THREE.BoxGeometry(5, 1.4, 1), new THREE.MeshBasicMaterial({ color: 0x17120c })); d.position.set(x, y, z); d.lookAt(0, y, 0); envScene.add(d); });
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
  m.position.z = u.home.z + u.offset + (u.saved || 0) + u.hover * 0.022;
  m.position.y = u.home.y + u.hover * 0.004;
  u.spine.emissiveIntensity = u.hover * 0.2;
}

/* ---------- camera rig ---------- */
const WALL = { target: new THREE.Vector3(0, 1.1, 0), w: 4.3, h: 2.75 };
const rig = { target: WALL.target.clone(), radius: 8, az: -0.2, el: 0.02 };
const goal = { target: WALL.target.clone(), radius: 6, az: 0, el: 0 };
function fitRadius(w, h) {
  const v = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
  return Math.max((h / 2) / v, (w / 2) / (v * camera.aspect)) + 0.05;
}
function goToWall() { goal.target.copy(WALL.target); goal.radius = fitRadius(WALL.w, WALL.h); goal.az = 0; goal.el = 0.07; invalidate(); }
function goToRoom() {
  goal.target.set(-0.15, 0.8, 1.55); goal.radius = fitRadius(camera.aspect < 1 ? 4.8 : 6.7, 4.1); goal.az = -0.5; goal.el = 0.38; invalidate();
}
function goToCase(side) {
  const [a, b] = BAY[side];
  goal.target.set((a + b) / 2, 1.42, 0); goal.radius = fitRadius(1.2, 1.62); goal.az = side === 'left' ? 0.05 : -0.05; goal.el = 0; invalidate();
}
const isPhone = () => innerWidth < 760 || innerHeight < 500;
function applyView() { if (state.view === 'left' || state.view === 'right') goToCase(state.view); else if (state.view === 'room') goToRoom(); else goToWall(); }
const pixelsPerMetre = r => innerHeight / (2 * r * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
const tapRadius = () => THREE.MathUtils.clamp(innerHeight / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * 820), 0.55, 2.2);
// on a phone a spine has to be big enough to hit, so the first tap on a distant shelf moves closer
const needsCloser = m => m.userData.w * pixelsPerMetre(camera.position.distanceTo(m.userData.home)) < (isPhone() ? 15 : 6);
function moveCloser(m) {
  const u = m.userData; state.touched = true;
  goal.target.set(u.home.x, u.home.y + 0.1, 0); goal.radius = tapRadius(); goal.az = 0; goal.el = 0; clampGoal(); invalidate();
}
function clampGoal() {
  goal.radius = THREE.MathUtils.clamp(goal.radius, 0.55, fitRadius(camera.aspect < 1 ? 5.4 : 7.4, 4.6) * 1.15);
  const room = THREE.MathUtils.smoothstep(goal.radius, 1, fitRadius(WALL.w, WALL.h));
  const xr = THREE.MathUtils.lerp(1.9, 0.6, room), lo = THREE.MathUtils.lerp(0.25, 0.75, room), hi = THREE.MathUtils.lerp(2.1, 1.3, room);
  goal.target.x = THREE.MathUtils.clamp(goal.target.x, -xr, xr);
  goal.target.y = THREE.MathUtils.clamp(goal.target.y, lo, hi);
  goal.az = THREE.MathUtils.clamp(goal.az, -1.0, 1.0);
  goal.el = THREE.MathUtils.clamp(goal.el, -0.16, 0.6);
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
  overhead.visible = camera.position.y < CEILING;
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
  const hit = ray.intersectObjects([...meshes.filter(m => m.visible), living], true)[0];
  return hit && hit.object.userData.book ? hit.object : null;
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
  state.engaged = true;
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
canvas.addEventListener('pointerleave', () => { state.engaged = false; if (!state.reading) setHover(null); });
canvas.addEventListener('wheel', e => {
  if (EMBED && !state.engaged) return;
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
    goal.target.x += (p.x - goal.target.x) * t; goal.target.y += (p.y - goal.target.y) * t; goal.target.z += (p.z - goal.target.z) * t;
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

const coverCache = new Map();
function loadCover(b) {
  const src = b.meta && b.meta.cv; if (!src) return Promise.resolve(null);
  if (!coverCache.has(src)) coverCache.set(src, new Promise(res => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src; }));
  return coverCache.get(src);
}
function drawCover(g, img, x, y, w, h) {
  const r = Math.max(w / img.width, h / img.height), sw = w / r, sh = h / r;
  g.drawImage(img, (img.width - sw) / 2, (img.height - sh) / 2, sw, sh, x, y, w, h);
}
function coverCanvas(b, img) {
  if (img) return canvasTex(768, 1100, (g, w, h) => {
    drawCover(g, img, 0, 0, w, h);
    const a = g.createLinearGradient(0, 0, 70, 0); a.addColorStop(0, 'rgba(0,0,0,.3)'); a.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = a; g.fillRect(0, 0, 70, h);
  });
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
function pageCanvases(b, img) {
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
    const t = fitTitle(g, b.title || 'Unidentified book', PW - mx * 2, 330, 104, 46);
    t.lines.forEach((l, i) => g.fillText(l, mx, 190 + i * t.lh));
    let y = 190 + t.lines.length * t.lh + 36;
    g.fillStyle = accent; g.fillRect(mx, y, 120, 3); y += 34;
    g.font = `italic 400 42px ${FONT.text}`; g.fillStyle = ink;
    wrapText(g, b.author || 'Author unknown', PW - mx * 2).slice(0, 4).forEach(l => { g.fillText(l, mx, y); y += 54; });
    y += 10; g.font = `400 31px ${FONT.ui}`; g.fillStyle = soft;
    const line = [b.year, b.cat].filter(Boolean).join('  ·  ');
    if (line) g.fillText(line, mx, y);
    y += 56;
    // the real cover beside the catalogue record
    const cw = 250, ch = 370;
    if (img) { g.save(); g.shadowColor = 'rgba(40,25,10,.4)'; g.shadowBlur = 20; g.shadowOffsetY = 6; drawCover(g, img, mx, y, cw, ch); g.restore(); }
    const m = b.meta || {}, dx = img ? mx + cw + 40 : mx, dw = PW - mx - dx; let dy = y + 4;
    [['PUBLISHER', m.pub], ['PAGES', m.pages], ['ISBN', m.isbn], ['GENRES', m.genres && m.genres.join(', ')]].forEach(([k, v]) => {
      if (!v) return;
      g.font = `600 21px ${FONT.ui}`; g.fillStyle = accent; g.fillText(k, dx, dy); dy += 31;
      g.font = `400 30px ${FONT.text}`; g.fillStyle = ink;
      wrapText(g, v, dw).slice(0, 3).forEach(l => { g.fillText(l, dx, dy); dy += 39; }); dy += 16;
    });
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
    y += 44;
    if (b.meta && b.meta.opening) {
      g.fillStyle = accent; g.font = `600 25px ${FONT.ui}`; g.fillText('HOW IT OPENS', mx, y); y += 50;
      g.fillStyle = ink; g.font = `italic 400 33px ${FONT.text}`;
      wrapText(g, b.meta.opening, PW - mx * 2).forEach(l => { g.fillText(l, mx, y); y += 47; });
      g.fillStyle = soft; g.font = `400 24px ${FONT.ui}`; g.fillText(b.meta.openLabel, mx, y + 6); y += 62;
    }
    g.fillStyle = accent; g.font = `600 25px ${FONT.ui}`; g.fillText('WHERE IT STANDS', mx, y); y += 54;
    // that shelf in miniature, in the books' own colours
    const shelf = LIB.data.shelves.find(s => s.id === b.shelf), span = shelf.span[1] - shelf.span[0], mw = PW - mx * 2, mh = b.meta && b.meta.opening ? 130 : 260, maxH = Math.max(...shelf.books.map(x => x.h));
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
function buildReader(b, img) {
  const u = b.mesh.userData, H = u.h, W = Math.min(u.d, H * .72), T = Math.max(u.w * .92, 0.014), c = 0.0028;
  const coverMat = new THREE.MeshStandardMaterial({ map: coverCanvas(b, img), roughness: 0.55 });
  const plain = new THREE.MeshStandardMaterial({ color: new THREE.Color().setRGB(...bookColor(b).map(v => v / 255), THREE.SRGBColorSpace), roughness: 0.6 });
  const endpaper = new THREE.MeshStandardMaterial({ color: 0xece2cb, roughness: 0.9 });
  const pagesMat = new THREE.MeshStandardMaterial({ map: pagesEdge, roughness: 0.92 });
  const pg = pageCanvases(b, img);
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

function refreshSaved() {
  const n = saved.size;
  $('openSaved').textContent = n ? `Saved ${n}` : 'Saved';
  if (state.reading) { const on = saved.has(state.reading.id); $('saveBook').setAttribute('aria-pressed', on); $('saveBook').textContent = on ? 'Saved' : 'Save'; }
  renderCatalogue();
}
function markOnShelf(b, on) {
  const m = b.mesh; if (!m) return;
  const u = m.userData;
  if (on && !u.ribbon) {
    u.ribbon = new THREE.Mesh(new THREE.BoxGeometry(Math.min(u.w * .7, .012), .07, .0015), new THREE.MeshStandardMaterial({ color: 0xc4932f, metalness: .4, roughness: .4 }));
    u.ribbon.position.set(0, u.h - .03, .0065); u.ribbon.raycast = () => {}; m.add(u.ribbon);
  }
  if (u.ribbon) u.ribbon.visible = on;
  gsap.to(u, { saved: on ? .018 : 0, duration: REDUCED ? 0 : .35, ease: 'power2.out', onUpdate() { placeBook(m); invalidate(); }, onComplete: reshadow });
}
function toggleSaved(b) {
  if (saved.has(b.id)) saved.delete(b.id); else saved.add(b.id);
  persistSaved(); markOnShelf(b, saved.has(b.id)); refreshSaved();
}
function setBar(b) {
  const known = b.conf !== 'unread' && b.title;
  $('amazon').hidden = !known; $('audible').hidden = !(known && b.asin);
  const on = saved.has(b.id), free = b.meta && b.meta.free, sample = LINKS.sample(b);
  $('saveBook').hidden = !known; $('saveBook').setAttribute('aria-pressed', on); $('saveBook').textContent = on ? 'Saved' : 'Save';
  $('sample').hidden = !(free || sample);
  if (free) { $('sample').href = free; $('sample').textContent = 'Read it free'; delete $('sample').dataset.embed; }
  else if (sample) { $('sample').href = LINKS.sampleOut(b); $('sample').textContent = 'Read a sample'; if (LIB.site) $('sample').dataset.embed = '1'; }
  $('bar').classList.toggle('no-sample', $('sample').hidden);
  if (known) { $('amazon').href = LINKS.amazon(b); if (b.asin) $('audible').href = LINKS.audible(b); }
  $('sheetTitle').textContent = b.title || 'Unidentified book';
  $('sheetMeta').textContent = [b.author, b.year, b.meta && b.meta.pub, b.meta && b.meta.pages && `${b.meta.pages} pages`].filter(Boolean).join(', ');
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
  const coverImg = await Promise.race([loadCover(b), new Promise(r => setTimeout(() => r(null), 1500))]);
  const R = buildReader(b, coverImg);
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
  goal.target.set(u.home.x, u.home.y + 0.12, 0); goal.radius = Math.min(1.45, Math.max(goal.radius, 1.0)); goal.az = 0; goal.el = 0; clampGoal(); invalidate();
  setTimeout(done, REDUCED ? 0 : 900);
}

$('saveBook').onclick = () => { if (state.reading) toggleSaved(state.reading); };
$('sample').addEventListener('click', e => {
  if (!$('sample').dataset.embed || !state.reading) return;
  e.preventDefault();
  $('samplerTitle').textContent = state.reading.title; $('samplerOut').href = LINKS.sampleOut(state.reading);
  $('samplerFrame').src = LINKS.sample(state.reading); $('sampler').hidden = false; $('closeSampler').focus();
});
function closeSampler() { $('sampler').hidden = true; $('samplerFrame').removeAttribute('src'); }
$('closeSampler').onclick = closeSampler;
$('shut').onclick = () => { if (!state.busy) closeBook(); };
$('prev').onclick = () => step(-1);
$('next').onclick = () => step(1);
addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') { if (e.key === 'Escape') toggleDrawer(false); return; }
  if (e.key === 'Escape' && !$('sampler').hidden) { closeSampler(); return; }
  if (e.key === 'Escape') { if ($('drawer').classList.contains('on')) toggleDrawer(false); else if (state.reading && !state.busy) closeBook(); }
  if (state.reading && e.key === 'ArrowLeft') step(-1);
  if (state.reading && e.key === 'ArrowRight') step(1);
  if (!state.reading && e.key === '/') { e.preventDefault(); toggleDrawer(true); $('search').focus(); }
});

/* ---------- toolbar and catalogue ---------- */
const setView = v => { state.view = v; state.touched = false; applyView(); };
$('viewRoom').onclick = () => setView('room');
$('viewWall').onclick = () => setView('wall');
$('viewLeft').onclick = () => setView('left');
$('viewRight').onclick = () => setView('right');
let mood = 'golden';
$('tod').onclick = () => { mood = mood === 'golden' ? 'day' : 'golden'; $('tod').setAttribute('aria-pressed', mood === 'day'); setMood(mood); };
function toggleDrawer(on) { $('drawer').classList.toggle('on', on); if (on) setTimeout(() => $('search').focus({ preventScroll: true }), 60); }
$('openDrawer').onclick = () => { showSavedOnly(false); toggleDrawer(true); };
$('openSaved').onclick = () => { showSavedOnly(true); toggleDrawer(true); };
$('closeDrawer').onclick = () => toggleDrawer(false);
function buildCatalogue() {
  let activeCat = null;
  const SAVED = '__saved';
  window.showSavedOnly = on => { activeCat = on ? SAVED : null; render(); $('list').scrollTop = 0; };
  const tally = new Map();
  books.forEach(b => { if (b.cat) tally.set(b.cat, (tally.get(b.cat) || 0) + 1); });
  const chips = [[null, 'All', books.length], [SAVED, 'Saved', saved.size], ...[...tally].sort((x, y) => y[1] - x[1]).map(([c, n]) => [c, c, n])].map(([cat, label, n]) => {
    const c = document.createElement('button'); c.textContent = label;
    const count = document.createElement('small'); count.textContent = n; c.append(count);
    c.onclick = () => { activeCat = cat; render(); $('list').scrollTop = 0; };
    $('filters').append(c);
    return [cat, c, count];
  });
  const render = () => {
    chips.forEach(([cat, c, count]) => { c.setAttribute('aria-pressed', cat === activeCat); if (cat === SAVED) count.textContent = saved.size; });
    $('savedHelp').hidden = activeCat !== SAVED || !saved.size;
    const q = $('search').value.trim().toLowerCase(), list = $('list'); list.replaceChildren();
    let shown = 0;
    for (const s of LIB.data.shelves) {
      const rows = s.books.filter(b => (!activeCat || (activeCat === SAVED ? saved.has(b.id) : b.cat === activeCat)) && (!q || [b.title, b.author, b.cat].join(' ').toLowerCase().includes(q)));
      if (!rows.length) continue;
      const h = document.createElement('h3'); h.textContent = `${s.case === 'left' ? 'Left' : 'Right'} case, ${s.name.toLowerCase()}`; list.append(h);
      for (const b of rows) {
        const r = document.createElement('button'); r.className = 'row' + (b.conf === 'unread' ? ' unknown' : '');
        let sw;
        if (b.meta && b.meta.cv) { sw = document.createElement('img'); sw.src = b.meta.cv; sw.alt = ''; sw.loading = 'lazy'; sw.decoding = 'async'; sw.onerror = () => { sw.removeAttribute('src'); sw.style.background = `rgb(${b.color})`; }; }
        else sw = document.createElement('span');
        sw.className = 'swatch'; sw.style.background = `rgb(${b.color})`;
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
          const fav = document.createElement('button'); const on = saved.has(b.id);
          fav.textContent = on ? 'Saved' : 'Save'; fav.setAttribute('aria-pressed', on); fav.setAttribute('aria-label', `${on ? 'Remove from saved' : 'Save'}: ${b.title}`);
          fav.onclick = () => { const top = $('list').scrollTop; toggleSaved(b); $('list').scrollTop = top; };
          links.prepend(fav);
          entry.append(links);
        }
        list.append(entry); shown++;
      }
    }
    if (!shown) { const e = document.createElement('p'); e.id = 'empty'; e.textContent = activeCat === SAVED && !saved.size ? 'Nothing saved yet. Press Save on any book and it will wait here.' : activeCat && activeCat !== SAVED ? `No book in ${activeCat} matches that search.` : 'No book matches that search.'; list.append(e); }
  };
  $('search').oninput = render; renderCatalogue = render; render();
  $('copySaved').onclick = async () => {
    const lines = books.filter(b => saved.has(b.id)).map(b => `${b.title}${b.author ? ' by ' + b.author : ''}\n${LINKS.amazon(b)}`).join('\n\n');
    try { await navigator.clipboard.writeText(lines); $('copySaved').textContent = 'Copied'; }
    catch (e) { const t = document.createElement('textarea'); t.value = lines; t.style.width = '100%'; t.rows = 6; $('savedHelp').append(t); t.select(); $('copySaved').textContent = 'Select and copy below'; }
    setTimeout(() => { $('copySaved').textContent = 'Copy list'; }, 2500);
  };
}

/* ---------- start ---------- */
books.forEach(b => { if (saved.has(b.id)) { b.mesh.userData.saved = .018; markOnShelf(b, true); } });
refreshSaved();
addEventListener('resize', resize);
state.view = innerHeight > innerWidth * 1.1 ? 'left' : 'room';
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
  $('hint').textContent = `${isPhone() ? 'Tap' : 'Click'} a shelf to move closer, then a book to open it. Drag to look around.`;
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
  else { if (!EMBED) try { localStorage.setItem('note-read', '1'); } catch (e) {} intro(); canvas.focus({ preventScroll: true }); }
}
$('closeNote').onclick = () => showNote(false);
$('openNote').onclick = () => showNote(true);
$('note').addEventListener('click', e => { if (e.target === $('note')) showNote(false); });
addEventListener('keydown', e => { if (e.key === 'Escape' && !$('note').classList.contains('off')) showNote(false); });
function begin() { prepare(); if (noteSeen() || EMBED) showNote(false); else $('closeNote').focus({ preventScroll: true }); }
if (document.readyState === 'complete') begin(); else addEventListener('load', begin);
