import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingReactiveWithRxjsComponent } from './getting-reactive-with-rxjs.component';

describe('GettingReactiveWithRxjsComponent', () => {
  let component: GettingReactiveWithRxjsComponent;
  let fixture: ComponentFixture<GettingReactiveWithRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GettingReactiveWithRxjsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingReactiveWithRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
