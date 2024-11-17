'use strict';

let datos = []; 
let requestDB,
    db,
    channelDB;
let nameDB = "DATOS";
let versionDB = 2;
let tableDB = "datos";


requestDB = indexedDB.open(nameDB, versionDB); 

requestDB.onerror = function(event) {
    console.error('IndexedDB: Ha habido un error al abrir la base de datos.', event);
};

requestDB.onsuccess = function(event) {
    db = event.target.result;
    console.log('IndexedDB: La base de datos ha sido abierta exitosamente.', db.version);
};

requestDB.onupgradeneeded = function(event) {
    console.log('IndexedDB: Base de datos creada'); 

    db = event.target.result;
    let logs = db.createObjectStore(tableDB, { keyPath: "id", autoIncrement: true }); 
    
    logs.createIndex("name", "name", { unique: false }); 
    logs.createIndex("types", "types", { unique: false }); 
    logs.createIndex("imageUrl", "imageUrl", { unique: false }); 

    logs.oncompleted = function (event) {
        console.info('Almacen de datos creado');
    }  

    
};

showData(); 

const names = document.getElementById("name");
const types = document.getElementById("types");
const imageUrl = document.getElementById("imageUrl");


const save = document.getElementById("save");
save.addEventListener("click", function () {
    saveData(names.value, types.value, imageUrl.value);
});
