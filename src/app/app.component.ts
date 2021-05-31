import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public dadoIzquierda='../assets/img/dice1.png';
  public dadoDerecha='../assets/img/dice3.png';
  public numero1: number=1;
  public numero2: number=2;


  tirarDados(){

    this.numero1 = Math.round(Math.random() * 5)+1;
    this.numero2 = Math.round(Math.random() * 5)+1;

     this.dadoIzquierda='../assets/img/dice'+  this.numero1 +'.png';
     this.dadoDerecha='../assets/img/dice'+  this.numero2 +'.png';


  }


}
