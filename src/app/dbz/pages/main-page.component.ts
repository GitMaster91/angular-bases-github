import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { User } from "../components/dbz-form/dbz-form.component";
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  constructor(public _dbzService: DbzService) {};

};
