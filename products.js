const products = {
  '001': {
    id: '001',
    category: 'inverts_enclosures',
    name: 'Sample Terrarium',
    company: 'ReptiHome',
    desc: 'A perfect enclosure for reptiles and amphibians.',
    img: 'https://ibb.co/twj8Z5b7',
    price: 10.99
  },
  '002': {
    id: '002',
    category: 'rodents_toys',
    name: 'Fun Hamster Wheel',
    company: 'RodentFun',
    desc: 'A durable wheel for small rodents to stay active.',
    img: 'https://ibb.co/twj8Z5b7'
  }
  // add more products here...
};

// Render products for a given category into a container element
function renderProductsByCategory(category, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  Object.values(products).forEach(p => {
    if (p.category === category) {
      const productHTML = `
        <div class="product-card">
          <img src="${p.img}" alt="${p.name}" style="max-width:150px;">
          <h3>${p.name}</h3>
          <p>${p.company}</p>
          <p>${p.desc}</p>
          <p><strong>Price: $${p.price.toFixed(2)}</strong></p>
          <a href="product.html?id=${p.id}">View Details</a>
        </div>
      `;
      container.innerHTML += productHTML;
    }
  });
}
