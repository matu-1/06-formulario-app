import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styles: [],
})
export class DinamicoComponent implements OnInit {
  favorito: string = '';
  persona: Persona = {
    nombre: 'Matias',
    favoritos: [
      {
        id: 1,
        nombre: 'Naruto',
      },
      {
        id: 2,
        nombre: 'Konosuba',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  save() {
    console.log('submitted');
  }

  borrar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  agregar() {
    if (!this.favorito) return;
    this.persona.favoritos.push({
      id: Date.now(),
      nombre: this.favorito,
    });
    this.favorito = '';
  }
}
