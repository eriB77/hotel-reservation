import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HotelComponent } from './hotel/hotel.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/material.modul';
import { MatTableModule } from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { HotelListComponent } from './hotel-list/hotel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    RestaurantComponent,
    PageNotFoundComponent,
    DashboardComponent,
    HotelListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule, 
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
