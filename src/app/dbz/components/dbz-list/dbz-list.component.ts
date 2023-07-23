import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.scss']
})
export class DbzListComponent {

  @Output()
  public idxToDelete: EventEmitter<number> = new EventEmitter<number>();


  @Input()
  public characterList: Character[] = [
    { name: 'Trunks', power: 10 }
  ];


  public onDelete(idx: number): void {
    this.idxToDelete.emit(idx);
  };
};
