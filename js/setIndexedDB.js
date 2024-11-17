"use strict";

function setIndexedDB(name, value) {
    const transaction = db.transaction(['miAlmacen'], 'readwrite');
    const almacen = transaction.objectStore('miAlmacen');
    const request = almacen.put({ nombre: name, valor: encodeURIComponent(value || "") });

    request.onsuccess = function() {
        console.log(`IndexedDB: Guardado ${name}=${encodeURIComponent(value || "")}`);
    };

    request.onerror = function(event) {
        console.error('IndexedDB: Error al guardar el dato', event);
    };
}


