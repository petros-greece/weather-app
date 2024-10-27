import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SunMoonEarthPositionComponent } from './components/sun-moon-earth-position/sun-moon-earth-position.component';
import { ForecastCardComponent } from './components/forecast-card/forecast-card.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { MoonPhasesComponent } from './components/moon-phases/moon-phases.component';
import { MainInfoComponent } from './components/main-info/main-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SunMoonEarthPositionComponent,
    ForecastCardComponent,
    MoonPhasesComponent,
    MainInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
