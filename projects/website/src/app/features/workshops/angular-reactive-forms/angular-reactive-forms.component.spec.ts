import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularReactiveFormsComponent } from './angular-reactive-forms.component';

describe('AngularReactiveFormsComponent', () => {
  let component: AngularReactiveFormsComponent;
  let fixture: ComponentFixture<AngularReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularReactiveFormsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
