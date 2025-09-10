//DOM Ya no funciona
//BOM Ya no funciona
//EJEMPLOS:
//document.getElementById
//window.alert()
//window.prompt()

//Ganamos poder hacer cualquier cosa que se pueda hacer con una PC
//Por ejemplo podemos usar el sistema de archivos
//require es la forma antigua de importar en node.js, se usa cuando estamos en commonjs
const filesystem = require('fs')

/* filesystem.writeFileSync(
    'test.txt',//direccion, nombre y extension del archivo
    'hola mundo', //Contenido
    {
        encoding: 'utf-8'//codificacion
    }
) */

//Nos permite leer un archivo
const package_data = filesystem.readFileSync(
    'package.json',
    {
        encoding: 'utf-8'
    }
)

//JSON.parse nos permite trasnformar un JSON string a objeto de JS
const package_data_obj = JSON.parse(package_data)
console.log(package_data_obj.name)

const new_user = {
    nombre: 'pepe',
    apellido: 'suarez',
    id: 1,
    version: package_data_obj.version
}

console.log(new_user)

//Quiero crear un JSON string con el objeto new_user
const json_string_user = JSON.stringify(new_user)
console.log(json_string_user)

//Crear 2 variables
//a va a ser un numero
//b va a ser un numero
//guardar cada numero en archivo de txt (EJ: numero_1.txt y numero_2.txt) //writeFileSync
//leer el archivo numero_1.txt y guardarlo en una variable //readFileSync
//leer el archivo numero_2.txt y guardarlo en una variable //readFileSync
//sumar entre si ambos numeros
console.log(parseInt('7.9999999'))
console.log(parseFloat('7.9999999'))
console.log(0.1 + 0.2)

console.log( Math.round(10.6) )
let result = 0.1 + 0.2
result = Number(result.toFixed(1))

console.log(result)
console.log( result === 0.3 )