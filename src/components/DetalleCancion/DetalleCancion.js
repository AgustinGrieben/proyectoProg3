import React, {Component} from "react";
import { Link } from "react-router-dom";

class DetalleCancion extends Component {
    constructor (props){
        super(props)
        this.state = {
            clase: "ocultar", texto:"Ver Más"
        }
    }

    verMas(){
        if(this.state.clase === "ocultar"){
            this.setState({clase: "mostrar", texto:"Ver Menos"})
        } else{this.setState({clase:"ocultar", texto:"Ver Más"})}
    }

    render(){
        return(
            <React.Fragment> 
                capturar el id
            </React.Fragment>
        )
    }
}

export default DetalleCancion;