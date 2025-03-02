let checkboxValid = false;
const btnSubmit = document.querySelector("#submit");

function toutValid() {
    btnSubmit.disabled = !(checkboxValid);
}

const checkBox = document.querySelector("#checkbox");
checkBox.addEventListener("change", function() {
    if(checkBox.checked){
        sessionStorage.setItem("checkbox", `${checkBox.value}`);
        checkboxValid = true;
    }else{
        alert("Vous devez cochez la case !!! 🤷‍♂️");
        checkboxValid = false;
    }
    toutValid();
});

const formConfirm = document.querySelector("form");
formConfirm.addEventListener("submit", function(event) {
    event.preventDefault();
    if(checkboxValid){
        // btnSubmit.removeAttribute("disabled");
        window.location.href = "welcome.html";
    }else{
        const tenement = new Event("change");
        checkBox.dispatchEvent(tenement);
    }
});

const prevAdr = document.querySelector("#prevadr");
prevAdr.removeAttribute("disabled");
prevAdr.addEventListener("click", function() {
    window.location.href = "adresse.html";
});