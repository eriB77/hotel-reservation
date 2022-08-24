import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  url: string ="/";
  urlChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }
}
