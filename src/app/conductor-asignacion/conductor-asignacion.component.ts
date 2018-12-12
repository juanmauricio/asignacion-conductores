import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../servicios/api.service.asignacion';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-conductor-asignacion',
  templateUrl: './conductor-asignacion.component.html',
  styleUrls: ['./conductor-asignacion.component.sass']
})
export class ConductorAsignacionComponent implements OnInit {

  asignacion = { vehiculo: {}, conductor: { _id: '' } };
  estado = '';
  idConductor = this.route.snapshot.params['id'];

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
    this.asignacion.vehiculo = {};
    this.asignacion.conductor._id = '';
  }

  ngOnInit() {
    this.obtenerAsignacion(this.route.snapshot.params['id']);
  }

  obtenerAsignacion(idConductor) {
    this.api.obtenerUltimaAsignacion(idConductor).subscribe(data => {
      console.log(data);
      if (data._id) {
        this.asignacion = data;
        this.estado = "ASIGNADO"
      } else
        this.estado = "SIN ASIGNAR"
    })
  }

}