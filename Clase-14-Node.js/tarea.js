const products = []


app.post(
    '/products',
    (request, response) => {
        const { title, price, stock } = request.body
        if (!title || typeof (title) !== "string" || title.length < 4) {
            response.send({
                error: 'titulo no valido'
            })
            return
        }
        else if ((!price || typeof (price) !== "number" || price < 0)) {
            return response.send({
                error: 'precio no valido'
            })
        }
        else if (!stock || typeof (stock) !== "number" || stock < 0) {
            response.send({
                error: 'stock no valido'
            })
            return
        }
        else {
            const new_product =
            {
                title,
                price,
                stock: parseInt(stock),
                id : products.length +1
            }
            products.push(new_product)
        }
    }
)
/* 
Crear un endpoint en /products
Cuando se envie un post se debera capturar el title, price, stock del producto y debera crearse un objeto que se agregue a lista de products, muy importante validar que title sea un string de almenos 4 caracteres, price sea un numero positivo y tambien el stock. 
Recuerden crear un id para el producto.

Crear un endpoint en /products
Cuando se envie un get debera responder con {products: [...lista de productos]}
*/

app.get("/products", (request, response) => {
  response.send({products: products});
});