import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservationService } from '../service/reservation.service';


export interface hotels {
  id: number;
  name: string;
  city: string;
  category: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  hotels!: Observable<hotels[]>;
  displayedColumns: string[] = ['name', 'city', 'category'];
  dataSource!: MatTableDataSource<hotels>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  post: any;
 

  constructor(private service: ReservationService) {
    this.service.getHotelList().subscribe((response) => {
      console.log(response);
      this.post = response;

      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLImageElement).ariaValueMax;
    this.dataSource.filter = filterValue?.trim().toLowerCase()

    if (this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }
  }
  ngOnInit() {
  }
}