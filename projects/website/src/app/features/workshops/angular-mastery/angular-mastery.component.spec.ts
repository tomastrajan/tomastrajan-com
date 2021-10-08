import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AngularMasteryComponent } from './angular-mastery.component';

describe('AngularMasteryComponent', () => {
  let component: AngularMasteryComponent;
  let fixture: ComponentFixture<AngularMasteryComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AngularMasteryComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMasteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
