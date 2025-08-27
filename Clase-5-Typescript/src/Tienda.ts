import { ItemTienda, type Item } from "./Item"

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
	/**
	 * Busca un item por su id en la lista de items de la tienda.
	 * @param id El id del item a buscar
	 * @returns El item encontrado, o null si no se encontro
	 */
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
		this.agregarItem(nuevo_item, cantidad, margen_ganancia)
		this.cantidad_dinero_en_cuenta -= gastoDeCompra;
	}

	agregarItem(nuevo_item: Item, cantidad: number, margen_ganancia: number) {
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


	eliminarItemId(item_id: number): boolean {
		const index : number = this.items.findIndex(item => item.id === item_id);
		if (index !== -1) {
			this.items.splice(index, 1);
			return true; 
		}
		return false; 
	}
	modificarStockItem(item: ItemTienda, cantidad: number): boolean {
		if (cantidad <= item.stock) {
			item.setStock(item.stock - cantidad);
			return true
		} else {
			return false
		}
  	}
 
	vender(id_item_a_vender: number, cantidad_vendida: number){
		const item_a_vender = this.buscarItemPorId(id_item_a_vender)
		if(!item_a_vender){
			//Lanzar error
			return 
		}
		const realizo_venta = this.modificarStockItem(item_a_vender, cantidad_vendida)
		if(!realizo_venta){
			//Lanzar error
			return 
		}
		const total_venta = (item_a_vender.precio * ((item_a_vender.margen_ganacia / 100) + 1)) * cantidad_vendida
		this.cantidad_dinero_en_cuenta = this.cantidad_dinero_en_cuenta + total_venta
	}




	

}

export default Tienda