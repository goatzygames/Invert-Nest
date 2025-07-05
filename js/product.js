document.addEventListener("DOMContentLoaded", function () {
  // Your products data
  window.products = {
    '001': {
      name: 'Sample Terrarium',
      company: 'ReptiHome',
      desc: 'A perfect enclosure for reptiles and amphibians.',
      img: [
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-cdn.ubuy.co.in%2F63697361d0fcb11e6537d1d8-bucatstate-hamster-wheel-silent.jpg&f=1&nofb=1&ipt=9548a7b96a7c0718076f9c7ae382d86581ce5e79b2c8dff741247f025c815602'
      ],
      price: 10.55,
      location: 'New York Store',
      categories: ['inverts_enclosures', 'reptiles_enclosures'],
      longdesc: 'The most suitable enclosures for many invertebrates, reptiles and some amphibians. Perfect also for a growth terrarium where your pet can grow to adulthood and then upgrade to a more suitable enclosure.',
      amount: 1,
	  external: false,
	  email: 'e',
	  phone: '4',
	  shipment: true
    },
    '002-InvertNest': {
      id: '002',
      name: 'Fun Hamster Wheel',
      company: 'RodentFun',
      desc: 'A durable wheel for small rodents to stay active.',
      img: [
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-cdn.ubuy.co.in%2F63697361d0fcb11e6537d1d8-bucatstate-hamster-wheel-silent.jpg&f=1&nofb=1&ipt=9548a7b96a7c0718076f9c7ae382d86581ce5e79b2c8dff741247f025c815602'
      ],
      price: 14.99,
      location: 'Tallinn',
      categories: ['rodents_toys', 'inverts_decorations', 'featured'],
      longdesc: 'Great wheel for many small rodents which is made of wood. It does get worn over time but is very very quiet and easy to use for your partner rodent.',
      amount: 15,
	  external: false,
	  email: 'e',
	  phone: '4',
	  shipment: true
    },
    '003-InvertNest': {
      id: '003',
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
//  document.getElementById('btn-name').textContent = p.name;
  document.getElementById('prod-longdesc').textContent = p.longdesc || '';

  let priceElem = document.getElementById('prod-price');
  if (!priceElem) {
    priceElem = document.createElement('p');
    priceElem.id = 'prod-price';
    priceElem.style.fontWeight = 'bold';
    priceElem.style.marginTop = '0.5rem';
    document.querySelector('.banner').appendChild(priceElem);
  }
  priceElem.textContent = `Price: €${p.price.toFixed(2)}`;

  let locationElem = document.getElementById('prod-location');
  if (!locationElem) {
    locationElem = document.createElement('p');
    locationElem.id = 'prod-location';
    locationElem.style.marginTop = '0.25rem';
    document.querySelector('.banner').appendChild(locationElem);
  }
  locationElem.textContent = `Location: ${p.location}`;

  if (!document.getElementById('form-location')) {
    const locationLabel = document.createElement('label');
    locationLabel.textContent = 'Location: ';
    const locationInput = document.createElement('input');
    locationInput.type = 'text';
    locationInput.name = 'user_location';
    locationInput.id = 'form-location';
    locationInput.required = true;
    locationInput.placeholder = 'Enter your location for shipping/pickup';
    locationLabel.appendChild(locationInput);
    const form = document.getElementById('order-form');
    form.insertBefore(locationLabel, form.lastElementChild);
  }



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
    shippingLabel.textContent = 'Shipping not available for this product';
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
    shippingLabel.textContent = 'Shipping cost:';
    orderButton.disabled = false;
    orderButton.textContent = 'Order Now';
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
    orderButton.textContent = 'Ordering...';

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
        orderButton.textContent = 'Order';
        orderButton.disabled = false;
        form.reset();
        shippingLabel.textContent = '';
        orderButton.disabled = true;
        updatePrices();
      }, (error) => {
        alert("Failed to send order. Please try again later.");
        orderButton.disabled = false;
        orderButton.textContent = 'Order';
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