 
  var form = document.getElementById("myForm");

  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Call the validate function
      if (validate()) {
          form.submit(); // Submit the form if validation passes
      }else{
          console.log('error');
      }
  });
    

function validate() {
    var firstNameInput = document.getElementById("firstName");
    var lastNameInput = document.getElementById("lastName");
    var emailInput = document.getElementById("email");
    
    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("lastNameError");
    var emailError = document.getElementById("emailError");
  
    firstNameInput.classList.remove('error');
    lastNameInput.classList.remove('error');
    firstNameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
  
    // First name and last name validation
    var nameRegex = /^[A-Za-z]{2,}$/;
    if (!nameRegex.test(firstNameInput.value) && !nameRegex.test(lastNameInput.value)){
        firstNameInput.classList.add('error');
        firstNameError.textContent = 'Please enter a valid first name (minimum of two characters).';
        lastNameInput.classList.add('error');
        lastNameError.textContent = 'Please enter a valid last name (minimum of two characters).';
        return false;
    }
    if (!nameRegex.test(firstNameInput.value)) {
      firstNameInput.classList.add('error');
      firstNameError.textContent = 'Please enter a valid first name (minimum of two characters).';
      return false;
    }
  
    if (!nameRegex.test(lastNameInput.value)) {
      lastNameInput.classList.add('error');
      lastNameError.textContent = 'Please enter a valid last name (minimum of two characters).';
      return false;
    }

    if (!validateEmail(emailInput.value)) {
      emailInput.classList.add('error');
      emailError.textContent = "Invalid email address";
      return false;
    }
  

    return true;
  }

function validateEmail(email) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}


