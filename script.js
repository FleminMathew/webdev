/* ============ DATA ============ */

const DESTINATIONS = {
  olympus:  { name:"Olympus Skyport",        tags:["Adventure","Summit","Signature"], price:"¤180K surface package",
              desc:"A glass-spined skyport clinging to the shoulder of Olympus Mons, twice the height of Everest. Summit climbs, low-gravity wingsuit descents, and a Champagne dome at the caldera rim." },
  valles:   { name:"Valles Marineris Cliff Resort", tags:["Scenic","Romantic","Adventure"], price:"¤140K surface package",
              desc:"Suites cantilevered into the largest canyon in the Solar System. Canyon skydiving, cliffside dining pods, and sunrise light shows across 4,000km of rust-red rock." },
  elysium:  { name:"Elysium Dome Metropolis", tags:["City","Culture","Family"], price:"¤95K surface package",
              desc:"Mars' largest domed city — theatres, zero-g ballrooms, botanical atriums, and the Interplanetary Museum of Earth. The most walkable, family-friendly territory on the planet." },
  phobos:   { name:"Phobos Orbital Sanctuary", tags:["Orbital","Zero-G","Exclusive"], price:"¤220K orbital package",
              desc:"A private ring-station orbiting Mars' largest moon. Zero-gravity spa, glass-floor Mars-viewing decks, and the shortest transit hop from any surface destination." },
  arcadia:  { name:"Arcadia Aurora Domes",    tags:["Nature","Relax","Rare"], price:"¤160K surface package",
              desc:"Northern-latitude domes famous for Martian auroras ignited by the planet's patchwork magnetosphere. Thermal bio-pools and silent-sky stargazing suites." },
  tharsis:  { name:"Tharsis Bio-Reserve",     tags:["Nature","Science","Wellness"], price:"¤110K surface package",
              desc:"Mars' first terraformed bio-reserve — engineered forests under a volcanic ridge. Guided rover treks through humanity's first living Martian ecosystem." },
};

const SPACECRAFT = [
  { id:"aurora", name:"Aurora Clipper",   speed:"Standard", days:210, luxury:2, cost:1200000,
    desc:"Solar-sail hybrid liner with panoramic Earthrise decks.", bars:{speed:35,luxury:40,safety:70} },
  { id:"zephyr",  name:"Zephyr Voidrunner", speed:"Fast",     days:95,  luxury:3, cost:3800000,
    desc:"Fusion-torch superyacht with a zero-g spa and private suites.", bars:{speed:70,luxury:70,safety:80} },
  { id:"nova",    name:"Nova Ascendant",    speed:"Ultra",    days:45,  luxury:5, cost:9500000,
    desc:"Antimatter-assisted flagship with an AI butler on every deck.", bars:{speed:98,luxury:100,safety:92} },
];

const ACTIVITIES = [
  { id:"zerog",    name:"Zero-G Yoga Retreat",        cost:15000 },
  { id:"olympus",  name:"Olympus Mons Summit Climb",  cost:120000 },
  { id:"dust",     name:"Dust-Surfing Expedition",    cost:60000 },
  { id:"stars",    name:"Stargazing Dome Dinner",     cost:25000 },
  { id:"canyon",   name:"Valles Canyon Skydive",      cost:95000 },
  { id:"phobos",   name:"Phobos Zero-G Gala",         cost:40000 },
  { id:"orbitview", name:"Orbital Viewing Deck Access", cost:30000 },
];

const CATALOG = [
  // Cities
  { id:"c-elysium",  category:"city", region:"elysium", name:"Elysium Dome Metropolis",
    tags:["Culture","Family","Transit Hub"], price:"¤95K surface package", photo:"images/dome-colony.jpg", photoLabel:"Colony Skyline",
    desc:"Mars' largest domed city — theatres, zero-g ballrooms, botanical atriums, and the Interplanetary Museum of Earth. The most walkable territory on the planet." },
  { id:"c-aurora",   category:"city", region:"arcadia", name:"New Aurora City",
    tags:["Culture","Markets","Walkable"], price:"¤105K surface package", photo:"images/arid-oasis-dome.jpg", photoLabel:"Domed Central Plaza",
    desc:"A vertical city built beneath the aurora domes — sky-bridges between residential spires, a night market lit entirely by ionized auroral glow." },
  { id:"c-tharsis",  category:"city", region:"tharsis", name:"Tharsis Colony Township",
    tags:["Colony","Agricultural","Authentic"], price:"¤88K surface package", photo:"images/agricultural-colony.jpg", photoLabel:"Greenhouse Rings",
    desc:"Mars' first agricultural colony, its greenhouse rings now doubling as public squares. The most authentic look at everyday Martian settler life." },

  // Sightseeing
  { id:"s-olympus",  category:"sightseeing", region:"olympus", name:"Olympus Mons Summit Overlook",
    tags:["Panoramic","Once-in-a-lifetime"], price:"¤75K excursion",
    photos:[
      { url:"images/olympus-blue-sunrise.jpg", label:"Blue-Light Summit Sunrise" },
      { url:"images/olympus-everest-comparison.jpg", label:"Olympus Mons vs. Everest" },
    ],
    desc:"A glass observation deck at the caldera rim of the tallest volcano in the Solar System — twice the height of Everest, visible curvature of the planet below." },
  { id:"s-valles",   category:"sightseeing", region:"valles", name:"Valles Marineris Canyon Rim",
    tags:["Scenic","Photography"], price:"¤68K excursion", photo:"images/valles-overlook.jpg", photoLabel:"Canyon Rim Overlook",
    desc:"A canyon system ten times the length of the Grand Canyon. Guided hover-tram routes trace the rim at sunrise, when the rock face turns full crimson." },
  { id:"s-coprates", category:"sightseeing", region:"valles", name:"Coprates Chasma Dune Descent",
    tags:["Scenic","Sunrise","Dunes"], price:"¤58K excursion", photo:"images/coprates-dune-descent.jpg", photoLabel:"Dune Rim at Sunrise",
    desc:"A guided descent along wind-sculpted dunes into Coprates Chasma, the deepest reach of the Valles system, timed to catch the canyon haze igniting gold at first light." },
  { id:"s-medusae",  category:"sightseeing", region:"tharsis", name:"Medusae Fossae Wind Sculptures",
    tags:["Geology","Rare"], price:"¤52K excursion", photo:"images/hellas-dunes.jpg", photoLabel:"Wind-Sculpted Dunes",
    desc:"Billion-year-old wind-carved formations spanning an area the size of India. Low-altitude hover tours reveal patterns invisible from the ground." },
  { id:"s-moonrise", category:"sightseeing", region:"tharsis", name:"Twin Moons Ridge Vigil",
    tags:["Solitude","Night Sky"], price:"¤45K excursion", photo:"images/moonrise-vantage.jpg", photoLabel:"Moonrise Vantage",
    desc:"A silent overnight trek to a remote ridge, timed to the exact minute Phobos breaches the horizon — no dome, no glass, just the suit and the rising moon." },
  { id:"s-aurorafields", category:"sightseeing", region:"arcadia", name:"Arcadia Aurora Fields",
    tags:["Night Sky","Rare"], price:"¤60K excursion", photo:"images/utopia-ice-gardens.jpg", photoLabel:"Aurora-Lit Garden Dome",
    desc:"Nightly auroras ignited by Mars' patchwork magnetosphere — a light show found nowhere else in the Solar System, best viewed from silent open-dome decks." },
  { id:"s-gale", category:"sightseeing", region:"arcadia", name:"Gale Crater Earthrise Overlook",
    tags:["Rare","Night Sky","Geology"], price:"¤72K excursion", photo:"images/gale-crater-earthrise.jpg", photoLabel:"Crater Rim at Earthrise",
    desc:"A mineral-ringed crater lit by luminous survey markers, timed for the rare night each season when Earth rises bright enough over the rim to cast a shadow." },
  { id:"s-phoboswalk", category:"sightseeing", region:"phobos", name:"Phobos Transit Skywalk",
    tags:["Orbital","Zero-G"], price:"¤130K excursion",
    desc:"A glass skywalk anchored to Mars' largest moon, delivering an unobstructed full-disc view of the planet turning silently below your feet." },

  // Hotels & Resorts
  { id:"h-valles",   category:"hotel", region:"valles", name:"Valles Marineris Cliff Resort",
    tags:["Cliffside","Romantic"], price:"¤140K surface package", photo:"images/cliffside-villas.jpg", photoLabel:"Cliffside Suites at Dusk",
    desc:"Suites cantilevered directly into the canyon wall. Cliffside dining pods and a sunrise light show across 4,000km of rust-red rock." },
  { id:"h-olympus",  category:"hotel", region:"olympus", name:"Olympus Skyport Hotel & Spa",
    tags:["Adventure Base","Spa"], price:"¤180K surface package", photo:"images/olympus-basecamp.jpg", photoLabel:"Skyport Exterior",
    desc:"A glass-spined skyport hotel clinging to the shoulder of Olympus Mons, with a Champagne dome at the caldera rim and a low-gravity recovery spa." },
  { id:"h-arcadia",  category:"hotel", region:"arcadia", name:"Arcadia Aurora Domes Resort",
    tags:["Nature","Wellness"], price:"¤160K surface package", photo:"images/gusev-springs.jpg", photoLabel:"Thermal Bio-Pools",
    desc:"Northern-latitude thermal bio-pools beneath the aurora domes, paired with silent-sky stargazing suites for the clearest nights on the planet." },
  { id:"h-phobos",   category:"hotel", region:"phobos", name:"Phobos Orbital Sanctuary Hotel",
    tags:["Orbital","Exclusive"], price:"¤220K orbital package",
    desc:"A private ring-station hotel orbiting Phobos, with a zero-gravity spa and glass-floor Mars-viewing suites. The shortest transit hop of any territory." },
  { id:"h-elysium",  category:"hotel", region:"elysium", name:"Crimson Sands Grand Hotel",
    tags:["City Center","Five-Star"], price:"¤115K surface package", photo:"images/eco-resort-domes.jpg", photoLabel:"Garden Suite Domes",
    desc:"A five-star flagship hotel at the heart of Elysium Dome Metropolis, steps from the museum district and the city's zero-g ballroom district." },

  // VIP Experiences
  { id:"v-rover",    category:"vip", region:"valles", name:"Private AI-Guided Rover Expedition",
    tags:["Private","AI-Narrated"], price:"¤210K per party", photo:"images/noctis-tour.jpg", photoLabel:"Canyon Rover Approach",
    desc:"A solo pressurized rover convoy through the Valles canyon system, narrated in real time by your personal ARIA instance — no other travellers, no fixed route." },
  { id:"v-gala",     category:"vip", region:"phobos", name:"Phobos Zero-G Gala",
    tags:["By Invitation","Nightlife"], price:"¤95K per traveller",
    desc:"An invitation-only zero-gravity ballroom event aboard the Phobos Orbital Sanctuary — full orchestra, magnetic-soled formalwear, Mars filling the window." },
  { id:"v-villa",    category:"vip", region:"olympus", name:"Sovereign Crater Villa Private Stay",
    tags:["Private Villa","Full Staff"], price:"¤340K per party", photo:"images/crater-villa.jpg", photoLabel:"Private Crater Residence",
    desc:"A fully staffed private villa built into a shielded crater near Olympus Mons — personal chef, physician, and dedicated AI concierge for your stay alone." },
  { id:"v-flyby",    category:"vip", region:"phobos", name:"Antimatter Yacht Moon Flyby",
    tags:["Nova Ascendant","Exclusive"], price:"¤450K per party",
    desc:"A chartered flyby of both Martian moons aboard the Nova Ascendant flagship, with a private viewing deck and champagne service in microgravity." },
];

const CATEGORY_LABEL = { city:"City", sightseeing:"Sightseeing", hotel:"Hotel & Resort", vip:"VIP Experience" };

const TIERS = {
  pioneer:  { craft:"aurora", accommodation:"standard",  destination:"elysium" },
  diplomat: { craft:"zephyr", accommodation:"panoramic",  destination:"valles"  },
  sovereign:{ craft:"nova",   accommodation:"sovereign",  destination:"olympus" },
};

const state = {
  destination: "olympus",
  craft: "zephyr",
  travellers: 2,
  accommodation: "panoramic",
  accommodationMult: 2.2,
  stay: 10,
  activities: [],
};

const fmtMoney = n => "¤" + Math.round(n).toLocaleString("en-US");
let activeManifestId = null;

/* ============ LOADER ============ */

window.addEventListener("load", () => {
  const bar = document.getElementById("loaderProgress");
  const label = document.getElementById("loaderText");
  const phases = ["INITIALIZING NEURAL UPLINK", "CALIBRATING ORBITAL TELEMETRY", "SYNCING ARIA ADVISORY CORE", "LAUNCH SEQUENCE READY"];
  let pct = 0, phase = 0;
  const tick = setInterval(() => {
    pct += Math.random() * 18 + 6;
    if (pct > 100) pct = 100;
    bar.style.width = pct + "%";
    const nextPhase = Math.min(phases.length - 1, Math.floor((pct / 100) * phases.length));
    if (nextPhase !== phase) { phase = nextPhase; label.textContent = phases[phase]; }
    if (pct >= 100) {
      clearInterval(tick);
      setTimeout(() => document.getElementById("loader").classList.add("hidden"), 300);
    }
  }, 180);
});

/* ============ STARFIELD ============ */

(function starfield() {
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");
  let w, h, stars;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.floor((w * h) / 6000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.3 + 0.2,
      tw: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.015 + 0.005,
    }));
  }
  window.addEventListener("resize", resize);
  resize();

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      s.tw += s.speed;
      const alpha = 0.4 + Math.sin(s.tw) * 0.35;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,225,255,${Math.max(0, alpha)})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ============ HUD LIVE STATS ============ */

let currentEarthMarsDistanceKm = 225_000_000;

function formatSignalDelay(distanceKm) {
  const seconds = distanceKm / 299792.458;
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60);
  return `${mins} min ${secs}s`;
}

function updateHudStats() {
  const now = Date.now();
  const jd = now / 86400000 + 2440587.5;
  const msd = (jd - 2451549.5) / 1.0274912517 + 44796.0 - 0.0009626;
  const sol = Math.floor(msd);
  const marsFraction = msd - Math.floor(msd);
  const mh = Math.floor(marsFraction * 24);
  const mm = Math.floor((marsFraction * 24 * 60) % 60);
  document.getElementById("marsSol").textContent = sol.toLocaleString();
  document.getElementById("marsTime").textContent =
    String(mh).padStart(2, "0") + ":" + String(mm).padStart(2, "0");

  const synodicDays = 779.94;
  const cyclePos = ((now / 86400000) % synodicDays) / synodicDays;
  const distanceKm = 56_000_000 + (401_000_000 - 56_000_000) * (0.5 - 0.5 * Math.cos(cyclePos * Math.PI * 2));
  document.getElementById("marsDistance").textContent = (distanceKm / 1_000_000).toFixed(1) + "M km";
  currentEarthMarsDistanceKm = distanceKm;

  const terraDelay = document.getElementById("terraDelay");
  if (terraDelay) terraDelay.innerHTML = `Signal delay from Earth: <strong>${formatSignalDelay(distanceKm)}</strong> one-way (light-speed relay)`;
}
updateHudStats();
setInterval(updateHudStats, 1000);

/* ============ NAV / SCROLL ============ */

document.getElementById("ctaPlan").addEventListener("click", () =>
  document.getElementById("planner").scrollIntoView({ behavior: "smooth" }));
document.getElementById("scrollCue").addEventListener("click", () =>
  document.getElementById("destinations").scrollIntoView({ behavior: "smooth" }));

document.getElementById("hudBurger").addEventListener("click", () => {
  document.getElementById("hudLinks").classList.toggle("open");
});
document.querySelectorAll(".hud-links a").forEach(a =>
  a.addEventListener("click", () => document.getElementById("hudLinks").classList.remove("open")));

/* ============ HERO PARALLAX ============ */

const heroMars = document.getElementById("heroMars");
const heroMarsSphere = heroMars.querySelector(".mars-sphere");
document.getElementById("hero").addEventListener("mousemove", (e) => {
  const rx = e.clientX / window.innerWidth - 0.5;
  const ry = e.clientY / window.innerHeight - 0.5;
  const x = rx * 24;
  const y = ry * 24;
  heroMars.style.transform = `translate(${x}px, calc(-50% + ${y}px))`;
  heroMarsSphere.style.transform = `rotateY(${rx * 26}deg) rotateX(${-ry * 26}deg)`;
});
document.getElementById("hero").addEventListener("mouseleave", () => {
  heroMarsSphere.style.transform = "rotateY(0deg) rotateX(0deg)";
});

/* ============ MARS MAP + DESTINATIONS ============ */

const destPanel = document.getElementById("destPanel");
const destGrid = document.getElementById("destGrid");
const plannerDestSelect = document.getElementById("plannerDestination");

function planFromRegion(regionId) {
  state.destination = regionId;
  plannerDestSelect.value = regionId;
  document.getElementById("planner").scrollIntoView({ behavior: "smooth" });
  recalcAll();
}

function highlightRegion(regionId) {
  document.querySelectorAll(".hotspot").forEach(h => h.classList.toggle("active", h.dataset.dest === regionId));
}

function renderRegionPanel(id) {
  const d = DESTINATIONS[id];
  const banner = regionBanner(id, d.name);
  destPanel.innerHTML = `
    <div class="panel-banner" style="background-image:url('${banner.url}')"><span class="holo-scan"></span></div>
    <div class="tag-row">${d.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    <h3>${d.name}</h3>
    <span class="price">${d.price}</span>
    <p>${d.desc}</p>
    <button class="btn btn-primary" data-plan="${id}">Plan a Journey Here →</button>
  `;
  destPanel.querySelector("[data-plan]").addEventListener("click", () => planFromRegion(id));
}

function renderItemPanel(item) {
  const region = DESTINATIONS[item.region];
  const gallery = galleryFor(item);
  destPanel.innerHTML = `
    <div class="panel-banner" style="background-image:url('${gallery[0].url}')"><span class="holo-scan"></span></div>
    <div class="tag-row"><span class="tag">${CATEGORY_LABEL[item.category]}</span>${item.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    <h3>${item.name}</h3>
    <span class="price">${item.price}</span>
    <p>${item.desc}</p>
    <p style="font-size:.8rem">Located in <button class="panel-region-link" data-region="${item.region}">${region.name} →</button></p>
    <button class="btn btn-primary" data-plan="${item.region}">Plan a Journey Here →</button>
  `;
  destPanel.querySelector("[data-plan]").addEventListener("click", () => planFromRegion(item.region));
  destPanel.querySelector("[data-region]").addEventListener("click", () => {
    highlightRegion(item.region);
    renderRegionPanel(item.region);
  });
}

function setActiveDest(id) {
  highlightRegion(id);
  document.querySelectorAll(".dest-card").forEach(c => c.classList.remove("active"));
  renderRegionPanel(id);
}

document.querySelectorAll(".hotspot").forEach(h =>
  h.addEventListener("click", () => setActiveDest(h.dataset.dest)));

/* ---------- holo-rendered preview imagery ----------
   No external photo assets (nothing to hotlink, nothing that can 404 or mismatch the
   scene). Each tile is a small procedurally-painted canvas scene, seeded so the same
   item + label always renders the same image, cached so it's only ever drawn once. */

function hashStr(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function sceneKindFromLabel(label) {
  const l = label.toLowerCase();
  if (/(interior|suite|dining|detail|setting)/.test(l)) return "interior";
  if (/(night|market|gala|access|moment)/.test(l)) return "night";
  return "landscape";
}

function drawLandscape(ctx, w, h, rand, orbital) {
  const sky = ctx.createLinearGradient(0, 0, 0, h);
  if (orbital) { sky.addColorStop(0, "#040810"); sky.addColorStop(1, "#152544"); }
  else { sky.addColorStop(0, "#3a1004"); sky.addColorStop(0.55, "#a8461f"); sky.addColorStop(1, "#e08a4c"); }
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h);

  if (orbital) {
    for (let i = 0; i < 70; i++) {
      const x = rand() * w, y = rand() * h * 0.75, r = rand() * 1.4;
      ctx.fillStyle = `rgba(255,255,255,${0.3 + rand() * 0.5})`;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
    const pr = w * 0.55;
    const pg = ctx.createRadialGradient(w * 0.72, h * 1.15, pr * 0.2, w * 0.72, h * 1.15, pr);
    pg.addColorStop(0, "#c9663a"); pg.addColorStop(1, "#3a160b");
    ctx.fillStyle = pg;
    ctx.beginPath(); ctx.arc(w * 0.72, h * 1.15, pr, 0, Math.PI * 2); ctx.fill();
  } else {
    const sun = ctx.createRadialGradient(w * 0.78, h * 0.28, 4, w * 0.78, h * 0.28, 60);
    sun.addColorStop(0, "rgba(255,220,180,.9)"); sun.addColorStop(1, "rgba(255,220,180,0)");
    ctx.fillStyle = sun; ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "#2a1006";
    ctx.beginPath(); ctx.moveTo(0, h);
    let x = 0;
    while (x < w) {
      ctx.lineTo(x, h * (0.5 + rand() * 0.28));
      x += 20 + rand() * 40;
    }
    ctx.lineTo(w, h * 0.7); ctx.lineTo(w, h); ctx.closePath(); ctx.fill();
  }
}

function drawInterior(ctx, w, h, rand, orbital) {
  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, "#1a1030"); bg.addColorStop(1, "#4a2210");
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);

  for (let i = 0; i < 3; i++) {
    const x = w * (0.2 + i * 0.3 + rand() * 0.1), y = h * (0.3 + rand() * 0.3);
    const glow = ctx.createRadialGradient(x, y, 4, x, y, 70);
    glow.addColorStop(0, "rgba(255,180,110,.55)"); glow.addColorStop(1, "rgba(255,180,110,0)");
    ctx.fillStyle = glow;
    ctx.beginPath(); ctx.arc(x, y, 70, 0, Math.PI * 2); ctx.fill();
  }

  const wx = w * 0.68, wy = h * 0.18, ww = w * 0.26, wh = h * 0.4;
  const winGrad = ctx.createLinearGradient(wx, wy, wx, wy + wh);
  if (orbital) { winGrad.addColorStop(0, "#050912"); winGrad.addColorStop(1, "#16233f"); }
  else { winGrad.addColorStop(0, "#7a3319"); winGrad.addColorStop(1, "#2a0f08"); }
  ctx.fillStyle = winGrad;
  ctx.fillRect(wx, wy, ww, wh);

  ctx.fillStyle = "rgba(0,0,0,.35)";
  ctx.fillRect(0, h * 0.82, w, h * 0.18);
}

function drawNight(ctx, w, h, rand) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, "#04050c"); bg.addColorStop(1, "#12102a");
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);

  for (let i = 0; i < 90; i++) {
    const x = rand() * w, y = rand() * h * 0.8, r = rand() * 1.3;
    ctx.fillStyle = `rgba(255,255,255,${0.25 + rand() * 0.6})`;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }

  for (let band = 0; band < 2; band++) {
    ctx.beginPath();
    const y0 = h * (0.3 + band * 0.15 + rand() * 0.1);
    ctx.moveTo(0, y0);
    ctx.bezierCurveTo(w * 0.3, y0 - 40 - rand() * 20, w * 0.6, y0 + 40 + rand() * 20, w, y0 - 10);
    const grad = ctx.createLinearGradient(0, 0, w, 0);
    grad.addColorStop(0, band === 0 ? "rgba(92,241,255,.5)" : "rgba(200,107,255,.45)");
    grad.addColorStop(1, band === 0 ? "rgba(200,107,255,.35)" : "rgba(255,138,77,.35)");
    ctx.strokeStyle = grad; ctx.lineWidth = 18;
    ctx.stroke();
  }
}

const sceneCache = new Map();

function makeSceneDataURL(seedKey, kind, orbital) {
  const cacheKey = seedKey + "::" + kind + "::" + orbital;
  if (sceneCache.has(cacheKey)) return sceneCache.get(cacheKey);

  const w = 320, h = 220;
  const canvas = document.createElement("canvas");
  canvas.width = w; canvas.height = h;
  const ctx = canvas.getContext("2d");
  const rand = mulberry32(hashStr(cacheKey));

  if (kind === "interior") drawInterior(ctx, w, h, rand, orbital);
  else if (kind === "night") drawNight(ctx, w, h, rand);
  else drawLandscape(ctx, w, h, rand, orbital);

  const url = canvas.toDataURL("image/png");
  sceneCache.set(cacheKey, url);
  return url;
}

const GALLERY_TEMPLATES = {
  city: ["Skyline at Dusk", "Central Plaza", "Transit Spires", "Night Market"],
  sightseeing: ["Aerial Approach", "Ground-Level Vista", "Guided Tour Route", "Sunset Overlook"],
  hotel: ["Exterior View", "Suite Interior", "Panoramic Suite View", "Dining & Amenities"],
  vip: ["Signature Moment", "Private Setting", "Guest Detail", "Exclusive Access"],
};

function galleryFor(item) {
  const orbital = item.region === "phobos";
  const realPhotos = item.photos || (item.photo ? [{ url: item.photo, label: item.photoLabel }] : []);
  return GALLERY_TEMPLATES[item.category].map((label, i) => {
    if (realPhotos[i]) return { label: realPhotos[i].label || label, url: realPhotos[i].url };
    return { label, url: makeSceneDataURL(item.id + "::" + label + i, sceneKindFromLabel(label), orbital) };
  });
}

function regionBanner(regionId, label) {
  const orbital = regionId === "phobos";
  return { label, url: makeSceneDataURL("region::" + regionId, "landscape", orbital) };
}

function holoTile({ label, url }, size = "sm") {
  return `<div class="holo-tile ${size}" style="background-image:url('${url}')"><span class="holo-scan"></span><span class="holo-label">${label}</span></div>`;
}

/* ---------- hotel hover preview flyout ---------- */

const hoverPreview = document.getElementById("hoverPreview");

function showHoverPreview(item, anchorRect) {
  hoverPreview.innerHTML = `
    <p class="hp-title">${item.name}</p>
    <div class="hp-grid">${galleryFor(item).slice(0, 3).map(g => holoTile(g, "xs")).join("")}</div>
    <p class="hp-hint">Holo-rendered preview · click to view full details</p>
  `;
  hoverPreview.classList.add("show");
  const width = 230;
  const left = Math.min(anchorRect.left, window.innerWidth - width - 16);
  const top = Math.max(8, anchorRect.top - hoverPreview.offsetHeight - 12);
  hoverPreview.style.left = left + "px";
  hoverPreview.style.top = top + "px";
}
function hideHoverPreview() {
  hoverPreview.classList.remove("show");
}

/* ---------- catalog cards ---------- */

CATALOG.forEach(item => {
  const region = DESTINATIONS[item.region];
  const gallery = galleryFor(item);
  const card = document.createElement("div");
  card.className = "dest-card";
  card.dataset.item = item.id;
  card.dataset.category = item.category;
  card.innerHTML = `
    <div class="holo-tile thumb" style="background-image:url('${gallery[0].url}')"><span class="holo-scan"></span><span class="holo-label">${gallery[0].label}</span></div>
    <div class="dest-card-top">
      <h4>${item.name}</h4>
      <span class="cat-badge ${item.category}">${CATEGORY_LABEL[item.category]}</span>
    </div>
    <p class="dest-region">${region.name}</p>
    <p>${item.tags.join(" · ")}</p>
    <button class="card-view-link" data-view="${item.id}">View Details →</button>
  `;
  card.addEventListener("click", () => {
    document.querySelectorAll(".dest-card").forEach(c => c.classList.toggle("active", c === card));
    highlightRegion(item.region);
    renderItemPanel(item);
    destPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
  card.querySelector(".card-view-link").addEventListener("click", (e) => {
    e.stopPropagation();
    navigateToDetail(item.id);
  });
  if (item.category === "hotel") {
    card.addEventListener("mouseenter", () => showHoverPreview(item, card.getBoundingClientRect()));
    card.addEventListener("mouseleave", hideHoverPreview);
  }
  destGrid.appendChild(card);
});

Object.entries(DESTINATIONS).forEach(([id, d]) => {
  const opt = document.createElement("option");
  opt.value = id;
  opt.textContent = d.name;
  plannerDestSelect.appendChild(opt);
});

document.querySelectorAll(".catalog-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".catalog-tab").forEach(t => t.classList.toggle("active", t === tab));
    const filter = tab.dataset.filter;
    document.querySelectorAll(".dest-card").forEach(card => {
      card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

plannerDestSelect.value = state.destination;
setActiveDest(state.destination);

/* ============ LUXURY TIER SELECT ============ */

document.querySelectorAll(".tier-select").forEach(btn => {
  btn.addEventListener("click", () => {
    const tier = TIERS[btn.dataset.tier];
    state.craft = tier.craft;
    state.accommodation = tier.accommodation;
    state.destination = tier.destination;
    plannerDestSelect.value = tier.destination;
    document.getElementById("accommodation").value = tier.accommodation;
    setActiveDest(tier.destination);
    goToStep(2);
    document.getElementById("planner").scrollIntoView({ behavior: "smooth" });
    renderCraftGrid();
    recalcAll();
  });
});

/* ============ PLANNER WIZARD ============ */

const steps = document.querySelectorAll("#plannerSteps li");
const panels = document.querySelectorAll(".planner-panel");

function goToStep(n) {
  steps.forEach(s => {
    const num = Number(s.dataset.step);
    s.classList.toggle("active", num === n);
    s.classList.toggle("done", num < n);
  });
  panels.forEach(p => p.classList.toggle("active", Number(p.dataset.panel) === n));
}

document.querySelectorAll(".planner-next").forEach(btn =>
  btn.addEventListener("click", () => {
    const current = Number(btn.closest(".planner-panel").dataset.panel);
    goToStep(Math.min(4, current + 1));
    if (current + 1 === 4) buildSummary();
  }));
document.querySelectorAll(".planner-back").forEach(btn =>
  btn.addEventListener("click", () => {
    const current = Number(btn.closest(".planner-panel").dataset.panel);
    goToStep(Math.max(1, current - 1));
  }));

document.getElementById("departure").addEventListener("change", recalcAll);
plannerDestSelect.addEventListener("change", () => {
  state.destination = plannerDestSelect.value;
  setActiveDest(state.destination);
  recalcAll();
});
document.getElementById("travellers").addEventListener("input", (e) => {
  state.travellers = Math.max(1, Number(e.target.value) || 1);
  recalcAll();
});
document.getElementById("accommodation").addEventListener("change", (e) => {
  state.accommodation = e.target.value;
  state.accommodationMult = Number(e.target.selectedOptions[0].dataset.mult);
  recalcAll();
});
document.getElementById("stayLength").addEventListener("change", (e) => {
  state.stay = Number(e.target.value);
  recalcAll();
});

const craftGrid = document.getElementById("craftGrid");
function renderCraftGrid() {
  craftGrid.innerHTML = "";
  SPACECRAFT.forEach(c => {
    const card = document.createElement("div");
    card.className = "craft-card" + (c.id === state.craft ? " selected" : "");
    card.dataset.craft = c.id;
    card.innerHTML = `
      <h4>${c.name}</h4>
      <p class="craft-price">${fmtMoney(c.cost)} / traveller · ${c.days} sols transit</p>
      <p>${c.desc}</p>
      <div class="craft-bar-row"><span>Speed</span><div class="craft-bar"><span style="width:${c.bars.speed}%"></span></div></div>
      <div class="craft-bar-row"><span>Luxury</span><div class="craft-bar"><span style="width:${c.bars.luxury}%"></span></div></div>
      <div class="craft-bar-row"><span>Safety</span><div class="craft-bar"><span style="width:${c.bars.safety}%"></span></div></div>
    `;
    card.addEventListener("click", () => {
      state.craft = c.id;
      renderCraftGrid();
      recalcAll();
    });
    craftGrid.appendChild(card);
  });
}
renderCraftGrid();

const activityGrid = document.getElementById("activityGrid");
ACTIVITIES.forEach(a => {
  const label = document.createElement("label");
  label.className = "activity-item";
  label.innerHTML = `
    <input type="checkbox" value="${a.id}">
    <span>${a.name}<span class="a-price">${fmtMoney(a.cost)} / traveller</span></span>
  `;
  label.querySelector("input").addEventListener("change", (e) => {
    if (e.target.checked) state.activities.push(a.id);
    else state.activities = state.activities.filter(id => id !== a.id);
    recalcAll();
  });
  activityGrid.appendChild(label);
});

function computeCost() {
  const craft = SPACECRAFT.find(c => c.id === state.craft);
  const baseStayCost = 8000; // per sol, before accommodation multiplier
  const accommodationCost = baseStayCost * state.stay * state.accommodationMult;
  const activitiesCost = state.activities.reduce((sum, id) => sum + ACTIVITIES.find(a => a.id === id).cost, 0);
  const perTraveller = craft.cost + accommodationCost + activitiesCost;
  const total = perTraveller * state.travellers;
  const duration = craft.days * 2 + state.stay; // round trip transit + surface stay
  return { craft, accommodationCost, activitiesCost, perTraveller, total, duration };
}

function buildSummary() {
  const { craft, accommodationCost, activitiesCost, total, duration } = computeCost();
  const dest = DESTINATIONS[state.destination];
  const lines = document.getElementById("summaryLines");
  lines.innerHTML = `
    <div><span>Destination</span><strong>${dest.name}</strong></div>
    <div><span>Spacecraft</span><strong>${craft.name}</strong></div>
    <div><span>Travellers</span><strong>${state.travellers}</strong></div>
    <div><span>Accommodation</span><strong>${fmtMoney(accommodationCost)} total</strong></div>
    <div><span>Activities</span><strong>${state.activities.length ? fmtMoney(activitiesCost) + " total" : "None selected"}</strong></div>
    <div><span>Mission Duration</span><strong>${duration} sols (transit + stay)</strong></div>
  `;
  document.getElementById("summaryTotal").textContent = fmtMoney(total);
  updateRisk();
}

document.getElementById("confirmBooking").addEventListener("click", () => {
  const { craft, total, duration } = computeCost();
  const dest = DESTINATIONS[state.destination];
  const name = document.getElementById("travellerName").value.trim() || "Guest Traveller";
  const id = "AV-" + Math.random().toString(36).slice(2, 6).toUpperCase() + "-" + Math.floor(Math.random() * 9000 + 1000);
  document.getElementById("bpId").textContent = id;
  document.getElementById("bpName").textContent = name;
  document.getElementById("bpCraft").textContent = craft.name;
  document.getElementById("bpDest").textContent = dest.name;
  document.getElementById("bpDuration").textContent = duration + " sols";
  document.getElementById("bpTotal").textContent = fmtMoney(total);
  document.getElementById("bpCode").textContent =
    Array.from({ length: 4 }, () => Math.random().toString(36).slice(2, 10).toUpperCase()).join(" ");
  const pass = document.getElementById("boardingPass");
  pass.classList.add("show");
  pass.scrollIntoView({ behavior: "smooth", block: "nearest" });
  activeManifestId = id;
  updateTracker();
});

function updateTracker() {
  const { craft, duration } = computeCost();
  const dest = DESTINATIONS[state.destination];
  const vesselEl = document.getElementById("trackerVessel");
  const statusEl = document.getElementById("trackerStatus");
  if (activeManifestId) {
    vesselEl.textContent = `${craft.name} — Manifest ${activeManifestId}`;
    statusEl.textContent = `Confirmed departure · ${duration}-sol transit to ${dest.name}`;
  } else {
    vesselEl.textContent = craft.name;
    statusEl.textContent = `Fleet preview · en route to ${dest.name} · est. ${duration} sols`;
  }
}

function recalcAll() {
  if (document.querySelector('.planner-panel[data-panel="4"]').classList.contains("active")) buildSummary();
  updateRisk();
  updateTracker();
}

/* ============ RISK DASHBOARD ============ */

const CIRC = 2 * Math.PI * 52;

function setGauge(el, pct, color) {
  const offset = CIRC - (Math.min(100, Math.max(0, pct)) / 100) * CIRC;
  el.style.strokeDashoffset = offset;
  el.style.stroke = color;
}

function updateRisk() {
  const { craft, duration } = computeCost();
  const shielding = { aurora: 1, zephyr: 0.72, nova: 0.4 }[craft.id];
  const radiationPct = Math.min(96, (duration / 260) * 60 * shielding + 8);
  const gravityPct = Math.min(95, (state.stay / 40) * 55 + 15);
  const season = ((Date.now() / 86400000) % 687) / 687;
  const stormPct = Math.round(18 + 45 * Math.pow(Math.sin(season * Math.PI * 2), 2));

  const colorFor = pct => pct > 70 ? "#ff5470" : pct > 40 ? "#ff8a4d" : "#5cffb0";

  setGauge(document.getElementById("gaugeRadiation"), radiationPct, colorFor(radiationPct));
  setGauge(document.getElementById("gaugeGravity"), gravityPct, colorFor(gravityPct));
  setGauge(document.getElementById("gaugeStorm"), stormPct, colorFor(stormPct));

  document.getElementById("radiationLabel").textContent =
    `${Math.round(radiationPct)}% of mission dosage limit — ${craft.name} shielding class ${craft.bars.safety}%`;
  document.getElementById("gravityLabel").textContent =
    `${Math.round(gravityPct)}% adaptation load over ${state.stay} sols on 0.38g`;
  document.getElementById("stormLabel").textContent =
    `${stormPct}% seasonal probability this transit window`;

  const mitigation = document.getElementById("mitigationList");
  mitigation.innerHTML = `
    <li>Radiation-shielded suites aboard ${craft.name}</li>
    <li>AI-monitored biosuite with real-time vitals</li>
    <li>Graduated gravity reconditioning program</li>
    <li>Automated storm-shelter dome lockdown protocol</li>
    <li>Dedicated physician on all Diplomat &amp; Sovereign charters</li>
  `;
}
updateRisk();

/* ============ DETAIL PAGE (hash-routed) ============ */

let currentDetailItem = null;

function getIdFromHash() {
  const m = location.hash.match(/^#experience\/(.+)$/);
  return m ? decodeURIComponent(m[1]) : null;
}

function navigateToDetail(id) {
  location.hash = "experience/" + id;
}

function showDetailUI(id) {
  const item = CATALOG.find(c => c.id === id);
  if (!item) return hideDetailUI();
  currentDetailItem = item;
  const region = DESTINATIONS[item.region];
  const gallery = galleryFor(item);

  const hero = document.getElementById("detailHero");
  hero.style.backgroundImage = `url('${gallery[0].url}')`;
  hero.innerHTML = `<span class="holo-scan"></span><span class="detail-hero-label">${gallery[0].label}</span>`;

  document.getElementById("detailTags").innerHTML =
    `<span class="tag">${CATEGORY_LABEL[item.category]}</span>` + item.tags.map(t => `<span class="tag">${t}</span>`).join("");
  document.getElementById("detailTitle").textContent = item.name;
  document.getElementById("detailRegionLine").textContent = `Located in ${region.name}`;
  document.getElementById("detailPrice").textContent = item.price;
  document.getElementById("detailDesc").textContent = item.desc;
  document.getElementById("detailGallery").innerHTML = gallery.map(g => holoTile(g, "lg")).join("");

  const dv = document.getElementById("detailView");
  dv.classList.add("open");
  dv.setAttribute("aria-hidden", "false");
  dv.scrollTop = 0;
  document.body.style.overflow = "hidden";
}

function hideDetailUI() {
  const dv = document.getElementById("detailView");
  dv.classList.remove("open");
  dv.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  currentDetailItem = null;
}

function closeDetail() {
  if (getIdFromHash()) history.replaceState(null, "", location.pathname + location.search);
  hideDetailUI();
}

function syncDetailFromHash() {
  const id = getIdFromHash();
  if (id) showDetailUI(id); else hideDetailUI();
}

window.addEventListener("hashchange", syncDetailFromHash);
document.getElementById("detailBack").addEventListener("click", closeDetail);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && document.getElementById("detailView").classList.contains("open")) closeDetail();
});
document.getElementById("detailPlan").addEventListener("click", () => {
  if (!currentDetailItem) return;
  const region = currentDetailItem.region;
  closeDetail();
  planFromRegion(region);
});
document.getElementById("detailViewMap").addEventListener("click", () => {
  if (!currentDetailItem) return;
  const region = currentDetailItem.region;
  closeDetail();
  setActiveDest(region);
  document.getElementById("marsMap").scrollIntoView({ behavior: "smooth", block: "center" });
});

syncDetailFromHash();

/* ============ STATIC PAGES (About / Contact, hash-routed) ============ */

const STATIC_PAGES = ["about", "contact"];

function openStaticPage(name) {
  STATIC_PAGES.forEach(n => {
    const el = document.getElementById(n + "View");
    const isTarget = n === name;
    el.classList.toggle("open", isTarget);
    el.setAttribute("aria-hidden", isTarget ? "false" : "true");
    if (isTarget) el.scrollTop = 0;
  });
  document.body.style.overflow = "hidden";
  if (name === "contact") document.getElementById("contactSuccess").classList.remove("show");
}

function closeStaticPages() {
  STATIC_PAGES.forEach(n => {
    const el = document.getElementById(n + "View");
    el.classList.remove("open");
    el.setAttribute("aria-hidden", "true");
  });
  document.body.style.overflow = "";
}

function exitStaticPage() {
  if (location.hash === "#about" || location.hash === "#contact") {
    history.replaceState(null, "", location.pathname + location.search);
  }
  closeStaticPages();
}

function syncStaticPageFromHash() {
  if (location.hash === "#about") return openStaticPage("about");
  if (location.hash === "#contact") return openStaticPage("contact");
  closeStaticPages();
}

window.addEventListener("hashchange", syncStaticPageFromHash);
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (document.getElementById("aboutView").classList.contains("open") || document.getElementById("contactView").classList.contains("open")) {
    exitStaticPage();
  }
});
document.getElementById("aboutBack").addEventListener("click", exitStaticPage);
document.getElementById("contactBack").addEventListener("click", exitStaticPage);

const PEOPLE = [
  { name: "Capt. Elena Voss", role: "Founder & Chief Pilot", initials: "EV" },
  { name: "Dr. Kian Osei", role: "Chief Terraforming Officer", initials: "KO" },
  { name: "Naledi Chen", role: "Head of Guest Experience", initials: "NC" },
  { name: "ARIA & TERRA", role: "AI Systems Directors", initials: "AI" },
];

function avatarGradient(seed) {
  const h1 = seed % 360, h2 = (seed * 7 + 120) % 360;
  return `linear-gradient(135deg, hsl(${h1}deg 70% 45%), hsl(${h2}deg 60% 30%))`;
}

const peopleGrid = document.getElementById("peopleGrid");
PEOPLE.forEach(p => {
  const card = document.createElement("div");
  card.className = "person-card";
  card.innerHTML = `<div class="person-avatar" style="background:${avatarGradient(hashStr(p.name))}">${p.initials}</div><h4>${p.name}</h4><p>${p.role}</p>`;
  peopleGrid.appendChild(card);
});

document.getElementById("aboutPlanBtn").addEventListener("click", () => {
  exitStaticPage();
  document.getElementById("planner").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactAriaBtn").addEventListener("click", () => {
  exitStaticPage();
  openAria();
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("contactSuccess").classList.add("show");
  e.target.reset();
});

syncStaticPageFromHash();

/* ============ ORBITAL VIEWING DECK ============ */

const ORBITAL_MODES = {
  sunrise: {
    label: "Sunrise Terminator",
    desc: "Dawn breaks across the Tharsis bulge as the station crosses the terminator — Mars' thin atmosphere scatters the light into a violet-gold band.",
  },
  night: {
    label: "Night-Side City Lights",
    desc: "The dark hemisphere reveals the glow of the domed territories below and a faint auroral curtain rippling near the pole.",
  },
  panorama: {
    label: "Full Planetary Panorama",
    desc: "The complete disc, Valles Marineris scored across its face and the northern ice cap catching starlight — the view every traveller requests first.",
  },
};

let orbitalMode = "sunrise";
const orbitalCanvas = document.getElementById("orbitalCanvas");
const orbitalCtx = orbitalCanvas.getContext("2d");
const ORBITAL_W = orbitalCanvas.width, ORBITAL_H = orbitalCanvas.height;

/* Pixel-level sampling (getImageData) would taint the canvas when the page is opened
   via file:// — the browser treats locally-loaded images as cross-origin in that case.
   So this renderer only ever draws (drawImage/fillRect), never reads pixels back,
   which works identically under file:// and a real server. The sphere is drawn as a
   single continuous 180°-wide slice of the equirect texture clipped to an ellipse —
   an earlier version sliced it into 140 thin strips instead, which showed visible
   seams between strips. Lighting is a smooth screen-space gradient overlay (fixed
   per mode, independent of rotation) rather than per-strip shading, so the terminator
   reads as a soft band instead of a staircase. Switching modes crossfades over time
   instead of cutting instantly. */

const STOPS = [0, 0.25, 0.5, 0.65, 1];
const MODE_STOPS = {
  sunrise:  [[2, 3, 8, 0.85], [2, 3, 8, 0.6], [255, 170, 90, 0.22], [2, 3, 8, 0.05], [2, 3, 8, 0]],
  night:    [[2, 3, 8, 0.88], [2, 3, 8, 0.85], [2, 3, 8, 0.8], [2, 3, 8, 0.82], [2, 3, 8, 0.85]],
  panorama: [[2, 3, 8, 0.12], [2, 3, 8, 0.04], [2, 3, 8, 0], [2, 3, 8, 0.04], [2, 3, 8, 0.14]],
};
const NIGHT_ALPHA = { sunrise: 0.35, night: 0.95, panorama: 0.05 };
const RIM_COLOR = { sunrise: [255, 170, 90], night: [92, 200, 255], panorama: [120, 190, 255] };
const MODE_TRANSITION_MS = 700;

const ORBITAL_MARKERS = [
  { region: "olympus", lonDeg: 15,  latDeg: 20,  label: "Olympus Mons" },
  { region: "valles",  lonDeg: 80,  latDeg: -8,  label: "Valles Marineris" },
  { region: "elysium", lonDeg: 150, latDeg: 18,  label: "Elysium" },
  { region: "phobos",  lonDeg: 205, latDeg: 35,  label: "Phobos Sanctuary" },
  { region: "arcadia", lonDeg: 260, latDeg: -15, label: "Arcadia" },
  { region: "tharsis", lonDeg: 320, latDeg: 5,   label: "Tharsis" },
];
let orbitalMarkerHits = [];

function lerp(a, b, t) { return a + (b - a) * t; }

let texImage = null, texW = 0, texH = 0;
let nightImage = null;

function loadImageAsset(src, onReady) {
  const img = new Image();
  img.onload = () => onReady(img);
  img.onerror = () => console.warn("Orbital texture failed to load:", src);
  img.src = src;
}

let yaw = 0.6, tilt = -0.08;
let isDragging = false, autoRotate = true;
let lastPointer = { x: 0, y: 0 };
let texturesReady = false;
let prevOrbitalMode = "sunrise";
let modeTransitionStart = -99999;

function drawWrappedSlice(img, srcX0, srcW0, dx, dw, dy, dh) {
  const sx = ((srcX0 % texW) + texW) % texW;
  if (sx + srcW0 <= texW) {
    orbitalCtx.drawImage(img, sx, 0, srcW0, texH, dx, dy, dw, dh);
  } else {
    const firstW = texW - sx;
    const firstDw = dw * (firstW / srcW0);
    orbitalCtx.drawImage(img, sx, 0, firstW, texH, dx, dy, firstDw, dh);
    orbitalCtx.drawImage(img, 0, 0, srcW0 - firstW, texH, dx + firstDw, dy, dw - firstDw, dh);
  }
}

function renderOrbital3D() {
  if (!texturesReady) return;
  const w = ORBITAL_W, h = ORBITAL_H;

  orbitalCtx.fillStyle = "#020308";
  orbitalCtx.fillRect(0, 0, w, h);
  const starRand = mulberry32(hashStr("orbital-stars"));
  for (let i = 0; i < 180; i++) {
    const x = starRand() * w, y = starRand() * h, r = starRand() * 1.2;
    orbitalCtx.fillStyle = `rgba(255,255,255,${0.2 + starRand() * 0.6})`;
    orbitalCtx.beginPath(); orbitalCtx.arc(x, y, r, 0, Math.PI * 2); orbitalCtx.fill();
  }

  const cx = w * 0.5;
  const cy = h * 0.52 + tilt * h * 0.3;
  const R = h * 0.46;
  const ry = R * (1 - Math.abs(tilt) * 0.12);
  const blend = Math.min(1, (performance.now() - modeTransitionStart) / MODE_TRANSITION_MS);

  const yawDeg = ((yaw * 180 / Math.PI) % 360 + 360) % 360;
  const srcW0 = texW * 0.5;
  const srcX0 = ((yawDeg - 90) / 360) * texW;

  orbitalCtx.save();
  orbitalCtx.beginPath();
  orbitalCtx.ellipse(cx, cy, R, ry, 0, 0, Math.PI * 2);
  orbitalCtx.clip();

  drawWrappedSlice(texImage, srcX0, srcW0, cx - R, 2 * R, cy - ry, 2 * ry);

  const nightAlpha = lerp(NIGHT_ALPHA[prevOrbitalMode], NIGHT_ALPHA[orbitalMode], blend);
  orbitalCtx.globalAlpha = nightAlpha;
  orbitalCtx.globalCompositeOperation = "lighter";
  drawWrappedSlice(nightImage, srcX0, srcW0, cx - R, 2 * R, cy - ry, 2 * ry);
  orbitalCtx.globalAlpha = 1;
  orbitalCtx.globalCompositeOperation = "source-over";

  const grad = orbitalCtx.createLinearGradient(cx - R, 0, cx + R, 0);
  const fromStops = MODE_STOPS[prevOrbitalMode], toStops = MODE_STOPS[orbitalMode];
  STOPS.forEach((pos, i) => {
    const c0 = fromStops[i], c1 = toStops[i];
    const r = lerp(c0[0], c1[0], blend), g = lerp(c0[1], c1[1], blend), b = lerp(c0[2], c1[2], blend), a = lerp(c0[3], c1[3], blend);
    grad.addColorStop(pos, `rgba(${r | 0},${g | 0},${b | 0},${a.toFixed(3)})`);
  });
  orbitalCtx.fillStyle = grad;
  orbitalCtx.fillRect(cx - R, cy - ry, 2 * R, 2 * ry);

  orbitalCtx.restore();

  const rimFrom = RIM_COLOR[prevOrbitalMode], rimTo = RIM_COLOR[orbitalMode];
  const rim = [lerp(rimFrom[0], rimTo[0], blend), lerp(rimFrom[1], rimTo[1], blend), lerp(rimFrom[2], rimTo[2], blend)];
  orbitalCtx.save();
  orbitalCtx.shadowColor = `rgba(${rim[0] | 0},${rim[1] | 0},${rim[2] | 0},.9)`;
  orbitalCtx.shadowBlur = 14;
  orbitalCtx.strokeStyle = `rgba(${rim[0] | 0},${rim[1] | 0},${rim[2] | 0},.55)`;
  orbitalCtx.lineWidth = 2;
  orbitalCtx.beginPath();
  orbitalCtx.ellipse(cx, cy, R, ry, 0, 0, Math.PI * 2);
  orbitalCtx.stroke();
  orbitalCtx.restore();

  drawOrbitalMarkers(cx, cy, R, ry, yawDeg);

  document.getElementById("orbitalAngle").textContent = Math.round(yawDeg) + "°";
}

function drawOrbitalMarkers(cx, cy, R, ry, yawDeg) {
  orbitalMarkerHits = [];
  ORBITAL_MARKERS.forEach(m => {
    const diff = ((m.lonDeg - yawDeg + 540) % 360) - 180;
    if (Math.abs(diff) > 88) return;
    const t = diff / 90;
    const fade = Math.cos(t * Math.PI / 2);
    if (fade < 0.05) return;

    const x = cx + t * R;
    const v = (90 - m.latDeg) / 180;
    const y = (cy - ry) + v * (2 * ry);

    orbitalCtx.save();
    orbitalCtx.globalAlpha = fade;
    orbitalCtx.shadowColor = "rgba(92,241,255,.9)";
    orbitalCtx.shadowBlur = 8;
    orbitalCtx.fillStyle = "#5cf1ff";
    orbitalCtx.beginPath();
    orbitalCtx.arc(x, y, 4, 0, Math.PI * 2);
    orbitalCtx.fill();
    orbitalCtx.shadowBlur = 0;

    orbitalCtx.font = "600 11px Rajdhani, sans-serif";
    orbitalCtx.textAlign = "center";
    orbitalCtx.lineWidth = 3;
    orbitalCtx.strokeStyle = "rgba(2,3,8,.85)";
    orbitalCtx.strokeText(m.label, x, y - 10);
    orbitalCtx.fillStyle = "#dff6ff";
    orbitalCtx.fillText(m.label, x, y - 10);
    orbitalCtx.restore();

    orbitalMarkerHits.push({ region: m.region, x, y });
  });
}

function runOrbitalTransition() {
  renderOrbital3D();
  if (performance.now() - modeTransitionStart < MODE_TRANSITION_MS) requestAnimationFrame(runOrbitalTransition);
}

function updateOrbitalCaption() {
  document.getElementById("orbitalModeLabel").textContent = ORBITAL_MODES[orbitalMode].label;
  document.getElementById("orbitalModeDesc").textContent = ORBITAL_MODES[orbitalMode].desc;
}

document.querySelectorAll("#orbitalModes .mode-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.dataset.mode === orbitalMode) return;
    document.querySelectorAll("#orbitalModes .mode-btn").forEach(b => b.classList.toggle("active", b === btn));
    prevOrbitalMode = orbitalMode;
    orbitalMode = btn.dataset.mode;
    modeTransitionStart = performance.now();
    updateOrbitalCaption();
    runOrbitalTransition();
  });
});

const dragHint = document.getElementById("orbitalDragHint");
let orbitalDragMoved = 0;

function orbitalCanvasPoint(e) {
  const rect = orbitalCanvas.getBoundingClientRect();
  return {
    x: (e.clientX - rect.left) * (orbitalCanvas.width / rect.width),
    y: (e.clientY - rect.top) * (orbitalCanvas.height / rect.height),
  };
}
function hitOrbitalMarker(pt) {
  return orbitalMarkerHits.find(m => Math.hypot(m.x - pt.x, m.y - pt.y) < 14);
}

orbitalCanvas.addEventListener("pointerdown", (e) => {
  isDragging = true;
  autoRotate = false;
  orbitalDragMoved = 0;
  lastPointer = { x: e.clientX, y: e.clientY };
  orbitalCanvas.setPointerCapture(e.pointerId);
  dragHint.classList.add("hide");
});
orbitalCanvas.addEventListener("pointermove", (e) => {
  if (!isDragging) {
    const hit = hitOrbitalMarker(orbitalCanvasPoint(e));
    orbitalCanvas.style.cursor = hit ? "pointer" : "grab";
    return;
  }
  const dx = e.clientX - lastPointer.x, dy = e.clientY - lastPointer.y;
  orbitalDragMoved += Math.abs(dx) + Math.abs(dy);
  yaw += dx * 0.012;
  tilt = Math.max(-0.35, Math.min(0.35, tilt + dy * 0.004));
  lastPointer = { x: e.clientX, y: e.clientY };
  renderOrbital3D();
});
orbitalCanvas.addEventListener("pointerup", (e) => {
  isDragging = false;
  if (orbitalDragMoved < 6) {
    const hit = hitOrbitalMarker(orbitalCanvasPoint(e));
    if (hit) {
      setActiveDest(hit.region);
      document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
    }
  }
  setTimeout(() => { if (!isDragging) autoRotate = true; }, 3000);
});

let lastAutoRender = 0;
function orbitalAutoRotateLoop(ts) {
  if (autoRotate && !isDragging && texturesReady) {
    if (ts - lastAutoRender > 55) {
      yaw += 0.006;
      renderOrbital3D();
      lastAutoRender = ts;
    }
  }
  requestAnimationFrame(orbitalAutoRotateLoop);
}
requestAnimationFrame(orbitalAutoRotateLoop);

const ORBITAL_PERIOD_SEC = 220;
function updateOrbitalTimer() {
  const t = Date.now() / 1000;
  const remain = ORBITAL_PERIOD_SEC - (t % ORBITAL_PERIOD_SEC);
  const mm = Math.floor(remain / 60), ss = Math.floor(remain % 60);
  document.getElementById("orbitalTimer").textContent = `${mm}:${String(ss).padStart(2, "0")}`;
}
updateOrbitalTimer();
setInterval(updateOrbitalTimer, 1000);

document.getElementById("orbitalAddBtn").addEventListener("click", () => {
  if (!state.activities.includes("orbitview")) state.activities.push("orbitview");
  document.querySelectorAll(".activity-item input").forEach(cb => {
    if (cb.value === "orbitview") cb.checked = true;
  });
  goToStep(3);
  document.getElementById("planner").scrollIntoView({ behavior: "smooth" });
  recalcAll();
});

updateOrbitalCaption();
let texturesLoaded = 0;
function checkTexturesReady() {
  texturesLoaded++;
  if (texturesLoaded === 2) {
    texturesReady = true;
    renderOrbital3D();
  }
}
loadImageAsset("images/mars-equirect-texture.jpg", (img) => {
  texImage = img; texW = img.naturalWidth; texH = img.naturalHeight;
  checkTexturesReady();
});
loadImageAsset("images/mars-night-lights.jpg", (img) => {
  nightImage = img;
  checkTexturesReady();
});

/* ============ ARIA AI ASSISTANT ============ */

const ariaToggle = document.getElementById("ariaToggle");
const ariaPanel = document.getElementById("ariaPanel");
const ariaMessages = document.getElementById("ariaMessages");
const ariaForm = document.getElementById("ariaForm");
const ariaInput = document.getElementById("ariaInput");

function openAria() {
  ariaPanel.classList.add("open");
  ariaPanel.setAttribute("aria-hidden", "false");
  if (!ariaMessages.childElementCount) {
    addAriaMessage("bot", "Greetings, traveller. I'm ARIA, your interplanetary concierge. Tell me what kind of journey you're imagining — adventurous, relaxing, family-friendly — or ask me anything about risk, cost, or timing. I can also apply my recommendation straight to your planner.");
  }
}
ariaToggle.addEventListener("click", openAria);
document.getElementById("navAria").addEventListener("click", (e) => { e.preventDefault(); openAria(); });
document.getElementById("ctaAria").addEventListener("click", openAria);
document.getElementById("ariaClose").addEventListener("click", () => {
  ariaPanel.classList.remove("open");
  ariaPanel.setAttribute("aria-hidden", "true");
});

function addAriaMessage(who, html) {
  const div = document.createElement("div");
  div.className = "aria-msg " + who;
  div.innerHTML = html;
  ariaMessages.appendChild(div);
  ariaMessages.scrollTop = ariaMessages.scrollHeight;
  return div;
}

function showTyping() {
  const div = document.createElement("div");
  div.className = "aria-msg bot typing";
  div.innerHTML = "<span></span><span></span><span></span>";
  ariaMessages.appendChild(div);
  ariaMessages.scrollTop = ariaMessages.scrollHeight;
  return div;
}

/* Rule-based intent scoring engine — lightweight keyword NLP, not decorative */
const INTENTS = [
  { key: "adventure", words: ["adventure","adrenaline","extreme","thrill","climb","surf","explore","dust","dangerous","expedition"],
    destination: "olympus", craft: "zephyr", accommodation: "panoramic", activities: ["olympus","dust","canyon"],
    reply: (d,c) => `For adrenaline, I'd chart you to <strong>${d.name}</strong> aboard the <strong>${c.name}</strong> — fast enough to maximize surface time. I've queued the Summit Climb, Dust-Surfing, and Canyon Skydive.` },
  { key: "relax", words: ["relax","honeymoon","romantic","calm","peaceful","spa","quiet","wellness","couple"],
    destination: "arcadia", craft: "nova", accommodation: "sovereign", activities: ["stars","zerog"],
    reply: (d,c) => `A romantic pairing: <strong>${d.name}</strong> for the aurora skies, aboard the <strong>${c.name}</strong> for the smoothest possible crossing. I've added Stargazing Dinner and a Zero-G Yoga session.` },
  { key: "luxury", words: ["luxury","best","expensive","budget is not a problem","money no object","premium","sovereign","spare no expense","exclusive"],
    destination: "olympus", craft: "nova", accommodation: "sovereign", activities: ["olympus","stars","phobos"],
    reply: (d,c) => `Understood — nothing but the finest. <strong>${d.name}</strong>, the <strong>${c.name}</strong> flagship, and a Sovereign Crater Villa. I've layered in the Summit Climb, Stargazing Dinner, and a Phobos Zero-G Gala.` },
  { key: "family", words: ["family","kids","children","safe","safety first","parents","child"],
    destination: "elysium", craft: "aurora", accommodation: "panoramic", activities: ["stars"],
    reply: (d,c) => `For families I recommend <strong>${d.name}</strong> — the most walkable, medically-supported territory — aboard the well-shielded <strong>${c.name}</strong>. Kept the activity list gentle with a Stargazing Dinner.` },
  { key: "fast", words: ["fast","quick","short","soon","hurry","little time","brief"],
    destination: "phobos", craft: "nova", accommodation: "panoramic", activities: ["phobos"],
    reply: (d,c) => `Time-limited? <strong>${d.name}</strong> is the shortest hop from any transit lane, and the <strong>${c.name}</strong> cuts transit to just 45 sols each way.` },
];

const RISK_WORDS = ["risk","radiation","danger","safe","safety","storm","gravity","health"];
const COST_WORDS = ["cost","price","expensive","cheap","how much","afford"];

function scoreIntent(text) {
  const lower = text.toLowerCase();
  if (RISK_WORDS.some(w => lower.includes(w))) return { type: "risk" };
  if (COST_WORDS.some(w => lower.includes(w))) return { type: "cost" };
  let best = null, bestScore = 0;
  for (const intent of INTENTS) {
    const score = intent.words.reduce((s, w) => s + (lower.includes(w) ? 1 : 0), 0);
    if (score > bestScore) { bestScore = score; best = intent; }
  }
  return best ? { type: "intent", intent: best } : { type: "fallback" };
}

function handleAriaQuery(text) {
  addAriaMessage("user", text);
  const typing = showTyping();

  setTimeout(() => {
    typing.remove();
    const result = scoreIntent(text);

    if (result.type === "risk") {
      updateRisk();
      addAriaMessage("bot", `Current model for your active plan: radiation ${document.getElementById("radiationLabel").textContent.split(" of")[0]} of dosage limit, storm probability ${document.getElementById("stormLabel").textContent.split("%")[0]}%. Every charter carries an AI-monitored biosuite and automatic storm-shelter lockdown. Want me to switch you to a heavier-shielded vessel like the Aurora Clipper?`);
      return;
    }
    if (result.type === "cost") {
      const { total } = computeCost();
      addAriaMessage("bot", `Your current configuration totals <strong>${fmtMoney(total)}</strong> for ${state.travellers} traveller(s). Tell me your target budget and I can rebalance the spacecraft or accommodation to fit.`);
      return;
    }
    if (result.type === "intent") {
      const intent = result.intent;
      const dest = DESTINATIONS[intent.destination];
      const craft = SPACECRAFT.find(c => c.id === intent.craft);
      const msg = addAriaMessage("bot", intent.reply(dest, craft));
      const apply = document.createElement("button");
      apply.className = "aria-apply";
      apply.textContent = "Apply to Planner →";
      apply.addEventListener("click", () => {
        state.destination = intent.destination;
        state.craft = intent.craft;
        state.accommodation = intent.accommodation;
        state.accommodationMult = { standard: 1, panoramic: 2.2, sovereign: 4 }[intent.accommodation];
        state.activities = [...intent.activities];
        plannerDestSelect.value = state.destination;
        document.getElementById("accommodation").value = state.accommodation;
        document.querySelectorAll(".activity-item input").forEach(cb => {
          cb.checked = intent.activities.includes(cb.value);
        });
        setActiveDest(state.destination);
        renderCraftGrid();
        goToStep(1);
        document.getElementById("planner").scrollIntoView({ behavior: "smooth" });
        recalcAll();
        addAriaMessage("bot", "Applied — your planner now reflects this itinerary. Feel free to fine-tune it in the Customize step.");
      });
      msg.appendChild(document.createElement("br"));
      msg.appendChild(apply);
      return;
    }
    addAriaMessage("bot", "I can help most if you tell me the mood of the trip — adventurous, relaxing, family-friendly, or 'spare no expense' — or ask about risk and cost directly.");
  }, 700 + Math.random() * 500);
}

ariaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = ariaInput.value.trim();
  if (!text) return;
  ariaInput.value = "";
  handleAriaQuery(text);
});

document.querySelectorAll("#ariaChips .chip").forEach(chip =>
  chip.addEventListener("click", () => handleAriaQuery(chip.dataset.q)));

/* ============ TERRA — EARTH NEWS RELAY AGENT ============ */

const EARTH_NEWS = {
  technology: [
    "Neural-lace adoption crosses 40% of Earth's population as reflex-augmentation chips get municipal subsidies in Seoul and Lagos.",
    "Earth's fusion grid finally overtakes fossil generation worldwide — the last coal plant is decommissioned in Silesia.",
    "A Zurich lab demonstrates the first room-temperature superconducting transit rail, cutting continental travel to under an hour.",
  ],
  culture: [
    "The Lunar Philharmonic's zero-g debut symphony breaks streaming records across both planets.",
    "A Neo-Renaissance art movement reclaims abandoned coastal cities as floating gallery districts.",
    "Earth's Global Storytelling Prize is awarded, for the first time, to a fully AI-human co-written novel.",
  ],
  sports: [
    "The Trans-Pacific Hydrofoil Circuit crowns its youngest champion yet, at just 17.",
    "Orbital gravity boxing debuts as an exhibition sport at the Geneva Games.",
    "Earth's Centennial Marathon reroutes through six rebuilt coastal cities for the first time since the sea walls went up.",
  ],
  environment: [
    "The Amazon Reforestation Accord hits its 2100 canopy-recovery target five years early.",
    "Coral genome resequencing revives the Great Barrier Reef's outer shelf.",
    "Earth's Unified Climate Council confirms global surface temperature has held flat for a third consecutive decade.",
  ],
  space: [
    "Earth's Lagrange-point shipyards lay the keel for a second-generation antimatter liner.",
    "The Lunar Gateway celebrates its 70th anniversary with a fleet-wide light show visible from Earth.",
    "A new crewed relay station begins construction at the Earth–Sun L2 point to shorten deep-space comms lag.",
  ],
  politics: [
    "The Interplanetary Charter's fifth amendment grants Mars colonies a non-voting Earth Senate seat.",
    "Earth's Unified Climate Council ratifies its final regional carbon border adjustment.",
    "A cross-continental referendum approves shared stewardship of the newly thawed Arctic shipping lanes.",
  ],
};

const TERRA_CATEGORY_LABEL = {
  technology: "Technology", culture: "Culture & Arts", sports: "Sports",
  environment: "Environment", space: "Space Program", politics: "Politics",
};

const TERRA_KEYWORDS = {
  technology: ["tech", "ai", "robot", "computer", "chip", "innovation", "digital"],
  culture: ["culture", "art", "music", "movie", "film", "fashion", "entertainment", "book"],
  sports: ["sport", "game", "football", "olympic", "race", "championship", "match"],
  environment: ["environment", "climate", "nature", "ocean", "forest", "green", "wildlife"],
  space: ["space", "rocket", "launch", "orbit", "moon", "station", "lunar"],
  politics: ["politics", "government", "election", "law", "policy", "senate", "vote"],
};

function pickHeadlines(category, count) {
  const arr = [...EARTH_NEWS[category]];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}

function scoreTerraIntent(text) {
  const lower = text.toLowerCase();
  if (/(home ?town|my city|my family|my house|my neighbo)/.test(lower)) return { type: "personal" };
  let best = null, bestScore = 0;
  for (const [cat, words] of Object.entries(TERRA_KEYWORDS)) {
    const score = words.reduce((s, w) => s + (lower.includes(w) ? 1 : 0), 0);
    if (score > bestScore) { bestScore = score; best = cat; }
  }
  return best ? { type: "category", category: best } : { type: "fallback" };
}

const terraToggle = document.getElementById("terraToggle");
const terraPanel = document.getElementById("terraPanel");
const terraMessages = document.getElementById("terraMessages");
const terraForm = document.getElementById("terraForm");
const terraInput = document.getElementById("terraInput");

function addTerraMessage(who, html) {
  const div = document.createElement("div");
  div.className = "aria-msg " + who;
  div.innerHTML = html;
  terraMessages.appendChild(div);
  terraMessages.scrollTop = terraMessages.scrollHeight;
  return div;
}
function showTerraTyping() {
  const div = document.createElement("div");
  div.className = "aria-msg bot typing";
  div.innerHTML = "<span></span><span></span><span></span>";
  terraMessages.appendChild(div);
  terraMessages.scrollTop = terraMessages.scrollHeight;
  return div;
}

function handleTerraCategory(category) {
  const typing = showTerraTyping();
  setTimeout(() => {
    typing.remove();
    const delay = formatSignalDelay(currentEarthMarsDistanceKm);
    if (category === "digest") {
      const lines = Object.keys(EARTH_NEWS).map(cat => `<strong>${TERRA_CATEGORY_LABEL[cat]}:</strong> ${pickHeadlines(cat, 1)[0]}`);
      addTerraMessage("bot", `📡 Full Earth digest — delayed ${delay}:<br><br>` + lines.join("<br><br>"));
    } else {
      const headlines = pickHeadlines(category, 2);
      addTerraMessage("bot", `📡 ${TERRA_CATEGORY_LABEL[category]} update — delayed ${delay}:<br><br>` + headlines.map(h => "• " + h).join("<br>"));
    }
  }, 700 + Math.random() * 500);
}

function handleTerraQuery(text) {
  addTerraMessage("user", text);
  const typing = showTerraTyping();
  setTimeout(() => {
    typing.remove();
    const result = scoreTerraIntent(text);
    if (result.type === "personal") {
      addTerraMessage("bot", "I can't pull a hyper-local feed for a single address — relay bandwidth from Earth is prioritized for verified civic broadcasts only. I can give you the national or global picture instead — try a category below.");
      return;
    }
    if (result.type === "category") { handleTerraCategory(result.category); return; }
    addTerraMessage("bot", "I can brief you on Technology, Culture, Sports, Environment, the Space Program, or Politics back on Earth — or tap Full Digest for a roundup across all six.");
  }, 700 + Math.random() * 500);
}

function openTerra() {
  terraPanel.classList.add("open");
  terraPanel.setAttribute("aria-hidden", "false");
  if (!terraMessages.childElementCount) {
    addTerraMessage("bot", "Signal link established. I'm TERRA — relaying curated Earth news to your habitat for the duration of your stay on Mars. Every transmission carries the current light-speed delay. Pick a category, or ask me directly.");
  }
}
terraToggle.addEventListener("click", openTerra);
document.getElementById("navTerra").addEventListener("click", (e) => { e.preventDefault(); openTerra(); });
document.getElementById("terraClose").addEventListener("click", () => {
  terraPanel.classList.remove("open");
  terraPanel.setAttribute("aria-hidden", "true");
});

document.querySelectorAll("#terraChips .chip").forEach(chip =>
  chip.addEventListener("click", () => {
    addTerraMessage("user", chip.textContent);
    handleTerraCategory(chip.dataset.cat);
  }));

terraForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = terraInput.value.trim();
  if (!text) return;
  terraInput.value = "";
  handleTerraQuery(text);
});

/* ============ INIT ============ */
recalcAll();
