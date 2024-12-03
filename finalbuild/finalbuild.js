// !Modal base code from W3Schools.
// *Modal JS

// Select all 'Add to Cart' buttons
var addToCartButtons = document.querySelectorAll('.addButton');

// Iterate over each button
addToCartButtons.forEach(function(addToCartButton) {
    // Get the associated modal for this specific button
    var modal = addToCartButton.closest('.gameContent').querySelector('.addedModal');
    var closeButton = modal.querySelector('.addButtonClose');

    // Show the modal when the add to cart button is clicked
    addToCartButton.addEventListener('click', function() {
        console.log('Add to Cart button clicked!');
        modal.style.display = 'flex'; // Show the modal
        requestAnimationFrame(() => {
            modal.classList.add('show'); // Add the 'show' class for animation
        });
    });

    // Close the modal when close button is clicked
    closeButton.addEventListener('click', function() {
        console.log('Close button clicked!');
        modal.classList.remove('show'); // Hide the modal with animation
        setTimeout(() => {
            modal.style.display = 'none'; // Set display to none after animation
        }, 300);
    });

    // Select the 'View Cart' and 'Continue Shopping' buttons inside the modal
    var viewButton = modal.querySelector('.viewCartButton');
    var continueButton = modal.querySelector('.continueButton');

    // Add a mousedown event to increase the size for the viewCartButton
    viewButton.addEventListener('mousedown', function() {
        console.log('View Cart button pressed!');
        viewButton.style.transform = 'scale(1.08)'; // Increase size
    });

    // Add a mouseup event to reset the size and open the cart link
    viewButton.addEventListener('mouseup', function() {
        console.log('View Cart button released!');
        viewButton.style.transform = 'scale(1)'; // Reset size
        window.open('https://store.steampowered.com/cart', '_blank'); // Open cart in new tab
    });

    // Reset the size if mouse leaves
    viewButton.addEventListener('mouseleave', function() {
        viewButton.style.transform = 'scale(1)';
    });

    // Add a mousedown event to increase the size for the continueButton
    continueButton.addEventListener('mousedown', function() {
        console.log('Continue Shopping button pressed!');
        continueButton.style.transform = 'scale(1.08)'; // Increase size
    });

    // Add a mouseup event to reset the size and close the modal
    continueButton.addEventListener('mouseup', function() {
        console.log('Continue Shopping button released!');
        continueButton.style.transform = 'scale(1)'; // Reset size
        modal.classList.remove('show'); // Close modal
        setTimeout(() => {
            modal.style.display = 'none'; // Set display to none after animation
        }, 300);
    });

    // Reset the size if mouse leaves
    continueButton.addEventListener('mouseleave', function() {
        continueButton.style.transform = 'scale(1)';
    });
});
