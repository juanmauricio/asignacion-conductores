import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service.vehiculo';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.sass']
})
export class VehiculoComponent implements OnInit {
  vehiculos: any;
  columnas = ['tipoVehiculo', 'placas', 'fechaSOAT', 'estado']
  dataSource = new VehiculoDataSource(this.api)

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.obtenerVehiculos()
      .subscribe(res => {
        console.log(res);
        this.vehiculos = res;
      }, err => {
        console.log(err);
      });
  }

}

export class VehiculoDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.obtenerVehiculos();
  }

  disconnect() {

  }
}
