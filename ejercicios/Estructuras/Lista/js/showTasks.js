"use strict"

export function showTasks(tasks, option){
    const text1 = document.getElementById("text1");
    const text2 = document.getElementById("text2");
    const laundryList1 = document.getElementById("laundryList1");
    const laundryList2 = document.getElementById("laundryList2");

    const array = tasks.returnList();
    
    if(option == 1){
        laundryList1.innerHTML = "";
        text1.innerHTML = "";
        text1.innerHTML = "Lista de Tareas";
        console.log("Tamaño de la pila:", tasks.size());
        for (let item of array) {
            let li = document.createElement("li");
            let button = document.createElement("button");
            button.disabled = true;
            button.innerHTML = item;
            li.appendChild(button);
            laundryList1.appendChild(li);
          }
    }

    if(option == 2){
        laundryList2.innerHTML = "";
        text2.innerHTML = "";
        text2.innerHTML = "Lista de Tareas con Prioridad";
        for (let item of array) {
            let li = document.createElement("li");
            let button = document.createElement("button");
            button.disabled = true;
            button.innerHTML = item.tarea + " (Prioridad: "+item.prioridad+")";
            li.appendChild(button);
            laundryList2.appendChild(li);
          }
    }
    
  
}