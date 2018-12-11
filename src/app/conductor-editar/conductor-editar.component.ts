import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ApiService } from '../servicios/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-conductor-editar',
  templateUrl: './conductor-editar.component.html',
  styleUrls: ['./conductor-editar.component.sass']
})
export class ConductorEditarComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }
  conductorForm: FormGroup;
  id: string = '';
  nombres: string = '';
  apellidos: string = '';
  tipoDocumento: string = '';
  numeroDocumento: string = ''
  estado: string = '';
  direccion: string = '';
  telefono: string = '';
  correoElectronico = '';

  ngOnInit() {
    this.obtenerConductor(this.route.snapshot.params['id']);

    this.conductorForm = this.formBuilder.group({
      'nombres': [null, Validators.required],
      'apellidos': [null, Validators.required],
      'estado': [null, Validators.required],
      'tipoDocumento': [null, Validators.required],
      'numeroDocumento': [null, Validators.required],
      'direccion': [null, Validators.required],
      'telefono': [null, Validators.required],
      'correoElectronico': [null, Validators.required],
    });
  }

  obtenerConductor(id) {
    this.api.obtenerConductor(id).subscribe(data => {
      this.id = data._id;
      this.conductorForm.setValue({
        nombres: data.nombres,
        apellidos: data.apellidos,
        tipoDocumento: data.tipoDocumento,
        numeroDocumento: data.numeroDocumento,
        estado: data.estado,
        direccion: data.direccion,
        telefono: data.telefono,
        correoElectronico: data.correoElectronico
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.actualizarConductor(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/conductor-detalle', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  detalleConductor() {
    this.router.navigate(['/conductor-detalle', this.id]);
  }
  
}
