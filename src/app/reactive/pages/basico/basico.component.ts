import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styles: [],
})
export class BasicoComponent implements OnInit {
  // producto = new FormGroup({
  //   nombre: new FormControl('Laptop'),
  //   precio: new FormControl(10150),
  //   existencias: new FormControl(8),
  // });
  producto = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]],
  });
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.producto.patchValue({
      nombre: 'Laptop DELL', 
      precio: 0,
    });
  }

  guardar(){
    if(this.producto.invalid){
      this.producto.markAllAsTouched();
      return;
    }
    this.producto.reset();
  }
}
