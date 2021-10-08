import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AngularStarterComponent } from './angular-starter.component';

describe('AngularStarterComponent', () => {
  let component: AngularStarterComponent;
  let fixture: ComponentFixture<AngularStarterComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AngularStarterComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
