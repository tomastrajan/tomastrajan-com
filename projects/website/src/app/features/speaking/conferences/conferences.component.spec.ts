import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConferencesComponent } from './conferences.component';

describe('ConferencesComponent', () => {
  let component: ConferencesComponent;
  let fixture: ComponentFixture<ConferencesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ConferencesComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
