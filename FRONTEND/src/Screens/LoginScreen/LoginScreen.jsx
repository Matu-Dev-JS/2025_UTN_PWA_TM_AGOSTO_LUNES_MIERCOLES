import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { login } from '../../services/authService'
import useForm from '../../hooks/useForm'
import useFetch from '../../hooks/useFetch'
import { AuthContext } from '../../Context/AuthContext'

const LoginScreen = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {onLogin} = useContext(AuthContext)
  useEffect(
    () => {
      const query = new URLSearchParams(location.search)
      const from = query.get('from')
      if (from === 'verified_email') {
        alert('Has validado tu mail exitosamente')
      }
    },
    [] //Solo queremos que se ejecute cuando se monte el componente
  )
  

  const LOGIN_FORM_FIELDS = {
        EMAIL: 'email',
        PASSWORD: 'password'
    }

    const initial_form_state = {
        [LOGIN_FORM_FIELDS.EMAIL]: '',
        [LOGIN_FORM_FIELDS.PASSWORD]: ''
    }

    const { response, error, loading, sendRequest, resetResponse } = useFetch()

    function handleLogin(form_state_sent) {
        resetResponse()
        sendRequest(
            () => {
                return login(
                    form_state_sent[LOGIN_FORM_FIELDS.EMAIL],
                    form_state_sent[LOGIN_FORM_FIELDS.PASSWORD]
                )
            }
        )
    }

    const {
        form_state,
        onInputChange,
        handleSubmit,
        resetForm
    } = useForm(initial_form_state, handleLogin)

    useEffect(
        () => {
          if(response && response.ok){
            //Queremos que persista en memoria el auth token
            //Dejamos que el context se encargue de que sucedera
            onLogin(response.body.auth_token)
            
          }
        },
        [response]
    )
  return (
      <div className="Form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="email">Email: </label>
            <input  type="text" placeholder="jose@algo.com" value={form_state[LOGIN_FORM_FIELDS.EMAIL]} name={LOGIN_FORM_FIELDS.EMAIL} onChange={onInputChange} id={'email'} />
          </div>

          <div>
            <label htmlFor="password">Password: </label>
            <input type="text" placeholder="Josesito206" value={form_state[LOGIN_FORM_FIELDS.PASSWORD]} name={LOGIN_FORM_FIELDS.PASSWORD} onChange={onInputChange} id={'password'} />
          </div>

          {error && <span style={{ color: 'red' }}> {error} </span>}
          {response && <span style={{ color: 'green' }}> Successful Login </span>}

          {
            loading
              ? <button disabled>Loggin In</button>
              : <button>Login</button>
          }
        </form>
      </div>
      )
}

      export default LoginScreen