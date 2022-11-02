import React from 'react'

const menu = ["Informacion personal", "Peliculas","Series", "Premios"];

const header = () => {
  return (
        <header>
            <nav>
                <ul>
                    {menu.map((item, index) => (
                    <li key={index} style={{textTransform:"capitalize"}} >{item}</li> 
                    ))}
                </ul>
            </nav>

        </header>
    )
  }

  export default header