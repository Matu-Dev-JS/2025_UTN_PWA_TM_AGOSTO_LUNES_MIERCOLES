export class Item {
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
	getNombre() {
		return this.nombre
	}
	mostrarItem(): void {
		console.log(this.nombre + " es " + this.descripcion + " y cuesta $" + this.precio + "rupias")
	}
}

export class ItemTienda extends Item {
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
	/* 
	Ejemplo de polimorfismo:
	Tapando el funcionamiento de mostrarItem para cambiar el comportamiento de este metodo en ItemTienda 
	Siempre asegurarse de cumplir los mismos contratos (mismos parametros y mismo retorno)
	*/
	mostrarItem(): void {
		console.log(
			this.nombre + " es " + this.descripcion + " y cuesta $" + this.precio + "rupias" + ' su margen de ganancia es $' + this.margen_ganacia
		)
	}
	setStock(nuevo_stock: number): void {
		this.stock = nuevo_stock
	}
}

export interface ItemProveedorConstructor {
    nombre: string,
    precio: number,
    id: number,
    descripcion: string,
    id_proveedor: number
}

export class ItemProveedor extends Item {
	id_provedor: number
	constructor(
        {
            nombre, 
            precio,
            id,
            descripcion,
            id_proveedor
        }
        :
		ItemProveedorConstructor
	) {
		super(nombre, precio, id, descripcion)
		this.id_provedor = id_proveedor
	}
}