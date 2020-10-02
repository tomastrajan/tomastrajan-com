import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseButlerComponent } from './release-butler.component';

describe('ReleaseButlerComponent', () => {
  let component: ReleaseButlerComponent;
  let fixture: ComponentFixture<ReleaseButlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReleaseButlerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseButlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
