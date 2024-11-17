"use strict";

function recoverIndexedDB(name) {
    const transaction = db.transaction(['miAlmacen'], 'readonly');
    const almacen = transaction.objectStore('miAlmacen');
    const request = almacen.get(name);

    request.onsuccess = function(event) {
        const valor = decodeURIComponent(request.result.valor);
        if (request.result) {
            alert(`Su contraseña es: ${valor}`);
        } else {
            alert("Este usuario no existe");
        }
    };
    request.onerror = function(event) {
        console.error('IndexedDB: Error al obtener el dato', event);
    };
}
