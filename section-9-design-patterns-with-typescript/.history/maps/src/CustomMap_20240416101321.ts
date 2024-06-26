import { Company } from "./Company";
import { User } from "./User";

export class CustomMap {

 private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement,{
      zoom:1,
      center: {
        lat:0,
        lng:0
      }
    });
  }

  addUserMaker(user: User): void {

    new google.maps.Marker({
      map: this.googleMap,
      position:{
        lat:user.location.lat,
        lng:user.location.lng
      }
    })
  }

  addCompanyMaker(company: Company): void {

  }
}