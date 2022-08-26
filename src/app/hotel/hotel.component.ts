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


interface Category {
  value: string;
  viewValue: string;
}

interface HOTELS {
  id: number;
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
  hotelService: any;

  add(hotels: hotels): void {
    hotels = hotels.trim();
    if (!hotels) { return; }
    this.hotelService.saveHotel({ hotels} as hotels)
    .subscribe(hotels => {
      this.hotels.push(hotels);
    });
  }

  
  constructor(private fb: FormBuilder) { }



  ngOnInit(): void {
    this.reactiveForm();
  }
  reactiveForm(){
    this.hotelsForm = this.fb.group(
      {
        
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(30),
            Validators.pattern(this.namePattern),
          ]
        ],
        city: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(30),
            Validators.pattern(this.cityPattern),
          ]
        ],
        category: [
          '',
          Validators.required,
        ]
      }
    );
  }
};
