import { Component } from '@angular/core';
import {Card} from "primeng/card";
import {Image} from 'primeng/image';

@Component({
  selector: 'app-about',
  imports: [
    Card,
    Image
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  contacts : any[] = [
    {name: 'Kochumman Jacob', title: 'Vice President', phone: '+353872592010'},
    {name: 'Koshy George', title: 'Secretary', phone: '+353892790445'},
    {name: 'George Thomas', title: 'Treasurer', phone: '+353879789378'}
  ];

  people: any[] = [{
    img: 'bishop.jpeg',
    title: 'Diocese Bishop of UK, Europe & Africa',
    name: 'RT. REV. PD. DR. Joseph Mar Ivanios Episcopa'
  },
    {
      img: 'reverend.jpeg',
      title: 'Reverend of Galway & Dublin congregation',
      name: 'REV. Robin Raj'
    }]

}
