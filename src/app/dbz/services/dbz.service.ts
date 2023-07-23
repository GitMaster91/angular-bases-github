import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { User } from "../components/dbz-form/dbz-form.component";
import { v4 as uuid } from 'uuid';
@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 7500 }
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

  public onNewCharacterFn(theStr: Character): void {
    // console.log('check str', theStr);

    this.characters.push({
      id: uuid(),
      ...theStr
    });
  };

  public deleteCharacterFn(id: string): void {
    if (id || this.characters.length) {
      console.error("Invalid index. Index out of range.");
      return;
    };

    this.characters.filter((ch: Character) => {
      return ch.id !== id;
    });
  };
};
