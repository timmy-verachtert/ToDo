import { Component } from '@angular/core';
import { Taak } from './Taak';
import { TaakService } from './taak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';
  public Taken: Taak[];
  test = "hallo";
  constructor(private _taakservice: TaakService){
/*    this.Taken = [];
    this.Taken.push(new Taak("schofzak maken",false)),
    this.Taken.push(new Taak("kleine naar school doen",false)),
    this.Taken.push(new Taak("afwas doen",false)),
    this.Taken.push(new Taak("gras afdoen",false)),
    this.Taken.push(new Taak("was",false)),
    this.Taken.push(new Taak("strijk",false)),
    this.Taken.push(new Taak("eten maken",false))
    */
  }
  verschuif(taak:string){
    this.Taken.forEach(t => {
      if(t.naam == taak){
        if(t.gedaan==false){
          t.gedaan = true;
        }
        else{t.gedaan = false}
      }
    });
  }
  toevoegenTaak(taak:string){
    this.Taken.push(new Taak(taak,false));
  }
  ngOnInit(){
    this.Taken = this._taakservice.getTaken();
  }
}
