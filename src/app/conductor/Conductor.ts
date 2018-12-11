import { DataSource } from '@angular/cdk/collections';
import { ApiService } from '../servicios/api.service';

class ConductorDataSource extends DataSource<any> {
    constructor(private api: ApiService) {
      super()
    }
  
    connect() {
      return this.api.obtenerConductores();
    }
  
    disconnect() {
  
    }
  }