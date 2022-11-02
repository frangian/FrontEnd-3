import React from 'react'
import { Fragment } from 'react'
import MockComponent from './MockComponent'

const FunctionalComponent = (props) => {
    const mensajeAmock = "soy hijo de FunctionalComponent"

  return (
    <Fragment>
        <h2>Esto es un FunctionalComponent</h2>
        <p>{props.mensaje2}</p>
        <MockComponent mensaje={mensajeAmock}/>
    </Fragment>
  )
}

export default FunctionalComponent