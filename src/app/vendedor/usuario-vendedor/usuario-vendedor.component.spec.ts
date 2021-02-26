import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioVendedorComponent } from './usuario-vendedor.component';

describe('UsuarioVendedorComponent', () => {
  let component: UsuarioVendedorComponent;
  let fixture: ComponentFixture<UsuarioVendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioVendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
