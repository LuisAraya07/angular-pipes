import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  orderBy: string = '';

  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green
    },
    {
      name: 'Goku',
      fly: true,
      color: Color.red
    },
    {
      name: 'Linterna verde',
      fly: true,
      color: Color.green
    },
  ];
  enMayuscula: boolean = true;


  cambiarValor(){
    this.enMayuscula = !this.enMayuscula;
  }

  changeOrder( value: string){
    this.orderBy = value;
  }





}
