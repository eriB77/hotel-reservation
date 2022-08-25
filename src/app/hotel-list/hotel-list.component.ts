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
  
  displayedColumns: string[] = ['name', 'city', 'category'];
  dataSource = HotelsJson.hotels;
  constructor() { 
    console.log(this.hotels);
  }
  @ViewChild(MatSort) sort = MatSort;
  

  ngOnInit(): void {
  }

}
