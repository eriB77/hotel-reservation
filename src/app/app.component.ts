import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationService } from './service/reservation.service';
import { hotels } from './dashboard/dashboard.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotel-reservation';
  
  constructor(private service: ReservationService){
    this.service.getHotelList().subscribe(hotels =>{
      console.log(hotels)
    })
  }

  // @Output() pageChanged: EventEmitter<string> = new EventEmitter();
  // onPageChange($event: string): void{
  //   console.log($event);
  // }
}
