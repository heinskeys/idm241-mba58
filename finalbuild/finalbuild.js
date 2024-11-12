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





