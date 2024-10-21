"use strict"

const logOutButton = document.getElementById("logOutButton");
const conversor = document.getElementById("conversor");



logOutButton.addEventListener("click", function (event) {
    console.log("quieres cerrar sesión");
    deleteLocalStorage("jota");
    window.location.href = "../index.html";
});

conversor.addEventListener("click", function (event) {
    window.location.href = "./Numbers/conversor/index.html";
});
