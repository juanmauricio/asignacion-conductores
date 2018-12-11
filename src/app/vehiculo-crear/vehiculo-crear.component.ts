import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../servicios/api.service.vehiculo';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehiculo-crear',
  templateUrl: './vehiculo-crear.component.html',
  styleUrls: ['./vehiculo-crear.component.sass']
})
export class VehiculoCrearComponent implements OnInit {

  vehiculoForm: FormGroup;
  tipoVehiculo: String = '';
  placas: String = '';
  fechaSOAT: String = '';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.vehiculoForm = this.formBuilder.group({
      'tipoVehiculo': [null, Validators.required],
      'placas': [null, Validators.required],
      'fechaSOAT': [null, Validators.required]
    })
  }

  onFormSubmit(form: NgForm) {
    this.api.crearvehiculo(form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/vehiculo-detalle', id]);
      }, (err) => {
        console.log(err);
      })
  }

}
