import { Component } from '@angular/core';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ImageModule} from 'primeng/image';

@Component({
  selector: 'app-events',
  imports: [CardModule, ButtonModule, ImageModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {

  contacts : any[] = [
    {name: 'Kochumman Jacob', title: 'Vice President', phone: '+353872592010'},
    {name: 'Koshy George', title: 'Secretary', phone: '+353892790445'},
    {name: 'George Thomas', title: 'Treasurer', phone: '+353879789378'}
  ];

   events: any[] = [{
     img: 'pray.jpg',
     title: 'Cottage Prayer',
     location: `Undisclosed`,
     time: this.formatDate(this.getSaturdayOfCurrentMonth(2)).concat(' 4:00PM')
   },{
     img: 'family_day.jpeg',
    title: 'Family Day Holy Communion Service',
    location: `St. Michael's Community Hall, Craughwell, Galway`,
     time: this.formatDate(this.getSaturdayOfCurrentMonth(4)).concat(' 11:00AM')
  },
     {
       img: 'world_sunday_school.jpeg',
       title: 'World Sunday School Day',
       location: `Riverstick Community Center, Boulaing, Riverstick, Co.Cork`,
       time: '31/10/2026 8:30AM-3:30PM'
     }
     ]

  getSaturdayOfCurrentMonth(numberSat: number): Date {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    // Start at the 1st of the month
    const date = new Date(year, month, 1);

    // Find the first Saturday (day 6)
    // getDay() returns 0 for Sunday, 6 for Saturday [3]
    while (date.getDay() !== 6) {
      date.setDate(date.getDate() + 1);
    }
    // Add 7 days to get the second Saturday
    const daysToAdd = (numberSat-1)*7;
    date.setDate(date.getDate() + daysToAdd);

    return date;
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-GB').format(date);
  }

}
