console.log("hello world")
// get all add to cart buttons
const addToCartBtns = document.querySelectorAll('.add_cart_btn');

// loop through each button and add a click event listener
addToCartBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // get product details from clicked button's parent div
    const product = btn.parentNode.parentNode;
    const id = product.dataset.id;
    const name = product.querySelector('.title').textContent;
    const price = parseFloat(product.querySelector('.amount').textContent.replace('$', ''));
    const image = product.querySelector('img').src;

    // create new cart item object
    const item = {
      id,
      name,
      price,
      image,
      quantity: 1
    };

    // get existing cart data from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || { items: [] };

    // check if item already exists in cart
    const existingItem = cart.items.find((i) => i.id === id);

    if (existingItem) {
      // if item already exists, update quantity
      existingItem.quantity++;
    } else {
      // if item doesn't exist, add new item to items array
      cart.items.push(item);
    }

    // update cart in local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // display success message
    alert(`${name} added to cart`);

  });
});

// display cart items on shopping cart page
const cartItemsContainer = document.querySelector('.cart-items');

// get existing cart data from local storage
const cart = JSON.parse(localStorage.getItem('cart')) || { items: [] };

// create cart items HTML
let cartItemsHtml = '';

// loop through each item and add HTML
cart.items.forEach((item) => {
  cartItemsHtml += `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p>Price: $${item.price.toFixed(2)}</p>
        <p>Quantity: ${item.quantity}</p>
      </div>
    </div>
  `;
});

// add cart items HTML to container
cartItemsContainer.innerHTML = cartItemsHtml;

// display cart total on shopping cart page
const cartTotalContainer = document.querySelector('.cart-total');

// calculate cart total
let cartTotal = 0;

cart.items.forEach((item) => {
  cartTotal += item.price * item.quantity;
});

// add cart total HTML to container
cartTotalContainer.innerHTML = `$${cartTotal.toFixed(2)}`;
