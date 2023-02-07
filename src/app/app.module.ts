import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuadradoComponent } from './cuadrado/cuadrado.component';
import { SumarComponent } from './sumar/sumar.component';
import { DivisionComponent } from './division/division.component';
import { MultiplicarComponent } from './multiplicar/multiplicar.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CuadradoComponent,
    SumarComponent,
    DivisionComponent,
    MultiplicarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
