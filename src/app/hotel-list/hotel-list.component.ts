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
  constructor(
    private hotelService: HotelService, 
    private location: Location, 
    private httpClient: HttpClient,
    public dialog: MatDialog) {}
  @ViewChild(MatSort)
  sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['name', 'city', 'category', 'delete'];
  //dataSource = HotelsJson.hotels;
  dataSource = new MatTableDataSource();

  openDialog(){
    const dialogRef = this.dialog.open(HotelComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
    
  }
  
  ngOnInit(): void {
  this.hotelService.getHotelList().subscribe(
    (hotels) => {this.dataSource.data = hotels}
  );
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


  @ViewChild(MatTable)
  table!: MatTable<any>;

  delete(hotelrow:hotels) {
    // this.dataSource = new MatTableDataSource(this.dataSource.data.filter((hotelItem) => hotelItem.id !== hotelrow.id));
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
