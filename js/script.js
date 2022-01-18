// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// menu bar -------------------------------
function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "nv") {
      x.className += " nv1";
    } else {
      x.className = "nv";
    }
  }

// ------------------------------------