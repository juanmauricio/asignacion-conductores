import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service.vehiculo';

export interface Vehiculo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-vehiculo-seleccionar',
  templateUrl: './vehiculo-seleccionar.component.html',
  styleUrls: ['./vehiculo-seleccionar.component.sass']
})
export class VehiculoSeleccionarComponent implements OnInit {
  vehiculos: Vehiculo[];
  selectedVehicle: string = '';

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.obtenerVehiculos()
      .subscribe(res => {
        console.log(res);
        this.vehiculos = res.map(v => {
          return { value: v._id, viewValue: v.placas }
        });
      }, err => {
        console.log(err);
      });
  }

}
