import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorAsignacionComponent } from './conductor-asignacion.component';

describe('ConductorAsignacionComponent', () => {
  let component: ConductorAsignacionComponent;
  let fixture: ComponentFixture<ConductorAsignacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductorAsignacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
