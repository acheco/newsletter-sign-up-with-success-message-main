let isVisible = false;

function toggleVisibility() {

  const emailField = document.getElementById("email");
  const errorLabel = document.getElementById("error-label");

  if (!emailField.validity.valid) {
    emailField.classList.add("error");
    errorLabel.style.display = "block";
    return;
  }

  isVisible = !isVisible;

  if (isVisible) {
    document.getElementById("success-message").style.display = "block";
    document.getElementById("sign-up-section").style.display = "none";
  } else {
    document.getElementById("success-message").style.display = "none";
    document.getElementById("sign-up-section").style.display = "block";
  }

}

