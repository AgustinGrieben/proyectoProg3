import React, {Component} from "react";
import { Link } from "react-router-dom";
import './Cancion.css'

class Cancion extends Component {
    constructor (props){
        super(props)
        this.state = {
            clase: "ocultar", texto:"Ver Más",
            favorito: false,
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        let parsedStorage = JSON.parse(storage)
        let isFavorite
        if(parsedStorage !== null){
           isFavorite = parsedStorage.includes(this.props.id)
        }
        if(isFavorite){
            this.setState({
                favorito: true
            })
        }
    }

    verMas(){
        if(this.state.clase === "ocultar"){
            this.setState({clase: "mostrar", texto:"Ver Menos"})
        } else{this.setState({clase:"ocultar", texto:"Ver Más"})}
    }

    addFavorites(id){
        let storage = localStorage.getItem('trackFavoritos')

        if(storage == null){
            let idsArr = [id]
            let idsArrToString = JSON.stringify(idsArr)
            localStorage.setItem('favoritos', idsArrToString)
        } else {
            let parsedStorage = JSON.parse(storage)
            parsedStorage.push(id)
            let storageToString = JSON.stringify(parsedStorage)
            localStorage.setItem('favoritos', storageToString
)
}

this.setState({
            favorito: true
        })
    }

    removeFavorites(id){

        let storage = localStorage.getItem('favoritos')
        let storageParsed = JSON.parse(storage) 
        let filteredStorage = storageParsed.filter(elm => elm !== id)
let storageToString = JSON.stringify(filteredStorage)
        localStorage.setItem('favoritos', storageToString)
        this.setState({
            favorito: false
        })
    }
    render(){
        return(
            

            <React.Fragment> 

                <div className="musica">
                
                <Link to={"/DetailCancion/id/"+this.props.datos.id}><img className="img-musica" alt="" src={this.props.datos.album.cover_medium}/></Link>
                <h2>{this.props.datos.title}</h2>
                <p className={this.state.clase}>{this.props.datos.artist.name}</p>
                <p onClick={() => this.verMas()}>{this.state.texto}</p>
                <p><Link to={"/DetailCancion/id/"+this.props.datos.id}>ver detalle de cancion</Link></p>
                {
                        this.state.favorito ?
                        <button onClick={() => this.removeFavorites(this.props.info.id)}>Sacar favoritos</button>
                        :
                        <button onClick={() => this.addFavorites(this.props.info.id)}>Favoritos</button>
                    }
                
                </div>
            </React.Fragment>
            
        )
    }
}

export default Cancion;