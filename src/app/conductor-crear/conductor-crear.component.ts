import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../servicios/api.service';
import { DataSource } from '@angular/cdk/collections';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-conductor-crear',
  templateUrl: './conductor-crear.component.html',
  styleUrls: ['./conductor-crear.component.sass']
})
export class ConductorCrearComponent implements OnInit {
  conductorForm: FormGroup;
  nombres: string = '';
  apellidos: string = '';
  tipoDocumento: string = '';
  numeroDocumento: string = ''
  estado: string = '';
  direccion: string = '';
  telefono: string = '';
  correoElectronico = '';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    //Validación inicial de los campos
    this.conductorForm = this.formBuilder.group({
      'nombres': [null, Validators.required],
      'apellidos': [null, Validators.required],
      'tipoDocumento': [null, Validators.required],
      'numeroDocumento': [null, Validators.required],
      'direccion': [null, Validators.required],
      'telefono': [null, Validators.required],
      'correoElectronico': [null, Validators.required],
    })
  }

  onFormSubmit(form: NgForm) {
    this.api.crearConductor(form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/conductor-detalle', id]);
      }, (err) => {
        console.log(err);
      })
  }

}

