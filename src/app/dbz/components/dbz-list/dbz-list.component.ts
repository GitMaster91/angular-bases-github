import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.scss']
})
export class DbzListComponent {

  @Output()
  public idxToDelete: EventEmitter<string> = new EventEmitter<string>();


  @Input()
  public characterList: Character[] = [
    { name: 'Trunks', power: 10 }
  ];


  public onDelete(id?: string): void {

    if (!id) return;

    this.idxToDelete.emit(id);
  };
};
