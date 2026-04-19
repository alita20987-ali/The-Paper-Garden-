// 1. Navbar Count Update (Har page par chalega)
updateCartCount();

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('userCart')) || [];
    const countElement = document.getElementById('cart-count');
    if(countElement) countElement.innerText = cart.length;
}

// 2. Add to Cart Logic (Purchase Page)
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const name = e.target.getAttribute('data-name');
        const price = e.target.getAttribute('data-price');
        
        let cart = JSON.parse(localStorage.getItem('userCart')) || [];
        cart.push({ name, price });
        localStorage.setItem('userCart', JSON.stringify(cart));
        
        updateCartCount();
        alert(name + " added to cart! 🌸");
    });
});

// 3. Cart Page Logic (Sirf cart.html par chalega)
if (window.location.pathname.includes('cart.html')) {
    const listDiv = document.getElementById('cart-items-list');
    const totalSpan = document.getElementById('cart-total-price');
    let cart = JSON.parse(localStorage.getItem('userCart')) || [];
    let total = 0;

    if(cart.length === 0) {
        listDiv.innerHTML = "<p class='text-center'>Your cart is empty!</p>";
    } else {
        cart.forEach((item, index) => {
            listDiv.innerHTML += `
                <div class="d-flex justify-content-between mb-2">
                    <span>${item.name}</span>
                    <span>RS: ${item.price}</span>
                </div>`;
            total += parseInt(item.price);
        });
        totalSpan.innerText = total;
    }
}
function clearFullCart() {
    // 1. LocalStorage se cart ura dein
    localStorage.removeItem('userCart');
    
    // 2. Page reload karein taake zero nazar aye
    location.reload();
}