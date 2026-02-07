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
     img: 'pray.jpg',
     title: 'Cottage Prayer',
     location: `TBC`,
     time: this.formatDate(this.getSaturdayOfCurrentMonth(2)).concat(' 4:00PM')
   },{
     img: 'communion.jpg',
    title: 'Holy Communion Service',
    location: `St. Michael's Community Hall, Craughwell, Galway`,
     time: this.formatDate(this.getSaturdayOfCurrentMonth(4)).concat(' 10:00AM')
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
