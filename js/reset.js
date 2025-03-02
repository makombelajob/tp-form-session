const adresseSession = sessionStorage.getItem("adresse");
const checkboxSession = sessionStorage.getItem("checkbox");
const countrySession = sessionStorage.getItem("country");
const emailSession = sessionStorage.getItem("email");
const nomSession = sessionStorage.getItem("nom");
const villeSession = sessionStorage.getItem("ville");


const btnRest = document.querySelector("#reset");
btnRest.addEventListener("click", function() {
    if(adresseSession && checkboxSession && countrySession && emailSession && nomSession && villeSession) {
        if(confirm("Êtes vous sûr de supprimer le stockages ?")){
            sessionStorage.clear();
        }
    }else{
        alert("Le stockage est vide");
    }
});

const display = document.querySelector("#display");
if(adresseSession && checkboxSession && countrySession && emailSession && nomSession && villeSession) {
    display.textContent = `adresse stocker est ${nomSession} et l'email est ${emailSession} Réside en(dans) ${countrySession} dans la ville de ${villeSession} au ${adresseSession} et il acceptes est (${checkboxSession}) de collecter ses données  `;
}else{
    display.style.display = "none";
    alert("Le stockage est vide, rien à supprimer !");
}