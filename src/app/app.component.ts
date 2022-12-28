import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormulariosService } from './formularios.service';
import { SecondComponent } from './pages/second/second.component';

@Component({
  selector: 'leito-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public products: any[] = [];

  constructor(private modalService: NgbModal, public apiService: FormulariosService) {

  }

  ngOnInit(): void {
    this.getProducts();
  }

  openModalAddProduct() {
    this.apiService.openModalAddProduct().subscribe(res => {
      if (res) {
        this.getProducts();
      }
    })

  }

  guardarInfor() {

  }

  getProducts() {
    this.apiService.getProduct().subscribe({
      next: (res: any) => {
        this.products = res;
      },
      error: (err) => {

      }
    })
  }

  deleteProduct(id: number) {
    this.apiService.deleteProduct(id).subscribe(res => {
      this.getProducts();
    })
  }
}
