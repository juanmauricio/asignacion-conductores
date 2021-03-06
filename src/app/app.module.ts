import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConductorComponent } from './conductor/conductor.component';
import { ConductorDetalleComponent } from './conductor-detalle/conductor-detalle.component';
import { ConductorCrearComponent } from './conductor-crear/conductor-crear.component';
import { ConductorEditarComponent } from './conductor-editar/conductor-editar.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { VehiculoCrearComponent } from './vehiculo-crear/vehiculo-crear.component';
import { VehiculoDetalleComponent } from './vehiculo-detalle/vehiculo-detalle.component';
import { VehiculoEditarComponent } from './vehiculo-editar/vehiculo-editar.component';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule
} from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConductorAsignacionComponent } from './conductor-asignacion/conductor-asignacion.component';
import { ConductorAsignacionCrearComponent } from './conductor-asignacion-crear/conductor-asignacion-crear.component';
import { VehiculoSeleccionarComponent } from './vehiculo-seleccionar/vehiculo-seleccionar.component';

@NgModule({
  declarations: [
    AppComponent,
    ConductorComponent,
    ConductorDetalleComponent,
    ConductorCrearComponent,
    ConductorEditarComponent,
    VehiculoComponent,
    VehiculoCrearComponent,
    VehiculoDetalleComponent,
    VehiculoEditarComponent,
    ConductorAsignacionComponent,
    ConductorAsignacionCrearComponent,
    VehiculoSeleccionarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
