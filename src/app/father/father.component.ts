import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from '../children/child1/child1.component';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements AfterViewInit {
  public factorResult: number = 0;
  public humanFeeling: string = ' Love my children !! ';

  @ViewChild(Child1Component) child_one!: Child1Component;


  constructor(private cd: ChangeDetectorRef) {};

  ngAfterViewInit(): void {
    this.factorResult = this.child_one.factorFn(10, 15);
    this.cd.detectChanges();
  };

};
