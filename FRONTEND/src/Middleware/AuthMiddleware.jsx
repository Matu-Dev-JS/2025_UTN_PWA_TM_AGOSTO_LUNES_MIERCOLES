import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { AuthContext } from '../Context/AuthContext'

const AuthMiddleware = () => {
    const {isLogged} = useContext(AuthContext)
    console.log(isLogged)
    if(isLogged){
        return <Outlet/>
    }
    else{
        return <Navigate to={'/login'}/>
    }
}

export default AuthMiddleware