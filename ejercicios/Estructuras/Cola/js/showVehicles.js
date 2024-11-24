"use strict"

export function showVehicles(vehicles){
    const tbody = document.getElementById("tbody");
    tbody.innerHTML="";
    const array = vehicles.returnQueue();
    let tr = document.createElement("tr");
    for (let i = 0; i < vehicles.size(); i++) {
        let td = document.createElement("td");
        let button = document.createElement("button");
      
        button.innerHTML = array[i];
        button.disabled = true;

        td.appendChild(button);
        tr.appendChild(td);                   
        
    } 
    tbody.appendChild(tr);
}