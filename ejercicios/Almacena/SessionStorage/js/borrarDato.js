'use strict';

function deleteData(name) {
    console.log("Borrando dato...");
    let newDataSession = [];
    let cont = 0;

    dataSession = JSON.parse(sessionStorage.getItem("sessionAcceso"));
    for (let i = 0; i < dataSession.length; i++) {
        if (!(dataSession[i].name == name)) { 
            newDataSession[cont] = dataSession[i];
            cont++;
        }
    }
    dataSession = [...newDataSession]; 
    sessionStorage.setItem("sessionAcceso", JSON.stringify(dataSession)); 

    showData(); 
}