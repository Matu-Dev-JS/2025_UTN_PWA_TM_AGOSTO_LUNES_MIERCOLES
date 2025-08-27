import { ItemProveedor, type ItemProveedorConstructor } from "./Item"

class Proveedor {
    items: ItemProveedor[] = []
    nombre: string
    direccion: string
    fecha_creacion: Date
    id:number
    constructor(
        nombre:string,
        direccion:string,
        fecha_creacion:Date,
        id:number
    ){
        this.nombre=nombre
        this.direccion=direccion
        this.fecha_creacion=fecha_creacion
        this.id=id
    }
    buscarItemPorId(item_id : number) : ItemProveedor | null {
        for (let item of this.items) {
            if (item.id === item_id) {
                return item
            }
        }
        return null
    }
    registrarItem(
        nombre: string, 
        precio: number, 
        id: number, 
        descripcion: string
    ):void {
        const params : ItemProveedorConstructor = {
            id, 
            nombre, 
            precio, 
            descripcion, 
            id_proveedor: this.id
        }
        const nuevoItem = new ItemProveedor(
            params
        )
        this.items.push(nuevoItem)
    }
    comprar(id_producto: number, cantidad: number) 
    :
    {
        precio_final: number,
        producto_a_comprar: ItemProveedor,
        cantidad: number
    } | null
    {
        const producto_a_comprar = this.buscarItemPorId(id_producto)
        if (!producto_a_comprar) {
            alert('error: item no encontrado')
            return null
        }
        const precio_final = producto_a_comprar.precio * cantidad
        return { 
            precio_final, 
            producto_a_comprar, 
            cantidad 
        }
    }
}


export default Proveedor