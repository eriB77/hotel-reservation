import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import hotels from '../db.json'


interface Category{
  value: string;
  viewValue: string;
}

interface hotels{
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
  hotels: hotels[] = ;

  newHotelForm = new FormGroup({
    name : new FormControl(this.hotels.name, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
    ]),
    city : new FormControl(this.hotels.city,[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
    ]),

    // newHotelCategory : new FormControl(''),
  });
  


  categories: Category[] =[
    {value: 'hotel', viewValue: 'Hotel'},
    {value: 'apartman', viewValue: 'Apartman'},
    {value: 'guesthouse', viewValue: 'GuestHouse'},
  ];
  hotels: any;

  onSubmit() {
    console.warn(this.newHotelForm.value);
  }
 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


}
