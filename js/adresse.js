let countryValid = villeValid = adresseValid = false;

const btnNext = document.querySelector("#nextconfirm");

const prevPage = document.querySelector("#prev");
prevPage.removeAttribute("disabled");
prevPage.addEventListener("click", function() {
    window.location.href = "../index.html";
});

function toutValid() {
    btnNext.disabled = !(countryValid && villeValid && adresseValid);
}

const country = document.querySelector("#pays");
country.addEventListener("change", function() {

    if(country.value.length < 5) {
        alert("veuillez entre le noms d'un pays 🌏");
        countryValid = false;
    }else{
        sessionStorage.setItem("country", `${country.value}`);
        countryValid = true;
    }
    toutValid();
});

const ville = document.querySelector("#ville");
ville.addEventListener("change", function() {

    if (ville.value.length < 4) {
        alert("Veuillez entre le nom d'une ville 🗺️");
        villeValid = false;
    } else {
        sessionStorage.setItem("ville", `${ville.value}`);
        villeValid = true;
    }
    toutValid();
});

const adresse = document.querySelector("#adresse");
adresse.addEventListener("change", function() {

    if(adresse.value.length < 10) {
        alert("L'adresse doit contenir au moins 10 caractères 🏨");
        adresseValid = false;
    }else{
        sessionStorage.setItem("adresse", `${adresse.value}`);
        adresseValid = true;
    }
    toutValid();
});

const adresseForm = document.querySelector("#second");
adresseForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if(countryValid && villeValid && adresseValid) {
        btnNext.removeAttribute("disabled");
        window.location.href = "confirm.html";
    }else{
        const revetment = new Event("change");
        country.dispatchEvent(revetment);
        ville.dispatchEvent(revetment);
        adresse.dispatchEvent(revetment);
    }
});
