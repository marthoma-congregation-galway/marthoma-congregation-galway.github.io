import { Component, signal } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import {ImageModule} from 'primeng/image';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem, PrimeIcons} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {trustedHTMLFromString} from '@angular/cdk/private';
import {GalleriaModule} from 'primeng/galleria';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarModule, ImageModule, MenuModule, GalleriaModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  menuItems: MenuItem[] =[
    {
      icon: PrimeIcons.HOME,
      label:'Home',
      routerLink:'/home',
      routerLinkActiveOptions:{ exact: true }
    },
    {
      icon:PrimeIcons.CALENDAR_TIMES,
      label:'Events',
      routerLink:'/events',
      routerLinkActiveOptions:{ exact: true }

    },
    {
      icon:PrimeIcons.INFO_CIRCLE,
      label:'About us',
      routerLink:'/about',
      routerLinkActiveOptions:{ exact: true }


    }
  ];

  protected readonly title = signal('Marthoma Congregation Galway');
}
