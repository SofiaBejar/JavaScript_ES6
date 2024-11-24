"use strict"

export function findHighestPriority(toDo){
    let tasks = toDo.returnList();
    let highestPriority = tasks[0];
    for(let i=0; i<toDo.size(); i++){
        if(tasks[i].prioridad > highestPriority.prioridad){
            highestPriority = i;
        }
    }
    
    return highestPriority;
}