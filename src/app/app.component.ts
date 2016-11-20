import { Component } from '@angular/core';

import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appTitle: string;
  menuItems: MenuItem[];
  
  constructor() {
    this.appTitle = 'Chicago Eye';
    this.menuItems = [ { caption: 'Dashboard', link: '#' },
                       { caption: 'Crime Stats', link: '#'}
                     ];
  }
}
