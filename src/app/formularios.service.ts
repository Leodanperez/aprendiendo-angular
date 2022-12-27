import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormulariosService {

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.createForm();
  }

  public createForm() {
    return this.fb.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email: ['', [Validators.required]],
    })
  }

  public get getForm() {
    return this.form;
  }

  public get fieldNombre() {
    return this.form.get('nombre');
  }

  public get fieldApellidos() {
    return this.form.get('apellidos');
  }

  public get fieldEmail() {
    return this.form.get('email');
  }

  public getNombre() {
    return this.fieldNombre?.invalid && this.fieldNombre.touched;
  }

  public getApellidos() {
    return this.fieldApellidos?.invalid && this.fieldApellidos.touched;
  }

  public getEmail() {
    return this.fieldEmail?.invalid && this.fieldEmail.touched;
  }
}
