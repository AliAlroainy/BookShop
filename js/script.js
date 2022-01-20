// Get the modal
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal || event.target == modal2) {
        modal.style.display = "none";
        modal2.style.display = "none";
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

function checkCart(){

  var c = document.getElementById('counter-cart');
  c.style.visibility ='visible';
  var x =  parseInt(c.innerText);
  x++;
  c.innerText = x;
}