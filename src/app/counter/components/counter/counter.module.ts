import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CounterModule {};
