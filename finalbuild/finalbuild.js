// *Added to Cart modal
// Each wishlist item has its own modal. Animation is handled entirely in CSS
// by toggling the 'show' class — JS just manages state and focus.

const CART_URL = 'https://store.steampowered.com/cart';

let openModal = null;
let lastTrigger = null;

function showModal(modal, trigger) {
    openModal = modal;
    lastTrigger = trigger;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modalOpen');
    modal.querySelector('.addButtonClose').focus({ preventScroll: true });
}

function hideModal() {
    if (!openModal) return;
    openModal.classList.remove('show');
    openModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modalOpen');
    // Return focus to the button that opened the modal
    if (lastTrigger) lastTrigger.focus({ preventScroll: true });
    openModal = null;
}

document.querySelectorAll('.wishlistItem').forEach(function(item) {
    const addButton = item.querySelector('.addButton');
    const modal = item.querySelector('.addedModal');

    addButton.addEventListener('click', function() {
        showModal(modal, addButton);
    });

    modal.querySelector('.addButtonClose').addEventListener('click', hideModal);
    modal.querySelector('.continueButton').addEventListener('click', hideModal);

    // Grow-on-press is CSS (:active); click fires on mouse up
    modal.querySelector('.viewCartButton').addEventListener('click', function() {
        window.open(CART_URL, '_blank', 'noopener');
    });

    // Clicking the dimmed backdrop (not the modal box itself) closes it
    modal.addEventListener('click', function(event) {
        if (event.target === modal) hideModal();
    });
});

document.addEventListener('keydown', function(event) {
    if (!openModal) return;

    if (event.key === 'Escape') {
        hideModal();
        return;
    }

    // Keep Tab cycling inside the open modal instead of wandering behind it
    if (event.key === 'Tab') {
        const focusable = openModal.querySelectorAll('button');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }
});
