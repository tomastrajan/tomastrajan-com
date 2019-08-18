import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInTouchComponent } from './get-in-touch.component';

describe('GetInTouchComponent', () => {
  let component: GetInTouchComponent;
  let fixture: ComponentFixture<GetInTouchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetInTouchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
