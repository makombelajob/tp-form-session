"use strict";

var pseudoValid = false,
    emailValid = false,
    messageValid = false,
    rgpdValid = false;
var btnSubmit = document.querySelector("#btnSubmit");

function toutValid() {
  btnSubmit.disabled = !(pseudoValid && emailValid && messageValid && rgpdValid);
}

var pseudo = document.querySelector("#name");
pseudo.addEventListener("change", function () {
  if (pseudo.value.length < 5) {
    alert("le Nom dois contenir plus de 5 lettre");
    pseudoValid = false;
  } else {
    sessionStorage.setItem("pseudo", "".concat(pseudo.value));
    pseudoValid = true;
  }

  toutValid();
});
var email = document.querySelector("#email");
email.addEventListener("change", function () {
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email.value)) {
    alert("Vous devez entrez un email valid");
    emailValid = false;
  } else {
    sessionStorage.setItem("email", "".concat(email.value));
    emailValid = true;
  }

  toutValid();
});
var message = document.querySelector("#message");
message.addEventListener("change", function () {
  if (message.value.length < 0) {
    alert("Veuillez saisirs un message");
    messageValid = false;
  } else {
    sessionStorage.setItem("message", "".concat(message.value));
    messageValid = true;
  }

  toutValid();
});
var rgpd = document.querySelector("#checkbox");
rgpd.addEventListener("change", function () {
  if (!rgpd.checked) {
    alert("Veuillez cochez la case RGPD");
    rgpdValid = false;
  } else {
    sessionStorage.setItem("rgpd", "".concat(rgpd.checked));
    rgpdValid = true;
  }

  toutValid();
});
var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (pseudoValid && emailValid && messageValid && rgpdValid) {
    btnSubmit.removeAttribute("disabled");
    this.submit();
  } else {
    var evenement = new Event("change");
    pseudo.dispatchEvent(evenement);
    email.dispatchEvent(evenement);
    message.dispatchEvent(evenement);
    rgpd.dispatchEvent(evenement);
  }
});
var pseudoSession = sessionStorage.getItem("pseudo");
var emailSession = sessionStorage.getItem("email");
var messageSession = sessionStorage.getItem("message");
var rgpdSession = sessionStorage.getItem("rgpd");

if (!(pseudoSession && emailSession && messageSession && rgpdSession)) {
  alert("Les stockages es vide 👌");
} else {
  alert("le nom stocker est: \uD83E\uDD21".concat(pseudoSession, "\uD83E\uDD21 et email : \uD83D\uDDA5\uFE0F").concat(emailSession, "\uD83D\uDDA5\uFE0F avec comme message envoyer : \uD83D\uDD4A\uFE0F").concat(messageSession, "\uD83D\uDD4A\uFE0F et le rgpd est en \xE9tat \uD83D\uDC7D").concat(rgpdSession, "\uD83D\uDC7D"));
}

var btnReset = document.querySelector("#reset");
btnReset.addEventListener("click", function () {
  if (confirm("Voulez-vous supprimer les stockage")) {
    sessionStorage.clear();
  }

  if (!(pseudoSession && emailSession && messageSession && rgpdSession)) {
    alert("le stockage est vide, rien à supprimer");
  }
});