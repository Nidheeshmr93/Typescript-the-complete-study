"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    // collection: number[];
    // constructor(collection: number[]) {
    //   this.collection = collection;
    // }
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - (i + 1); j++) {
                // All of this only works if collection is numbers[]
                // If collection is an array of numbers
                // if(this.collection instanceof Array) {
                // collection === number[]
                //     if(this.collection[j] > this.collection[j+1]) {
                //         const lefHand = this.collection[j];
                //         this.collection[j] = this.collection[j+1];
                //         this.collection[j+1] = lefHand;
                //     }
                // }
                // Only going to work if collection is a string
                // If collection is a string, do this logic instead:
                // ~~ logic to compare and swap characters in a string
                // if(typeof this.collection === 'string') {
                // }
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
