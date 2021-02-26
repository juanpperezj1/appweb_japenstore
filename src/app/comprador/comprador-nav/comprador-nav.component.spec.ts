import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorNavComponent } from './comprador-nav.component';

describe('CompradorNavComponent', () => {
  let component: CompradorNavComponent;
  let fixture: ComponentFixture<CompradorNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompradorNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
