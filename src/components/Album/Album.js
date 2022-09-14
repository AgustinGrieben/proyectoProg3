import React, {Component} from "react";
import { Link } from "react-router-dom";
import '../Cancion/Cancion.css'

class Album extends Component {
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
                <Link><img src={this.props.datos.cover_medium}/></Link>
                <h2>{this.props.datos.title}</h2>
                <p className={this.state.clase}>{this.props.datos.artist.name}</p>
                <p onClick={() => this.verMas()}>{this.state.texto}</p>
                <p>Agregar a favoritos</p>
            </React.Fragment>
        )
    }
}

export default Album;