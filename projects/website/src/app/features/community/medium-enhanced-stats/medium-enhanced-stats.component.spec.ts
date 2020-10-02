import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumEnhancedStatsComponent } from './medium-enhanced-stats.component';

describe('MediumEnhancedStatsComponent', () => {
  let component: MediumEnhancedStatsComponent;
  let fixture: ComponentFixture<MediumEnhancedStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MediumEnhancedStatsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumEnhancedStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
