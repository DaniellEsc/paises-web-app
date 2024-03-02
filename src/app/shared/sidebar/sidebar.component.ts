import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  styles: [
    `
    li {
      cursor: pointer;
      border-radius: 20px 20px  20px
    }
    `
  ]
})
export class SidebarComponent {

}
