import { MatchReader } from './MatchReader';
// import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { WinAnalysis } from './analyzers/WinAnalysis';
import { Summary } from './Summary';
// import { HtmlReport } from './reportTargets/HtmlReport';

// Create an object that satisfies the 'DataReader' interface

// const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = MatchReader.fromCsv('football.csv');

matchReader.load();

//const summary = new Summary(new WinAnalysis('Man United'), new ConsoleReport());

const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
