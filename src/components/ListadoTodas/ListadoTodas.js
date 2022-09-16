import React, {Component} from "react";
import { Link } from "react-router-dom";
import Cancion from "../Cancion/Cancion";
import Album from '../Album/Album';

class ListadoTodas extends Component {
    constructor (props){
        super(props)
        this.state = {
            datos: [],
            numeroPagina: 0
        }
    }
    componentDidMount(){
        fetch( this.props.canciones ?  `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/${this.state.numeroPagina}/tracks&top?limit=10` :  `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/${this.state.numeroPagina}/albums&top?limit=10`)
                    .then(response=>response.json())
                    .then(data=> {
                        {this.setState({datos: data.data, numeroPagina: this.state.numeroPagina +1})}
                        console.log(data)
                    })
                    .catch(error=>console.log('El error fue: ' + error))
    }
    cargarMas(){
        fetch( this.props.canciones ?  `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/${this.state.numeroPagina}/tracks&top?limit=10` :  `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/${this.state.numeroPagina}/albums&top?limit=10`)
                    .then(response=>response.json())
                    .then(data=> {
                        if (data.data.length > 0) {
                            {this.setState({datos: this.state.datos.concat(data.data), numeroPagina: this.state.numeroPagina +1})}
                        console.log(data)
                        } else {
                            {this.setState({numeroPagina: this.state.numeroPagina +1})}
                        }
                        
                    })
                    .catch(error=>console.log('El error fue: ' + error))
    }
    render(){
        return(
            <React.Fragment>
                {this.state.datos === []?<h3>Cargando</h3>:
                this.state.datos.map((cancion, idx) =>   this.props.canciones ?  <Cancion datos={cancion} key={idx}/> : <Album datos={cancion} key={idx}/>
                )}
                <button onClick={ () => this.cargarMas() }>Cargar mas</button>
            </React.Fragment>
        )
    }
}

export default ListadoTodas;