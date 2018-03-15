import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  sidebarOpen:boolean = true;

  constructor() { }

  ngOnInit() {
  }

 

  toggleSidebar(){
    this.sidebarOpen = !this.sidebarOpen;
    console.log( this.sidebarOpen);
  }



}
