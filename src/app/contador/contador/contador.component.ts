import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public title: string = 'Contrador App';
  public num: number = 0;
  public base: number = 5;

  public acumulador(valor: number) {
    this.num += valor;
  }

}
