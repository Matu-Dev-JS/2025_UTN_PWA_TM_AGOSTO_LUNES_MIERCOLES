
class Persona {
	edad: number //Definimos a la propiedad edad y su tipado
	nombre: string
	inventario: string[] = []
	vida: number = 100
	especie: string = 'humana'

	constructor(
		edad: number, //Definimos al parametro
		nombre: string
	) {
		if (edad < 0) {
			this.edad = 0
		}
		else {
			this.edad = edad
		}
		this.nombre = nombre
	}


	//Metodos
	//Los metodos los vamos a usar para definir el comportamiento de nuestro objeto
	presentarse(): void {
		console.log('Hola, mi nombre es ' + this.nombre)
	}

	decrementarVida(vida_a_restar: number): number {
		if (vida_a_restar > this.vida) {
			console.log('El personaje ' + this.nombre + ' ha muerto')
			this.vida = 0
		}
		else {
			this.vida = this.vida - vida_a_restar
		}
		return this.vida
	}
}

const persona_1: Persona = new Persona(60, 'pepe')

class PersonajePrincipal extends Persona {
	poderes: string[] = []
	nivel: number = 1
	constructor(nombre: string, edad: number) {
		//super es el constructor de Persona
		super(edad, nombre)
	}
	saltarMuyAlto() {
		console.log("Adios mortales *Salta extremadamente alto y se retira de la vista*")
	}
}

const personaje_principal = new PersonajePrincipal('El gran salvador de la humanidad Lucas Bedoya', 45)
personaje_principal.presentarse()
personaje_principal.nivel
personaje_principal.saltarMuyAlto()