'use strict';

const logOutButton = document.getElementById("logOutButton");

logOutButton.addEventListener("click", function (event) {
    console.log("quieres cerrar sesión");
    window.location.href = "../../../../index.html";
});

let data = []; 

if (navigator.cookieEnabled == true) { 
    const name = document.getElementById("name"); 
    const value = document.getElementById("value"); 
    const save = document.getElementById("save"); 

    showData(); 
    save.addEventListener("click", function (evento) { 
        saveData(name.value, value.value); 
        name.value="";
        value.value="";
    });
} else {
    alert("El uso de cookies está desactivado");
}