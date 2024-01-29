import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisionarTrabalhoComponent } from './supervisionar-trabalho.component';

describe('SupervisionarTrabalhoComponent', () => {
  let component: SupervisionarTrabalhoComponent;
  let fixture: ComponentFixture<SupervisionarTrabalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupervisionarTrabalhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupervisionarTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
