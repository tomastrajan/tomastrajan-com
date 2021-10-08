import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorkshopsComponent } from './workshops.component';

describe('WorkshopsComponent', () => {
  let component: WorkshopsComponent;
  let fixture: ComponentFixture<WorkshopsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [WorkshopsComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
