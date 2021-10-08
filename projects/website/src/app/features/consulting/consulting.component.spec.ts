import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConsultingComponent } from './consulting.component';

describe('ConsultingComponent', () => {
  let component: ConsultingComponent;
  let fixture: ComponentFixture<ConsultingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ConsultingComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
