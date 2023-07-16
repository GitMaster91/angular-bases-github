import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {
  @Input() children1: string = 'Peace 1';


  public factorFn<T extends number>(a: number, b: number): number {
    return a * b;
  };
};
