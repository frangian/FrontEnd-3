import React, { Fragment } from 'react'
import { style } from './style'

const ComponenteTarjeta = ({data}) => {
    console.log(data)
    return (
        <Fragment>
            {data.map(pokemon =>(
                <div style={ {padding: "8px", border: "1px solid red", ...style}}>
                <h1 style={style}>{pokemon.pokemonName}</h1>
                <img style={style} src={pokemon.avatar} alt={pokemon.pokemonName} />
                <ul>
                    <li>one: "high altitude and speed flights"</li>
                    <li>two: "fire Twister"</li>
                    <li>three: "waves of fire"</li>
                    <li>four: "sun power"</li>
                </ul>
            </div>
            ))}
        </Fragment>
    )
}

export default ComponenteTarjeta