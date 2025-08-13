import React, { useContext } from 'react'
import Title from '../../Components/Title/Title'
import ProductList from '../../Components/ProductList/ProductList'
import { ProductContext } from '../../Context/ProductContext'
import { Link } from 'react-router'



function HomeScreen() {

    const {products} = useContext(ProductContext)

    return (
        <div>
            
            <Title heading='h1' >
                Hola <span style={{ color: 'blue' }}>mundo</span>
            </Title>

            <Title heading='h2' >
                Hola <span style={{ color: 'blue' }}>mundo</span>
            </Title>
            <Link to={'/create'}>
                Crear producto
            </Link>
            <ProductList products={products} />
        </div>
    )
}

export default HomeScreen