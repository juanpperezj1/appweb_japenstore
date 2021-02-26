import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCompradorComponent } from './productos-comprador.component';

describe('ProductosCompradorComponent', () => {
  let component: ProductosCompradorComponent;
  let fixture: ComponentFixture<ProductosCompradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosCompradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
