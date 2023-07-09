import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListaComponent } from './heroes/lista/lista.component';
import { LoaderComponent } from './loader/loader.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CounterModule } from './counter/components/counter/counter.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ListaComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
