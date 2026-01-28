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
     img: 'communion.jpg',
    title: 'Holy Communion Service',
    location: `Lackagh Parish Centre, Turloughmore, Galway`,
    time: '31/01/2026 10:00 AM'
  }]

}
