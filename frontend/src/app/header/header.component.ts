import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  sidebarVisible:boolean = false

  toggleSide(){
    this.sidebarVisible = !this.sidebarVisible
  }

}
