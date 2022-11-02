import React from 'react'
// import './App.css'
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import MockComponent from './components/MockComponent'



function App() {
  const mensajeAclass = "mensaje para la ClassComponent"
  const mensajeAfunctional = "mensaje para la FunctionalComponent"
  const mensajeAmock = "mensaje para la MockComponent"

  return (
    <div>
      <ClassComponent mensaje={mensajeAclass}/>
      <FunctionalComponent mensaje2={mensajeAfunctional}/>
      <MockComponent mensaje3={mensajeAmock}/>
    </div>
  )
}

export default App
