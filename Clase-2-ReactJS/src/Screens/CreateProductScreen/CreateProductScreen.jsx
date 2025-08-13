import React, { useContext, useState } from 'react'
import Title from '../../Components/Title/Title'
import { ProductContext } from '../../Context/ProductContext'
import { Link, useNavigate } from 'react-router'

const CreateProductScreen = () => {
    const {addNewProduct} = useContext(ProductContext)
    const navigate = useNavigate()
    const initial_state_form = {
        title: 'Hola',
        price: '',
        stock: '',
        description: ''
    } 
    const [form_state, setFormState] = useState(initial_state_form)

    const changeInputValue = (event) => {
        //El target es el elemento que disparo el evento
        const {target} = event
        const {name, value} = target
        setFormState(
            (current_form_state) =>{
                return {...current_form_state, [name]: value}
            }
        )
    }
    

    const onSubmit = (event) => {
        event.preventDefault()
        addNewProduct(form_state)
        setFormState(initial_state_form)
        alert("producto cargado con exito")
        navigate('/')
    }

    /* 
    const [counter, setCounter] = useState(1)

    const incrementCounter = () => {
        setCounter(
            (prev_counter) => prev_counter + 1
        )
        setCounter(
            (prev_counter) => prev_counter + 1
        )
        setCounter(
            (prev_counter) => prev_counter + 1
        )
    } */
  
    return (
        <div>
            {/* <span>{counter}</span>
            <button onClick={incrementCounter}>+</button>
 */}
            <Link to={'/'}>Volver</Link>
            <Title heading={'h1'}>
                Carga el producto al sistema
            </Title>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="title">Titulo:</label>
                    <input 
                        type='text' 
                        id='title' 
                        name='title' 
                        value={form_state.title} 
                        onChange={changeInputValue}
                    />
                </div>
                <div>
                    <label htmlFor="price">Precio:</label>
                    <input 
                        type='number' 
                        id='price' 
                        name='price'
                        value={form_state.price} 
                        onChange={changeInputValue}
                    />
                </div>
                <div>
                    <label htmlFor="stock">Stock:</label>
                    <input 
                        type='number' 
                        id='stock' 
                        name='stock' 
                        value={form_state.stock} 
                        onChange={changeInputValue}
                    />
                </div>
                <div>
                    <label htmlFor="description">Descripcion:</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        value={form_state.description}
                        onChange={changeInputValue}
                    ></textarea>
                </div>
                <input type='submit' />
            </form>
        </div>
    )
}

export default CreateProductScreen