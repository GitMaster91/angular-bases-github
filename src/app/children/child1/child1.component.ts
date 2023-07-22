import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Child } from 'src/app/father/interfaces/child';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {
  @Input()
  children1: string = 'Peace 1';

  public child1Data: Child = {
    id: 1,
    name: 'Child 1 Name',
    colors: ['Blue', 'Yellow']
  };

  @Output()
  public childOutput1: EventEmitter<Child> = new EventEmitter();


  public factorFn<T extends number>(a: number, b: number): number {
    return a * b;
  };

  public child1Method(): void {
    this.childOutput1.emit(this.child1Data);
  };

};
