'use strict';

function showData() {
    console.log("Mostrando datos...");
    const tbody = document.getElementById("tbody"); 
    const poketext = document.getElementById("poketext");

    
    requestDB = indexedDB.open(nameDB, versionDB);

    requestDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };

    requestDB.onsuccess = function (event){
        db = event.target.result;
        channelDB = db.transaction(tableDB, "readonly").objectStore(tableDB);
        channelDB.getAll().onsuccess = function (event) {
            let logs = event.target.result;
            if (logs.length === 0)         tbody.innerHTML = 'No existen datos almacenados';
            else{
                tbody.innerHTML = "Tus Pokemons:";
                console.log(logs);
                for (let log of logs) {
                    let tr = document.createElement("tr"), 
                        nameCell = document.createElement("td"), 
                        typeCell = document.createElement("td"), 
                        imageCell = document.createElement("td"),
                        deleteCell = document.createElement("td"), 
                        updateCell = document.createElement("td"), 
                        
                        deleteButton = document.createElement("button"), 
                        deleteImg = document.createElement("img"), 
                        updateButton = document.createElement("button"), 
                        updateImg = document.createElement("img"),
                        dataImg = document.createElement("img");

                        nameCell.innerHTML = log.names; 
                        typeCell.innerHTML = log.types; 
                        imageCell.style = "text-align: center";
                        dataImg.src = log.imageUrl;
                        dataImg.width = "120"; 
                        dataImg.height = "120";
                        dataImg.style = "vertical-align: middle";
                        deleteButton.className = "Pokecalculate";

                        updateButton.textContent = "Editar";
                        updateButton.addEventListener('click', function () { 
                            document.getElementById("name").value = log.names; 
                            document.getElementById("types").value = log.types; 
                            document.getElementById("imageUrl").value = log.imageUrl; 
                            deleteData(log.id); 
                            console.log("Actualizando datos...");
                        });

                        updateImg.src = "../../../img/editar.png"; 
                        updateImg.width = "22"; 
                        updateImg.height = "22";
                        updateImg.style = "vertical-align: middle"; 
                        updateButton.className = "Pokecalculate";

                        deleteButton.textContent = "Liberar" 
                        deleteButton.className = "borrar"; 
                        deleteButton.addEventListener('click', function () { 
                            deleteData(log.id); 
                        });

                        deleteImg.src = "../../../img/liberar.png"; 
                        deleteImg.width = "22"; 
                        deleteImg.height = "22";
                        deleteImg.style = "vertical-align: middle";
                        deleteButton.className = "Pokecalculate";
                        
                        updateButton.appendChild(updateImg); 
                        updateCell.appendChild(updateButton); 
                        deleteButton.appendChild(deleteImg); 
                        deleteCell.appendChild(deleteButton); 
                        imageCell.appendChild(dataImg);

                        tr.appendChild(nameCell); 
                        tr.appendChild(typeCell); 
                        tr.appendChild(imageCell)
                        tr.appendChild(updateCell); 
                        tr.appendChild(deleteCell); 
                        
                        tbody.appendChild(tr); 
                }
            }
        }
    };
}
