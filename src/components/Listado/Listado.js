import React, {Component} from "react";
import { Link } from "react-router-dom";
import Cancion from "../Cancion/Cancion";
import Album from '../Album/Album';
import "../Cancion/Cancion.css";

class Listado extends Component {
    constructor (props){
        super(props)
        this.state = {
            datos: [],
            favorito:[],
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
    
    favorites(id){
        let favoritoArr = this.state.datos.filter(elm => elm.id === id)
        this.setState({
          favorito: this.state.favorito.concat(favoritoArr)
        })
    
        let arrayAGuardar = JSON.stringify(this.state.favorito)
    
        localStorage.setItem('favoritos', arrayAGuardar)
    
        let recuperarStorage = localStorage.getItem('favoritos')
        console.log(JSON.parse(recuperarStorage))
      }

    render(){
        return(
            <React.Fragment>
                <section className= "section">
                {this.state.datos === []?<h3>Cargando</h3>:
                this.state.datos.map((cancion, idx) =>   this.props.canciones ?  <Cancion datos={cancion} key={idx} favorito={(id)=> this.favorites(id)}/> : <Album datos={cancion} key={idx}/>
                )}
                </section>
                <Link to= {this.props.canciones ?  `/cancionesPopulares` :  `/albumesPopulares`} > TOP Chart {this.props.canciones ?  `Canciones` :  `Albumes`} </Link>
            </React.Fragment>
        )
    }
}

export default Listado;