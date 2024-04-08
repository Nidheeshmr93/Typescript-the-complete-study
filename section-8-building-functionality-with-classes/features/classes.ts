class Vehicle {

    // color: string = 'Black';

    // color: string;

    // constructor(color: string) {

    //   this.color = color;

    // }

    constructor(public color: string) {}

    protected horn(): void {
      console.log('Beep!!');
    }

}


const vehicle = new Vehicle('Black');

// vehicle.horn();
console.log(vehicle.color);


class Car extends Vehicle {

  constructor(public wheels: number, color: string) {

    super(color);

  }


  private drive(): void {
    console.log('Car is driving..');
  }

  startDriving(): void {
    this.drive();
    this.horn();

  }
}

const car = new Car(4,'Yellow');
car.startDriving();
// car.horn();
