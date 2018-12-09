import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoEditarComponent } from './vehiculo-editar.component';

describe('VehiculoEditarComponent', () => {
  let component: VehiculoEditarComponent;
  let fixture: ComponentFixture<VehiculoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
