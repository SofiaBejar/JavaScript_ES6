"use strict"

const operator1 = document.getElementById("operator1");
const operator2 = document.getElementById("operator2");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const integer = document.getElementById("integer");
const decimal = document.getElementById("decimal");
const factorials = document.getElementById("factorial");
const error = document.getElementById("error");
const logOutButton = document.getElementById("logOutButton");
const conversor = document.getElementById("conversor");
const minicalculadora = document.getElementById("minicalculadora");
var resultToCopy = 0.000;

logOutButton.addEventListener("click", function (event) {
    eraseCookie("verify");
    window.location.href = "../../../index.html";
});

add.addEventListener("click", function (event){
    error.innerHTML = "";
    if(verifyNumber(operator1.value) && verifyNumber(operator2.value)){
        resultToCopy = parseFloat(operator1.value) + parseFloat(operator2.value);
        console.log(resultToCopy);
        operator1.value = resultToCopy;
    }
    else{ 
        error.style.color = "red";
        error.innerHTML = "Introduce números.";
    }
});

subtract.addEventListener("click", function (event){
    error.innerHTML = "";
    if(verifyNumber(operator1.value) && verifyNumber(operator2.value)){
        resultToCopy = parseFloat(operator1.value) - parseFloat(operator2.value);
        operator1.value = resultToCopy;
    }else{ 
        error.style.color = "red";
        error.innerHTML = "Introduce números.";
    }
});

multiply.addEventListener("click", function (event){
    error.innerHTML = "";
    if(verifyNumber(operator1.value) && verifyNumber(operator2.value)){
        resultToCopy = parseFloat(operator1.value) * parseFloat(operator2.value);
        operator1.value = resultToCopy;
    }
    else{ 
        error.style.color = "red";
        error.innerHTML = "Introduce números.";
    }
});

divide.addEventListener("click", function (event){
    error.innerHTML = "";
    if(verifyNumber(operator1.value) && verifyNumber(operator2.value)){
        if(operator2 == 0 ){
            error.style.color = "red";
        error.innerHTML = "Error";
        }
        resultToCopy = parseFloat(operator1.value) / parseFloat(operator2.value);
        operator1.value = resultToCopy;
    }
    else{ 
        error.style.color = "red";
        error.innerHTML = "Introduce números.";
    }
});


integer.addEventListener("click", function (event){
    error.innerHTML = "";
    if(verifyNumber(operator1.value)){
        resultToCopy = parseInt(operator1.value)
        operator1.value = resultToCopy;
    }
    else{ 
        error.style.color = "red";
        error.innerHTML = "Introduce números.";
    }
});

decimal.addEventListener("click", function (event){
    error.innerHTML = "";
    if(verifyNumber(operator1.value)){
        operator1.value = "0." + operator1.value.toString().split(".")[1];
    }
    else{ 
        error.style.color = "red";
        error.innerHTML = "Introduce números.";
    }
});

factorials.addEventListener("click", function (event){
    error.innerHTML = "";
    if(verifyNumber(operator1.value)){
        if(operator1.value.isNumber()){
            operator1.value = factorial(operator1.value);
        } else { 
            error.style.color = "red";
            error.innerHTML = "Para este factorial usa número enteros.";
        }
    }
    else{ 
        error.style.color = "red";
        error.innerHTML = "Introduce números.";
    }
});




