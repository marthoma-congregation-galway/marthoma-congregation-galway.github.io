import { Routes } from '@angular/router';
import {Home} from './home/home';
import {About} from './about/about';
import {Events} from './events/events';

export const routes: Routes = [{
  path: 'home',
  component: Home
},
  {
    path:'about',
    component: About
  },
  {
  path:'events',
    component: Events
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
