import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakingComponent } from './speaking.component';

describe('SpeakingComponent', () => {
  let component: SpeakingComponent;
  let fixture: ComponentFixture<SpeakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpeakingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
