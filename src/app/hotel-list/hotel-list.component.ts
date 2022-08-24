import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatHeaderCellDef } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import HotelsJson from 'src/app/db.json';

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

  hotels: hotels[] = HotelsJson;

  constructor() { 
    console.log(this.hotels);
  }

  ngOnInit(): void {
  }

}
