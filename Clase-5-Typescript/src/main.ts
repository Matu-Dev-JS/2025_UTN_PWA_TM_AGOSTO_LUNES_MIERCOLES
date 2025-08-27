import { Item, ItemTienda } from "./Item"
import Tienda from "./Tienda"

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

		-eliminarPorId(item_id): boolean
			-Eliminar el item con el id recibido y devolver un boolean de status (si la operacion se realizo o no)

			-findIndex + splice
				posicion = items.findIndex(item => item.id === id) (posicion | -1)
				items.splice(posicion, 1)
			-filter
				let se_encontro = false
				items = items.filter(item => {
					if(item.id !== id){
						return true
					}else{
						se_encontro = true
						return false
					}
				})

			const itemsMayoresA100 = items.filter(item => item.precio > 100)


		-modificarStockItem(item : ItemTienda, cantidad)
			-checkear que la cantidad a decrementar sea menor o igual que el stock del item con el id buscado
			-Si es menor decrementar el stock del item utilizando setStock
			-Devolver un boolean de status
			-EJEMPLO DE USO
				item = this.buscarItemPorId(id)
				this.modificarStockItem(item, 3)
	
		
		-vender(id_item_a_vender cantidad_vendida) 
			-Buscar el item en la lista de items, si existe lo va a decrementar usando modificarStockItem y incrementara su cantidad de dinero por la (cantidad_vendida * precio * margen_ganancia)
			-Si no hay item con ese id lanzar mensaje de error "Producto no encontrado"
			-Si el item no se puede vender por falta de stock lanzar mensaje de error "No hay stock suficiente"
  

*/



const item = new ItemTienda('Agua', 10, 1, 'Bebible', 10, 10)
const item2 = new ItemTienda('coca', 15, 2, 'soda', 20, 20)
const tienda = new Tienda('tienda de pepe', 1, 1000)
tienda.items.push(item)
tienda.items.push(item2)


const papa_fritas = new Item('papa fritas', 3000, 1, 'Papas fritas...')



/* Proveedores */

/* 
ItemProveedor extends de Item
	-id
	-nombre
	-precio
	-descripcion
	-id_proveedor => esta es la propiedad nueva

Proveedor
	-items: ItemProveedor[]
	-nombre
	-direccion
	-fecha_creacion: Date
	-id
	Metodos:
	 	-buscarItemPorId (item_id) Devolver el producto encontrado o null
		-registrarItem(nombre, precio, id, descripcion) Crear el ItemProveedor y sumarlo a la lista de items
		-comprar(id_producto, cantidad) : {precio_final, item_comprado: ItemProveedor, cantidad} | null (Devuelve null en caso de fallo)
			Buscar item por id y checkear que exista
			Calcular precio final
			retornar un objeto de operacion con la sig forma: : {precio_final, item_comprado, cantidad}

*/

