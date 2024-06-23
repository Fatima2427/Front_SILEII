import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorioFormComponente } from './laboratorio-form.component';

describe('LaboratorioFormComponent', () => {
  let component: LaboratorioFormComponente;
  let fixture: ComponentFixture<LaboratorioFormComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaboratorioFormComponente]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LaboratorioFormComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
