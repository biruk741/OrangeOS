import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromeAppComponent } from './chrome-app.component';

describe('ChromeAppComponent', () => {
  let component: ChromeAppComponent;
  let fixture: ComponentFixture<ChromeAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChromeAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChromeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
