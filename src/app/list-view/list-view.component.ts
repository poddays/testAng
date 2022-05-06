import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  listView:boolean = false;
  constructor() { } 

  ngOnInit(): void {
  }
listCahange(){
  
}
}
