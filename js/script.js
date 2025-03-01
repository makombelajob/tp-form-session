let pseudoValid = false, emailValid = false, messageValid = false, rgpdValid = false;


const btnSubmit = document.querySelector("#btnSubmit");

function toutValid() {
    btnSubmit.disabled = !(pseudoValid && emailValid && messageValid && rgpdValid);
}

const pseudo = document.querySelector("#name");
pseudo.addEventListener("change", function () {
    if (pseudo.value.length < 5) {
        alert("le Nom dois contenir plus de 5 lettre");
        pseudoValid = false;
    } else {
        sessionStorage.setItem("pseudo", `${pseudo.value}`);
        pseudoValid = true;
    }
    toutValid();
});

const email = document.querySelector("#email");
email.addEventListener("change", function () {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email.value)) {
        alert("Vous devez entrez un email valid");
        emailValid = false;
    } else {
        sessionStorage.setItem("email", `${email.value}`);
        emailValid = true;
    }
    toutValid();
});

const message = document.querySelector("#message");
message.addEventListener("change", function() {
    if(message.value.length < 0) {
        alert("Veuillez saisirs un message");
        messageValid = false;
    }else{
        sessionStorage.setItem("message", `${message.value}`);
        messageValid = true;
    }
    toutValid();
});

const rgpd = document.querySelector("#checkbox");
rgpd.addEventListener("change", function() {
    if(!rgpd.checked){
        alert("Veuillez cochez la case RGPD");
        rgpdValid = false;
    }else{
        sessionStorage.setItem("rgpd", `${rgpd.checked}`);
        rgpdValid = true;
    }
    toutValid();
});

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if(pseudoValid && emailValid && messageValid && rgpdValid){
        btnSubmit.removeAttribute("disabled");
        this.submit();
    }else{
        const evenement = new Event("change");
        pseudo.dispatchEvent(evenement);
        email.dispatchEvent(evenement);
        message.dispatchEvent(evenement);
        rgpd.dispatchEvent(evenement);
    }
});

const pseudoSession = sessionStorage.getItem("pseudo");
const emailSession = sessionStorage.getItem("email");
const messageSession = sessionStorage.getItem("message");
const rgpdSession = sessionStorage.getItem("rgpd");
if(!(pseudoSession && emailSession && messageSession && rgpdSession)){
    alert("Les stockages es vide 👌");
}else{
    alert(`le nom stocker est: 🤡${pseudoSession}🤡 et email : 🖥️${emailSession}🖥️ avec comme message envoyer : 🕊️${messageSession}🕊️ et le rgpd est en état 👽${rgpdSession}👽`);
}


const btnReset = document.querySelector("#reset");
btnReset.addEventListener("click", function(){
    if(confirm("Voulez-vous supprimer les stockage")){
        sessionStorage.clear();
    }
    if(!(pseudoSession && emailSession && messageSession && rgpdSession)){
        alert("le stockage est vide, rien à supprimer")
    }
});