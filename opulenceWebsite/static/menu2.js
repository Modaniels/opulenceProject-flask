let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
  // Add item to cart array
  cart.push({ name, price });
  totalPrice += price;

  // Update cart display
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceDisplay = document.getElementById("total-price");

  // Clear the current display
  cartItemsContainer.innerHTML = "";

  // Populate cart with items
  cart.forEach((item, index) => {
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button>`;
    cartItemsContainer.appendChild(cartItem);
  });

  // Update total price
  totalPriceDisplay.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

function removeFromCart(index) {
  // Remove item from cart array and update total price
  totalPrice -= cart[index].price;
  cart.splice(index, 1);

  // Update cart display
  updateCartDisplay();
}

function clearCart() {
  // Clear cart array and reset total price
  cart = [];
  totalPrice = 0;

  // Update cart display
  updateCartDisplay();
}

    function toggleCart() {
        const cart = document.getElementById("cart");
        if (cart.style.display === "none" || cart.style.display === "") {
            cart.style.display = "block"; // Show the cart
        } else {
            cart.style.display = "none"; // Hide the cart
        }
    }

    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
    
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('.navbar').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
