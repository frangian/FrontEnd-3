import React from "react";
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from "./components/FunctionalComponent";

const App = () => {
  const greeting = {
    hello: "Soy un componente de clase",
    subText: "Soy el hijo de ClassComponent"
  }
  return (
    <React.Fragment>
      <ClassComponent saludo={greeting}/>
      <FunctionalComponent/>
    </React.Fragment>
  )
}

export default App