import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoSeleccionarComponent } from './vehiculo-seleccionar.component';

describe('VehiculoSeleccionarComponent', () => {
  let component: VehiculoSeleccionarComponent;
  let fixture: ComponentFixture<VehiculoSeleccionarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoSeleccionarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoSeleccionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
