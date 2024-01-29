import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntosSociasComponent } from './assuntos-socias.component';

describe('AssuntosSociasComponent', () => {
  let component: AssuntosSociasComponent;
  let fixture: ComponentFixture<AssuntosSociasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssuntosSociasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssuntosSociasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
