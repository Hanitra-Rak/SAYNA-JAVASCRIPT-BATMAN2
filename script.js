// Get the select element
const selectElement = document.getElementById("frequency");

// Check if a value is stored in local storage
const selectedValue = localStorage.getItem("selectedFrequency");

if (selectedValue) {
  // If a value is found, set the select element's value
  selectElement.value = selectedValue;
}

// Add an event listener to the select element
selectElement.addEventListener("change", function(e) {
  // Store the selected value in local storage
  localStorage.setItem("selectedFrequency", e.target.value);
});

// Check if the page is being loaded for the first time or after a refresh
if (performance.navigation.type === 1) {
  // Page is being loaded after a refresh, clear the stored value
  localStorage.removeItem("selectedFrequency");
}

// Get the textarea element
const textarea = document.getElementById("message");

// Adjust the textarea height based on the content
textarea.addEventListener("input", function() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});

//Smooth scroll
document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.icon-list a');
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', smoothScroll);
  }
  
  function smoothScroll(event) {
    event.preventDefault();
    var targetId = this.getAttribute('href');
    var targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      var targetPosition = targetElement.offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
        scrollAmount: 2  // Adjust the scrollAmount to control the speed (lower value for slower speed)
      });
    }
  }
});

//SLIDER JS
$(document).ready(function() {
  // Variables
  var slides = $('.slide');
  var totalSlides = slides.length;
  var currentIndex = 0;

  // Set initial slide as active
  slides.eq(currentIndex).addClass('active');

  // Handle arrow clicks
  $('.arrow.left').click(function() {
    goToSlide(currentIndex - 1);
  });

  $('.arrow.right').click(function() {
    goToSlide(currentIndex + 1);
  });

  // Function to navigate to a specific slide
  function goToSlide(index) {
    if (index < 0) {
      index = totalSlides - 1;
    } else if (index >= totalSlides) {
      index = 0;
    }

    slides.removeClass('active');
    slides.eq(index).addClass('active');
    currentIndex = index;
  }
});


