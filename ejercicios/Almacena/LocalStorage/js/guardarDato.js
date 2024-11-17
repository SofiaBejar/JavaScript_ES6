'use strict';

function saveData(name, value) {
    console.log("Grabando dato...");
    dataLocal.push({
        name: name,
        value: value
    }); 
        localStorage.setItem("localAcceso", JSON.stringify(dataLocal)); 
    
    showData(); 
}
