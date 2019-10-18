import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularStarterComponent } from './angular-starter.component';

describe('AngularStarterComponent', () => {
  let component: AngularStarterComponent;
  let fixture: ComponentFixture<AngularStarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AngularStarterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
