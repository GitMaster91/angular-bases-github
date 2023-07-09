import { NgModule } from "@angular/core";
import { ListaComponent } from "./components/lista/lista.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    ListaComponent,
    HeroComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    ListaComponent,
    HeroComponent,
  ],
})
export class HeroesModule {};
