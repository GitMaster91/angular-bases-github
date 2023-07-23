import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { User } from "../components/dbz-form/dbz-form.component";
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  constructor(private _dbzService: DbzService) {};

  public get characters(): Character[] {
    return [...this._dbzService.characters];
  };

  public onDeleteCharacter(id: string): void {
    this._dbzService.deleteCharacterFn(id);
  };

  public onNewCharacter(ch: Character): void {
    this._dbzService.onNewCharacterFn(ch);
  };

};
