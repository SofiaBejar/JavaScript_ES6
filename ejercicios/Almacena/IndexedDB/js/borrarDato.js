'use strict';

function deleteData(id) {
    console.log("Borrando dato...");
    requestDB = indexedDB.open(nameDB, versionDB);
    requestDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };
    requestDB.onsuccess = function (event) {
        db = event.target.result;
        channelDB = db.transaction(tableDB, "readwrite").objectStore(tableDB);
        channelDB.delete(id);
    };
    showData(); 
}