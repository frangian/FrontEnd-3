import React, {Component} from "react";
import MockComponent from "./MockComponent";

class ClassComponent extends Component {
    constructor(props){
        super(props)
    }
//en este espacio



// /hasta aqui, declaramos todo lo que tiene q ver con logiaca o manejo de la misma (cuerpo del componente)

    render(){
        const { saludo } = this.props
        return(
            <div>
                <h1>{saludo.hello}</h1>
                <MockComponent message={saludo.subText}/>
            </div>
        )

    }
}

export default ClassComponent