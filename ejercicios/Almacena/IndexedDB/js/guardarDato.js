'use strict';

function saveData(names, types, imageUrl) {
    console.log("Grabando dato...");
    requestDB = indexedDB.open(nameDB, versionDB);

    requestDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };
    requestDB.onsuccess = function (event) {
        db = event.target.result;
        channelDB = db.transaction(tableDB, "readwrite").objectStore(tableDB);
        const request = channelDB.put({ names, types, imageUrl });  
        request.onsuccess = function () {
            console.log("Dato guardado:", { names, types, imageUrl });
        };
    
        request.onerror = function (event) {
            console.error("Error al guardar los datos:", event.target.error);
        };      
    };
    showData(); 
}
