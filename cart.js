let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';

    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
        cartItemsDiv.appendChild(cartItemDiv);
    });
}

function checkout() {
    alert('Checkout completed! Total amount: $' + calculateTotal());
    // Optionally, you can send the cart data to a server for further processing.
    cart = []; // Clear the cart after checkout
    updateCartDisplay();
}

function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
}