import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceKitComponent } from './conference-kit.component';

describe('ConferenceKitComponent', () => {
  let component: ConferenceKitComponent;
  let fixture: ComponentFixture<ConferenceKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
