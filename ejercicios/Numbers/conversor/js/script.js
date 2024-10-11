"use strict"

const operator = document.getElementById("operator");
const base2 = document.getElementById("base2");
const base8 = document.getElementById("base8");
const base16 = document.getElementById("base16");
const resultMessage = document.getElementById("result");
const logOutButton = document.getElementById("logOutButton");
const conversor = document.getElementById("conversor");
const minicalculadora = document.getElementById("minicalculadora");


logOutButton.addEventListener("click", function (event) {
    eraseCookie("verify");

    textResult.innerHTML=""
    result.innerHTML="";

    window.location.href = "../../../index.html";
});

base2.addEventListener("click", function (event){
    textResult.innerHTML = "El resultado es: ";
    result.innerHTML = parseInt(operator.value).toString(2);
});

base8.addEventListener("click", function (event){
    textResult.innerHTML = "El resultado es: ";
    result.innerHTML = parseInt(operator.value).toString(8);
});

base16.addEventListener("click", function (event){
    textResult.innerHTML = "El resultado es: ";
    result.innerHTML = parseInt(operator.value).toString(16);
});








