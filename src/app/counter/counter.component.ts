import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  public title: string = 'Mi primera App de Angular';
  public arrNames: string[] = ['Luis', 'Leydi'];
  public initialValue: number = 7;
  public counter: number = 0;

  constructor() {
    this.iniciarProceso();
  };


  public async iniciarProceso() {
    await this.fn1();
    await this.fn2();
    await this.fn3();
  }

  public fn1() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('fn1...');
        resolve();
      }, 11000);
    });
  }

  public fn2() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('fn2...');
        resolve();
      }, 2000);
    });
  }

  public fn3() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('fn3...');
        resolve();
      }, 0);
    });
  }


  public addFn() {
    this.initialValue += 1;
  };

  public resetFn() {
    this.initialValue = 0;
  };

  public increaseBy(value: number) {
    console.log('+');
    this.counter += value;
  };

  public decreaseBy(value: number) {
    console.log('-');
    this.counter -= value;
  };

  public getButtonValue(button: HTMLButtonElement): number {
    return parseInt(button.textContent?.split('')[1] || '0');
  };

  public resetFn2() {
    this.counter = 0;
  };
};
