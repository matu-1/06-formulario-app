import { AbstractControl, ValidationErrors } from '@angular/forms';

export const nombreApellidoPattern = '^([a-zA-z]+) ([a-z-A-z]+)$';
export const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export function noMatu(control: AbstractControl): ValidationErrors | null {
  const value = control.value?.trim().toUpperCase();
  console.log('value', value);
  if (value === 'MATU')
    return {
      noMatu: true,
    };
  return null;
}
