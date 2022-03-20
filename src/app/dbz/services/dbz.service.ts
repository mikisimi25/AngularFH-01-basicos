import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() {
    console.log('Servicio inicializado');
  }

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  nuevoPersonaje(personaje: Personaje) {
    if (personaje.nombre.trim().length !== 0) {
      this._personajes.push(personaje);
    }
  }
}
