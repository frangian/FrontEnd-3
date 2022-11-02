import React from 'react'
import { Fragment } from 'react'

const MockComponent = (props) => {
  return (
    <Fragment>
        <h2>Esto es un MockComponent</h2>
        <p>{props.mensaje3}</p>
        <p>{props.mensaje}</p>
    </Fragment>
  )
}

export default MockComponent