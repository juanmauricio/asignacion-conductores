import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorEditarComponent } from './conductor-editar.component';

describe('ConductorEditarComponent', () => {
  let component: ConductorEditarComponent;
  let fixture: ComponentFixture<ConductorEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductorEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
