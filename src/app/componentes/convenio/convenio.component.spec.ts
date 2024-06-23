import { ComponentFixture, TestBed } from '@angular/core/testing';

import { convenioC } from './convenio.component';

describe('ConvenioComponent', () => {
  let component: convenioC;
  let fixture: ComponentFixture<convenioC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [convenioC]
    })
      .compileComponents();

    fixture = TestBed.createComponent(convenioC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
