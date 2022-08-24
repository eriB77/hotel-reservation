import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatHeaderCellDef } from '@angular/material/table';

export interface hotels {
  id: number;
  name: string;
  city: string;
  category: string;
}

const ELEMENT_DATA: hotels[] = [
{
      id: 1,
      name: 'Hotel Benczur',
      city: 'Budapest',
      category: 'Hotel'
    },
    {
      id: 2,
      name: 'Star Apartmans',
      city: 'Madrid',
      category: 'Apartman'
    },
    {
      id: 3,
      name: 'Hotel Ritz',
      city: 'Paris',
      category: 'Hotel'
    },
    {
      id: 4,
      name: 'Dream Tourist',
      city: 'London',
      category: 'GuestHouse'
    },
    {
      id: 5,
      name: 'Four Seasons',
      city: 'Praha',
      category: 'Hotel'
    }
];

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'city', 'category'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
