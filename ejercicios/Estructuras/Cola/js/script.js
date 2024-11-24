import {Queue} from "../../Clases/Queue.js";
import {vehicles} from "./vehicles.js";
import {random} from "./random.js";
import {showVehicles} from "./showVehicles.js";

"use strict"

const logOutButton = document.getElementById("logOutButton");
const putIn = document.getElementById("putIn");
const putOut = document.getElementById("putOut");
const tbody = document.getElementById("tbody");

const CARS_CAPACITY = 10;
let cars = new Queue();

logOutButton.addEventListener("click", function (event) {
    console.log("quieres cerrar sesión");
    window.location.href = "../../../../index.html";
});

putIn.addEventListener("click", function (event) {
    if(cars.size() == CARS_CAPACITY){
        tbody.innerHTML = "<br><b>Deberías empezar a arreglar coches.</b>";
    }
    else{
        let item = vehicles[random(0, vehicles.length - 1)];
        cars.queue(item);
        showVehicles(cars);
    }
});

putOut.addEventListener("click", function (event) {
    if(cars.empty()){
        tbody.innerHTML = "<br><b>No hay coches para arreglar.</b>";
    } 
    else{
        if (cars.size() == 1) {
            cars.dequeue();
            tbody.innerHTML = "<br><b>No hay coches para arreglar.</b>";
        } else {
            cars.dequeue();
            showVehicles(cars)
        }
    }
});


