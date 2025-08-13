const products = [
    {
        title: 'Tv samsung 32"',
        id: 1,
        price: 200,
        descripcion: 'Tv muy buena',
        stock: 3
    },
    {
        title: 'Tv samsung 42"',
        id: 2,
        price: 300,
        descripcion: 'Tv muy buena',
        stock: 2
    },
    {
        title: 'Tv samsung 52"',
        id: 3,
        price: 400,
        descripcion: 'Tv muy buena',
        stock: 1
    }
]

export const getProducts = () => {
    return products
}