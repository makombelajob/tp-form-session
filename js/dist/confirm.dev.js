"use strict";

var checkboxValid = false;
var btnSubmit = document.querySelector("#submit");

function toutValid() {
  btnSubmit.disabled = !checkboxValid;
}

var checkBox = document.querySelector("#checkbox");
checkBox.addEventListener("change", function () {
  if (checkBox.checked) {
    sessionStorage.setItem("checkbox", "".concat(checkBox.value));
    checkboxValid = true;
  } else {
    alert("Vous devez cochez la case !!! 🤷‍♂️");
    checkboxValid = false;
  }

  toutValid();
});
var formConfirm = document.querySelector("form");
formConfirm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (checkboxValid) {
    // btnSubmit.removeAttribute("disabled");
    window.location.href = "welcome.html";
  } else {
    var tenement = new Event("change");
    checkBox.dispatchEvent(tenement);
  }
});