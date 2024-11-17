'use strict';

function deleteData(name) {
    console.log("Borrando dato...");
    let caducidadCookie = 1 * 60 * 1000; 

    let theDate = new Date(); 
    let currentMiliseconds = theDate.getTime(); 
    let expirationMiliseconds = currentMiliseconds - caducidadCookie; 
    theDate.setTime(expirationMiliseconds); 
    console.log(`Fecha caducidad: ${theDate}`);

    
    document.cookie = name + "=;expires=" + theDate.toUTCString() + ";path=./;SameSite=Strict;Secure"; 

    showData(); 
}