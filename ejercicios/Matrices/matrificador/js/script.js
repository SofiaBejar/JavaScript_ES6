"use strict"

const matrixSize = document.getElementById("matrixSize");
const minValue = document.getElementById("minValue");
const maxValue = document.getElementById("maxValue");
const randomValue = document.getElementById("randomValue");
const createMatrix = document.getElementById("buildMatrix");

const randomMatrificator = document.getElementById("random");
const stopMatrificator = document.getElementById("stop");
const fasterMatrificator = document.getElementById("fast");
const lowerMatrificator = document.getElementById("low");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");

const resultMA = document.getElementById("resultMA");
const resultMB = document.getElementById("resultMB");
const resultM = document.getElementById("resultM");


const logOutButton = document.getElementById("logOutButton");
var myInterval;

function random(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

logOutButton.addEventListener("click", function (event) {
    window.location.href = "../../../index.html";
});

randomValue.addEventListener("click", function (event) {
    randomValues();
});

createMatrix.addEventListener("click", function (event) {
    fillMatrix();
});

add.addEventListener("click", function (event){
    addMatrix();
});

subtract.addEventListener("click", function (event){
    subtractMatrix();
});

multiply.addEventListener("click", function (event){
    multiplyMatrix();
});

randomMatrificator.addEventListener("click", function (event){
    myInterval = setInterval(function (){
        randomValues();
        fillMatrix();
        let randomNumber = random(1,3);
        if(randomNumber == 1){
            addMatrix();
        }
        else if(randomNumber == 2){
            subtractMatrix();
        }
        else{
            multiplyMatrix();
        }
    }, 1000);
});

stopMatrificator.addEventListener("click", function (event){
    clearInterval(myInterval);
});

fasterMatrificator.addEventListener("click", function (event){
    clearInterval(myInterval);
    myInterval = setInterval(function (){
        randomValues();
        fillMatrix();
        let randomNumber = random(1,3);
        if(randomNumber == 1){
            addMatrix();
        }
        else if(randomNumber == 2){
            subtractMatrix();
        }
        else{
            multiplyMatrix();
        }
    }, 500);
});

lowerMatrificator.addEventListener("click", function (event){
    clearInterval(myInterval);
    myInterval = setInterval(function (){
        randomValues();
        fillMatrix();
        let randomNumber = random(1,3);
        if(randomNumber == 1){
            addMatrix();
        }
        else if(randomNumber == 2){
            subtractMatrix();
        }
        else{
            multiplyMatrix();
        }
    }, 2000);
});
