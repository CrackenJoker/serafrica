import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GereciametoAdministrativoComponent } from './gereciameto-administrativo.component';

describe('GereciametoAdministrativoComponent', () => {
  let component: GereciametoAdministrativoComponent;
  let fixture: ComponentFixture<GereciametoAdministrativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GereciametoAdministrativoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GereciametoAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
