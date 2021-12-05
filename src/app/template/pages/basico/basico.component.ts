import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styles: [],
})
export class BasicoComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  initialValues = {
    producto: 'Producto X',
    precio: 0,
    existencias: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  guardar() {
    console.log('submitted', this.form);
    this.form.resetForm({
      producto: 'Producto 1',
      precio: 0,
      existencias: 0,
    });
  }
}
