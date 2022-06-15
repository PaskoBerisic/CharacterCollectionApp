import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroFormGroupComponent } from './heroes/hero-form-group/hero-form-group.component';
import { VillainsComponent } from './villains/villains.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VillainFormGroupComponent } from './villains/villain-form-group/villain-form-group.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
  HeroFormGroupComponent,
  VillainsComponent,
  DashboardComponent,
  VillainFormGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
