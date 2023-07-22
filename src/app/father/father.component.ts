import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from '../children/child1/child1.component';
import { Child } from './interfaces/child';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements AfterViewInit {
  public factorResult: number = 0;
  public humanFeeling: string = ' A string from the Father ';

  @ViewChild(Child1Component) child_one!: Child1Component;

  public dateToShow!: Child;

  constructor(private cd: ChangeDetectorRef) {};

  ngAfterViewInit(): void {
    this.factorResult = this.child_one.factorFn(10, 15);
    this.cd.detectChanges();
  };

  public fatherMethod1(dataChild: Child): void {
    console.log('this method receive data from child1', dataChild);
    this.dateToShow = dataChild;
  };

};
