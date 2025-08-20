export interface Persona {
	nombre: string,
	apellido: string,
	edad: number
}

const persona : Persona = {
	nombre: 'Ricardo',
	apellido: 'Gomez',
	edad: 30
}

const persona_2 : Persona = {
	nombre: 'Julieta',
	apellido: 'Perez',
	edad: 32
}

function presentarse(persona: Persona) : void {
	console.log('Hola me llamo ' + persona.nombre + ' ' + persona.apellido)
	return 
}

presentarse(persona_2)

