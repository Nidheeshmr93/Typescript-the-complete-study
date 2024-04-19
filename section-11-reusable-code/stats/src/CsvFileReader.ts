import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type  MatchData =  [Date,string,string,number,number,MatchResult,string];

export class CsvFileReader {

    data: MatchData[] = [];

    constructor(public filename: string) {}

    read(): void {
        this.data =  fs.readFileSync('football.csv', {  
          encoding: 'utf-8'
        }).split('\n').map( (row: string): string[] => {
            return row.split(',');
        } ). map( (row: string[]): MatchData => {

              return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseFloat(row[4]),
                row[5] as MatchResult, // Type assertion used here. So, Typescript know this going to be H, A, or D
                row[6]
              ];
        } );
    }
}