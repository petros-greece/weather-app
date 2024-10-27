import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastCardComponent } from './forecast-card.component';

describe('ForecastCardComponent', () => {
  let component: ForecastCardComponent;
  let fixture: ComponentFixture<ForecastCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastCardComponent]
    });
    fixture = TestBed.createComponent(ForecastCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
