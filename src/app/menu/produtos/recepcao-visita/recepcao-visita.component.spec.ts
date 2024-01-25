import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcaoVisitaComponent } from './recepcao-visita.component';

describe('RecepcaoVisitaComponent', () => {
  let component: RecepcaoVisitaComponent;
  let fixture: ComponentFixture<RecepcaoVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecepcaoVisitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecepcaoVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
