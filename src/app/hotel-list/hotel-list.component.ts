import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatHeaderCellDef } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/table';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
} from '@angular/forms';
import { HotelService } from '../services/hotel.service';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import { HotelComponent } from '../hotel/hotel.component';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';


export interface hotels {
  id?: number;
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
  hotelRow: any;
  constructor(
    private hotelService: HotelService, 
    private location: Location, 
    private httpClient: HttpClient,
    public dialog: MatDialog) {}


  @ViewChild(MatSort)
  sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatTable)
  table!: MatTable<any>;

  displayedColumns: string[] = ['name', 'city', 'category', 'delete'];
  dataSource = new MatTableDataSource();

  openDialog(){
    const dialogRef = this.dialog.open(HotelComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getHotelList()
      console.log(`Dialog result: ${result}`);
    });
    
  }
  
  ngOnInit(): void {
    this.getHotelList()
    }

  getHotelList(): void{
    this.hotelService.getHotelList().subscribe(
      (hotels) => {this.dataSource.data = hotels}
    );
  }

  goBack(): void {
    this.location.back();
  }


  delete(id: number): void{
    this.hotelService.deleteHotel(id).subscribe(() => { this.getHotelList()});
  }

}
