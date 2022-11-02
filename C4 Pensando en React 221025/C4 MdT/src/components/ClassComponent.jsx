import React, { Component } from 'react'
import { Fragment } from 'react'
import MockComponent from './MockComponent'

export default class ClassComponent extends Component {
  render() {
    const mensajeAmock = "soy hijo de ClassComponent"
    return (
      <Fragment>
        <h2>Esto es un ClassComponent</h2>
        <p>{this.props.mensaje}</p>
      </Fragment>
    )
}
}