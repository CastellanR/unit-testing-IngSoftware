import {Component} from '@angular/core';

@Component({
	selector: 'ejercicio',
	templateUrl: './ejercicio.component.html'
})

export class EjercicioComponent {

	ejercicio: String;

	nuevoEjercicio(usuario: any, ejercicio: String ){
		if(usuario.rol=='profesor'){
			this.ejercicio = ejercicio;
			return true;
		}else{
			return false; 
		}
	}
}