import React from "react";
import './ProductList.css'; 
const ProductList = ({ products }) => {
    return (
        <div>
            {
                products.length === 0 
                ? <p>No hay productos cargados</p>
                : products.map(
                    (product) => {
                        return <ProductItem {...product}/>
                    }
                )
            }
        </div>
    );
}

const ProductItem = ({title, price, stock, id}) => {
    return (
        <div key={id} className="product_container">
            <h2>{title}</h2>
            <p>Precio: ${price}</p>
            <p>Stock: {stock}</p>
            <button>Modificar</button>
            <button>Comprar</button>
        </div>
    )
}

export default ProductList