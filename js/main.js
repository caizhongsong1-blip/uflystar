// Reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

// Language handling
// Chinese is only offered on local copies: it requires the i18n.zh.js language
// pack (never uploaded) AND a local origin (file:// or localhost). Deployed
// visitors on uflystar.com never get zh, even if the pack is uploaded by mistake.
const IS_LOCAL =
  location.protocol === "file:" ||
  ["localhost", "127.0.0.1", "::1"].includes(location.hostname);
const HAS_ZH = IS_LOCAL && typeof I18N !== "undefined" && !!I18N.zh;
const SUPPORTED = HAS_ZH ? ["en", "fr", "zh"] : ["en", "fr"];

function detectLang() {
  const saved = localStorage.getItem("uflystar-lang");
  if (SUPPORTED.includes(saved)) return saved;
  const nav = (navigator.language || "en").toLowerCase();
  if (nav.startsWith("fr")) return "fr";
  if (nav.startsWith("zh") && SUPPORTED.includes("zh")) return "zh";
  return "en";
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });
  document.querySelectorAll("[data-i18n-content]").forEach(el => {
    const key = el.getAttribute("data-i18n-content");
    if (dict[key] !== undefined) el.setAttribute("content", dict[key]);
  });
  document.title = dict["meta.title"];

  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  localStorage.setItem("uflystar-lang", lang);

  if (typeof renderCatalog === "function") {
    renderCatalog(lang);
    document.querySelectorAll(".model-card").forEach(el => {
      el.classList.add("reveal");
      observer.observe(el);
    });
  }
}

document.querySelectorAll(".lang-switch button").forEach(btn => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

applyLang(detectLang());

// Mobile nav
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

document.querySelectorAll(".card, .ind-item, .svc, .strip-item, .about-stats li").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

// Contact form → Cloudflare mail worker (route configured on the uflystar.com zone).
// While empty, the form runs in demo mode (shows success without sending).
const CONTACT_ENDPOINT = "https://uflystar.com/api/contact";

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", async e => {
  e.preventDefault();
  const ok = contactForm.querySelector(".form-ok");
  const err = contactForm.querySelector(".form-err");
  const btn = contactForm.querySelector("button[type=submit]");
  ok.hidden = err.hidden = true;

  if (!CONTACT_ENDPOINT) {          // demo mode
    ok.hidden = false;
    contactForm.reset();
    return;
  }

  const fd = new FormData(contactForm);
  btn.disabled = true;
  try {
    const res = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(fd)),
    });
    if (!res.ok) throw new Error(res.status);
    ok.hidden = false;
    contactForm.reset();
  } catch {
    err.hidden = false;
  } finally {
    btn.disabled = false;
  }
});

// Scenario videos: each card asks for its own clip and falls back to the
// placeholder (agriculture.mp4) until the real one is added to site/video/.
const FALLBACK_VIDEO = "video/agriculture.mp4";
const isTouch = window.matchMedia("(hover: none)").matches;

const videoObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    const v = e.target;
    if (e.isIntersecting) v.play().catch(() => {});
    else v.pause();
  });
}, { threshold: 0.4 });

document.querySelectorAll(".ind-media video").forEach(v => {
  v.src = `video/${v.dataset.video}.mp4`;
  v.addEventListener("error", () => {
    if (!v.src.endsWith(FALLBACK_VIDEO)) v.src = FALLBACK_VIDEO;
  }, { once: true });

  if (isTouch) {
    videoObserver.observe(v);
  } else {
    const card = v.closest(".ind-item");
    card.addEventListener("mouseenter", () => v.play().catch(() => {}));
    card.addEventListener("mouseleave", () => { v.pause(); v.currentTime = 0; });
  }
});
