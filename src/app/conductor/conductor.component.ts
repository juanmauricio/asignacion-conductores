import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { DataSource } from '@angular/cdk/collections';
// import { ApiService } from '../servicios/api.service';
// import {ConductorDataSource} from './Conductor';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.sass']
})
export class ConductorComponent implements OnInit {
  conductores: any;
  displayedColumns = ['nombres', 'apellidos', 'numeroDocumento', 'estado' ];
  dataSource = new ConductorDataSource(this.api);
  
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.obtenerConductores()
      .subscribe(res => {
        console.log(res);
        this.conductores = res;
      }, err => {
        console.log(err);
      });
  }

}

export class ConductorDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.obtenerConductores();
  }

  disconnect() {

  }
}