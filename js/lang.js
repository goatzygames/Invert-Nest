// js/lang.js
(function() {
  const defaultLang = 'et';
  const savedLang = localStorage.getItem('lang') || defaultLang;
  localStorage.setItem('lang', savedLang);
})();
