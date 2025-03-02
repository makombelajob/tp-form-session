let nameValid = emailValid = false;
const btnSubmit = document.querySelector("#infonext");

function toutValid(){
    btnSubmit.disabled = !(nameValid && emailValid);
}
const nameUser = document.querySelector("#name");
nameUser.addEventListener("change", function() {
    if(nameUser.value.length < 5) {
        alert("🤦‍♂️Vous devez entre un nom de plus de 5 lettres");
        nameValid = false;
    }else{
        sessionStorage.setItem("nom", `${nameUser.value}`);
        nameValid = true;
    }
    toutValid();
});

const email = document.querySelector("#email");
email.addEventListener("change", function() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!regex.test(email.value)){
        alert("Vous devez entrer un email valid (*>﹏<*)");
        emailValid = false;
    }else{
        sessionStorage.setItem("email", `${email.value}`);
        emailValid = true;
    }
    toutValid();
});

const form = document.querySelector("#info");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if(nameValid && emailValid){
        btnSubmit.removeAttribute("disabled");
        window.location.href = "html/adresse.html";
    }else{
        const revetment = new Event("change");
        nameUser.dispatchEvent(revetment);
        email.dispatchEvent(revetment);
    }
});
