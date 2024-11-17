"use strict"
    const sotredUsername = "jota";
    const storedPassword = "dejame";

    const loginMessage = document.getElementById("loginMessage");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const submitButton = document.getElementById("loginButton");

   

    document.getElementById("forgotPasword").onclick = function(){
        recoverIndexedDB(usernameInput.value);
        console.log("recuperando");
    }

    document.getElementById("signUp").onclick = function(){
        let givenUsername = prompt("Nuevo Usuario: ","sofi");
        let givenPasword = prompt("Nueva Contraseña","1234");
        setIndexedDB(givenUsername, givenPasword);
    }

    submitButton.addEventListener("click", function (event) {
        const usernameValue = usernameInput.value;
        const passwordValue = passwordInput.value;

        const usernameTest = /^.{3,}$/;
        if(!usernameTest.test(usernameValue)){
            alert("El nombre de usuario debe tener al menos 3 carácteres.");
        }

        getIndexedDB(usernameValue);
    }); 
