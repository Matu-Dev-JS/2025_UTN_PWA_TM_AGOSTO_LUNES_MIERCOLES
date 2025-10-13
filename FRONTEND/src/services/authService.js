export async function register (username, email, password){

    try{
        const body = {
            name: username, 
            email,
            password
        }
    
    
        //Fetch es una funcion nativa de JS para hacer consultas HTTP
        const response_http = await fetch(
            'http://localhost:8080/api/auth/register',
            {
                method: 'POST',
                headers: {
                    //Indica a mi servidor que voy a enviar un JSON por body
                    "Content-Type": 'application/json'
                },
                //Transformo el objeto de JS a JSON (texto)
                body: JSON.stringify(body)
            }
        )
        //Transformamos el body de respuesta de JSON a objeto de JS 
        const response = await response_http.json()
    
        return response
    }
    catch(error){
        console.error('Error al registrar:', error)
        throw new Error('Error interno del servidor')
    }
}

export async function login (email, password){
    try{
        const body = {
            email, 
            password
        } 
    
        const response_http = await fetch(
                'http://localhost:8080/api/auth/login',
            {
                method: 'POST',
                headers: {
                    //Indica a mi servidor que voy a enviar un JSON por body
                    "Content-Type": 'application/json'
                },
                //Transformo el objeto de JS a JSON (texto)
                body: JSON.stringify(body)
            }
        )
        
        const response = await response_http.json()
    
        return response

    }
    
    catch(error){
        console.error('Error al registrar:', error)
        throw new Error('Error interno del servidor')
    }
}