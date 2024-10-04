"use strict"
function login(){
    const sotredUsername = "jota";
    const storedPassword = "dejame";

    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");
    const topnav = document.getElementById("topnav");
    const mainContent = document.getElementById("mainContent");
    const loginContent = document.getElementById("loginContent");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const submitButton = loginForm.querySelector('input[type="submit"]');

    document.getElementById("forgotPasword").onclick = function(){
        alert("Pero Jotaaa, si te la he dejado escrita!!!");
    }
    document.getElementById("signUp").onclick = function(){
        alert("Estamos trabajando en esta función.");
    }

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        const usernameValue = usernameInput.value;
        const passwordValue = passwordInput.value;

        if(usernameValue.length < 3){
            alert("El nombre de usuario debe tener al menos 3 carácteres.");
        }

        if(usernameValue === sotredUsername && passwordValue === storedPassword){
            loginMessage.style.color = "green";
            loginMessage.innerText = "¡Bienvenido!";

            setTimeout(function() {
                loginContent.style.display = "none";
                topnav.style.display = "block";
                mainContent.style.display = "flex";
            }, 2000); 
        }
        else{
            loginMessage.style.color = "red";
            if(usernameValue !== sotredUsername && passwordValue !== storedPassword){
                loginMessage.innerText = "Usuario y contraseña incorrectas.";
            }
            else if(usernameValue !== sotredUsername){
                loginMessage.innerText = "Usuario no válido.";
            }
            else{
                loginMessage.innerText = "Contraseña incorrecta.";
            }
        }
    }); 
}
window.onload = function() {
    login();
}
