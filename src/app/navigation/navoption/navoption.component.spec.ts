import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavoptionComponent } from './navoption.component';

describe('NavoptionComponent', () => {
  let component: NavoptionComponent;
  let fixture: ComponentFixture<NavoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
