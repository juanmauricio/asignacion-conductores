import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorAsignacionCrearComponent } from './conductor-asignacion-crear.component';

describe('ConductorAsignacionCrearComponent', () => {
  let component: ConductorAsignacionCrearComponent;
  let fixture: ComponentFixture<ConductorAsignacionCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductorAsignacionCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorAsignacionCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
