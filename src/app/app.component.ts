import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLoading: boolean = true;
  public title: string = 'Hola Mundo';
  public someNum: number = 55;
  @Input() recibir: string = 'random !!';

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  };

};
