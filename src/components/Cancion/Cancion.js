import React, {Component} from "react";
import { Link } from "react-router-dom";
import './Cancion.css'

class Cancion extends Component {
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
                <main className="main-musica">
                    <article className="musica">
                <Link><img className="img-musica" src={this.props.datos.album.cover_medium}/></Link>
                <h2>{this.props.datos.title}</h2>
                <p className={this.state.clase}>{this.props.datos.artist.name}</p>
                <p onClick={() => this.verMas()}>{this.state.texto}</p>
                <p>Agregar a favoritos</p>
                </article>
                </main>
                
            </React.Fragment>
        )
    }
}

export default Cancion;