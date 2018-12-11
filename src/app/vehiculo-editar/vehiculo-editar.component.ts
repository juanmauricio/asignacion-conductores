import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ApiService } from '../servicios/api.service.vehiculo';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-vehiculo-editar',
  templateUrl: './vehiculo-editar.component.html',
  styleUrls: ['./vehiculo-editar.component.sass']
})
export class VehiculoEditarComponent implements OnInit {
  id: string = '';
  vehiculoForm: FormGroup;
  tipoVehiculo: String = '';
  placas: String = '';
  fechaSOAT: String = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.obtenerVehiculo(this.route.snapshot.params['id']);
    this.vehiculoForm = this.formBuilder.group({
      'tipoVehiculo': [null, Validators.required],
      'placas': [null, Validators.required],
      'fechaSOAT': [null, Validators.required]
    })
  }

  obtenerVehiculo(id) {
    this.api.obtenerVehiculo(id).subscribe(data => {
      this.id = data._id;
      this.vehiculoForm.setValue({
        tipoVehiculo: data.tipoVehiculo,
        placas: data.placas,
        fechaSOAT: data.fechaSOAT
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.actualizarVehiculo(this.id, form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/vehiculo-detalle', id]);
      }, (err) => {
        console.log(err);
      }
      );
  }

  detalleVehiculo() {
    this.router.navigate(['/vehiculo-detalle', this.id]);
  }
}
