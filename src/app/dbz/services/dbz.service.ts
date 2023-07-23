import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { User } from "../components/dbz-form/dbz-form.component";

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    { name: 'Krillin', power: 1000 },
    { name: 'Goku', power: 9500 },
    { name: 'Vegeta', power: 7500 }
  ];

  constructor() {};

  public num : number = 1;

  public onNewCharacterFather(character: Character): void {
    console.log('ch main page...', character);
  };

  public stringFn(str: string): void {
    console.log('str main page...', str);
  };

  public runsEmitFn(theUser: User): void {
    console.log('theUser main page',  { ...theUser, id: this.num++ } );
  }

  public onNewCharacterFn(theStr: any): void {
    // console.log('check str', theStr);
    this.characters.push(theStr);
  };

  public deleteCharacterFn(theIdx: number): void {
    if (theIdx < 0 || theIdx >= this.characters.length) {
      console.error("Invalid index. Index out of range.");
      return;
    };

    this.characters.splice(theIdx, 1);
  };
};
