// SLIDESHOW
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
	
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 4000);
	
}

var $slider = document.getElementById('slider');
var $toggle = document.getElementById('toggle');


$toggle.addEventListener('click', function() {
    var isOpen = $slider.classList.contains('slide-in');

    $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
	
});

// Menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";

}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


function myFunction(x) {
    x.classList.toggle("change");
}






	



