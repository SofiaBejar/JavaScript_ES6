import { List } from './List.js';

"use strict"

export class Stack extends List {
    constructor() {
        super();
    }

    toStack(element) {
        return super.enlist(element, super.size());
    }

    unstack() {
        return super.unlist(super.size() - 1);
    }

    empty() {
        return super.empty();
    }

    size() {
        return super.size();
    }

    returnStack(){
        return super.returnList();
    }

    browseStack() {
        return super.browseList(super.size() - 1);
    }
}
