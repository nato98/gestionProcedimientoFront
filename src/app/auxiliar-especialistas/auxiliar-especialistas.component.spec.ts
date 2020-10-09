import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliarEspecialistasComponent } from './auxiliar-especialistas.component';

describe('AuxiliarEspecialistasComponent', () => {
  let component: AuxiliarEspecialistasComponent;
  let fixture: ComponentFixture<AuxiliarEspecialistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuxiliarEspecialistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxiliarEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
