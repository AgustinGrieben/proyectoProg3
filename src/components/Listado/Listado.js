import React, {Component} from "react";
import { Link } from "react-router-dom";
import Cancion from "../Cancion/Cancion";
import Album from '../Album/Album';
import DetalleCancion from "../DetalleCancion/DetalleCancion";

class Listado extends Component {
    constructor (props){
        super(props)
        this.state = {
            datos: []
        }
    }
    componentDidMount(){
        fetch( this.props.canciones ?  `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10` :  `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=10`)
                    .then(response=>response.json())
                    .then(data=> {
                        {this.setState({datos: data.data})}
                        console.log(data.data)
                    })
                    .catch(error=>console.log('El error fue: ' + error))
    }
    
    render(){
        return(
            <React.Fragment>
                {this.state.datos === []?<h3>Cargando</h3>:
                this.state.datos.map((cancion, idx) =>   this.props.canciones ?  <Cancion datos={cancion} key={idx}/> : <Album datos={cancion} key={idx}/>
                )},
                {this.state.datos === []?<h3>Cargando</h3>:
                this.state.datos.map((cancion, idx) =>   this.props.canciones ?  <DetalleCancion datos={cancion} key={idx}/> : <DetalleCancion datos={cancion} key={idx}/>
                )}
                <Link to= {this.props.canciones ?  `/cancionesPopulares` :  `/albumesPopulares`}   > TOP Chart {this.props.canciones ?  `Canciones` :  `Albumes`} </Link>
            </React.Fragment>
        )
    }
}

export default Listado;