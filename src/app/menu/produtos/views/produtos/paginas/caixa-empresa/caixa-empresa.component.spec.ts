import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaEmpresaComponent } from './caixa-empresa.component';

describe('CaixaEmpresaComponent', () => {
  let component: CaixaEmpresaComponent;
  let fixture: ComponentFixture<CaixaEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaixaEmpresaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaixaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
