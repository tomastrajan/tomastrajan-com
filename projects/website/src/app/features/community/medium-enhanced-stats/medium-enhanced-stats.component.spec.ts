import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MediumEnhancedStatsComponent } from './medium-enhanced-stats.component';

describe('MediumEnhancedStatsComponent', () => {
  let component: MediumEnhancedStatsComponent;
  let fixture: ComponentFixture<MediumEnhancedStatsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MediumEnhancedStatsComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumEnhancedStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
