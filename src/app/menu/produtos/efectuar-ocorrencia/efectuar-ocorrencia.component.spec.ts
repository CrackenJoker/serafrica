import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfectuarOcorrenciaComponent } from './efectuar-ocorrencia.component';

describe('EfectuarOcorrenciaComponent', () => {
  let component: EfectuarOcorrenciaComponent;
  let fixture: ComponentFixture<EfectuarOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EfectuarOcorrenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EfectuarOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
