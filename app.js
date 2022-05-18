const toggleMenu = document.getElementById("toggle-menu");
const introEmailInput = document.querySelector(".intro__email--input");
const earlyAccessEmailInput = document.querySelector(".access__email--input");
const emailRegexPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let introSubmit = false;
let accessSubmit = false;

toggleMenu.addEventListener("click", () => toggleMenu.classList.toggle("open"));

function validate(input) {
  if (input.value.match(emailRegexPattern)) {
    input.parentElement.classList.add("valid");
    input.parentElement.classList.remove("invalid");
    input.nextElementSibling.innerHTML = "";
    return true;
  } else {
    input.parentElement.classList.add("invalid");
    input.parentElement.classList.remove("valid");
    input.nextElementSibling.innerHTML = "Please check your email";
    return false;
  }
}

function onIntroSubmitHandler() {
  return validate(introEmailInput);
}

function onAccesSubmitHandler() {
  return validate(earlyAccessEmailInput);
}

function introValidation() {
  validate(introEmailInput);
}

function earlyAccessValidation() {
  validate(earlyAccessEmailInput);
}
