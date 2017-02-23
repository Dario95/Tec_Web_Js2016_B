import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre:string="";
  apellido:string="";
  constructor(){
  console.log("Inicio del constructor");
  this.nombre="Homero";
  this.apellido="Arias";
  }

  ngOnInit(){
    console.log("On Init");
    this.nombre="Dario";
    this.apellido="Puente";
  }
  nombtrCompleto():string{
    return `${(this.nombre)} ${(this.apellido)}`
  }

  hizoClic(){
   console.log("Hizo Clic");
  }
  title="Aplicaición";
}
