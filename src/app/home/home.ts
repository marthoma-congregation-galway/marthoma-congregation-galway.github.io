import {Component, model, ModelSignal, OnInit} from '@angular/core';
import {CardModule} from 'primeng/card';
import {GalleriaModule} from 'primeng/galleria';

@Component({
  selector: 'app-home',
  imports: [CardModule, GalleriaModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  images: any[] = [
    {
      itemImageSrc: 'pic1.jpeg',
      thumbnailImageSrc: 'pic1.jpeg',
      alt: 'Description for Image 2',
      title: 'Title 2'
    },
    {
      itemImageSrc: 'pic2.jpeg',
      thumbnailImageSrc: 'pic2.jpeg',
      alt: 'Description for Image 2',
      title: 'Title 1'
    },
    {
      itemImageSrc: 'pic3.jpeg',
      thumbnailImageSrc: 'pic3.jpeg',
      alt: 'Description for Image 3',
      title: 'Title 3'
    },
    {
      itemImageSrc: 'pic4.jpeg',
      thumbnailImageSrc: 'pic4.jpeg',
      alt: 'Description for Image 4',
      title: 'Title 4'
    },
    {
      itemImageSrc: 'pic5.jpeg',
      thumbnailImageSrc: 'pic5.jpeg',
      alt: 'Description for Image 5',
      title: 'Title 5'
    }];

  responsiveOptions: any[] =     [ {
    breakpoint: '1500px',
    numVisible: 5
  },
{
  breakpoint: '1024px',
  numVisible: 3
},
{
  breakpoint: '768px',
    numVisible: 2
},
{
  breakpoint: '560px',
    numVisible: 1
}
];


}
