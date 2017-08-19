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

<<<<<<< HEAD
  it('Se debe obtener el resultado correcto al utilizar la función "sumar"', () => {
    const number1 = 5;
    const number2 = 3;
    expect(component.plus(number1, number2)).toEqual(8);
  })
=======
  it('un alumno nivel "aprendiz" no puede acceder a la calculadora', ()=>{
    let usuario = {
      level: 'aprendiz'
    }
    expect(component.acces(usuario)).toBeFalsy();
  });
>>>>>>> bba13532ea43f2ecc8840d2d4a5b65cdaf7988a8
});
