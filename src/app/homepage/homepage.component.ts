import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  listView: boolean = false;
  ordersView: boolean = false;
  cardView: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  showListView(){
      this.listView = true
      this.cardView = false
  }

  showCard(){
      this.listView = false
      this.cardView = true;
  }


}
