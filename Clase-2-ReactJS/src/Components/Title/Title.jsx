import React from "react";
import './Title.css'

/* 
children es una prop reservada que sera igual a el contenido anidado del componente <Title/>
*/

/* title puede ser un h1 o un h2 */

function Title ({children, heading}){
    return (
        heading === 'h1'
        ? <h1 className="title">
            {children}
        </h1>
        : <h2 className="title">
            {children}
        </h2>
    )
}

export default Title