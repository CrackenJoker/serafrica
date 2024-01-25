import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjudaHumanitariaComponent } from './ajuda-humanitaria.component';

describe('AjudaHumanitariaComponent', () => {
  let component: AjudaHumanitariaComponent;
  let fixture: ComponentFixture<AjudaHumanitariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjudaHumanitariaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjudaHumanitariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
