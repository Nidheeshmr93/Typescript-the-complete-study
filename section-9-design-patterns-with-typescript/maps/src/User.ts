import {faker} from '@faker-js/faker';

export const color  = 'Red';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {

    this.name = faker.name.firstName();
    // console.log(this.location);
    // this.location.lat = 12;

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }

  }

}

