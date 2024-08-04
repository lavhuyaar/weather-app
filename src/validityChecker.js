//Checks validity of location input
export function validityChecker() {
  const locationInput = document.querySelector("#location-input");
  const validityMessage = document.querySelector(".validity-message");

  if (locationInput.validity.valid) {
    validValidityMessage(validityMessage);
    validityMessage.textContent = "Valid input";
  } else if (locationInput.validity.invalid) {
    invalidValidityMessage(validityMessage);
    validityMessage.textContent = "Invalid input";
  } else if (locationInput.validity.valueMissing) {
    invalidValidityMessage(validityMessage);
    validityMessage.textContent = "Input cannot be empty";
  } else {
    invalidValidityMessage(validityMessage);
    validityMessage.textContent = locationInput.validationMessage;
  }
}

//Valid validity
function validValidityMessage(message) {
  message.style.display = "block";
  message.style.color = "#0fe40f";
}

//Invalid validity
function invalidValidityMessage(message) {
  message.style.display = "block";
  message.style.color = "red";
}
