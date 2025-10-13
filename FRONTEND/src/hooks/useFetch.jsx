import { useState } from "react"

const useFetch = () => {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function sendRequest ( requestCallback ) {
        setError(null)
        setLoading(true)
        try{
            const response = await requestCallback()
            if(!response.ok){
                throw new Error(response.message || 'Error desconocido')
            }
            setResponse(response)
        }
        catch(error){
            setError(error.message)
        }
        finally{
            setLoading(false)
        }
    }

    function resetResponse () {
        setResponse(null)
    }

    return {
        response,
        loading,
        error,
        sendRequest,
        resetResponse
    }
}

export default useFetch