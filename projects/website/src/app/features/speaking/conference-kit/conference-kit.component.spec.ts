import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConferenceKitComponent } from './conference-kit.component';

describe('ConferenceKitComponent', () => {
  let component: ConferenceKitComponent;
  let fixture: ComponentFixture<ConferenceKitComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ConferenceKitComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
