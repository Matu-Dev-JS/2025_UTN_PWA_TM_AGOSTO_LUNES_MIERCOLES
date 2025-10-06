export async function register (username, email, password){
    const body = {
        name: username, 
        email,
        password
    }


    //Fetch es una funcion nativa de JS para hacer consultas HTTP
    const response = await fetch(
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
}