import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './dbz-form.component.html',
  styleUrls: ['./dbz-form.component.scss']
})
export class DbzFormComponent {

  @Output()
  public justEmit: EventEmitter<any> = new EventEmitter();

  @Output()
  public myUser: EventEmitter<User> = new EventEmitter();

  @Output()
  public theEmitString: EventEmitter<string> = new EventEmitter();

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  public emitCharacterFn(): void {
    console.log('emit', this.character);

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
    this.theEmitString.emit('Luis Alberto');

    this.character.name  = '';
    this.character.power = 0;
  };

  public emitFn(): void {
    this.myUser.emit({
      id: 1,
      name: 'Luis Alberto Villar Ortiz',
      country: 'Mex'
    });
  };

  public testEmit(): void {
    this.justEmit.emit(15);
  };
};


export interface User {
  id: number;
  name: string;
  country: string;
};
