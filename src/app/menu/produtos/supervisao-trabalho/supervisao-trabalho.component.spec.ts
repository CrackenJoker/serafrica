import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisaoTrabalhoComponent } from './supervisao-trabalho.component';

describe('SupervisaoTrabalhoComponent', () => {
  let component: SupervisaoTrabalhoComponent;
  let fixture: ComponentFixture<SupervisaoTrabalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupervisaoTrabalhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupervisaoTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
