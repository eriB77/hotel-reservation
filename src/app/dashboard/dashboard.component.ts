import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HotelService } from '../services/hotel.service';
import HotelsJson from 'src/app/db.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getHotelList();
  }
  getHotelList(): void{
    // this.hotelService.getHotelList()
    // .subscribe(hotels => this.hotels = hotels.slice(1,5));
  }
  
}
