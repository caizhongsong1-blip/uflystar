// Altitude product catalog — specs from the product manual.
// Spec values are neutral strings or {en, fr} objects for language-dependent text.
// Chinese catalog text is layered on by i18n.zh.js (local copy only — never deployed).

const WIND_67 = { en: "VTOL mode: Level 6 · Fixed-wing: Level 7", fr: "Mode VTOL : niveau 6 · Aile fixe : niveau 7" };
const WIND_56 = { en: "VTOL mode: Level 5 (peak gust) · Fixed-wing: Level 6", fr: "Mode VTOL : niveau 5 (rafale max) · Aile fixe : niveau 6" };
const MAT_TORAY = { en: "Toray 3K carbon fiber (Japan)", fr: "Fibre de carbone 3K Toray (Japon)" };
const PROC_IPM = { en: "Internal-pressure monocoque molding", fr: "Moulage monocoque par pression interne" };

const CATALOG = {
  vtol: {
    titleKey: "catalog.g1",
    descKey: "catalog.g1d",
    anchor: "catalog-v",
    models: [
      {
        id: "v21", name: "Altitude V21", img: "img/v21.jpg",
        tag: { en: "Electric VTOL", fr: "VTOL électrique" },
        intro: {
          en: "Ultra-compact electric VTOL with tool-free rapid assembly — 4-hour endurance in a 1.57 m transport box.",
          fr: "VTOL électrique ultra-compact à assemblage rapide sans outils — 4 h d'autonomie dans une caisse de 1,57 m."
        },
        specs: [
          ["spec.dim", "2.1 × 0.98 × 0.24 m"], ["spec.mtow", "14 kg"], ["spec.payload", "2.5 kg"],
          ["spec.endurance", "240 min"], ["spec.cruise", "20 m/s"], ["spec.ceiling", "4 800 m"],
          ["spec.wind", WIND_67], ["spec.ip", "IP54"], ["spec.box", "1570 × 620 × 375 mm"]
        ]
      },
      {
        id: "v25", name: "Altitude V25", img: "img/v25.jpg",
        tag: { en: "Electric VTOL", fr: "VTOL électrique" },
        intro: {
          en: "Compact mapping and patrol platform — a 2.5 m wingspan with the smallest transport footprint of the series.",
          fr: "Plateforme compacte de cartographie et de patrouille — 2,5 m d'envergure et la caisse de transport la plus compacte de la série."
        },
        specs: [
          ["spec.dim", "2.5 × 1.26 × 0.39 m"], ["spec.mtow", "14 kg"], ["spec.payload", "2.5 kg"],
          ["spec.endurance", "240 min"], ["spec.cruise", "20 m/s"], ["spec.ceiling", "4 800 m"],
          ["spec.wind", WIND_67], ["spec.ip", "IP54"], ["spec.box", "1470 × 560 × 400 mm"]
        ]
      },
      {
        id: "v32", name: "Altitude V32", img: "img/v32.jpg",
        tag: { en: "Electric VTOL", fr: "VTOL électrique" },
        intro: {
          en: "Mid-size workhorse — 5 kg payload and 4-hour endurance for demanding survey and inspection missions.",
          fr: "Modèle intermédiaire polyvalent — 5 kg de charge utile et 4 h d'autonomie pour les missions exigeantes de levé et d'inspection."
        },
        specs: [
          ["spec.dim", "3.2 × 1.83 × 0.46 m"], ["spec.mtow", "30 kg"], ["spec.payload", "5 kg"],
          ["spec.endurance", "240 min"], ["spec.cruise", "21 m/s"], ["spec.ceiling", "4 200 m"],
          ["spec.wind", WIND_67], ["spec.ip", "IP54"], ["spec.box", "1800 × 680 × 480 mm"]
        ]
      },
      {
        id: "v35", name: "Altitude V35", img: "img/v35.jpg",
        tag: { en: "Heavy-lift electric VTOL", fr: "VTOL électrique gros porteur" },
        intro: {
          en: "Heavy-lift electric VTOL — 10 kg payload capacity for multi-sensor and delivery missions.",
          fr: "VTOL électrique gros porteur — 10 kg de charge utile pour les missions multi-capteurs et la livraison."
        },
        specs: [
          ["spec.dim", "3.5 × 1.88 × 0.64 m"], ["spec.mtow", "35 kg"], ["spec.payload", "10 kg"],
          ["spec.endurance", "190 min"], ["spec.cruise", "21 m/s"], ["spec.ceiling", "4 200 m"],
          ["spec.wind", WIND_67], ["spec.ip", "IP54"], ["spec.box", "2105 × 735 × 500 mm"]
        ]
      },
      {
        id: "v39", name: "Altitude V39", img: "img/v39.jpg",
        tag: { en: "Electric VTOL", fr: "VTOL électrique" },
        intro: {
          en: "Long-span 3.95 m airframe for maximum aerodynamic efficiency — 5 kg payload on 4-hour missions.",
          fr: "Cellule à grande envergure (3,95 m) pour une efficacité aérodynamique maximale — 5 kg de charge sur des missions de 4 h."
        },
        specs: [
          ["spec.dim", "3.95 × 1.83 × 0.57 m"], ["spec.mtow", "31 kg"], ["spec.payload", "5 kg"],
          ["spec.endurance", "240 min"], ["spec.cruise", "21 m/s"], ["spec.ceiling", "4 200 m"],
          ["spec.wind", WIND_67], ["spec.ip", "IP54"], ["spec.box", "2000 × 650 × 480 mm"]
        ]
      },
      {
        id: "v62", name: "Altitude V62", img: "img/v62.jpg",
        tag: { en: "Gasoline VTOL · Flagship", fr: "VTOL essence · Modèle phare" },
        intro: {
          en: "Gasoline flagship: 16-hour endurance, 40 kg payload and a 5,000 m ceiling for the largest wide-area programs.",
          fr: "Modèle phare à essence : 16 h d'autonomie, 40 kg de charge utile et un plafond de 5 000 m pour les plus vastes programmes."
        },
        specs: [
          ["spec.dim", "6.19 × 3.57 × 1.27 m"], ["spec.mtow", "≤ 135 kg"], ["spec.payload", "40 kg"],
          ["spec.endurance", "16 h"], ["spec.cruise", "30 m/s"], ["spec.ceiling", "5 000 m"],
          ["spec.tank", "34 L"],
          ["spec.engine", { en: "LiDe 290 two-stroke", fr: "LiDe 290 deux temps" }],
          ["spec.wind", WIND_56], ["spec.ip", "IP54"], ["spec.box", "2820 × 1300 × 1055 mm"]
        ]
      }
    ]
  },

  frames: {
    titleKey: "catalog.g2",
    descKey: "catalog.g2d",
    anchor: "catalog-m",
    models: [
      {
        id: "m6-1600", name: "Altitude M6-1600", img: "img/m6-1600.jpg",
        tag: { en: "Hexacopter airframe", fr: "Cellule hexacoptère" },
        intro: {
          en: "1.6 m-class hexacopter frame lifting 7 kg — the platform of choice for LiDAR and multi-sensor rigs.",
          fr: "Cellule hexacoptère classe 1,6 m portant 7 kg — la plateforme de choix pour le LiDAR et les charges multi-capteurs."
        },
        specs: [
          ["spec.material", MAT_TORAY], ["spec.process", PROC_IPM], ["spec.shell", "0.6 mm"],
          ["spec.wheelbase", "1600 mm"], ["spec.height", "500 mm"], ["spec.caseweight", "2 200 g"],
          ["spec.noload", "75 min (2 × 25 000 mAh)"],
          ["spec.maxload", { en: "7 kg · 25 min flight", fr: "7 kg · 25 min de vol" }],
          ["spec.motor", { en: "Series 8", fr: "Série 8" }],
          ["spec.prop", { en: "29 in", fr: "29 po" }]
        ]
      },
      {
        id: "m6-1200", name: "Altitude M6-1200", img: "img/m6-1200.jpg",
        tag: { en: "Hexacopter airframe", fr: "Cellule hexacoptère" },
        intro: {
          en: "Balanced 1.2 m hexacopter — 5 kg of payload with 70 minutes of no-load flight.",
          fr: "Hexacoptère équilibré de 1,2 m — 5 kg de charge et 70 minutes de vol à vide."
        },
        specs: [
          ["spec.material", MAT_TORAY], ["spec.process", PROC_IPM], ["spec.shell", "0.6 mm"],
          ["spec.wheelbase", "1200 mm"], ["spec.height", "500 mm"], ["spec.caseweight", "2 100 g"],
          ["spec.noload", "70 min (2 × 25 000 mAh)"],
          ["spec.maxload", { en: "5 kg · 30 min flight", fr: "5 kg · 30 min de vol" }],
          ["spec.motor", { en: "Series 6", fr: "Série 6" }],
          ["spec.prop", { en: "22 in", fr: "22 po" }]
        ]
      },
      {
        id: "m6-1130", name: "Altitude M6-1130", img: "img/m6-1130.jpg",
        tag: { en: "Hexacopter airframe", fr: "Cellule hexacoptère" },
        intro: {
          en: "Six-rotor redundancy in a compact 1.13 m wheelbase — safe payload carriage in tight operating areas.",
          fr: "La redondance six rotors dans un empattement compact de 1,13 m — un emport sûr dans les zones d'opération restreintes."
        },
        specs: [
          ["spec.material", MAT_TORAY], ["spec.process", PROC_IPM], ["spec.shell", "0.6 mm"],
          ["spec.wheelbase", "1130 mm"], ["spec.height", "600 mm"], ["spec.caseweight", "2 200 g"],
          ["spec.noload", "70 min (2 × 25 000 mAh)"],
          ["spec.maxload", { en: "5 kg · 30 min flight", fr: "5 kg · 30 min de vol" }],
          ["spec.motor", { en: "Series 6", fr: "Série 6" }],
          ["spec.prop", { en: "21 in", fr: "21 po" }]
        ]
      },
      {
        id: "m4-830", name: "Altitude M4-830", img: "img/m4-830.jpg",
        tag: { en: "Quadcopter airframe", fr: "Cellule quadricoptère" },
        intro: {
          en: "Adjustable 830–960 mm quad frame — one airframe that adapts to multiple propulsion setups.",
          fr: "Cellule quad réglable de 830 à 960 mm — une seule cellule qui s'adapte à plusieurs configurations de propulsion."
        },
        specs: [
          ["spec.material", MAT_TORAY], ["spec.process", PROC_IPM], ["spec.shell", "0.6 mm"],
          ["spec.wheelbase", { en: "830–960 mm (adjustable)", fr: "830–960 mm (réglable)" }],
          ["spec.height", "500 mm"], ["spec.caseweight", "1 900 g"],
          ["spec.noload", "60 min (2 × 25 000 mAh)"],
          ["spec.maxload", { en: "3 kg · 30 min flight", fr: "3 kg · 30 min de vol" }],
          ["spec.motor", { en: "Series 6", fr: "Série 6" }],
          ["spec.prop", { en: "21 in", fr: "21 po" }]
        ]
      },
      {
        id: "m4-1200", name: "Altitude M4-1200", img: "img/m4-1200.jpg",
        tag: { en: "Quadcopter airframe", fr: "Cellule quadricoptère" },
        intro: {
          en: "Endurance-optimized quad — 85 minutes of no-load flight, the longest electric flight time of the M series.",
          fr: "Quad optimisé pour l'autonomie — 85 minutes de vol à vide, le record électrique de la série M."
        },
        specs: [
          ["spec.material", MAT_TORAY], ["spec.process", PROC_IPM], ["spec.shell", "0.6 mm"],
          ["spec.wheelbase", "1200 mm"], ["spec.height", "500 mm"], ["spec.caseweight", "1 700 g"],
          ["spec.noload", "85 min (2 × 25 000 mAh)"],
          ["spec.maxload", { en: "5 kg · 35 min flight", fr: "5 kg · 35 min de vol" }],
          ["spec.motor", { en: "Series 8", fr: "Série 8" }],
          ["spec.prop", { en: "29 in", fr: "29 po" }]
        ]
      },
      {
        id: "m6-1600-pro", name: "Altitude M6-1600 Pro", img: "img/m6-1600-pro.jpg",
        tag: { en: "Heavy-lift hexacopter airframe", fr: "Cellule hexacoptère gros porteur" },
        intro: {
          en: "Heavy-duty flagship frame — 8 kg standard lift, customizable up to 20 kg, powered by four batteries.",
          fr: "Cellule phare gros porteur — 8 kg en standard, personnalisable jusqu'à 20 kg, alimentée par quatre batteries."
        },
        specs: [
          ["spec.material", MAT_TORAY], ["spec.process", PROC_IPM],
          ["spec.shell", { en: "0.7 mm (customizable)", fr: "0,7 mm (personnalisable)" }],
          ["spec.wheelbase", "1600 mm"], ["spec.height", "600 mm"], ["spec.caseweight", "3 400 g"],
          ["spec.noload", "91 min (4 × 25 000 mAh)"],
          ["spec.maxload", { en: "8 kg · customizable up to 20 kg", fr: "8 kg · personnalisable jusqu'à 20 kg" }],
          ["spec.motor", { en: "Series 8 / 10 / 12", fr: "Série 8 / 10 / 12" }],
          ["spec.prop", { en: "30 in", fr: "30 po" }]
        ]
      }
    ]
  }
};

// Render the catalog into the page for the given language.
function renderCatalog(lang) {
  const dict = I18N[lang] || I18N.en;
  const t = v => (typeof v === "object" ? (v[lang] || v.en) : v);

  Object.values(CATALOG).forEach(group => {
    const host = document.getElementById(group.anchor);
    if (!host) return;
    host.innerHTML = `
      <div class="cat-group-head">
        <h3>${dict[group.titleKey]}</h3>
        <p>${dict[group.descKey]}</p>
      </div>
      <div class="model-grid">
        ${group.models.map(m => `
        <article class="model-card" id="${m.id}">
          <div class="model-photo"><img src="${m.img}" alt="${m.name}" loading="lazy"></div>
          <div class="model-body">
            <span class="model-tag">${t(m.tag)}</span>
            <h4>${m.name}</h4>
            <p class="model-intro">${t(m.intro)}</p>
            <details class="model-specs">
              <summary>${dict["catalog.specs"]}</summary>
              <table>
                ${m.specs.map(([k, v]) => `<tr><th>${dict[k]}</th><td>${t(v)}</td></tr>`).join("")}
              </table>
            </details>
            <a class="btn btn-sm btn-solid model-cta" href="#contact">${dict["cta.customize"]}</a>
          </div>
        </article>`).join("")}
      </div>`;
  });
}
