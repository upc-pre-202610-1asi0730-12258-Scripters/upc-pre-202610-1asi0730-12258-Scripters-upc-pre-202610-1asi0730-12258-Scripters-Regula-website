const translations = {
  es: {
    nav_home: "Inicio",
    nav_features: "Funcionalidades",
    nav_pricing: "Precios",
    nav_contact: "Contacto",
    hero_title: "Sistema Inteligente de Monitoreo de Balones de Gas",
    hero_desc: "Revoluciona la gestión de tu inventario de gas con tecnología IoT avanzada.",
    btn_demo: "Solicitar Demo",
    btn_video: "Ver Video",
    features_title: "Funcionalidades",
    f1: "Gestión de inventario",
    f2: "Control de distribución",
    f3: "Alertas de gas",
    footer_desc: "Revolucionando la gestión de balones de gas."
  },
  en: {
    nav_home: "Home",
    nav_features: "Features",
    nav_pricing: "Pricing",
    nav_contact: "Contact",
    hero_title: "Smart Gas Cylinder Monitoring System",
    hero_desc: "Revolutionize your gas inventory with IoT technology.",
    btn_demo: "Request Demo",
    btn_video: "Watch Video",
    features_title: "Features",
    f1: "Inventory management",
    f2: "Distribution control",
    f3: "Gas alerts",
    footer_desc: "Revolutionizing gas cylinder management."
  }
};

let currentLang = "es";

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  document.getElementById("langToggle").innerText = currentLang.toUpperCase();
  translate();
});

function translate() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerText = translations[currentLang][key];
  });
}