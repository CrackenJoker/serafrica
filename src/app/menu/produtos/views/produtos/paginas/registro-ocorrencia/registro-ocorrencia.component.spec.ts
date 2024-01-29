import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroOcorrenciaComponent } from './registro-ocorrencia.component';

describe('RegistroOcorrenciaComponent', () => {
  let component: RegistroOcorrenciaComponent;
  let fixture: ComponentFixture<RegistroOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroOcorrenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
