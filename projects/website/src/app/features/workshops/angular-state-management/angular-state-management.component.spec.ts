import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AngularStateManagementComponent } from './angular-state-management.component';

describe('AngularStateManagementComponent', () => {
  let component: AngularStateManagementComponent;
  let fixture: ComponentFixture<AngularStateManagementComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AngularStateManagementComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularStateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
