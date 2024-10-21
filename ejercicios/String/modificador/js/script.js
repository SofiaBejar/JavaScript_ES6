"use strict"

const text = document.getElementById("text");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const firstUpper = document.getElementById("firstUpper");
const lastUpper = document.getElementById("lastUpper");
const firstLower = document.getElementById("firstLower");
const lastLower = document.getElementById("lastLower");
const vocalUpper = document.getElementById("vocalUpper");
const vocalLower = document.getElementById("vocalLower");
const consonantUpper = document.getElementById("consonantUpper");
const consonantLower = document.getElementById("consonantLower");

const randomModificator = document.getElementById("random");
const stopModificator = document.getElementById("stop");
const fasterModificator = document.getElementById("fast");
const lowerModificator = document.getElementById("low");
const api = document.getElementById("api");

const logOutButton = document.getElementById("logOutButton");
const conversor = document.getElementById("conversor");
const minicalculadora = document.getElementById("minicalculadora");
var myInterval;

logOutButton.addEventListener("click", function (event) {
    deleteLocalStorage("jota");
    window.location.href = "../../../index.html";
});

upper.addEventListener("click", function (event){
    text.value = modificator(text.value, 1);
});

lower.addEventListener("click", function (event){
    text.value = modificator(text.value, 2);
});

firstUpper.addEventListener("click", function (event){
    text.value = modificator(text.value, 3);
});

lastUpper.addEventListener("click", function (event){
    text.value = modificator(text.value, 4);
});

firstLower.addEventListener("click", function (event){
    text.value = modificator(text.value, 5);
});

lastLower.addEventListener("click", function (event){
    text.value = modificator(text.value, 6);
});

vocalUpper.addEventListener("click", function (event){
    text.value = modificator(text.value, 7);
});

vocalLower.addEventListener("click", function (event){
    text.value = modificator(text.value, 8);
});

consonantUpper.addEventListener("click", function (event){
    text.value = modificator(text.value, 9);
});


consonantLower.addEventListener("click", function (event){
    text.value = modificator(text.value, 10);
});

randomModificator.addEventListener("click", function (event){
    myInterval = setInterval(function (){
        let randomNumber = random(1,10);
        text.value = modificator(text.value, randomNumber);
        console.log(randomNumber);
        console.log(text.value);
    }, 1000);
});

stopModificator.addEventListener("click", function (event){
    clearInterval(myInterval);
});

fasterModificator.addEventListener("click", function (event){
    clearInterval(myInterval);
    myInterval = setInterval(function (){
        let randomNumber = random(1,10);
        text.value = modificator(text.value, randomNumber);
        console.log(randomNumber);
        console.log(text.value);
    }, 500);
});

lowerModificator.addEventListener("click", function (event){
    clearInterval(myInterval);
    myInterval = setInterval(function (){
        let randomNumber = random(1,10);
        text.value = modificator(text.value, randomNumber);
        console.log(randomNumber);
        console.log(text.value);
    }, 2000);
});

api.addEventListener('click', function() {
    dataCall();
});

async function dataCall() {
    const data = await getData();
    text.value = data.name + " is a " + data.gender + " " + data.species + " and comes from " + data.origin.name + ".";
}