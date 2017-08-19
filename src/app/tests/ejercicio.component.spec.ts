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
    let ejercicio = "350 + 540";
    expect(component.nuevoEjercicio(usuario,ejercicio)).toBeTruthy();
  });

  it('should only allow professor users to add new exercises (alumno)', () => {
    let usuario =  {
      rol : 'alumno'
    }
    let ejercicio = "350 + 540";
    expect(component.nuevoEjercicio(usuario,ejercicio)).toBeFalsy();
  });

  it('Se debe aumentar al nivel siguiente del jugador cuando éste consiga la cantidad necesaria de puntos de acuerdo al nivel actual', () => {
    let usuario = {
      nivel: 3,
      puntaje: 30
    }
    let newUsuario = {
      nivel: 3,
      puntaje: 30
    }
    expect(component.comprobarNivel(usuario)).toEqual(newUsuario);
  })
});
