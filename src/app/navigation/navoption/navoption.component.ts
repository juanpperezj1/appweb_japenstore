import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navoption',
  templateUrl: './navoption.component.html',
  styleUrls: ['./navoption.component.css']
})
export class NavoptionComponent implements OnInit {
  @Input() item: any = {};
  @Input() index: number;
  @Output() itemSeleccionado: EventEmitter<number>;
  constructor(private router:Router) {
    this.itemSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }
  redirect() : void {
    console.log(this.item.url);
    this.router.navigate([this.item.url])
  }

}
