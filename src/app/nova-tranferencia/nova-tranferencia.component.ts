import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss']
})
export class NovaTranferenciaComponent implements OnInit {

  valor: number;
  destino: string;

  constructor() { }

  ngOnInit(): void {
  }

  transferir(){
    console.log('Nova transferencia solicitada!');
    console.log('Valor: ', this.valor);
    console.log('Valor: ', this.destino);
  }

}
