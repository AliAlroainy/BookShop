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
    var y = document.getElementById("search");
    var x = document.getElementById("nav");

    if (x.className === "nv") {
      x.className += " nv1";
      y.style.width = "30vw";
      y.style.border = "#333 1px solid"

    } else {
      x.className = "nv";
      y.style.width = "60vw"
      y.style.border = "none"
    }
  }

// ------------------------------------