import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validators/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';
import {
  nombreApellidoPattern,
  emailPattern,
} from '../../../shared/validators/my-validators';

interface ValidationError {
  error: string;
  message: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  form = this.fb.group(
    {
      nombre: [
        ,
        [Validators.required, Validators.pattern(nombreApellidoPattern)],
      ],
      email: [
        ,
        [Validators.required, Validators.pattern(emailPattern)],
        [this.emailValidator],
      ],
      username: [, [Validators.required, this.noMatu]],
      password: [, [Validators.required, Validators.minLength(6)]],
      password2: [, Validators.required],
    },
    {
      validators: [
        this.validatorService.camposIguales('password', 'password2'),
      ],
    }
  );

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.form.patchValue({
      nombre: 'matias flores',
      email: 'matu@gmail.com',
      username: 'matu7',
      password: '123456',
      password2: '123456',
    });
  }

  save() {
    this.form.markAllAsTouched();
    console.log('values', this.form.value);
  }

  noMatu(control: AbstractControl) {
    const value = control.value?.trim().toUpperCase();
    console.log('value', value);
    if (value === 'MATU')
      return {
        noMatu: true,
      };
    return null;
  }

  isInvalid(field: string) {
    return (
      this.form.get(field)?.invalid &&
      (this.form.get(field)?.touched || this.form.get(field)?.dirty)
    );
  }

  hasError(field: string, error: string) {
    return this.form.get(field)?.getError(error);
  }

  get emailError(): string | null {
    const errors: ValidationError[] = [
      { error: 'required', message: 'Es obligatorio' },
      { error: 'pattern', message: 'El email no es valido' },
      { error: 'emailNoExiste', message: 'El email ya existe' },
    ];
    for (const value of errors) {
      if (this.form.get('email')?.getError(value.error)) return value.message;
    }
    return null;
  }
}
