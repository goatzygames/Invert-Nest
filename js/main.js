// js/main.js

// Existing code
function goToProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Setup product card clicks
  document.querySelectorAll('.product-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      goToProduct(id);
    });
  });
  document.querySelectorAll('.product-card .view-product').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = e.target.closest('.product-card').dataset.id;
      goToProduct(id);
    });
  });

  // Apply saved language or default to English
  const savedLang = localStorage.getItem('lang') || 'en';
  setLang(savedLang);
});


// Translation dictionary
const translations = {
  en: {
    logo: "Invert Nest",
    invertebrates: "Invertebrates",
    enclosures: "Enclosures",
    decorations: "Decorations",
    food_nutrition: "Food & Nutrition",

    rodents: "Rodents",
    cages: "Cages",
    toys: "Toys",
    food: "Food",

    fish: "Fish",
    tanks_stands: "Tanks & Stands",
    aquascaping: "Aquascaping",
    flake_pellet_food: "Flake & Pellet Food",

    reptiles: "Reptiles",
    terrariums: "Terrariums",
    rept_decorations: "Decorations",
    rept_food: "Food & Supplements",

    amphibians: "Amphibians",
    habitats: "Habitats",
    amphib_decorations: "Decorations",
    diet_nutrition: "Diet & Nutrition",

    birds: "Birds",
    cages_aviaries: "Cages & Aviaries",
    perches_toys: "Perches & Toys",
    seeds_feeders: "Seeds & Feeders",

    banner_title: "Customize for Your Pet Type!",
    banner_text: "Change this banner text and image to match each category’s vibe.",

    product_name: "Product Name",
    company: "Company",
    view_details: "View Details"
  },

  et: {
    logo: "Invert Nest",
    invertebrates: "Selgrootud",
    enclosures: "Elupaigad",
    decorations: "Kaunistused",
    food_nutrition: "Toit & Toitumine",

    rodents: "Jänesed",
    cages: "Puurid",
    toys: "Mänguasjad",
    food: "Toit",

    fish: "Kalad",
    tanks_stands: "Akvaariumid & Riiulid",
    aquascaping: "Akvaariumide kujundus",
    flake_pellet_food: "Helbepulbriga toit",

    reptiles: "Roomajad",
    terrariums: "Terrariumid",
    rept_decorations: "Kaunistused",
    rept_food: "Toit & Toidulisandid",

    amphibians: "Veeimetajad",
    habitats: "Elupaigad",
    amphib_decorations: "Kaunistused",
    diet_nutrition: "Dieet & Toitumine",

    birds: "Linnud",
    cages_aviaries: "Puurid & Lindlaud",
    perches_toys: "Puuted & Mänguasjad",
    seeds_feeders: "Seemned & Söötjad",

    banner_title: "Kohanda oma lemmiklooma tüübi järgi!",
    banner_text: "Muuda seda bänneri teksti ja pilti, et sobitada iga kategooria meeleoluga.",

    product_name: "Toote nimi",
    company: "Ettevõte",
    view_details: "Vaata üksikasju"
  },

  ru: {
    logo: "Invert Nest",
    invertebrates: "Беспозвоночные",
    enclosures: "Вольеры",
    decorations: "Декорации",
    food_nutrition: "Корм & Питание",

    rodents: "Грызуны",
    cages: "Клетки",
    toys: "Игрушки",
    food: "Корм",

    fish: "Рыбы",
    tanks_stands: "Аквариумы & Подставки",
    aquascaping: "Акваскейпинг",
    flake_pellet_food: "Корм в хлопьях и гранулах",

    reptiles: "Рептилии",
    terrariums: "Террариумы",
    rept_decorations: "Декорации",
    rept_food: "Корм & Добавки",

    amphibians: "Амфибии",
    habitats: "Среды обитания",
    amphib_decorations: "Декорации",
    diet_nutrition: "Диета & Питание",

    birds: "Птицы",
    cages_aviaries: "Клетки & Вольеры",
    perches_toys: "Жердочки & Игрушки",
    seeds_feeders: "Семена & Кормушки",

    banner_title: "Настройте под тип вашего питомца!",
    banner_text: "Измените текст и изображение баннера, чтобы соответствовать настроению каждой категории.",

    product_name: "Название продукта",
    company: "Компания",
    view_details: "Подробнее"
  }
};

// Function to update all elements with data-i18n attribute
function updateTexts(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Set language and save to localStorage
function setLang(lang) {
  if (!translations[lang]) return; // fallback if invalid lang

  updateTexts(lang);
  localStorage.setItem('lang', lang);
}

document.querySelectorAll('.dropdown').forEach(dropdown => {
  let timeout;

  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    dropdown.querySelector('.dropdown-menu').style.display = 'block';
    // Add animation class if you want fadeIn effect
    dropdown.querySelector('.dropdown-menu').classList.add('fadeInAnimation');
  });

  dropdown.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      dropdown.querySelector('.dropdown-menu').style.display = 'none';
      dropdown.querySelector('.dropdown-menu').classList.remove('fadeInAnimation');
    }, 500); // 1000ms = 1 second delay before hiding
  });
});

document.querySelectorAll('.dropdown').forEach(dropdown => {
  let timeout;

  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeout);

    // Close all other dropdowns first
    document.querySelectorAll('.dropdown').forEach(otherDropdown => {
      if (otherDropdown !== dropdown) {
        const menu = otherDropdown.querySelector('.dropdown-menu');
        if (menu) {
          menu.style.display = 'none';
          menu.classList.remove('fadeInAnimation');
        }
      }
    });

    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu) {
      menu.style.display = 'block';
      menu.classList.add('fadeInAnimation');
    }
  });

  dropdown.addEventListener('mouseleave', () => {
    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu) {
      timeout = setTimeout(() => {
        menu.style.display = 'none';
        menu.classList.remove('fadeInAnimation');
      }, 500);
    }
  });
});