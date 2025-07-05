const defaultLang = "et";

// Load user-preferred language or fallback
let currentLang = localStorage.getItem("language") || defaultLang;

// 🔥 Load translations from the embedded <script> tag
const rawTranslations = document.getElementById("translations").textContent;
const translations = JSON.parse(rawTranslations);

// Update UI text
function applyTranslations(lang) {
  const langSet = translations[lang] || translations[defaultLang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (langSet[key]) el.textContent = langSet[key];
  });

  localStorage.setItem("language", lang);
}

// Handle language buttons
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    applyTranslations(lang);
  });
});

// Init
applyTranslations(currentLang);
