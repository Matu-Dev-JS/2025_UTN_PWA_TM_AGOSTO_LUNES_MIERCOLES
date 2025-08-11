/* 
- Tipos de dato
- Variables
- Operadores aritmeticos
- Operadores logicos
- Comparadores
- Control de flujo (IF, ELSE, FOR, FOR OF) 
    - IF
    - ELSE
    - FOR
    - FOR OF 🤯🤯🤯
- Funciones
- Arreglos y metodos de array 🤯🤯🤯🤯
- Objetos 🤯
- Spread operator 🤯🤯🤯🤯🤯🤯 ✅
- Destructuring 🤯🤯🤯🤯 ✅
*/

/* 
Tipos de datos primitivos:
number
boolean
string
undefined
null
*/

/* 
Cuando un dato es primitivo la variable guardara el valor de el dato no la referencia
*/
/* 
let nombre_1 = 'pepesito'
let nombre_2 = nombre_1

nombre_1 = 'pedro'

console.log(nombre_2) //Pepesito
console.log(nombre_1) //pedro 
*/


/* 
Tipos de dato Objeto 
    -array
    -object

Cuando asignamos una variable que es objeto a otra variable, se guarda la referencia de la variable NO EL VALOR
*/
/* const persona_1 ={
    nombre: 'pepe',
    apellido: "suarez",
    edad: 27
}

const persona_2 = {...persona_1}

persona_2.nombre = 'pedro'

console.log("Persona 1:", persona_1) //pedro
console.log("Persona 2:", persona_2) //pedro  */


/* 
Parametros:
    -precio: number
    -tipo_factura: "A" | "B"

Va a devolver 1 array:
    Primer posicion: -un objeto con el precio y el tipo_factura original
    Segunda posicion: -un objeto con el precio modficado, el tipo factura, el iva

Reglas: 
    cuando sea A el iva tiene que estar discriminado y cuando sea B debe estar en el precio y tambien devolver el iva
*/
/* 
Funcion Mal hecha 🤬
function calcularIVA ( precio, tipo_factura ){
    const objeto_original = {
        precio: precio,
        tipo_facutura: tipo_factura
    }

    const objeto_resultante = objeto_original

    let iva = precio * (21 / 100)

    if(tipo_factura === 'A'){
        objeto_resultante.iva = iva
        objeto_resultante.precio = precio
    }
    else if (tipo_factura === 'B'){
        objeto_resultante.iva = iva
        objeto_resultante.precio = precio + iva
    }
    return [ objeto_original, objeto_resultante ]
}

console.log( calcularIVA(132, 'A') )
console.log( calcularIVA(132, 'B') )
 */

/* function calcularIVA ( precio, tipo_factura ){
    const objeto_original = {
        precio: precio,
        tipo_factura: tipo_factura
    }

    //Creamos un nuevo objeto en memoria con los datos del objeto original
    const objeto_resultante = {...objeto_original}

    let iva = precio * (21 / 100)

    if(tipo_factura === 'A'){
        objeto_resultante.iva = iva
        objeto_resultante.precio = precio
    }
    else if (tipo_factura === 'B'){
        objeto_resultante.iva = iva
        objeto_resultante.precio = precio + iva
    }
    return [ objeto_original, objeto_resultante ]
}

console.log( calcularIVA(132, 'A') )
const resultado = calcularIVA(132, 'B')  */

//Recalculo del iva del resultado
//calcularIVA(resultado[0].precio, resultado[0].tipo_factura)


/* 
calcularIVA(100, 'A')
[
    {
        tipo_factura: "A"
        precio: 100
    },
    {
        tipo_factura: "A"
        precio: 100,
        iva: 21
    }
]

calcularIVA(100, 'B')
[
    {
        tipo_factura: "B"
        precio: 100
    },
    {
        tipo_factura: "B"
        precio: 121,
        iva: 21
    }
]
*/

/* 
let nombre = 'firulais'
const persona = {
    'Nombre DNI': 'pepe',
    apellido: 'suarez'
}  */
/* 
En vez de esto:
const name = persona.nombre
const lastname = persona.apellido 
*/
//Hacer esto
//const {['Nombre DNI']: name, apellido: lastname} = persona
//problema: siempre que quiero llamar a algo de la persona debo indicar que es de persona
//console.log(`Hola me llamo ${name} y mi apellido es ${lastname}`)

//Desestructuracion de parametro
/* function saludar ( {
    ['Nombre DNI']: name, 
    apellido: lastname
} ){

    console.log(`Hola me llamo ${name} y mi apellido es ${lastname}`)
}

saludar(persona) */

const nombres = ['juan', 'pedro', 'maria', 'messi', 'lucas', 'Julieta', 'marcos']

/* 
Con codigo y metodos de array
-Eliminar al ultimo de la lista
-Eliminar al anterior a messi y a messi
*/

/* 
buscar posicion de messi -> indexOf
buscar la posicion anterior (posicion de messi - 1) -> resta
eliminar al anterior y a messi -> splice
*/
let posicion_messi = nombres.indexOf('messi')
let posicion_anterior_messi = posicion_messi - 1

nombres.splice(posicion_anterior_messi, 2)


const productos = [
    {
        id: 0,
        nombre: 'Tv samsung 32"',
        precio: 6600
    },
    {
        id: 1,
        nombre: 'Tv samsung 50"',
        precio: 10000
    },
    {
        id: 2,
        nombre: 'Tv samsung 42"',
        precio: 8700
    },
]

/* 
Hacer funciones:
    -Buscar al producto por id, sino devolver null -> findProductById(0)
    -Buscar productos por nombre, sino devolver [] -> findProductByName('Tv') (todos los productos que tengan incluido en el nombre el string Tv )
    -Buscar por rango de precios, sino devolver [] -> findProductByPrice(3000, 6000)
 */