import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { DbzListComponent } from './components/dbz-list/dbz-list.component';
import { DbzFormComponent } from './components/dbz-form/dbz-form.component';



@NgModule({
  declarations: [
    MainPageComponent,
    DbzListComponent,
    DbzFormComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
