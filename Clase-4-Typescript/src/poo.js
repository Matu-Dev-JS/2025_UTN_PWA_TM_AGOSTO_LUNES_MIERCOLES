
//Programacion Funcional

/* 
function crearPersona(nombre, edad){

    return {
        nombre: nombre,
        edad: edad
    }
}

const persona = crearPersona('pepe', 30)

const persona_2 = crearPersona('julieta', 32)
 */

//Programacion orientada a objetos

//Esta class nos va a permitir crear personas en nuestra app
class Persona {
    especie = 'humana'
    inventario = []
    vida = 100
    constructor(nombre, edad){

        this.nombre = nombre
        this.edad = edad
    }
}

//Usar la clase / Instanciar la clase
const persona_1 = new Persona('pepe', 30)
console.log(persona_1)