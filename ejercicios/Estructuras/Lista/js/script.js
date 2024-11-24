import {List} from "../../Clases/List.js";
import {tasks} from "./tasks.js";
import {random} from "./random.js";
import {showTasks} from "./showTasks.js";
import {findHighestPriority} from "./highestPriority.js"

"use strict"

const logOutButton = document.getElementById("logOutButton");
const putIn = document.getElementById("putIn");
const putOut = document.getElementById("putOut");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const laundryList1 = document.getElementById("laundryList1");
const laundryList2 = document.getElementById("laundryList2");

const LIST_CAPACITY = 10;
let toDo1 = new List();
let toDo2 = new List();

logOutButton.addEventListener("click", function (event) {
    console.log("quieres cerrar sesión");
    window.location.href = "../../../../index.html";
});

putIn.addEventListener("click", function (event) {
    if(toDo1.size() == LIST_CAPACITY){
        tbody.innerHTML = "<br><b>Deberías empezar a hacer las tareas.</b>";
    }
    else{
        let item = tasks[random(0, tasks.length - 1)].tarea;
        toDo1.enlist(item, random(0, toDo1.size()));
        showTasks(toDo1, 1);
    }
});

putOut.addEventListener("click", function (event) {
    if(toDo1.empty()){
        laundryList1.innerHTML = "";
        text1.innerHTML = "<br><b>No hay más tareas que hacer.</b>";
    } 
    else{
        if (toDo1.size() == 1) {
            toDo1.unlist(0);
            laundryList1.innerHTML = "";
            text1.innerHTML = "<br><b>No hay más tareas que hacer.</b>";
        } else {
            toDo1.unlist(random(0, (toDo1.size() - 1)));
            showTasks(toDo1, 1)
        }
    }
});

putInPlus.addEventListener("click", function (event) {
    if(toDo2.size() == LIST_CAPACITY){
        text2.innerHTML = "<br><b>Deberías empezar a hacer las tareas.</b>";
    }
    else{
        let item = {tarea: tasks[random(0, tasks.length - 1)].tarea,
                    prioridad: tasks[random(0, tasks.length - 1)].prioridad};
        toDo2.enlist(item, random(0, toDo1.size()));
        showTasks(toDo2, 2);

    }
});

putOutPlus.addEventListener("click", function (event) {
    if(toDo2.empty()){
        laundryList2.innerHTML = "";
        text2.innerHTML = "<br><b>No hay más tareas que hacer.</b>";
      
    } 
    else{
        if (toDo2.size() == 1) {
            toDo2.unlist(0);
            laundryList2.innerHTML = "";
            text2.innerHTML = "<br><b>No hay más tareas que hacer.</b>";
        } else {
            let task = toDo2.returnList()
            toDo2.unlist(findHighestPriority(toDo2));
            showTasks(toDo2, 2)
        }
    }
});


