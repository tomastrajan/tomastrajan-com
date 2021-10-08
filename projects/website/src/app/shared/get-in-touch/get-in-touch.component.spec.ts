import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GetInTouchComponent } from './get-in-touch.component';

describe('GetInTouchComponent', () => {
  let component: GetInTouchComponent;
  let fixture: ComponentFixture<GetInTouchComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [GetInTouchComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
