import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulponsComponent } from './culpons.component';

describe('CulponsComponent', () => {
  let component: CulponsComponent;
  let fixture: ComponentFixture<CulponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CulponsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CulponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
