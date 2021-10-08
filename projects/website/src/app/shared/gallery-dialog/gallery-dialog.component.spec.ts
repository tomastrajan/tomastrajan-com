import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GalleryDialogComponent } from './gallery-dialog.component';

describe('GalleryDialogComponent', () => {
  let component: GalleryDialogComponent;
  let fixture: ComponentFixture<GalleryDialogComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [GalleryDialogComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
