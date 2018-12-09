import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoCrearComponent } from './vehiculo-crear.component';

describe('VehiculoCrearComponent', () => {
  let component: VehiculoCrearComponent;
  let fixture: ComponentFixture<VehiculoCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
