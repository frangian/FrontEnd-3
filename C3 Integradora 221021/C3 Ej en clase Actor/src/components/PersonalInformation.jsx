import React from 'react'
import { generalInformation } from './db';



const PersonalInformation = () => {
  const [informacion] = generalInformation; //desestructuramos el array, nos ahorra tratarlo como un array con [0];
  
    return (
    <main>
        <h1>{informacion.name}</h1>
        <img src={informacion.avatar} alt="foto perfil"/>
    </main>
    )
}

export default PersonalInformation