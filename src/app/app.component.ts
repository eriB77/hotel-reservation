import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RestaurantComponent } from './restaurant/restaurant.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotel-reservation';
}
