"use strict";

var countryValid = villeValid = adresseValid = false;
var btnNext = document.querySelector("#nextconfirm");

function toutValid() {
  btnNext.disabled = !(countryValid && villeValid && adresseValid);
}

var country = document.querySelector("#pays");
country.addEventListener("change", function () {
  if (country.value.length < 5) {
    alert("veuillez entre le noms d'un pays 🌏");
    countryValid = false;
  } else {
    sessionStorage.setItem("country", "".concat(country.value));
    countryValid = true;
  }

  toutValid();
});
var ville = document.querySelector("#ville");
ville.addEventListener("change", function () {
  if (ville.value.length < 4) {
    alert("Veuillez entre le nom d'une ville 🗺️");
    villeValid = false;
  } else {
    sessionStorage.setItem("ville", "".concat(ville.value));
    villeValid = true;
  }

  toutValid();
});
var adresse = document.querySelector("#adresse");
adresse.addEventListener("change", function () {
  if (adresse.value.length < 10) {
    alert("L'adresse doit contenir au moins 10 caractères 🏨");
    adresseValid = false;
  } else {
    sessionStorage.setItem("adresse", "".concat(adresse.value));
    adresseValid = true;
  }

  toutValid();
});
var adresseForm = document.querySelector("#second");
adresseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (countryValid && villeValid && adresseValid) {
    btnNext.removeAttribute("disabled");
    window.location.href = "confirm.html";
  } else {
    var revetment = new Event("change");
    country.dispatchEvent(revetment);
    ville.dispatchEvent(revetment);
    adresse.dispatchEvent(revetment);
  }
});