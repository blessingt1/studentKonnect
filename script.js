// Prototype for validation for the login page
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
  
      if (email === '' || password === '') {
        alert('Both fields are required.');
        return;
      }
  
      // Simulate form submission and validation...
      alert('Form submitted successfully!');
    });
  });
  