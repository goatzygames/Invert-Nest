const products = {
  '001': {
    id: '001',
    categories: ['rodents_toys', 'inverts_decorations'],
    name: 'Fun Hamster Wheel',
    company: 'RodentFun',
    desc: 'A durable wheel for small rodents to stay active.',
    img: [
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-cdn.ubuy.co.in%2F63697361d0fcb11e6537d1d8-bucatstate-hamster-wheel-silent.jpg&f=1&nofb=1&ipt=9548a7b96a7c0718076f9c7ae382d86581ce5e79b2c8dff741247f025c815602',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnaturefins.com%2Fwp-content%2Fuploads%2F2024%2F01%2FHamster-Wheel-Safety-Tips.jpg&f=1&nofb=1&ipt=e710e9f26daa48fdcf74ea7baf82b8ebe494278f0cfec4e6da86bb1769d79bd2',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F714NrHsf4pL._AC_SL1500_.jpg&f=1&nofb=1&ipt=f3ad662078434011786556cc23aabf906257bd4448dd01c69ba1b8402f713fd2'
    ],
    price: 14.99,
    maxQuantity: 2,
    location: 'Tallinn'
  },
  '002': {
    id: '002',
    categories: ['rodents_enclosures', 'inverts_enclosures', 'amphibians_enclosures'],
    name: '40 Gallon Aquarium',
    company: 'Unknown',
    desc: '40 gallon or 181 liter aquarium suitable for most inverts, fish, amphibians and some reptiles.',
    img: [
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.offerup.com%2Fzjh340Gw6F2NU1BVrS9WaOXSGiY%3D%2F1920x1440%2F0f45%2F0f4584f52d5845958f25e274f839b1cb.jpg&f=1&nofb=1&ipt=d896e039aef4c99d119267c960441cbac1a51b9b1b1b',
    ],
    price: 50,
    maxQuantity: 1,
    location: 'Tallinn'
  }
};

//let currentProductId = null;
//let currentImageIndex = 0;

function getProductFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('product');
  console.log('Product ID from URL:', productId);
//  if (!productId || !products[productId]) {
//    console.log('Product not found for ID:', productId);
//    return null;
//  }
  return products[productId];
}


function updateProductDetails(product) {
  currentProductId = product.id;

  document.getElementById('prod-name').textContent = product.name;
  document.getElementById('prod-company').textContent = product.company;
  document.getElementById('prod-desc').textContent = product.desc;
  document.getElementById('prod-price').textContent = product.price.toFixed(2);
  document.getElementById('form-product').value = product.id;

  // Set quantity max and reset to 1
  const quantityInput = document.getElementById('form-quantity');
  quantityInput.max = product.maxQuantity;
  quantityInput.value = 1;

  // Load first image
  currentImageIndex = 0;
  const prodImg = document.getElementById('prod-img');
  prodImg.src = product.img[0];
  prodImg.alt = `Image of ${product.name}`;

  // Setup shipping cost label (initially empty, will update based on country)
  document.getElementById('shipping-cost-label').textContent = '';

  // Enable/disable next/prev buttons based on images length
  updateImageButtons(product.img.length);
}

function updateImageButtons(imageCount) {
  document.getElementById('img-prev').disabled = (imageCount <= 1);
  document.getElementById('img-next').disabled = (imageCount <= 1);
}

function nextImage() {
  const product = products[currentProductId];
  if (!product) return;
  currentImageIndex++;
  if (currentImageIndex >= product.img.length) {
    currentImageIndex = 0;
  }
  document.getElementById('prod-img').src = product.img[currentImageIndex];
}

function prevImage() {
  const product = products[currentProductId];
  if (!product) return;
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = product.img.length - 1;
  }
  document.getElementById('prod-img').src = product.img[currentImageIndex];
}

// Shipping cost example (can adjust logic here)
function calculateShippingCost(country) {
  // Let's say flat rate for EU countries = €5, else €15
  const euCountries = [
    'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia',
    'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece',
    'Hungary', 'Iceland', 'Ireland', 'Italy', 'Latvia', 'Lithuania',
    'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania',
    'Slovakia', 'Slovenia', 'Spain', 'Sweden'
  ];
  if (euCountries.includes(country)) {
    return 5;
  }
  return 15;
}

function updateShippingCostLabel() {
  const country = document.getElementById('country-select').value;
  if (!country) {
    document.getElementById('shipping-cost-label').textContent = '';
    return;
  }
  const cost = calculateShippingCost(country);
  document.getElementById('shipping-cost-label').textContent = `Shipping Cost: €${cost.toFixed(2)}`;
}

// Validate quantity input to maxQuantity
function validateQuantity() {
  const product = products[currentProductId];
  if (!product) return;
  const quantityInput = document.getElementById('form-quantity');
  let val = parseInt(quantityInput.value, 10);
  if (isNaN(val) || val < 1) {
    val = 1;
  }
  if (val > product.maxQuantity) {
    val = product.maxQuantity;
  }
  quantityInput.value = val;
}

// Setup PayPal button
function setupPayPalButton() {
  paypal.Buttons({
    style: {
      layout: 'vertical',
      color: 'blue',
      shape: 'rect',
      label: 'pay',
    },

    createOrder: function (data, actions) {
      const product = products[currentProductId];
//      if (!product) {
//        alert('Invalid product.');
//        return actions.reject();
//      }

      const quantity = parseInt(document.getElementById('form-quantity').value, 10);
      const shippingCountry = document.getElementById('country-select').value;
      const shippingCost = calculateShippingCost(shippingCountry);
      const totalAmount = (product.price * quantity) + shippingCost;

      return actions.order.create({
        purchase_units: [{
          description: `${product.name} (x${quantity})`,
          amount: {
            currency_code: 'EUR',
            value: totalAmount.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: (product.price * quantity).toFixed(2),
              },
              shipping: {
                currency_code: 'EUR',
                value: shippingCost.toFixed(2),
              }
            }
          },
          items: [{
            name: product.name,
            unit_amount: {
              currency_code: 'EUR',
              value: product.price.toFixed(2),
            },
            quantity: quantity.toString()
          }]
        }]
      });
    },

    onApprove: function (data, actions) {
      return actions.order.capture().then(function (details) {
        alert(`Transaction completed by ${details.payer.name.given_name}!`);
        // Redirect or update UI after success here
        window.location.href = 'thankyou.html'; // or some page for confirmation
      });
    },

    onError: function (err) {
      console.error(err);
      alert('An error occurred during the transaction.');
    }

  }).render('#paypal-button-container');
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('product'); // or 'id', choose one
  if (!productId || !products[productId]) {
    // show error
    return;
  }

  currentProductId = productId;  // set global var for PayPal
  updateProductDetails(products[productId]);

  // Setup event listeners
  document.getElementById('img-next').addEventListener('click', nextImage);
  document.getElementById('img-prev').addEventListener('click', prevImage);
  document.getElementById('country-select').addEventListener('change', updateShippingCostLabel);
  document.getElementById('form-quantity').addEventListener('input', validateQuantity);

  setupPayPalButton();
});


// Global vars for current image index
let currentImageIndex = 0;
let currentProduct = null;

// Get product ID from URL ?id=...
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

if (!productId) {
  console.error('No product id found in URL');
  displayError('No product selected.');
} else {
  loadProduct(productId);
}

// Display error message in place of product details
function displayError(message) {
  const container = document.querySelector('.product-page');
  if (container) {
    container.innerHTML = `<p style="color:red; font-weight:bold; padding:2rem;">${message}</p>`;
  }
}

function loadProduct(id) {
  const product = products[id];
  if (!product) {
    console.error(`Product with id ${id} not found`);
    displayError('Product not found.');
    return;
  }

  currentProduct = product;

  // Fill in product info
  document.getElementById('prod-name').textContent = product.name;
  document.getElementById('prod-company').textContent = product.company;
  document.getElementById('prod-desc').textContent = product.description;
  document.getElementById('prod-price').textContent = product.price.toFixed(2);

  // Fill hidden input in form with product ID
  const formProductInput = document.getElementById('form-product');
  if (formProductInput) {
    formProductInput.value = product.id;
  }

  // Setup image carousel with first image
  currentImageIndex = 0;
  updateProductImage();

  // Attach event listeners for image navigation buttons
  const btnPrev = document.getElementById('img-prev');
  const btnNext = document.getElementById('img-next');
  if (btnPrev) btnPrev.addEventListener('click', prevImage);
  if (btnNext) btnNext.addEventListener('click', nextImage);
}

// Update <img> src to current image
function updateProductImage() {
  if (!currentProduct || !currentProduct.img || currentProduct.img.length === 0) {
    return;
  }
  const imgElem = document.getElementById('prod-img');
  if (!imgElem) return;

  imgElem.src = currentProduct.img[currentImageIndex];
  imgElem.alt = `${currentProduct.name} image ${currentImageIndex + 1}`;
}

// Move to previous image in carousel
function prevImage() {
  if (!currentProduct || !currentProduct.img) return;

  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = currentProduct.img.length - 1;
  }
  updateProductImage();
}

// Move to next image in carousel
function nextImage() {
  if (!currentProduct || !currentProduct.img) return;

  currentImageIndex++;
  if (currentImageIndex >= currentProduct.img.length) {
    currentImageIndex = 0;
  }
  updateProductImage();
}

paypal.Buttons({
  // Create the order on your server
  async createOrder(data, actions) {
    // Gather product and quantity info dynamically from your page/form
    const productSKU = document.getElementById('form-product').value || 'default_sku';
    const quantity = document.getElementById('form-quantity').value || 1;

    // You might also send price or other info if needed

    const response = await fetch('/my-server/create-paypal-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cart: [{
          sku: productSKU,
          quantity: quantity,
        }],
      }),
    });

    const order = await response.json();

    return order.id; // PayPal expects the order ID to continue
  },

  // Optional: define what happens on approval
  onApprove(data, actions) {
    return actions.order.capture().then(function(details) {
      alert('Transaction completed by ' + details.payer.name.given_name + '!');
      // You can redirect or show a success message here
    });
  },

  // Optional: error handling
  onError(err) {
    console.error('PayPal Buttons Error:', err);
    alert('There was an error processing your payment.');
  }
}).render('#paypal-button-container');
