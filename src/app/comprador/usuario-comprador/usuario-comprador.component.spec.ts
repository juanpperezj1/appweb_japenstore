import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCompradorComponent } from './usuario-comprador.component';

describe('UsuarioCompradorComponent', () => {
  let component: UsuarioCompradorComponent;
  let fixture: ComponentFixture<UsuarioCompradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioCompradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
