import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from '../main/calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be undefined on a division by 0', () => {
    const number1 = 12;
    const number2 = 0;
    expect(component.divide).toBeUndefined;
  });

  it('Se debe obtener el resultado correcto al utilizar la función "sumar"', () => {
    const number1 = 5;
    const number2 = 3;
    expect(component.plus(number1, number2)).toEqual(8);
  })
  
  it('un jugador nivel "aprendiz" no puede acceder a la calculadora', ()=>{
    let usuario = {
      level: 'aprendiz'
    }
    expect(component.acces(usuario)).toBeFalsy();
  });

  it('un usuario con rol "tutor" puede acceder a la calculadora', ()=>{
    let usuario = {
      rol : 'tutor'
    }
    expect(component.acces(usuario)).toBeTruthy();
  });

  it('un jugador nivel "avanzado" puede acceder a la calculadora', () =>{
    let usuario = {
      level: 'avanzado'
    }
    expect(component.acces(usuario)).toBeTruthy();
  })
});
