'use strict';

let db;

const request = indexedDB.open('MiBaseDeDatos', 2); 

request.onerror = function(event) {
    console.error('IndexedDB: Ha habido un error al abrir la base de datos.', event);
};

request.onsuccess = function(event) {
    db = event.target.result;
    console.log('IndexedDB: La base de datos ha sido abierta exitosamente.', db.version);
};

request.onupgradeneeded = function(event) {
    db = event.target.result;
    
    if (event.oldVersion < 1) {
        if (!db.objectStoreNames.contains('miAlmacen')) {
            db.createObjectStore('miAlmacen', { keyPath: 'nombre' });
            console.log('IndexedDB: Almacén "miAlmacen" creado (versión 1)');
        }
    }

    if (event.oldVersion < 2) {
        if (!db.objectStoreNames.contains('usuarios')) {
            db.createObjectStore('usuarios', { keyPath: 'id', autoIncrement: true });
            console.log('IndexedDB: Almacén "usuarios" creado (versión 2)');
        }
    }
};


