import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bytebank';
  transfencia: any;

  transferir($event){
    console.log($event);
    this.transfencia = $event;
  }
}
