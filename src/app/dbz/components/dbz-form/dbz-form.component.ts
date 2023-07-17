import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './dbz-form.component.html',
  styleUrls: ['./dbz-form.component.scss']
})
export class DbzFormComponent {
  public character: Character = {
    name: '',
    power: 0
  };

  public emitCharacterFn(): void {
    console.log('emit', this.character);
  };
};
