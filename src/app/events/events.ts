import { Component } from '@angular/core';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-events',
  imports: [CardModule, ButtonModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {

   events: any[] = [{
     img: 'galLimPrayer.jpeg',
     title: 'Galway & Limerick Prayer',
     location: `St. Michael's Community Hall, Craughwell, Galway`,
     //time: this.formatDate(this.getSaturdayOfCurrentMonth(2)).concat(' 4:00PM')
     time: '11/04/2026 2:30pm'
   },{
     img: 'communion.jpg',
    title: 'Holy Communion Service',
    location: `St. Michael's Community Hall, Craughwell, Galway`,
     time: this.formatDate(this.getSaturdayOfCurrentMonth(4)).concat(' 10:00AM')
  },
     {
       img: 'vbs.jpeg',
       title: 'Vacation Bible School',
       location: `St. Michael's Community Hall, Craughwell, Galway`,
       time: '02/05/2026 & 03/05/2026'
     }]

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
