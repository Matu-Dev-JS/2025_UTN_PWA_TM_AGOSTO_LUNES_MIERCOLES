let edad: number = obtenerNumero('Dame tu edad')

function obtenerNumero(mensaje_para_usuario: string): number {
	let dato: string | null = prompt(mensaje_para_usuario)
	while (!dato || isNaN(Number(dato))) {
		alert("Error: Dato no numerico")
		dato = prompt(mensaje_para_usuario)
	}
	return Number(dato)
}


//Calcular iva, recibe un precio y devuelve el precio + iva (donde iva = 21%)

function calcularPrecioConIVA(precio: number): number {
	let iva = 0.21;
	return precio * (1 + iva);
}

function solicitarPrecioYCalcularIva(): {
	precio: number,
	precio_con_iva: number
} {
	let precio: number = obtenerNumero('Dame el precio')
	let precio_con_iva: number = calcularPrecioConIVA(precio)
	return { precio, precio_con_iva }
}

const precios_database: number[] = [100, 400, 450, 321, 500]

//Va a recibir una lista de precios y va a devolver el IVA total de la lista
//Usar la funcion de calcularIva
function calcularIvaTotalDeListaDePrecios(
	lista_de_precios: number[]
): number {
	let iva_total = 0;
	for (let precio of lista_de_precios) {
		//este es solamente el iva del precio
		let iva = calcularPrecioConIVA(precio) - precio;
		iva_total += iva
	}
	return iva_total;
}



const persona : {
	nombre: string, 
	edad: null | number, 
	apellido: string,
	dinero?: number
} = {
	nombre: 'Pepe',
	edad: 40,
	apellido: 'Suarez'
}

function presentarPersona (persona){
	console.log('Hola soy ' + persona.nombre + ' ' + persona.edad)
}

let random : any 

random = 'hola'
random = 0
random = []

//v0
