import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError, Observable, map, tap, of} from 'rxjs';
import HotelsJson from 'src/app/db.json';
import { hotels } from '../hotel-list/hotel-list.component';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {     
      console.error(error);     
      this.log(`${operation} failed: ${error.message}`);  
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`HotelService: ${message}`);
  }

  private hotelsUrl = `${BASE_URL}/hotels`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
  getHotelList(): Observable<hotels[]>{
    return this.http.get<hotels[]>(this.hotelsUrl)
    .pipe(
      tap(_ => this.log('fetched hotels list')),
      catchError(this.handleError<hotels[]>('getHotelList', []))
    );
  }

  getHotel(id: number): Observable<hotels>{
    const url = `${this.hotelsUrl}/${id}`;
    return this.http.get<hotels>(url).pipe(
      tap(_ => this.log(`fetched hotel id=${id} `))
    );
  }
  
  saveHotel(hotel: hotels): Observable<hotels>{
    return this.http.post<hotels>(this.hotelsUrl, hotel, this.httpOptions).pipe(
      tap((newhotel:hotels) =>this.log(`added hotels w/ id=${newhotel.id}`)),
      catchError(this.handleError<hotels>('addHotel'))
    );
  }

  updateHotel(hotels: hotels): Observable<any> {
    return this.http.put(this.hotelsUrl, hotels, this.httpOptions).pipe(
      tap(_ => this.log(`update hotels id=${hotels.id}`)),
      catchError(this.handleError<any>('updateHotel'))
    );
  }
 
  searchHotels(term: string): Observable<hotels[]> {
    if (!term.trim()) {
      return of([]);

    }
    return this.http.get<hotels[]>(`${this.hotelsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found hotels matching "${term}"`) :
        this.log(`no hotels matching "${term}"`)
        ),
      catchError(this.handleError<hotels[]>('searchHotels', []))

    );
  }

  deleteHotel(id: number): Observable<hotels>{
    const url = `${this.hotelsUrl}/${id}`;
    return this.http.delete<hotels>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hotel id=${id}`)),
      catchError(this.handleError<hotels>('deleteHotel'))
    );
  }
  
  
}

