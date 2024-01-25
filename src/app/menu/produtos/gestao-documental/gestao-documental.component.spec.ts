import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoDocumentalComponent } from './gestao-documental.component';

describe('GestaoDocumentalComponent', () => {
  let component: GestaoDocumentalComponent;
  let fixture: ComponentFixture<GestaoDocumentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestaoDocumentalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestaoDocumentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
