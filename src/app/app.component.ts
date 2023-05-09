import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string;
  public name:string;

  constructor(){
    this.title = 'Pagina principal';
    this.name = 'Rodolfo';
  }

}
