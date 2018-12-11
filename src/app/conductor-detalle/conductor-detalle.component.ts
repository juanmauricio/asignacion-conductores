import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-conductor-detalle',
  templateUrl: './conductor-detalle.component.html',
  styleUrls: ['./conductor-detalle.component.sass']
})
export class ConductorDetalleComponent implements OnInit {

  conductor = {};
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getConductorDetalle(this.route.snapshot.params['id']);
  }

  getConductorDetalle(id) {
    this.api.obtenerConductor(id)
      .subscribe(data => {
        console.log(data);
        this.conductor = data;
      });
  }

  eliminarConductor(id) {
    this.api.eliminarConductor(id)
      .subscribe(res => {
        this.router.navigate(['/conductor']);
      }, (err) => {
        console.log(err);
      }
      );
  }
}
