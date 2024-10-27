import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunMoonEarthPositionComponent } from './sun-moon-earth-position.component';

describe('SunMoonEarthPositionComponent', () => {
  let component: SunMoonEarthPositionComponent;
  let fixture: ComponentFixture<SunMoonEarthPositionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SunMoonEarthPositionComponent]
    });
    fixture = TestBed.createComponent(SunMoonEarthPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
