import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendHeroesComponent } from './frontend-heroes.component';

describe('FrontendHeroesComponent', () => {
  let component: FrontendHeroesComponent;
  let fixture: ComponentFixture<FrontendHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontendHeroesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
