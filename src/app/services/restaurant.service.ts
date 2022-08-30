import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError, Observable, map, tap, of} from 'rxjs';
import { meals } from '../restaurant/menu-restaurant/menu-restaurant.component';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  menuRow:any;

    private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {     
      console.error(error);     
      this.log(`${operation} failed: ${error.message}`);  
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`ResturantService: ${message}`);
  }

  private mealssUrl = `${BASE_URL}/meals`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getMenuList(): Observable<meals[]>{
    return this.http.get<meals[]>(this.mealssUrl)
    .pipe(
      tap(_ => this.log('fetched meals list')),
      catchError(this.handleError<meals[]>('getMenuList', []))
    );
  }
  

}
