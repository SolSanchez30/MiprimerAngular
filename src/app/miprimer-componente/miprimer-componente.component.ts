import { Component } from '@angular/core';

@Component({
  selector: 'app-miprimer-componente',
  templateUrl: './miprimer-componente.component.html', //se comunica con el HTML
  styleUrl: './miprimer-componente.component.css'
})
export class MiprimerComponenteComponent {
  saludo:string="";
  valor:number=0;
  intervalo:any;
  bloquearBoton: boolean = false;
  constructor(){
    console.log("Hola desde el primer componente");
    this.saludo = "Hola!"
  }
  FuncionBoton(){
    this.saludo = "estamos en Angular";
  }
  FuncionIniciarSegundero(){
    this.bloquearBoton = true;
    this.intervalo = setInterval(()=>{
      this.valor = this.valor + 1;
    },1000)
  }
  FuncionDetener(){
    clearInterval(this.intervalo)
    this.bloquearBoton = false;
    this.valor = 0;
  }
}
