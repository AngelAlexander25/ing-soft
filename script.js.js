// script.js
const productGrid = document.querySelector('.product-grid');

// Sample product data
const products = [
  {
    name: 'Air Jordan 1 Retro High OG',
    price: 179.99,
    image: 'https://example.com/air-jordan-1.jpg'
  },
  {
    name: 'Nike Air Force 1 \'07', // Apóstrofe escapado con barra invertida
    price: 89.99,
    image: 'https://example.com/air-force-1.jpg'
  },
  // Add more products here
];

// Render products
function renderProducts() {
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;

    const productName = document.createElement('h3');
    productName.textContent = product.name;

    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price}`;

    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);

    productGrid.appendChild(productCard);
  });
}

// Call the renderProducts function
renderProducts();