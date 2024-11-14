// !Modal base code from W3Schools.
// *Modal JS

var addToCartButton = document.getElementById('addtocartButton');
var modal = document.getElementById('addedModal');
var closeButton = modal.querySelector('.addButtonClose');

addToCartButton.addEventListener('click', function() {
    modal.style.display = 'flex';
    requestAnimationFrame(() => {
        modal.classList.add('show');
    });
});

closeButton.addEventListener('click', function() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
});

var button = document.querySelector('.viewCartButton');

// Add a mousedown event to increase the size
button.addEventListener('mousedown', function() {
    button.style.transform = 'scale(1.08)'; // Increase size when mouse is pressed down
});

// Add a mouseup event to decrease the size and navigate to the cart
button.addEventListener('mouseup', function() {
    button.style.transform = 'scale(1)'; // Reset size when mouse is released
    window.open('https://store.steampowered.com/cart', '_blank') // Redirect to the cart page
});

// Optional: Add a mouseleave event to reset size if the mouse leaves the button while pressed
button.addEventListener('mouseleave', function() {
    button.style.transform = 'scale(1)';
});






