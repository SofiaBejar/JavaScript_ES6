import {Stack} from "../../Clases/Stack.js";
import {washable} from "./washable.js";
import {random} from "./random.js";
import {showLaundry} from "./showLaundry.js";

"use strict"

const logOutButton = document.getElementById("logOutButton");
const putIn = document.getElementById("putIn");
const putOut = document.getElementById("putOut");
const tbody = document.getElementById("tbody");

const LAUNDRY_BASKET = 10;
let laundry = new Stack();

logOutButton.addEventListener("click", function (event) {
    console.log("quieres cerrar sesión");
    window.location.href = "../../../../index.html";
});

putIn.addEventListener("click", function (event) {
    console.log("Tamaño de la pila:", laundry.size());
    if(laundry.size() == LAUNDRY_BASKET){
        tbody.innerHTML = "<br><b>Deberías empezar a lavar ropa.</b>";
    }
    else{
        let item = washable[random(0, washable.length - 1)];
        laundry.toStack(item);
        showLaundry(laundry);
    }
});

putOut.addEventListener("click", function (event) {
    if(laundry.size === 0){
        tbody.innerHTML = "<br><b>No hay ropa en la colada.</b>";
    } 
    else{
        if (laundry.size() == 1) {
            laundry.unstack();
            tbody.innerHTML = "<br><b>No hay ropa en la colada.</b>";
        } else {
            laundry.unstack();
            showLaundry(laundry)
        }
    }
});


