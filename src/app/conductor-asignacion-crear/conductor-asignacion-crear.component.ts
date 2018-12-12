import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../servicios/api.service.asignacion';
import { VehiculoSeleccionarComponent } from '../vehiculo-seleccionar/vehiculo-seleccionar.component';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-conductor-asignacion-crear',
  templateUrl: './conductor-asignacion-crear.component.html',
  styleUrls: ['./conductor-asignacion-crear.component.sass']
})
export class ConductorAsignacionCrearComponent implements OnInit {
  @ViewChild(VehiculoSeleccionarComponent) vehiculoSeleccionado: VehiculoSeleccionarComponent;

  asignacionForm: FormGroup;
  conductor = this.route.snapshot.params['id'];
  vehiculo = {};
  origen: string = '';
  destino: string = '';
  pasajero: string = '';
  empresa: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.asignacionForm = this.formBuilder.group({
      origen: [null, Validators.required],
      destino: [null, Validators.required],
      pasajero: [null, Validators.required],
      empresa: [null, Validators.required],
      conductor: [null],
      vehiculo: [null]
    })
  }

  onFormSubmit(form: NgForm) {
    this.vehiculo = this.vehiculoSeleccionado.selectedVehicle;
    this.asignacionForm.get("vehiculo").setValue(this.vehiculo);
    this.asignacionForm.get("conductor").setValue(this.conductor);
    this.api.crearAsignacion(form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/conductor-detalle', id]);
      }, (err) => {
        console.log(err);
      })
  }

}
