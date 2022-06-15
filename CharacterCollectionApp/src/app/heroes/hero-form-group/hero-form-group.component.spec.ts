import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFormGroupComponent } from './hero-form-group.component';

describe('HeroFormGroupComponent', () => {
  let component: HeroFormGroupComponent;
  let fixture: ComponentFixture<HeroFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
