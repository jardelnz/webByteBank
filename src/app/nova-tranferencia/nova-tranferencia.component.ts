import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Transferencia } from '../model/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';


@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss']
})
export class NovaTranferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: string;

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
  }

  transferir() {
    console.log('Nova transferencia solicitada!');
    console.log('Valor: ', this.valor);
    console.log('Destino: ', this.destino);

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adcionar(valorEmitir)
      .subscribe(resultado => {
        console.log(resultado);
        this.limparCampos();
      },
        error => console.error(error)
      );

  }

  limparCampos() {
    this.valor = 0;
    this.destino = '';
  }


}
