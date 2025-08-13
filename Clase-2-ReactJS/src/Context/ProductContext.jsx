import { createContext, useState } from "react";
import { getProducts } from "../services/productService";

export const ProductContext = createContext(
    {
        products: [],
        addNewProduct: (product) => {}
    }
);

const ProductContextProvider = ({children}) => {
    const products_data = getProducts()
    const [products, setProducts] = useState(products_data)

    const addNewProduct = (product) => {
        /* Recibimos los datos del producto y creamos el nuestro */
        const new_product = {...product, id: products.length + 1}

        /* Modificamos el estado de producto */
        setProducts(
            (prev_products) => {
                return [...prev_products, new_product]
            }
        )
    }
    return(
        <ProductContext.Provider
            value={{
                products: products,
                addNewProduct: addNewProduct
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}


export default ProductContextProvider