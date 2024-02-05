function openFullscreen() {
            var fullscreenElement = document.getElementById("fullscreen");
            fullscreenElement.style.display = "block";
        }

        function closeFullscreen() {
            var fullscreenElement = document.getElementById("fullscreen");
            fullscreenElement.style.display = "none";
        }
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  // Perform validation and send the form data to the server
  
  // Reset the form after submission
  document.getElementById("contactForm").reset();
});
document.getElementById('purchaseForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var product = document.getElementById('product').value;
  var quantity = document.getElementById('quantity').value;
  var number = document.getElementById('number'). value;

  // Create email body
  var emailBody = 'Name: ' + Name + '\n';
  emailBody += 'Email: ' + Email + '\n';
  emailBody += 'Product: ' + Product + '\n';
  emailBody += 'Quantity: ' + Quantity + '\n';
  emailBody += 'Number: ' + Number + 'n';

  // Send email
  var mailtoLink = 'mailto:lloyd.delacruz090@gmail.com?subject=Purchase Information&body=' + encodeURIComponent(emailBody);
  window.location.href = mailtoLink;
});

window.addEventListener('scroll', function() {
  var element = document.querySelector('.slide-up-text');
  var position = element.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (position < windowHeight) {
    element.classList.add('show');
  }
}); window.addEventListener('scroll', function() {
  var element = document.querySelector('.slide-up');
  var position = element.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (position < windowHeight) {
    element.classList.add('appear');
  }
});
window.addEventListener('DOMContentLoaded', function() {
  var facebookLink = document.getElementById('facebook-link');
  var emailLink = document.getElementById('email-link');
  var phoneNumberLink = document.getElementById('phone-number-link');
  
  facebookLink.href = 'https://www.facebook.com/ALPSInteriorFunitureManufucturer';
  emailLink.href = 'alpsts.crew@gmail.com';
  phoneNumberLink.href = 'tel:+639625187943';
});

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
  console.log (entry)
  if (entry.isIntersecting){
    entry.target.classList.add('show');
  } else {
    entry.target.classList.remove('show');
  }

});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
