import { Component, OnInit } from '@angular/core';
import { FormulariosService } from './formularios.service';

@Component({
  selector: 'leito-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public formService: FormulariosService) {

  }

  ngOnInit(): void {
  }

  guardarInfor() {

  }
}
