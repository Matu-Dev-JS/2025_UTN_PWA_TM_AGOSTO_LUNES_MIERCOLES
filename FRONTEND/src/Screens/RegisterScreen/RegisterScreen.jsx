import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import { register } from '../../services/authService'

const RegisterScreen = () => {

    //Guardamos los campos que tendra nuestro form
    const REGISTER_FORM_FIELDS = {
        USERNAME: 'username',
        EMAIL: 'email',
        PASSWORD: 'password'
    }

    //Que valor tendra inicialmente el estado de formulario
    const initial_form_state = {
        [REGISTER_FORM_FIELDS.USERNAME]: '',
        [REGISTER_FORM_FIELDS.EMAIL]: '',
        [REGISTER_FORM_FIELDS.PASSWORD]: ''
    }

    const onRegister = (form_state_sent) => {
        //Logica de registro
        console.log('el usuario a registrar es:', form_state_sent)
        resetForm()
    }

    //Alternativa, usar react hook forms / React formik
    const {
        form_state, 
        onInputChange, 
        handleSubmit, 
        resetForm
    } = useForm(
        initial_form_state, 
        onRegister
    )
    //register('pepe', 'mati.dev.gimenez@gmail.com', 'Mati_123')
    

  return (
    <div>
        <h1>Registrate</h1>
        <form onSubmit={handleSubmit}>
            <div className='form-field'>
                <label htmlFor="username">Nombre de usuario:</label>
                <input 
                    type="text" 
                    placeholder='pepe' 
                    value={form_state[REGISTER_FORM_FIELDS.USERNAME]}
                    name={REGISTER_FORM_FIELDS.USERNAME}
                    id='username'
                    onChange={onInputChange}
                />
            </div>
            <div className='form-field'>
                <label htmlFor="email">Email:</label>
                <input 
                    type="text" 
                    placeholder='pepe@mail.com' 
                    value={form_state[REGISTER_FORM_FIELDS.EMAIL]}
                    name={REGISTER_FORM_FIELDS.EMAIL}
                    onChange={onInputChange}
                    id={'email'}
                />
            </div>
            <div className='form-field'>
                <label htmlFor="password">Contraseña:</label>
                <input 
                    type="text" 
                    placeholder='pepe-123' 
                    value={form_state[REGISTER_FORM_FIELDS.PASSWORD]}
                    name={REGISTER_FORM_FIELDS.PASSWORD}
                    onChange={onInputChange}
                    id={'password'}
                />
            </div>
            <button>Registrarse</button>
        </form>
    </div>
  )
}

export default RegisterScreen