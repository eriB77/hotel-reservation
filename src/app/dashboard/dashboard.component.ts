import { Component, OnDestroy, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { HttpClientModule } from '@angular/common/http';


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
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  displayedColumns: string[] = ['name', 'city', 'category'];
  dataSource!: MatTableDataSource<hotels>;
  @ViewChild('paginator') paginator! : MatPaginator; 

  @ViewChild(MatSort)
  sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor(private _liveAnnouncer: LiveAnnouncer) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  

  announceSortChange(sortState:Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


 

  
  
  // async ngOnInit() {
  //   this.hotelService.getHotelList().subscribe((response:any) => {
  //     this.dataSource = new MatTableDataSource(response);
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.matSort;
  //   })

  }

  
}
