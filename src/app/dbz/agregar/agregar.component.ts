import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{
  constructor(
    private dbzService: DbzService
  ) { }
  
  @Input() nuevo: Personaje = <Personaje>{};

  agregar() {
    this.dbzService.nuevoPersonaje(this.nuevo);
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
