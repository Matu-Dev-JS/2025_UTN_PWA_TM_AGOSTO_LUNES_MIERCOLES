import { createContext, useState } from "react";
import { getProducts } from "../services/productService";

export const ProductContext = createContext(
    {
        products: []
    }
);

const ProductContextProvider = ({children}) => {
    const products_data = getProducts()
    const [products, setProducts] = useState(products_data)
    return(
        <ProductContext.Provider
            value={{
                products
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}


export default ProductContextProvider