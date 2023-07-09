import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age:  number = 45;

  constructor() {
    console.log('constructor de hero');

    let user: User = {
      id: 1,
      name: 'Luis',
      country: 'Mex'
    };

    localStorage.setItem('key1', JSON.stringify(user));
  };

  get capitalizedName(): string {
    return this.name.toLocaleUpperCase();
  };

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  };

  public changeHero(): void {
    this.name = 'Luis Alberto';
  };

  public changeAge(): void {
    this.age = 32;
  };

  public resetFn(): void {
    this.name = 'ironman';
    this.age  = 45;
  };

};

export interface User {
  id: number;
  name: string;
  country: string;
};
