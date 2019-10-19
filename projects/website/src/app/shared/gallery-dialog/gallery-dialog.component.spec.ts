import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryDialogComponent } from './gallery-dialog.component';

describe('GalleryDialogComponent', () => {
  let component: GalleryDialogComponent;
  let fixture: ComponentFixture<GalleryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
