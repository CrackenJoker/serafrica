import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamentoTrabalhoComponent } from './tratamento-trabalho.component';

describe('TratamentoTrabalhoComponent', () => {
  let component: TratamentoTrabalhoComponent;
  let fixture: ComponentFixture<TratamentoTrabalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TratamentoTrabalhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TratamentoTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
