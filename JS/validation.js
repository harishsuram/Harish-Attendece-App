// JavaScript for Form Validation

function validateForm() {
  let isValid = true;

  // Clear previous error messages
  document.querySelectorAll(".error-message").forEach(function (error) {
    error.textContent = "";
  });

  // Validate First Name
  const firstName = document.getElementById("firstName").value;
  if (firstName === "") {
    document.getElementById("firstNameError").textContent =
      "First Name is required.";
    isValid = false;
  }

  // Validate Last Name
  const lastName = document.getElementById("lastName").value;
  if (lastName === "") {
    document.getElementById("lastNameError").textContent =
      "Last Name is required.";
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById("email").value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email.";
    isValid = false;
  }

  // Validate Date of Birth
  const dob = document.getElementById("dob").value;
  if (dob === "") {
    document.getElementById("dobError").textContent =
      "Date of Birth is required.";
    isValid = false;
  }

  // Validate Phone Number
  const phone = document.getElementById("phone").value;
  const phonePattern = /^\d{10}$/;
  if (!phone.match(phonePattern)) {
    document.getElementById("phoneError").textContent =
      "Phone number must be 10 digits.";
    isValid = false;
  }

  // Validate Address
  const address = document.getElementById("address").value;
  if (address === "") {
    document.getElementById("addressError").textContent =
      "Address is required.";
    isValid = false;
  }

  return isValid;
}
