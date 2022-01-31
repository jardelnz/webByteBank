import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss']
})
export class NovaTranferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor() { }

  ngOnInit(): void {
  }

  transferir(){
    console.log('Nova transferencia solicitada!');
    console.log('Valor: ', this.valor);
    console.log('Destino: ', this.destino);

    this.aoTransferir.emit({valor: this.valor , destino: this.destino})
    this.limparCampos();

  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }


}
