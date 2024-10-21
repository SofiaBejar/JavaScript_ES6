"use strict"
    const sotredUsername = "jota";
    const storedPassword = "dejame";

    const loginMessage = document.getElementById("loginMessage");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const submitButton = document.getElementById("loginButton");

    if(getLocalStorage("verify") === "true"){ 
        window.location.href="./ejercicios/index.html";
    }

    document.getElementById("forgotPasword").onclick = function(){
        alert("Pero Jotaaa, si te la he dejado escrita!!!");
    }
    document.getElementById("signUp").onclick = function(){
        alert("Estamos trabajando en esta función.");
    }

    submitButton.addEventListener("click", function (event) {
        const usernameValue = usernameInput.value;
        const passwordValue = passwordInput.value;

        const usernameTest = /^.{3,}$/;
        if(!usernameTest.test(usernameValue)){
            alert("El nombre de usuario debe tener al menos 3 carácteres.");
        }

        if(usernameValue === sotredUsername && passwordValue === storedPassword){
            loginMessage.style.color = "green";
            loginMessage.innerText = "¡Bienvenido!";
            setLocalStorage(usernameInput.value, passwordInput.value);

            setTimeout(function() {
                window.location.href = "./ejercicios/index.html";
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
