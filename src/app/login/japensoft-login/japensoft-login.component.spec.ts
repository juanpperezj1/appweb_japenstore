import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JapensoftLoginComponent } from './japensoft-login.component';

describe('JapensoftLoginComponent', () => {
  let component: JapensoftLoginComponent;
  let fixture: ComponentFixture<JapensoftLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JapensoftLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JapensoftLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
