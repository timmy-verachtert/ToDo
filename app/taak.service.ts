import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaakService {

  constructor() { }
  getTaken(){
    return [
      {"naam":"schofzak maken","gedaan":false},
      {"naam":"kleine naar school doen","gedaan":false},
      {"naam":"afwas doen","gedaan":false},
      {"naam":"gras afdoen","gedaan":false},
      {"naam":"was","gedaan":false},
      {"naam":"strijk","gedaan":false},
      {"naam":"eten maken","gedaan":false}
      ]
  }
}
