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

var viewButton = document.querySelector('.viewCartButton');

// Add a mousedown event to increase the size
viewButton.addEventListener('mousedown', function() {
    viewButton.style.transform = 'scale(1.08)'; // Increase size when mouse is pressed down
});

// Add a mouseup event to decrease the size and navigate to the cart
viewButton.addEventListener('mouseup', function() {
    viewButton.style.transform = 'scale(1)'; // Reset size when mouse is released
    window.open('https://store.steampowered.com/cart', '_blank') // Redirect to the cart page
});

viewButton.addEventListener('mouseleave', function() {
    viewButton.style.transform = 'scale(1)';
});

var continueButton = document.querySelector('.continueButton');

// Add a mousedown event to increase the size
continueButton.addEventListener('mousedown', function() {
    continueButton.style.transform = 'scale(1.08)'; // Increase size when mouse is pressed down
});

// Add a mouseup event to decrease the size and navigate to the cart
continueButton.addEventListener('mouseup', function() {
    continueButton.style.transform = 'scale(1)'; // Reset size when mouse is released
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
});

continueButton.addEventListener('mouseleave', function() {
    continueButton.style.transform = 'scale(1)';
});






