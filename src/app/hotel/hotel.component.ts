import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { hotels } from '../hotel-list/hotel-list.component';
import {MatDialog} from '@angular/material/dialog';
import {Injectable} from '@angular/core';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';
import { HotelService } from '../services/hotel.service';


interface Category {
  value: string;
  viewValue: string;
}

interface HOTELS {
  id?: number;
  name: string;
  city: string;
  category: string;
}

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  // public hotelsList: {
  //   id: number,
  //   name: string,
  //   city: string,
  //   category: string
  // }[] = hotels;
  
  categories: Category[] = [
    { value: 'hotel', viewValue: 'Hotel' },
    { value: 'apartman', viewValue: 'Apartman' },
    { value: 'guesthouse', viewValue: 'GuestHouse' },
  ];

  hotels: any;

  public hotelsForm!: FormGroup;
  public name!: FormControl;
  public city!: FormControl;
  public category!: FormControl;
  namePattern = "^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z]).{4,30}$";
  cityPattern = "^[[a-zA-Z ]{4,30}$";
 
  constructor(private hotelService: HotelService) { 
    this.hotelsForm = new FormGroup({
      name : new FormControl('',  [Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
      Validators.pattern(this.namePattern)]),
      city : new FormControl('',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        Validators.pattern(this.cityPattern),
      ]),
      category : new FormControl('',
      Validators.required),

    })
  }

  // add(hotels: hotels): void {
  //   hotels = hotels.trim();
  //   if (!hotels) { return; }
  //   this.hotelService.saveHotel({ hotels} as hotels)
  //   .subscribe(hotels => {
  //     this.hotels.push(hotels);
  //   });
  // }
  saveHotel(){
    /* this.hotelService.saveHotel(this.hotelsForm.value).subscribe((hotelItem: any) => {
      this.hotels = hotelItem; */
      console.log(this.hotelsForm.value);
      this.hotelService.saveHotel(this.hotelsForm.value).subscribe((hotel:hotels) => {console.log(hotel)})
   
  }




  ngOnInit(): void {
  }
  
};
