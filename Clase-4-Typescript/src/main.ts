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
/* 
Crear la class Item
	-nombre
	-precio
	-id
	-descripcion
	Metodo:
		-mostrarItem: Mostrara por consola el mensaje: {nombre} es {descripcion} y cuesta ${precio} Rupias


ItemTienda extends Item
	Propiedades:
		-stock
		-margen_ganancia
	Metodo:
		-setStock(nuevo_stock) y va a guardar el nuevo stock como valor de stock
 */
class Item {
	nombre: string = ""
	precio: number = 0
	id: number = 0
	descripcion: string
	constructor(
		nombre: string,
		precio: number,
		id: number,
		descripcion: string
	) {
		this.nombre = nombre
		this.precio = precio
		this.id = id
		this.descripcion = descripcion
	}
	getNombre(){
		return this.nombre
	}
	mostrarItem(): void {
		console.log(this.nombre + " es " + this.descripcion + " y cuesta $" + this.precio + "rupias")
	}
}

class ItemTienda extends Item {
	stock: number
	margen_ganacia: number
	constructor(
		nombre: string,
		precio: number,
		id: number,
		descripcion: string,
		stock: number,
		margen_ganacia: number
	) {
		super(nombre, precio, id, descripcion)
		this.stock = stock
		this.margen_ganacia = margen_ganacia
	}
	setStock(nuevo_stock: number): void {
		this.stock = nuevo_stock
	}
}

/* 
Crear la class Tienda
	-nombre
	-cantidad_dinero_en_cuenta
	-items: ItemTienda[],
	-id
	Metodo:
		-buscarItemPorId(id_item_buscado) 
			- buscar en la lista de items el item buscado y devolvera el mismo, sino devolvera null

		-comprar(nuevo_item: Item, cantidad: number, margen_gancia: number)
			-Calcular el costo de la operacion y en caso de ser mayor a la cantidad de dinero en cuenta lanzar un error por consola diciendo, no se puede realizar la operacion, motivo: no hay dinero suficiente
			-Crear un ItemTienda a partir de Item
			-pushear a la lista de items

*/

class Tienda {
	nombre: string
	cantidad_dinero_en_cuenta: number = 0
	items: ItemTienda[] = []
	id: number
	constructor(nombre: string, id: number, cantidad_dinero_en_cuenta: number) {
		this.nombre = nombre
		this.id = id
		this.cantidad_dinero_en_cuenta = cantidad_dinero_en_cuenta
	}
	buscarItemPorId(id: number): ItemTienda | null {

		//Version con .find
		const item_encontrado: ItemTienda | undefined = this.items.find(
			(item) => {
				return item.id === id
			}
		)
		if (item_encontrado) {
			return item_encontrado
		}
		else {
			return null
		}
		//Version con FOR OF
		/* for(const item of this.items){
			if(id === item.id){
				return item
			}
		}
		return null */
	}

	comprar(nuevo_item: Item, cantidad: number, margen_ganancia: number): void {
		/* 
		Mejoras:
			-agregarItem(Item) que reciba un item y se encargue de agregarlo a this.items
			-gastarDineroEnCuenta(dinero_gastado) y decremente el dinero en cuenta
			-puedoRealizarCompra(Item, cantidad_comprada): {total //total de la compra: number, puede_comprar: boolean} //devolver para definir si se puede o no comprar
		*/
        const gastoDeCompra: number = cantidad * nuevo_item.precio;
        if (gastoDeCompra > this.cantidad_dinero_en_cuenta) {
            alert('la compra no se puede realizar')
			return //Cortar la funcion en caso de fallo
        }
        this.agregarItem(item, cantidad, margen_ganancia)
        this.cantidad_dinero_en_cuenta -= gastoDeCompra;
    }

	agregarItem(nuevo_item: Item, cantidad: number, margen_ganancia: number){
		const itemEnTienda = new ItemTienda(
            nuevo_item.nombre,
            nuevo_item.precio,
            nuevo_item.id,
            nuevo_item.descripcion,
            cantidad,
            margen_ganancia
        );
        this.items.push(itemEnTienda);
	}


}
const item = new ItemTienda('Agua', 10, 1, 'Bebible', 10, 10)
const item2 = new ItemTienda('coca', 15, 2, 'soda', 20, 20)
const tienda = new Tienda('tienda de pepe', 1, 1000)
tienda.items.push(item)
tienda.items.push(item2)


const papa_fritas = new Item('papa fritas', 3000, 1, 'Papas fritas...')