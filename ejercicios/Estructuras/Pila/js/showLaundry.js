"use strict"

export function showLaundry(laundry){
    const tbody = document.getElementById("tbody");
    tbody.innerHTML="";
    const array = laundry.returnStack();
    for (let i = 0; i < laundry.size(); i++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let button = document.createElement("button");
      
        button.innerHTML = array[i];
        button.disabled = true;

        td.appendChild(button);
        tr.appendChild(td);                   
        tbody.appendChild(tr);
    } 
}