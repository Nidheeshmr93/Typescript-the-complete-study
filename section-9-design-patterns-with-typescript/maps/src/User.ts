import {faker} from '@faker-js/faker';
import { Mappable } from './CustomMap';

export const color  = 'Red';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {

    this.name = faker.name.firstName();
    // console.log(this.location);
    // this.location.lat = 12;

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }

  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }

}

