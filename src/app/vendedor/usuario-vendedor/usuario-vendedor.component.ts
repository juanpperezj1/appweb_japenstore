import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuario-vendedor',
  templateUrl: './usuario-vendedor.component.html',
  styleUrls: ['./usuario-vendedor.component.css']
})
export class UsuarioVendedorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  redirect(){
    this.router.navigate( ['/registro-producto'] );
  }
  
}
