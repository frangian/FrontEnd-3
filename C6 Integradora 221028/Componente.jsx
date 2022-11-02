import React, { Fragment } from 'react'
import { style } from './style'
import ComponenteTarjeta from './ComponenteTarjeta'
import { Pokemon } from '../pokemons'


const Componente = () => {
    const arrayDePokemon = Object.keys(Pokemon)
    console.log(arrayDePokemon);
    return (
        <main style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
            {arrayDePokemon.map((pokemon) =>(
                <ComponenteTarjeta 
                    key={Pokemon[pokemon].pokemonName}
                    data={Pokemon[pokemon]}
                />
            ))}
        </main>
    )
}

export default Componente