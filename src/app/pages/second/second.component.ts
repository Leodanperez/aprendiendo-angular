import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormulariosService } from 'src/app/formularios.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @Output() respuesta = new EventEmitter<boolean>();

  constructor(public formService: FormulariosService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  addProduct() {
    this.formService.addProduct(this.formService.getForm.getRawValue()).subscribe(res => {
      this.respuesta.emit(true);
      this.closeModal();
    })
  }

  cancel() {
    this.closeModal();
  }

  closeModal(): void{
    this.activeModal.dismiss('Cross click');
  }
}
