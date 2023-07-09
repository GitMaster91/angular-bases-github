import { Component, Input } from '@angular/core';
import { User } from '../hero/hero.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  public heroesNames: string[] = [
    'Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'
  ];

  public showDeletedHero: string | undefined = '';

  public users: User[] = [
    { id: 1, country: 'Mex', name: 'User1' },
    { id: 2, country: 'Mex', name: 'User2' },
    { id: 3, country: 'Mex', name: 'User3' },
    { id: 4, country: 'Mex', name: 'User4' },
    { id: 5, country: 'Mex', name: 'User5' }
  ];
  public maxNum: number = this.users.length;

  public myForm!: FormGroup;

  public isUser!: User;
  public tr: string | null | undefined = localStorage.getItem('key1');

  constructor(private _fb: FormBuilder) {

    this.myForm = this._fb.group({
      userId: ['', Validators.required]
    });


    if (this.tr) {
      this.isUser = JSON.parse(this.tr);
    } else {
      console.log('## Key not found in localStorage');
    };
  }

  public addUser() {
    this.users.push({
      id: this.users.length + 1,
      country: 'Mex',
      name: `User${this.users.length + 1}`
    });

    this.maxNum = this.users.length;
  };


  public deleteUser() {
    this.users = this.users.filter((user: User) => {
      return user.id !== this.myForm.value['userId'] ;
    });
  };

  // ###

  public removeLastHero(): void {

    console.log(this.heroesNames.length);
      const deletedHero: string | undefined = this.heroesNames.pop();
      this.showDeletedHero = deletedHero;

    // if (this.heroesNames.length > 0) {
    //   const deletedHero: string | undefined = this.heroesNames.pop();
    //   this.showDeletedHero = deletedHero;
    // } else {
    //   alert('no hay heroes para borrar');
    // };

  };


  public refreshFn(): void {
    window.location.reload();
  };
};
