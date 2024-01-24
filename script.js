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

  // Create email body
  var emailBody = 'Name: ' + name + '\n';
  emailBody += 'Email: ' + email + '\n';
  emailBody += 'Product: ' + product + '\n';
  emailBody += 'Quantity: ' + quantity + '\n';

  // Send email
  var mailtoLink = 'mailto:lloyd.delacruz090@gmail.com?subject=Purchase Information&body=' + encodeURIComponent(emailBody);
  window.location.href = mailtoLink;
});
