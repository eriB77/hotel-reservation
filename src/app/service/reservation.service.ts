import { Injectable } from '@angular/core';
import { hotels } from '../dashboard/dashboard.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  jsonUrl: string = "localhost:3000/hotels";

  constructor(private http:HttpClient) { }

  getHotelList():Observable<hotels[]>{
    return this.http.get<hotels[]>(this.jsonUrl);
  }
}
