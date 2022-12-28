import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { SecondComponent } from './pages/second/second.component';

@Injectable({
  providedIn: 'root'
})
export class FormulariosService {

  public form: FormGroup;

  api: string = "http://localhost:3000"

  constructor(private fb: FormBuilder, private http: HttpClient, private md: NgbModal) {
    this.form = this.createForm();
  }

  public createForm() {
    return this.fb.group({
      productName: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required]],
      comment: [''],
      date: [''],
    })
  }

  public get getForm() {
    return this.form;
  }

  public openModalAddProduct(): Observable<boolean> {
    const modalRef = this.md.open(SecondComponent);
    return modalRef.componentInstance.respuesta as Observable<boolean>;
  }

  addProduct(data: any) {
    return this.http.post(`${this.api}/productList`, data);
  }

  getProduct() {
    return this.http.get(`${this.api}/productList`);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.api}/productList/${id}`);
  }
  /* public get fieldNombre() {
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
  } */
}
