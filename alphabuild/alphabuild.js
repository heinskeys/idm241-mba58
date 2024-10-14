// Get the modal
var addedmodal = document.getElementById("addedModal");

// Get the button that opens the modal
var addedButton = document.getElementById("addtocartButton"); // Changed the ID to match HTML

// Get the <span> element that closes the modal
var closeButton = document.getElementsByClassName("addButtonClose")[0];

// When the user clicks on the button, open the modal
addedButton.onclick = function() {
    addedmodal.style.display = "block";  // Fixed the missing dot before 'style'
}

// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
    addedmodal.style.display = "none"; // Close the modal, not just the closeButton
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == addedmodal) {
        addedmodal.style.display = "none";
    }
}
