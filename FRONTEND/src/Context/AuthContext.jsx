import { createContext,  useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router";

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

    //Configuramos para hacer mas adelante redirecciones
    const navigate = useNavigate()

    //ESTADO CON: Datos de sesion
    const [user, setUser] = useState(null)

    //ESTADO: Marca si esta o no logueado el usuario
    const [ isLogged, setIsLogged ] = useState( Boolean(localStorage.getItem('auth_token')) )


    //Una vez se monte el componente decodificar el token y guardar los datos de sesion
    useEffect(
        () => {
            if(!localStorage.getItem('auth_token')){
                setIsLogged(false)
                setUser(null)
                return 
            }
            const user = decodeToken(localStorage.getItem('auth_token'))
            if(user){
                setUser(user)
                setIsLogged(true)
            }
            else{
                setIsLogged(false)
                setUser(null)
            }
        },
        []
    )

    function onLogout(){
        localStorage.removeItem('auth_token')
        setIsLogged(false)
        setUser(null)
        //Si quieren pueden redireccionar a login
        navigate('/login')
    }

    function onLogin (auth_token){
        localStorage.setItem('auth_token', auth_token)
        setIsLogged(true)
        const user_session = decodeToken(auth_token)
        setUser(user_session)
        navigate('/home')
    }



    return <AuthContext.Provider
        value={{
            isLogged,
            user,
            onLogin, 
            onLogout
        }}
    >
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider