import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { User } from "../components/dbz-form/dbz-form.component";
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  public num : number = 1;
  public characters: Character[] = [
    { name: 'Krillin', power: 1000 },
    { name: 'Goku', power: 9500 },
    { name: 'Vegeta', power: 7500 }
  ];

  public onNewCharacterFather(character: Character): void {
    console.log('ch main page...', character);
  };

  public stringFn(str: string): void {
    console.log('str main page...', str);
  };

  public runsEmitFn(theUser: User): void {
    console.log('theUser main page',  { ...theUser, id: this.num++ } );
  }

  public fatherFnString(theStr: any): void {
    console.log('check str', theStr);
  };

};
