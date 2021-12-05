import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styles: [],
})
export class DinamicoComponent implements OnInit {
  form = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Naruto', Validators.required],
      ['Code Geass', Validators.required],
    ], Validators.required)
  });
  favoritoNew = this.fb.control('', Validators.required);

  get favoritos(){
    return this.form.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log('values', this.form.value);
  }

  agregar() {
    if(this.favoritoNew.invalid) return;
    this.favoritos.push(this.fb.control(this.favoritoNew.value, Validators.required));
    this.favoritoNew.reset();
  }

  borrar(i: number) {
    this.favoritos.removeAt(i);
  }
}
