import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
  export class HeaderComponent implements OnInit {
    title = 'app-tutorial-2021';
  constructor() { }

  //Life Cycle Hook initialized variables and data on loading page(HTTP request)
  ngOnInit(): void {
  }
  toggleAddTask(){
    console.log("Toggle");
  }
}
