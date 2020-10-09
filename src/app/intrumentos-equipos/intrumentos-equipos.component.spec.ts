import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrumentosEquiposComponent } from './intrumentos-equipos.component';

describe('IntrumentosEquiposComponent', () => {
  let component: IntrumentosEquiposComponent;
  let fixture: ComponentFixture<IntrumentosEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrumentosEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrumentosEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
