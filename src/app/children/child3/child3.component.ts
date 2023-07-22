import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Child } from 'src/app/father/interfaces/child';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component {
  @Input() children3: string = 'Peace 3';

  @Output()
  public dataFromChild3: EventEmitter<Child> = new EventEmitter();

  public methodChild3(): void {
    this.dataFromChild3.emit({
      id: 3,
      name: 'Luis Alberto',
      colors: ['Green', 'White']
    });
  };
};
