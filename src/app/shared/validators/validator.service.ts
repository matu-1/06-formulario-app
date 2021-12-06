import { Injectable } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  nombreApellidoPattern = '^([a-zA-z]+) ([a-z-A-z]+)$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  noMatu(control: AbstractControl): ValidationErrors | null {
    const value = control.value?.trim().toUpperCase();
    console.log('value', value);
    if (value === 'MATU')
      return {
        noMatu: true,
      };
    return null;
  }

  camposIguales(campo1: string, campo2: string) {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const control1 = formGroup.get(campo1);
      const control2 = formGroup.get(campo2);
      if (control1?.value !== control2?.value) {
        control2?.setErrors({ camposIguales: true });
        return { camposIguales: true };
      }
      if (control2?.errors && control2.errors['camposIguales']) {
        delete control2.errors['camposIguales'];
        if (Object.keys(control2.errors).length == 0) control2.setErrors(null);
      }
      return null;
    };
  }
}
