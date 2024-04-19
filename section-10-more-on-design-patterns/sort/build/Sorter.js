"use strict";
// interface Sortable {
//   length: number;
//   compare(leftIndex: number,  rightIndex: number): boolean;
//   swap(leftIndex: number,  rightIndex: number): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        const { length } = this;
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
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
