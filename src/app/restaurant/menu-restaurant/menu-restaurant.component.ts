import { Component, OnInit, ViewChild, Input, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import { Observable } from 'rxjs';

export interface meals {
  productName: string;
  price: number;
  imgUrl: string;
}

@Component({
  selector: 'app-menu-restaurant',
  templateUrl: './menu-restaurant.component.html',
  styleUrls: ['./menu-restaurant.component.scss']
})
export class MenuRestaurantComponent implements OnInit {
  
  menuRow: any;

  constructor(
    public restaurantService: RestaurantService,
    private httpClient: HttpClient,) {}

  displayedColumns: string[] = ['productName', 'price', 'imageUrl'];
  dataSource! : MatTableDataSource<meals>;

  @ViewChild(MatSort)
  sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  getMenuList(): void{
    this.restaurantService.getMenuList().subscribe(
        (meals) => {this.dataSource.data = meals}
      );
    }


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.getMenuList();
    
  }

}
