"use strict"

const logOutButton = document.getElementById("logOutButton");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
    mostrar(resultado);
});


logOutButton.addEventListener("click", function (event) {
    console.log("quieres cerrar sesión");
    deleteLocalStorage("verify");
    window.location.href = "../index.html";
});
