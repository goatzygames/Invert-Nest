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
      amount: 1
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
      amount: 15
    },
    '003-InvertNest': {
      id: '003',
      name: '40 Gallon Aquarium',
      company: 'Unknown',
      desc: '40 gallon or 181 liter aquarium suitable for most inverts, fish, amphibians and some reptiles.',
      img: [
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.offerup.com%2Fzjh340Gw6F2NU1BVrS9WaOXSGiY%3D%2F1920x1440%2F0f45%2F0f4584f52d5845958f25e274f839b1cb.jpg&f=1&nofb=1&ipt=d896e039aef4c99d119267c960441cbac1dd19878f5f0907b962c7dc1f7f76b8'
      ],
      price: 99.99,
      location: 'Nomme',
      categories: ['inverts_enclosures', 'rodents_enclosures', 'amphibians_enclosures', 'reptiles_enclosures', 'featured'],
      longdesc: 'A 40 Gallon or 181 Liter aquarium perfect for most invertebrates, some rodents, some reptiles and a couple of amphibians. Fairly used, but recently new aquarium silicone has been put.',
      amount: 1
    }
  };

  // Load product
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const p = products[id] || products['001'];

  const quantityInput = document.getElementById('form-quantity');
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

  const countrySelect = document.getElementById('country-select');
  const shippingLabel = document.getElementById('shipping-cost-label');
  const orderButton = document.getElementById('order-button');
  const unitPrice = document.getElementById('unit-price');
  const shippingPrice = document.getElementById('shipping-price');
  const totalPrice = document.getElementById('total-price');

  function getShippingCost(country) {
    if (country === 'Estonia') return 5;
    if (["Finland", "Germany", "France", "Sweden", "Other Europe"].includes(country)) return 17;
    return 17;
  }

  function updatePrices() {
    const quantity = parseInt(quantityInput.value) || 1;
    const price = p.price * quantity;
    const country = countrySelect.value;
    const shipping = getShippingCost(country);
    const total = price + shipping;

    unitPrice.textContent = `€${p.price.toFixed(2)} x ${quantity} = €${price.toFixed(2)}`;
    shippingPrice.textContent = country === 'Non-Europe' ? 'N/A' : `€${shipping.toFixed(2)}`;
    totalPrice.textContent = country === 'Non-Europe' ? 'Not available' : `€${total.toFixed(2)}`;

    if (country === 'Non-Europe') {
      shippingLabel.textContent = 'Shipping unavailable to your location';
      orderButton.disabled = true;
    } else if (shipping > 0) {
      shippingLabel.textContent = `Shipping cost: €${shipping.toFixed(0)}`;
      orderButton.disabled = false;
    } else {
      shippingLabel.textContent = '';
      orderButton.disabled = true;
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
