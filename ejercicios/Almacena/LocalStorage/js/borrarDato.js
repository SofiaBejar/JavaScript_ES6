'use strict';

function deleteData(name) {
    console.log("Borrando dato...");
    let newDataLocal = [];
    let cont = 0;

    dataLocal = JSON.parse(localStorage.getItem("localAcceso"));
    for (let i = 0; i < dataLocal.length; i++) {
        if (!(dataLocal[i].name == name)) { 
            newDataLocal[cont] = dataLocal[i];
            cont++;
        }
    }
    dataLocal = [...newDataLocal]; 
    localStorage.setItem("localAcceso", JSON.stringify(dataLocal)); 

    showData(); 
}