import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../servicios/api.service.vehiculo';

@Component({
  selector: 'app-vehiculo-detalle',
  templateUrl: './vehiculo-detalle.component.html',
  styleUrls: ['./vehiculo-detalle.component.sass']
})
export class VehiculoDetalleComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  vehiculo = {};
  ngOnInit() {
    this.getVehiculoDetalle(this.route.snapshot.params['id']);
  }

  getVehiculoDetalle(id) {
    this.api.obtenerVehiculo(id)
      .subscribe(data => {
        console.log(data);
        this.vehiculo = data;
      });
  }

  eliminarVehiculo(id) {
    this.api.eliminarVehiculo(id)
      .subscribe(res => {
        this.router.navigate(['/vehiculo']);
      }, (err) => {
        console.log(err);
      }
      );
  }
}
