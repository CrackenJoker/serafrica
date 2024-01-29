import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcidenteTrabalhoComponent } from './acidente-trabalho.component';

describe('AcidenteTrabalhoComponent', () => {
  let component: AcidenteTrabalhoComponent;
  let fixture: ComponentFixture<AcidenteTrabalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcidenteTrabalhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcidenteTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
