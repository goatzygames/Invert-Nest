document.addEventListener("DOMContentLoaded", function () {
  // Your products data
  window.products = {
    '001-InvertNest': {
      id: '001',
      name: '181 Liitrine Akvaarium',
      company: 'InvertNest',
      desc: '181 Liitrine Akvaarium erinevatele loomadele',
      img: [
        'https://i.ibb.co/4RtYK9pz/akvaarium-180l-1.jpg',
		'https://i.ibb.co/jZ4stvsV/akvaarium-180l-2.jpg',
		'https://i.ibb.co/SDZ2x0rQ/akvaarium-180l-3.jpg',
		'https://i.ibb.co/DfnvKdCY/akvaarium-180l-4.jpg',
		'https://i.ibb.co/Mxq8dRff/akvaarium-stand.jpg'
      ],
      price: 99.99,
      location: 'Tallinn',
      categories: ['inverts_enclosures', 'rodents_enclosures', 'amphibians_enclosures', 'reptiles_enclosures', 'featured'],
      longdesc: `NB! Antud toodet ei ole võimalik saata pakiautomaadiga.
	  Võtan sinuga ühendust pärast tellimuse esitamist, et leppida kokku edasised detailid.
	  181 liitrine akvaarium sobiv paljudele erinevatele loomadele, näiteks peaaegu igale selgrootule, paljudele kahepaiksetele ning ka mõnedele roomajatele.`,
      amount: 1,
	  external: false,
	  email: 'e',
	  phone: '4',
	  shipment: false
    },
	'002-InvertNest': {
      id: '002',
      name: 'Steriliseeritud Männikäbid 750 ml',
      company: 'InvertNest',
      desc: 'Turvalised männikäbid dekoratsioonina',
      img: [
        'https://i.ibb.co/HTt9xyf6/m-nd-peal.jpg',
		'https://i.ibb.co/0jS03vsv/m-nd-k-rval.jpg'
      ],
      price: 5,
      location: 'Tallinn',
      categories: ['inverts_decorations', 'reptiles_decorations', 'amphibians_decorations', 'rodents_toys'],
      longdesc: `Männikäbide dekoratsioon paljude loomade kodudesse. Männikäbid on ka sooja veega üle pestud ning ka ahjus hoitud 50 minutit 95 kraadi juures, tagades loomade ja terraariumite turvalisust nendega.`,
      amount: 8,
	  external: false,
	  email: 'e',
	  phone: '4',
	  shipment: true
    },
	'003-InvertNest': {
      id: '003',
      name: 'Koralli Kaktus',
      company: 'InvertNest',
      desc: 'Elus-taim dekoratsioon paljudesse kuivadesse loomade terraariumitesse',
      img: [
        'https://i.ibb.co/Lz87M56M/koralli-kaktus.jpg'
      ],
      price: 8,
      location: 'Tallinn',
      categories: ['inverts_decorations', 'reptiles_decorations', 'featured'],
      longdesc: `ELus koralli kaktuse dekoratsioon, sobiv ainult kuivadesse terraariumitesse ja vivaariumitesse, kuna koralli kaktusel on vaja kuiva keskkona kus vett saab ainult kord nädalas, võib-olla isegi vöhem. Taime väikses potis on kookose kiu ja muude substraatide segu.`,
      amount: 1,
	  external: false,
	  email: 'e',
	  phone: '4',
	  shipment: true
    },
	'004-InvertNest': {
      id: '004',
      name: 'Biokaktiivne Sammal 800 ml',
      company: 'InvertNest',
      desc: 'Bioaktiivne ja elus sammal, 800 ml',
      img: [
        'https://i.ibb.co/zHsp9mP0/sammal-peal.jpg',
		'https://i.ibb.co/Cp4fxvCt/sammal-k-rval.jpg'
      ],
      price: 5,
      location: 'Tallinn',
      categories: ['inverts_decorations', 'reptiles_decorations', 'amphibians_decorations'],
      longdesc: `Bioaktiivne puhas ning elus sammal loomade terraariumitesse ja vivaariumitesse, ilus dekoratsioon mis hakkab õigete tingimustega kasvama ka.`,
      amount: 9,
	  external: false,
	  email: 'e',
	  phone: '4',
	  shipment: true
    },
	'005-InvertNest': {
      id: '005',
      name: 'Dinosauruse Luu Dekoratsioon',
      company: 'InvertNest',
      desc: 'Ilus Dekoratsioon Paljudesse Terraariumitesse',
      img: [
        'https://i.ibb.co/RkL8H3RP/showcasebone.png',
		'https://i.ibb.co/7JYN8s0r/bone1.png',
		'https://i.ibb.co/Ng3gPSSM/bone2.png'
      ],
      price: 7.50,
      location: 'Tallinn',
      categories: ['inverts_decorations', 'reptiles_decorations', 'amphibians_decorations', 'fish_aquascaping'],
      longdesc: `Ilus ning puhas dinosauruse pealuu, mis sobib paljudesse ilusatesse terraariumitesse. Toode on turvaline loomadele ning on piisavalt raske, et ka kasutada akvaariumites`,
      amount: 1,
	  external: false,
	  email: 'e',
	  phone: '4',
	  shipment: true
    },
  	'006-InvertNest': {
      id: '006',
      name: 'Proteiini Toit 170g',
      company: 'InvertNest',
      desc: 'Proteiini segu loomadele',
      img: [
        'https://i.ibb.co/hxcCdy5Q/proteinmix.png'
      ],
      price: 6.50,
      location: 'Tallinn',
      categories: ['inverts_food', 'reptiles_food'],
      longdesc: `Proteiini segu mis sobib toita paljudele selgrootutele kui ka koos päris toiduga mõnedele roomajatele`,
      amount: 1,
	  external: false,
	  email: 'e',
	  phone: '4',
	  shipment: true
    },
	'007-InvertNest': {
      id: '007',
      name: 'Lehekõdu KOLLANE 750ml',
      company: 'InvertNest',
      desc: 'Kollane lehekõdu dekoratsioon kui ka toit!',
      img: [
        'https://i.ibb.co/1JBXfGLv/lehek-dupeal.png',
		'https://i.ibb.co/gFTvjVWr/lehek-duk-rval.png'
      ],
      price: 5,
      location: 'Tallinn',
      categories: ['inverts_decorations', 'reptiles_decorations', 'rodents_toys'],
      longdesc: `Kollane lehekõdu sobiv kas lihtsa dekoratsioonina terraariumitesse või ka toiduna mõnedele detrivooridele`,
      amount: 3,
	  external: false,
	  email: 'e',
	  phone: '4',
	  shipment: true
    },
  };

  // Load product
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const p = products[id] || products['001'];
  
  const countrySelect = document.getElementById('country-select');
const shippingLabel = document.getElementById('shipping-cost-label');
const orderButton = document.getElementById('order-button');
const unitPrice = document.getElementById('unit-price');
const shippingPrice = document.getElementById('shipping-price');
const totalPrice = document.getElementById('total-price');
const quantityInput = document.getElementById('form-quantity');
  
  // If shipment is false, adjust the UI accordingly
if (p.shipment === false) {
  // Disable or hide country select and location input
  if (countrySelect) {
    countrySelect.disabled = true;
    countrySelect.value = '';
  }
  
  const locationInput = document.getElementById('form-location');
  if (locationInput) {
    locationInput.value = '';
    locationInput.placeholder = 'No shipping available for this product';
    locationInput.disabled = true;
  }
  
  // Update shipping label and prices to reflect no shipping
  if (shippingLabel) {
    shippingLabel.textContent = 'Shipping not available for this product';
  }
  if (shippingPrice) {
    shippingPrice.textContent = '-';
  }
  if (totalPrice) {
    totalPrice.textContent = `€${p.price.toFixed(2)}`; // total = product price only
  }
  


  
  // Remove or disable event listener for countrySelect
  countrySelect?.removeEventListener('change', updatePrices);
  
  // Remove input event listener on quantity to avoid confusion
  quantityInput?.removeEventListener('input', updatePrices);
} else {
  // Existing code for shipment = true continues
  countrySelect.addEventListener('change', updatePrices);
  countrySelect.dispatchEvent(new Event('change'));
}

  
  // after loading p = products[id]…
const imgElem = document.getElementById('prod-img');

// create controls wrapper
const ctrl = document.createElement('div');
ctrl.classList.add('image-controls');
ctrl.style.display = 'flex';
ctrl.style.justifyContent = 'center';
ctrl.style.gap = '1rem';
ctrl.style.margin = '1rem 0';

// prev button
const prevBtn = document.createElement('button');
prevBtn.textContent = '←';
prevBtn.classList.add('img-nav');

// next button
const nextBtn = document.createElement('button');
nextBtn.textContent = '→';
nextBtn.classList.add('img-nav');

// insert controls right below image
imgElem.insertAdjacentElement('afterend', ctrl);
ctrl.append(prevBtn, nextBtn);

let imgIndex = 0;

// set initial image
function showImage(i) {
  imgIndex = (i + p.img.length) % p.img.length;
  imgElem.src = p.img[imgIndex] || '';
}
showImage(0);

// navigate
prevBtn.addEventListener('click', () => showImage(imgIndex - 1));
nextBtn.addEventListener('click', () => showImage(imgIndex + 1));

  
if (p.external) {
  // Fully hide and disable form interaction
  const formSection = document.getElementById('product-form');
  if (formSection) {
    formSection.style.display = 'none';
    formSection.style.visibility = 'hidden';
    formSection.style.pointerEvents = 'none';
    formSection.style.height = '0';
    formSection.style.overflow = 'hidden';
  }

  // Create container for external contact info
  const container = document.createElement('div');
  container.classList.add('external-contact');

  const title = document.createElement('p');
  title.textContent = 'This product is sold by a third-party seller. Contact them:';
  container.appendChild(title);

  // Show Email button
  const emailBtn = document.createElement('button');
  emailBtn.textContent = 'Show Email';
  emailBtn.classList.add('contact-btn');

  // Show Phone button
  const phoneBtn = document.createElement('button');
  phoneBtn.textContent = 'Show Phone';
  phoneBtn.classList.add('contact-btn');

  // Email content (hidden initially)
  const emailBox = document.createElement('div');
  emailBox.textContent = `Email: ${p.email}`;
  emailBox.classList.add('contact-info', 'hidden');

  // Phone content (hidden initially)
  const phoneBox = document.createElement('div');
  phoneBox.textContent = `Phone: ${p.phone}`;
  phoneBox.classList.add('contact-info', 'hidden');

  // Button click handlers
  emailBtn.addEventListener('click', () => {
    emailBox.classList.toggle('hidden');
    emailBox.classList.toggle('fade-in');
  });

  phoneBtn.addEventListener('click', () => {
    phoneBox.classList.toggle('hidden');
    phoneBox.classList.toggle('fade-in');
  });

  // Append elements
  container.appendChild(emailBtn);
  container.appendChild(phoneBtn);
  container.appendChild(emailBox);
  container.appendChild(phoneBox);

  // Inject to page
  document.querySelector('.product-info')?.appendChild(container);
}



  quantityInput.max = p.amount;

  const quantityLabel = quantityInput.parentElement;
  const availableNote = document.createElement('small');
  availableNote.textContent = `Available: ${p.amount}`;
  availableNote.style.display = 'block';
  availableNote.style.marginTop = '4px';
  availableNote.style.color = '#666';
  quantityLabel.appendChild(availableNote);

  quantityInput.addEventListener('input', () => {
    if (parseInt(quantityInput.value) > p.amount) {
      quantityInput.value = p.amount;
    }
    updatePrices();
  });

  document.getElementById('prod-img').src = p.img;
  document.getElementById('prod-name').textContent = p.name;
  document.getElementById('prod-company').textContent = p.company;
  document.getElementById('form-product').value = p.name;
  document.getElementById('btn-name').textContent = p.name;
  document.getElementById('prod-longdesc').textContent = p.longdesc || '';

  let priceElem = document.getElementById('prod-price');
  if (!priceElem) {
    priceElem = document.createElement('p');
    priceElem.id = 'prod-price';
    priceElem.style.fontWeight = 'bold';
    priceElem.style.marginTop = '0.5rem';
    document.querySelector('.banner').appendChild(priceElem);
  }
  priceElem.textContent = `Hind: €${p.price.toFixed(2)}`;

  let locationElem = document.getElementById('prod-location');
  if (!locationElem) {
    locationElem = document.createElement('p');
    locationElem.id = 'prod-location';
    locationElem.style.marginTop = '0.25rem';
    document.querySelector('.banner').appendChild(locationElem);
  }
  locationElem.textContent = `Asukoht: ${p.location}`;



  function getShippingCost(country) {
	if (!p.shipment) return 0;
    if (country === 'Estonia') return 5;
    if (["Finland", "Germany", "France", "Sweden", "Other Europe"].includes(country)) return 17;
    return 17;
  }

function updatePrices() {
  const quantity = parseInt(quantityInput.value) || 1;
  const price = p.price * quantity;

  if (p.shipment === false) {
    // Only update unit price and total price without shipping
    unitPrice.textContent = `€${p.price.toFixed(2)} x ${quantity} = €${price.toFixed(2)}`;
    shippingPrice.textContent = '-';
    totalPrice.textContent = `€${price.toFixed(2)}`;
//    shippingLabel.textContent = 'Tellimine pole võimalik selle tootega';
    return;
  }

  // Shipment is available
  const country = countrySelect.value;
  const shipping = getShippingCost(country);
  const total = price + shipping;

  unitPrice.textContent = `€${p.price.toFixed(2)} x ${quantity} = €${price.toFixed(2)}`;
  shippingPrice.textContent = country === 'Non-Europe' ? 'N/A' : `€${shipping.toFixed(2)}`;
  totalPrice.textContent = country === 'Non-Europe' ? 'Not available' : `€${total.toFixed(2)}`;

  if (country === 'Non-Europe') {
    shippingLabel.textContent = 'Shipping unavailable to your location';
    orderButton.disabled = true;
  } else {
    shippingLabel.textContent = 'Tellimise hind:';
    orderButton.disabled = false;
    orderButton.textContent = 'Telli';
  }
}


  countrySelect.addEventListener('change', updatePrices);
  countrySelect.dispatchEvent(new Event('change'));

  document.getElementById("order-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const quantity = parseInt(form.quantity.value) || 1;
    const country = form.country.value;
    const shipping = getShippingCost(country);

    if (country === 'Non-Europe') {
      alert("Sorry, we do not ship outside Europe.");
      return;
    }

    orderButton.disabled = true;
    orderButton.textContent = 'Tellimine...';

    const templateParams = {
      from_name: form.user_email.value,
      product_name: p.name,
      amount: quantity,
      email: form.user_email.value,
      contact: form.user_phone.value,
      country: country,
      adress: form.address.value,
      message: form.message.value || '–',
      user_location: form.user_location.value,
      total_price: (p.price * quantity).toFixed(2),
      shipping_cost: shipping.toFixed(2),
      price: (p.price * quantity + shipping).toFixed(2)
    };

    emailjs.send('service_j9n1vhx', 'template_gyqiz92', templateParams)
      .then(() => {
        window.open('order_confirmed.html', '_self');
        orderButton.textContent = 'Telli';
        orderButton.disabled = false;
        form.reset();
        shippingLabel.textContent = '';
        orderButton.disabled = true;
        updatePrices();
      }, (error) => {
        alert("Failed to send order. Please try again later.");
        orderButton.disabled = false;
        orderButton.textContent = 'Telli';
        console.error(error);
      });
  });

  document.querySelectorAll('.dropdown').forEach(dropdown => {
    let timeout;
    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      const menu = dropdown.querySelector('.dropdown-menu');
      menu.style.display = 'block';
      menu.classList.add('fadeInAnimation');
    });
    dropdown.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        const menu = dropdown.querySelector('.dropdown-menu');
        menu.style.display = 'none';
        menu.classList.remove('fadeInAnimation');
      }, 500);
    });
  });

  updatePrices();
});