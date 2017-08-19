import {Component} from '@angular/core';

@Component({
	selector: 'ejercicio',
	templateUrl: './ejercicio.component.html'
})

export class EjercicioComponent {

	ejercicio: String;
	puntosPorNivel: number;

	constructor() {
		// El valor debería ser obtenido de una base de datos
		this.puntosPorNivel = 10;
	}

	nuevoEjercicio(usuario: any, ejercicio: String ){
		if(usuario.rol=='profesor'){
			this.ejercicio = ejercicio;
			return true;
		}else{
			return false; 
		}
	}

	comprobarNivel(usuario: any) {
		usuario.nivel = Math.floor(usuario.puntaje/this.puntosPorNivel);
		return usuario;
	}
}