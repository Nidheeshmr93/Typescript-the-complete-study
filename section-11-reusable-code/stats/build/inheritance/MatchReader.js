"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("./utils");
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(row) {
        return [
            (0, utils_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseFloat(row[4]),
            row[5], // Type assertion used here. So, Typescript know this going to be H, A, or D
            row[6],
        ];
    }
}
exports.MatchReader = MatchReader;
