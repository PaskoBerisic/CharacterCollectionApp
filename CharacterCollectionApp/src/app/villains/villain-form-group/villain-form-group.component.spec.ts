import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainFormGroupComponent } from './villain-form-group.component';

describe('VillainFormGroupComponent', () => {
  let component: VillainFormGroupComponent;
  let fixture: ComponentFixture<VillainFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillainFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
