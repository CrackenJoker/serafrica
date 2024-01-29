import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceberVisitaComponent } from './receber-visita.component';

describe('ReceberVisitaComponent', () => {
  let component: ReceberVisitaComponent;
  let fixture: ComponentFixture<ReceberVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceberVisitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceberVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
