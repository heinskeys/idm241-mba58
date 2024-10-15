// Modal base code from W3Schools
var addedmodal = document.getElementById("addedModal");

var addedButton = document.getElementById("addtocartButton"); 

var closeButton = document.getElementsByClassName("addButtonClose")[0];

addedButton.onclick = function() {
    addedmodal.style.display = "block"; 
}

closeButton.onclick = function() {
    addedmodal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == addedmodal) {
        addedmodal.style.display = "none";
    }
}
