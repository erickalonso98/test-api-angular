import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footers',
  templateUrl: './footers.component.html',
  styleUrls: ['./footers.component.css']
})
export class FootersComponent implements OnInit {
  public derechore:string;
  constructor() { 
    this.derechore = 'Derechos reservados';
  }

  ngOnInit(): void {
  }

}
