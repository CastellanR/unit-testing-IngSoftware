import {Component} from '@angular/core';

@Component({
	selector: 'ejercicio',
	templateUrl: './ejercicio.component.html'
})

export class EjercicioComponent {

	ejercicio = {
		ejercicio: '',
		puntaje: '',
	}
	puntosPorNivel: number = 10;

	nuevoEjercicio(usuario: any, ejercicio: any ){
		if(usuario.rol=='profesor'){
			if(ejercicio.puntaje!=0){
			this.ejercicio.ejercicio = ejercicio.ejercicio;
			this.ejercicio.puntaje = ejercicio.puntaje;
			return true
			}else{
				return false;
			}
		}else{
			return false; 
		}
	}

	comprobarNivel(usuario: any) {
		usuario.nivel = Math.round(usuario.puntaje/this.puntosPorNivel)+1;
		return usuario;
	}
}