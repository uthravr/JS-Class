// E-Commerce Product Dashboard Using Fake Store API
// API URL: https://fakestoreapi.com/products
//1. Fetch Products from API
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    // Display all products on the webpage
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>Price: $${product.price}</p>
        <p>Category: ${product.category}</p>
        <p>Rating: ${product.rating.rate}</p>
      `;
      document.body.appendChild(productElement);
    });
  })
  .catch(error => console.error('Error fetching products:', error));

//2. Search Product
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    const title = product.querySelector('h3').textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});

//3. Category Filter
const categorySelect = document.getElementById('category-select');
categorySelect.addEventListener('change', () => {
  const selectedCategory = categorySelect.value;
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    const category = product.querySelector('p:nth-child(3)').textContent;
    if (selectedCategory === 'all' || category === selectedCategory) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});

//4. Product Statistics
const products = document.querySelectorAll('.product');
const totalProducts = products.length;
const averagePrice = products.reduce((total, product) => total + product.querySelector('p:nth-child(2)').textContent.slice(1), 0) / totalProducts;
const highestPriceProduct = products.reduce((highest, product) => Math.max(highest, product.querySelector('p:nth-child(2)').textContent.slice(1)), 0);
const lowestPriceProduct = products.reduce((lowest, product) => Math.min(lowest, product.querySelector('p:nth-child(2)').textContent.slice(1)), Infinity);
console.log(`Total Products: ${totalProducts}`);
console.log(`Average Price: $${averagePrice.toFixed(2)}`);
console.log(`Highest Price Product: ${highestPriceProduct}`);
console.log(`Lowest Price Product: ${lowestPriceProduct}`);

//5. Add to Cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.parentElement;
    const productInfo = {
      title: product.querySelector('h3').textContent,
      price: product.querySelector('p:nth-child(2)').textContent.slice(1)
    };
    cart.push(productInfo);
    console.log(`Added "${productInfo.title}" to cart for $${productInfo.price}`);
  });
});

//6. Cart Statistics
const cartTotal = cart.reduce((total, item) => total + parseFloat(item.price), 0);
const cartAverage = cartTotal / cart.length;
console.log(`Cart Total: $${cartTotal.toFixed(2)}`);
console.log(`Cart Average: $${cartAverage.toFixed(2)}`);

//7. Remove from Cart
const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
removeFromCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.parentElement;
    const productInfo = {
      title: product.querySelector('h3').textContent,
      price: product.querySelector('p:nth-child(2)').textContent.slice(1)
    };
    const index = cart.findIndex(item => item.title === productInfo.title);
    if (index !== -1) {
      cart.splice(index, 1);
      console.log(`Removed "${productInfo.title}" from cart for $${productInfo.price}`);
    }
  });
});

//8. Clear Cart
const clearCartButton = document.getElementById('clear-cart');
clearCartButton.addEventListener('click', () => {
  cart = [];
  console.log('Cart cleared.');
});

//9. Sort Cart
const sortCartButton = document.getElementById('sort-cart');
sortCartButton.addEventListener('click', () => {
  cart.sort((a, b) => a.price - b.price);
  console.log('Cart sorted by price.');
});

//10. Display Cart
const displayCartButton = document.getElementById('display-cart');
displayCartButton.addEventListener('click', () => {
  const cartElement = document.getElementById('cart');
  cartElement.innerHTML = '';
  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `
      <h3>${item.title}</h3>
      <p>Price: $${item.price}</p>
    `;
    cartElement.appendChild(itemElement);
  });
});

