// interface Vehicle {
//   name: string;
//   year: number;
//   broken: boolean;
//   summary(): string;
// }

interface Reportable {
  summary(): string;
}

const oldCivic =  {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar:40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
}

// const printVehicle = (vehicle: { name: string; year: number, broken: boolean } ):void => {

//     console.log(`Name: ${vehicle.name}`);
//     console.log(`Year: ${vehicle.year}`);
//     console.log(`Broken ? ${vehicle.name}`);

// };

// const printVehicle = (vehicle: Vehicle):void => {

//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken ? ${vehicle.name}`);
//   console.log(`Summary: ? ${vehicle.summary()}`);


// };




const printSummary= (item: Reportable):void => {
  console.log(`Summary: ? ${item.summary()}`);
};


//printVehicle(oldCivic);


printSummary(oldCivic);
printSummary(drink);



