"use strict"

export class List {
    constructor() {
        this.list = new Array();
    }

    enlist(element, index) {
        return this.list.splice(index, 0, element);
    }

    unlist(index) {
        return this.list.splice(index, 1);
    }

    empty() {
        return (this.list.length === 0);
    }

    size() {
        return this.list.length;
    }

    returnList() {
        return this.list;
    }

    browseList(index) {
        return this.list[index];
    }

    order() {
        return this.list.sort();
    }

    biggerPosition() {
        let bigger = {
            position: 0,
            content: "",
        };
        if (!this.vacio()) {
            bigger.content = this.list[bigger.position];
            for (let i = 1; i < this.list.length; i++) {
                if (bigger.content < this.list[i]) {
                    bigger.position = i;
                    bigger.content = this.list[i];
                }
            }
        }
        return bigger;
    }
}