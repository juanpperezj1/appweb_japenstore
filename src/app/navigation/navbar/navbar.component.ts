import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  optionsmenu:any;
  constructor() { 
    this.optionsmenu=[
      {"name":"logout","url":"/", "clase":"btn btn-danger" },                           
      {"name":"usuarios","url":"/usuarios", "clase":"btn btn-link" },
      {"name":"productos","url":"/vendedor", "clase":"btn btn-link" },
      {"name":"perfil","url":"/perfil", "clase":"btn btn-link" }
      
    ]
  }
  ngOnInit(): void {
  }

}
