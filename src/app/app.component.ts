import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Hola Mundo';
  public someNum: number = 55;
  @Input() recibir: string = 'random !!';
};
