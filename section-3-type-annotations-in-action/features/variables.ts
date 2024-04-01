let apples: number = 5; // this variable must be a number

// apples= "ssasa";

let speed: string = 'fast'; // this variable must be a string

//speed = 10;

let hasName: boolean = true;


let nothingMuch: null = null;
let nothing: undefined = undefined;



//built in objects

let now: Date = new Date();

// array

let colors: string[] = ['red','green', 'blue'];

let myNumbers: number[]  = [1,2,3];

let truths: boolean [] = [ true, true,false ];


// Classes

class Car {

}

let car: Car =  new Car();


// object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20
}


// Function


const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}