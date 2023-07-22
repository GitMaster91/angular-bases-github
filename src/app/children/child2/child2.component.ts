import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Child } from 'src/app/father/interfaces/child';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {
  @Input() children2: string = 'Peace 2';

  @Output()
  public dataFromChild2: EventEmitter<Child> = new EventEmitter();

  public thisMethodRunsEmit(): void {
    this.dataFromChild2.emit({
      id: 2,
      name: 'Child 2 Name',
      colors: ['Golden', 'Royalblue']
    });
  };
};
