// ============ Season theme toggle ============
// single click opens a small season picker, double click jumps to the next season
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");
const SEASONS = ["spring", "summer", "autumn", "winter"];
const SEASON_LABELS = {
  spring: ["🌸", "Spring"],
  summer: ["☀️", "Summer"],
  autumn: ["🍂", "Autumn"],
  winter: ["❄️", "Winter"],
};

const seasonMenu = document.createElement("div");
seasonMenu.className = "season-menu";
seasonMenu.hidden = true;
for (const season of SEASONS) {
  const option = document.createElement("button");
  option.type = "button";
  option.className = "season-option";
  option.dataset.season = season;
  const [emoji, label] = SEASON_LABELS[season];
  option.innerHTML = `<span aria-hidden="true">${emoji}</span>${label}`;
  option.addEventListener("click", () => {
    saveSeason(season);
    closeSeasonMenu();
  });
  seasonMenu.appendChild(option);
}
toggle.insertAdjacentElement("afterend", seasonMenu);
toggle.setAttribute("aria-haspopup", "menu");
toggle.setAttribute("aria-expanded", "false");

function setSeason(season) {
  root.dataset.theme = season;
  toggle.setAttribute("aria-label", `Season theme: ${season}. Click for next season`);
  for (const option of seasonMenu.children) {
    option.classList.toggle("active", option.dataset.season === season);
  }
  seasonParticles.start(season);
}

function saveSeason(season) {
  localStorage.setItem("season", season);
  setSeason(season);
}

function initSeason() {
  const saved = localStorage.getItem("season");
  setSeason(SEASONS.includes(saved) ? saved : "spring");
}

function openSeasonMenu() {
  seasonMenu.hidden = false;
  toggle.setAttribute("aria-expanded", "true");
}

function closeSeasonMenu() {
  seasonMenu.hidden = true;
  toggle.setAttribute("aria-expanded", "false");
}

// click jumps to the next season, hovering 200ms opens the picker
let openTimer = 0;
let closeTimer = 0;

toggle.addEventListener("click", () => {
  saveSeason(SEASONS[(SEASONS.indexOf(root.dataset.theme) + 1) % SEASONS.length]);
});

for (const el of [toggle, seasonMenu]) {
  el.addEventListener("mouseenter", () => {
    clearTimeout(closeTimer);
    clearTimeout(openTimer);
    openTimer = setTimeout(openSeasonMenu, 200);
  });
  el.addEventListener("mouseleave", () => {
    clearTimeout(openTimer);
    closeTimer = setTimeout(closeSeasonMenu, 200);
  });
}

document.addEventListener("click", (e) => {
  if (!seasonMenu.hidden && !seasonMenu.contains(e.target) && !toggle.contains(e.target)) {
    closeSeasonMenu();
  }
});

// ============ Solid header once past the hero photo ============
const header = document.getElementById("site-header");
// pages without the full-screen hero keep the header solid at all times
const solidHeader = document.body.classList.contains("solid-header");

function updateHeader() {
  header.classList.toggle("scrolled", solidHeader || window.scrollY > window.innerHeight * 0.7);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

// ============ Scroll reveal ============
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ============ Shuffle photo gallery ============
const masonry = document.querySelector(".masonry");
if (masonry) {
  const items = [...masonry.children];
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  masonry.append(...items);
}

// ============ Lightbox (photo gallery) ============
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const galleryImages = [...document.querySelectorAll(".masonry-item img, .project-gallery img, .project-cover img")];
let lightboxIndex = 0;

function makeArrow(dir, label, glyph) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = `lightbox-arrow lightbox-${dir}`;
  btn.setAttribute("aria-label", label);
  btn.textContent = glyph;
  btn.addEventListener("click", () => showPhoto(lightboxIndex + (dir === "next" ? 1 : -1)));
  lightbox.appendChild(btn);
  return btn;
}

const prevArrow = makeArrow("prev", "Previous photo", "‹");
const nextArrow = makeArrow("next", "Next photo", "›");

const thumbStrip = document.createElement("div");
thumbStrip.className = "lightbox-thumbs";
for (const [i, img] of galleryImages.entries()) {
  const thumb = document.createElement("img");
  thumb.src = img.src;
  thumb.alt = "";
  thumb.addEventListener("click", () => showPhoto(i));
  thumbStrip.appendChild(thumb);
}
lightbox.appendChild(thumbStrip);

const captionEl = document.createElement("p");
captionEl.className = "lightbox-caption";
lightbox.appendChild(captionEl);

if (galleryImages.length < 2) {
  prevArrow.hidden = nextArrow.hidden = thumbStrip.hidden = true;
}

function showPhoto(index) {
  lightboxIndex = (index + galleryImages.length) % galleryImages.length;
  const img = galleryImages[lightboxIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  captionEl.textContent = img.alt;
  const latinName = /^[A-Z][a-z]+ [a-z]+( & [A-Z][a-z]+ [a-z]+)?$/.test(img.alt);
  captionEl.classList.toggle("latin", latinName && img.closest(".masonry") !== null);
  for (const [i, thumb] of [...thumbStrip.children].entries()) {
    thumb.classList.toggle("active", i === lightboxIndex);
  }
  thumbStrip.children[lightboxIndex].scrollIntoView({ block: "nearest", inline: "center" });
}

galleryImages.forEach((img, i) => {
  img.addEventListener("click", () => {
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    showPhoto(i);
  });
});

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.classList.contains("lightbox-close")) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.hidden) {
    if (e.key === "ArrowLeft") showPhoto(lightboxIndex - 1);
    if (e.key === "ArrowRight") showPhoto(lightboxIndex + 1);
    if (e.key === "Escape") closeLightbox();
  }
  if (e.key === "Escape") closeSeasonMenu();
});

// ============ Footer year ============
document.getElementById("year").textContent = new Date().getFullYear();

// ============ Seasonal falling particles ============
// Sakura petals in spring, leaves in autumn, snow in winter; summer stays dry.
const seasonParticles = (() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const CONFIGS = {
    spring: {
      colors: ["#f6c9d4", "#f2b3c4", "#fadde4", "#eda0b8"],
      density: 90, // one particle per N px of viewport width
      speed: [0.5, 1.1],
      size: [4, 7],
      draw: drawPetal,
    },
    autumn: {
      colors: ["#d98e3a", "#b5622f", "#8f4a26", "#c7a03c"],
      density: 110,
      speed: [0.6, 1.3],
      size: [5, 9],
      draw: drawLeaf,
    },
    winter: {
      colors: ["#ffffff", "#e6ecff", "#cfd8f7"],
      density: 40,
      speed: [0.35, 0.9],
      size: [1.2, 3],
      draw: drawFlake,
    },
  };

  let canvas = null;
  let ctx = null;
  let particles = [];
  let config = null;
  let rafId = 0;

  function drawPetal(p) {
    ctx.rotate(p.angle);
    ctx.beginPath();
    ctx.ellipse(0, 0, p.size, p.size * 0.62, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawLeaf(p) {
    ctx.rotate(p.angle);
    ctx.beginPath();
    ctx.moveTo(0, -p.size);
    ctx.quadraticCurveTo(p.size * 0.9, 0, 0, p.size);
    ctx.quadraticCurveTo(-p.size * 0.9, 0, 0, -p.size);
    ctx.fill();
  }

  function drawFlake(p) {
    ctx.beginPath();
    ctx.arc(0, 0, p.size, 0, Math.PI * 2);
    ctx.fill();
  }

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function makeParticle(anywhere) {
    return {
      x: Math.random() * canvas.width,
      y: anywhere ? Math.random() * canvas.height : -12,
      size: rand(config.size[0], config.size[1]),
      speed: rand(config.speed[0], config.speed[1]),
      color: config.colors[Math.floor(Math.random() * config.colors.length)],
      angle: Math.random() * Math.PI * 2,
      spin: rand(-0.02, 0.02),
      swayPhase: Math.random() * Math.PI * 2,
      swayAmp: rand(0.3, 1.1),
      alpha: rand(0.5, 0.9),
    };
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of particles) {
      p.y += p.speed;
      p.swayPhase += 0.02;
      p.x += Math.sin(p.swayPhase) * p.swayAmp;
      p.angle += p.spin;
      if (p.y > canvas.height + 15) Object.assign(p, makeParticle(false));

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      config.draw(p);
      ctx.restore();
    }
    rafId = requestAnimationFrame(tick);
  }

  function resize() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function stop() {
    cancelAnimationFrame(rafId);
    rafId = 0;
    particles = [];
    if (canvas) {
      canvas.remove();
      canvas = null;
      ctx = null;
    }
  }

  function start(season) {
    stop();
    config = CONFIGS[season];
    if (!config || reducedMotion) return;

    canvas = document.createElement("canvas");
    canvas.id = "season-canvas";
    canvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    resize();

    const count = Math.round(window.innerWidth / config.density);
    particles = Array.from({ length: count }, () => makeParticle(true));
    rafId = requestAnimationFrame(tick);
  }

  window.addEventListener("resize", resize);

  return { start };
})();

initSeason();
