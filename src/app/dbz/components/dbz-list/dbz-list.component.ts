import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.scss']
})
export class DbzListComponent {

  @Output()
  public idxToDelete: EventEmitter<number> = new EventEmitter();


  @Input()
  public characterList: Character[] = [
    { name: 'Trunks', power: 10 }
  ];


  public onDelete(idx: number): void {
    console.log('idx', idx);
    this.idxToDelete.emit(idx);
  };
};
