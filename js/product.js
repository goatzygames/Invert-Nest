
window.addEventListener('DOMContentLoaded', () => {
  // EmailJS init
  emailjs.init('fDC7IwPjHjeATTz2c');

// Your products data
const products = {
  '001': {
    name: 'Sample Terrarium',
    company: 'ReptiHome',
    desc: 'A perfect enclosure for reptiles and amphibians.',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-cdn.ubuy.co.in%2F63697361d0fcb11e6537d1d8-bucatstate-hamster-wheel-silent.jpg&f=1&nofb=1&ipt=9548a7b96a7c0718076f9c7ae382d86581ce5e79b2c8dff741247f025c815602',
    price: 10.55,
    location: 'New York Store'
  },
  '002': {
    id: '002',
    category: 'rodents_toys',
    name: 'Fun Hamster Wheel',
    company: 'RodentFun',
    desc: 'A durable wheel for small rodents to stay active.',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-cdn.ubuy.co.in%2F63697361d0fcb11e6537d1d8-bucatstate-hamster-wheel-silent.jpg&f=1&nofb=1&ipt=9548a7b96a7c0718076f9c7ae382d86581ce5e79b2c8dff741247f025c815602',
    price: 14.99,
    location: 'Tallinn'
  },
  '003': {
    id: '003',
    category: 'inverts_enclosures',
    name: '40 Gallon Aquarium',
    company: 'Unknown',
    desc: '40 gallon or 181 liter aquarium suitable for most inverts, fish, amphibians and some reptiles.',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.offerup.com%2Fzjh340Gw6F2NU1BVrS9WaOXSGiY%3D%2F1920x1440%2F0f45%2F0f4584f52d5845958f25e274f839b1cb.jpg&f=1&nofb=1&ipt=d896e039aef4c99d119267c960441cbac1dd19878f5f0907b962c7dc1f7f76b8',
    price: 99.99,
    location: 'Nomme'
  }
};

  // Load product info from URL params or default
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const p = products[id] || products['001'];

  // Populate page elements
  document.getElementById('prod-img').src = p.img;
  document.getElementById('prod-name').textContent = p.name;
  document.getElementById('prod-company').textContent = p.company;
  document.getElementById('prod-desc').textContent = p.desc;
  document.getElementById('form-product').value = p.name;
  document.getElementById('btn-name').textContent = p.name;

  // Add price and location display
  let priceElem = document.getElementById('prod-price');
  if (!priceElem) {
    priceElem = document.createElement('p');
    priceElem.id = 'prod-price';
    priceElem.style.fontWeight = 'bold';
    priceElem.style.marginTop = '0.5rem';
    document.querySelector('.banner').appendChild(priceElem);
  }
  priceElem.textContent = `Price: $${p.price.toFixed(2)}`;

  let locationElem = document.getElementById('prod-location');
  if (!locationElem) {
    locationElem = document.createElement('p');
    locationElem.id = 'prod-location';
    locationElem.style.marginTop = '0.25rem';
    document.querySelector('.banner').appendChild(locationElem);
  }
  locationElem.textContent = `Location: ${p.location}`;

  // Add location input dynamically if missing
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

  // Elements for shipping cost and order button
  const countrySelect = document.getElementById('country-select');
  const shippingLabel = document.getElementById('shipping-cost-label');
  const orderButton = document.getElementById('order-button');

  // Shipping cost logic on country change
  countrySelect.addEventListener('change', () => {
    const country = countrySelect.value;
    if (country === 'Estonia') {
      shippingLabel.textContent = 'Shipping cost: 5€';
      orderButton.disabled = false;
    } else if (["Finland", "Germany", "France", "Sweden", "Other Europe"].includes(country)) {
      shippingLabel.textContent = 'Shipping cost: 9€';
      orderButton.disabled = false;
    } else if (country === 'Non-Europe') {
      shippingLabel.textContent = 'Shipping unavailable to your location';
      orderButton.disabled = true;
    } else {
      shippingLabel.textContent = '';
      orderButton.disabled = true;
    }
  });

  // Trigger shipping label update on page load if a country is already selected
  countrySelect.dispatchEvent(new Event('change'));

  // Handle form submission
  document.getElementById("order-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const productName = document.getElementById("prod-name").textContent;
    const quantity = form.quantity.value;
    const email = form.user_email.value;
    const phone = form.user_phone.value;
    const country = form.country.value;
    const address = form.address.value;
    const comments = form.message.value;
    const userLocation = form.user_location.value;

    if (country === 'Non-Europe') {
      alert("Sorry, we do not ship outside Europe.");
      return;
    }

    orderButton.disabled = true;
    orderButton.textContent = 'Ordering...';

    const templateParams = {
      from_name: email,
      product_name: productName,
      email: email,
      contact: phone,
      country: country,
      address: address,
      message: comments,
      location: userLocation,
      orders: [
        {
          name: productName,
          amount: quantity
        }
      ]
    };

    emailjs.send('service_yddghw9', 'template_nyjn1dh', templateParams)
      .then(function(response) {
        alert("Order sent! We'll contact you soon.");
				window.open('order_confirmed.html', '_self');
        orderButton.textContent = 'Order';
        orderButton.disabled = false;
        form.reset();
        // Reset shipping label and disable button after reset
        shippingLabel.textContent = '';
        orderButton.disabled = true;
      }, function(error) {
        alert("Failed to send order. Please try again later.");
        orderButton.disabled = false;
        orderButton.textContent = 'Order';
        console.error(error);
      });
  });
});

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
    }, 1000); // 1000ms = 1 second delay before hiding
  });
});
