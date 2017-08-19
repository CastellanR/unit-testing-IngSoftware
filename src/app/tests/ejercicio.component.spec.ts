import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioComponent } from '../main/ejercicio.component';

describe('EjercicioComponent', () => {
  let component: EjercicioComponent;
  let fixture: ComponentFixture<EjercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should only allow professor users to add new exercises (profesor)', () => {
    let usuario =  {
      rol : 'profesor'
    }
      let ejercicio = {
        ejercicio: '350 + 450',
        puntaje: 20
      }
    expect(component.nuevoEjercicio(usuario,ejercicio)).toBeTruthy();
  });

  it('should only allow professor users to add new exercises (alumno)', () => {
    let usuario =  {
      rol : 'alumno'
    }
      let ejercicio = {
        ejercicio: '350 + 450',
        puntaje: 20
      }
    expect(component.nuevoEjercicio(usuario,ejercicio)).toBeFalsy();
  });

  it('should only allow excercises with marks (con puntaje)',() => {
     let usuario =  {
      rol : 'profesor'
    }
      let ejercicio = {
        ejercicio: '350 + 450',
        puntaje: 20
      }
    expect(component.nuevoEjercicio(usuario,ejercicio)).toBeTruthy();
  });

  it('should only allow excercises with marks (sin puntaje)',() => {
     let usuario =  {
      rol : 'profesor'
    }
      let ejercicio = {
        ejercicio: '350 + 450',
        puntaje: 0
      }
    expect(component.nuevoEjercicio(usuario,ejercicio)).toBeFalsy();
  });


  
});
