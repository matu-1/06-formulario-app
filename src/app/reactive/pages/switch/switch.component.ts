import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styles: [],
})
export class SwitchComponent implements OnInit {
  form = this.fb.group({
    genero: ['F', Validators.required],
    hasNotificaciones: [true, Validators.required],
    terminos: [false, Validators.requiredTrue],
  });
  persona = {
    genero: 'M',
    hasNotificaciones: true,
  };
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.patchValue(this.persona);
    this.form.valueChanges.subscribe(({terminos, ...rest}) => {
      this.persona = rest;
    })
  }

  save() {
    const values = { ...this.form.value };
    delete values.terminos;
    console.log('values', values);
    this.persona = values;
  }
}
