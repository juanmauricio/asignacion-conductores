import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConductorComponent } from './conductor/conductor.component';
import { ConductorDetalleComponent } from './conductor-detalle/conductor-detalle.component';
import { ConductorCrearComponent } from './conductor-crear/conductor-crear.component';
import { ConductorEditarComponent } from './conductor-editar/conductor-editar.component';
import { ConductorAsignacionComponent } from './conductor-asignacion/conductor-asignacion.component';
import { ConductorAsignacionCrearComponent } from './conductor-asignacion-crear/conductor-asignacion-crear.component';

import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { VehiculoCrearComponent } from './vehiculo-crear/vehiculo-crear.component';
import { VehiculoDetalleComponent } from './vehiculo-detalle/vehiculo-detalle.component';
import { VehiculoEditarComponent } from './vehiculo-editar/vehiculo-editar.component';


const routes: Routes = [
  {
    path: 'conductor',
    component: ConductorComponent,
    data: { title: 'Listado de conductores' }
  },
  {
    path: 'conductor-detalle/:id',
    component: ConductorDetalleComponent,
    data: { title: 'Detalle de conductor' }
  },
  {
    path: 'conductor-crear',
    component: ConductorCrearComponent,
    data: { title: 'Crear conductor' }
  },
  {
    path: 'conductor-editar/:id',
    component: ConductorEditarComponent,
    data: { title: 'Editar conductor' }
  },
  {
    path: 'vehiculo',
    component: VehiculoComponent,
    data: { title: 'Listado de vehículos' }
  },
  {
    path: 'vehiculo-detalle/:id',
    component: VehiculoDetalleComponent,
    data: { title: 'Detalle de vehículo' }
  },
  {
    path: 'vehiculo-crear',
    component: VehiculoCrearComponent,
    data: { title: 'Crear vehículo' }
  },
  {
    path: 'vehiculo-editar/:id',
    component: VehiculoEditarComponent,
    data: { title: 'Editar vehículo' }
  },
  {
    path: 'conductor-asignacion/:id',
    component: ConductorAsignacionComponent,
    data: { title: 'Asignar vehículo a conductor' }
  },
  {
    path: 'asignacion-crear/:id',
    component: ConductorAsignacionCrearComponent,
    data: { title: 'Nueva asignación' }
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
