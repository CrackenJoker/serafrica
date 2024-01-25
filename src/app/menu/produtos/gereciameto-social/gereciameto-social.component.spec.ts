import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GereciametoSocialComponent } from './gereciameto-social.component';

describe('GereciametoSocialComponent', () => {
  let component: GereciametoSocialComponent;
  let fixture: ComponentFixture<GereciametoSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GereciametoSocialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GereciametoSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
