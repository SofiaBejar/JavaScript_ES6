import { List } from './List.js';

"use strict"

export class Queue extends List {
    constructor() {
        super();
    }

    queue(element) {
        super.enlist(element, super.size());
    }

    dequeue() {
        super.unlist(0);
    }

    empty() {
        return super.empty();
    }

    size() {
        return super.size();
    }
    
    returnQueue(){
        return super.returnList();
    }

    browseQueue() {
        return super.browseList(0);
    }
}
