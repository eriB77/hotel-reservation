import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatHeaderCellDef } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import HotelsJson from 'src/app/db.json';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
} from '@angular/forms';

import {AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import { HotelService } from '../services/hotel.service';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';


export interface hotels {
  id: number;
  name: string;
  city: string;
  category: string;
}

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  hotels: hotels[] = HotelsJson.hotels;
  
  
  constructor(
    private hotelService: HotelService, 
    private location: Location, 
    private httpClient: HttpClient) {}
  // @ViewChild(MatSort) sort : MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['name', 'city', 'category'];
  //dataSource = HotelsJson.hotels;
  dataSource = HotelsJson.hotels;


  ngOnInit(): void {
    //this.getHotelList();
    // this.dataSource.paginator = this.paginator;
    //   this.httpClient.get('http://localhost:3000/heros')
    //     .subscribe((hotels: hotels[]) => {
    //       this.dataSource.data = hotels;
    //     });
    }

  getHotelList(): void{
    // this.hotelService.getHotelList()
    // .subscribe(hotels => this.hotels = hotels);
  }
  // save(): void{
  //   if (this.hotels){
  //     this.hotelService.updateHotel(this.hotels)
  //     .subscribe(() => this.goBack());
  //   }
  // }
  goBack(): void {
    this.location.back();
  }


  // add(name:string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.hotelService.addHotels({ name} as hotels)
  //   .subscribe(hotels => {
  //     this.hotels.push(hotels);
  //   });
  // }

  // delete(hotels: hotels): void {
  //   this.hotels = this.hotels.filter(h =>h !==hotels);
  //   this.hotelService.deleteHero(hotels.id).subscribe();
  // }

}
