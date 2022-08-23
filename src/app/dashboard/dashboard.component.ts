import { Component, OnDestroy, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  displayedColumns: string[] = ['name', 'city', 'category'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild('paginator') paginator! : MatPaginator; 
  @ViewChild(MatSort) matSort! : MatSort;

  subscription: Subscription = new Subscription;

  constructor(private hotelService: hotelService) { }

  
  async ngOnInit() {
    this.hotelService.getHotelList().subscribe((response:any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    })

  }

  
}
