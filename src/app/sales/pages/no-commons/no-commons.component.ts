import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent {

 //i18nSelect
  nombre: string = 'Luis';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria','Carlos','Fer']
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }


  changePerson(){
    this.nombre = (this.nombre === 'Luis') ? 'Maria' : 'Luis';
    this.genero = (this.nombre === 'maria') ? 'femenino' : 'masculino';

  }


  addUser(){
    this.clientes.push('otro');
  }

  deleteUser(){
    this.clientes.pop();
  }

  //KeyValuePipe
  person = {
    nombre: 'Luis',
    edad: 35,
    direccion: 'Bataan'
  }

  //JsonPipe

  heroes = [
    {
      nombre: 'spiderman',
      vuela: true,

    },
    {
      nombre: 'Robin',
      vuela: false,
      
    },
    {
      nombre: 'Aquaman',
      vuela: true,
      
    }
  ]


  // Async pipe
  miObservable = interval(5000);// 0,1,2,3,4

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    }, 3500);
  } );
}
