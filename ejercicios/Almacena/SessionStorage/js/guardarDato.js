'use strict';

function saveData(name, value) {
    console.log("Grabando dato...");
    dataSession.push({
        name: name,
        value: value
    }); 
        sessionStorage.setItem("sessionAcceso", JSON.stringify(dataSession)); 
    
    showData(); 
}
