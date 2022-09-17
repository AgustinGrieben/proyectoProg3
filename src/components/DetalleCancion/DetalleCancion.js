import React, {Component} from "react";

class DetalleCancion extends Component {
    constructor (props){
        super(props)
        this.state = {
            datos: [],
            clase: "ocultar", texto:"Ver Más"
        }
    }
    componentDidMount(){
        console.log("aca");
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/tracks/${this.props.id}`)
    .then(resp => resp.json())
    .then(data =>{ this.setState({
      datos: data,
      ready:true    
 }) 
 console.log(data);
})
 .catch(err => console.log('falla'))
 }
    verMas(){
        if(this.state.clase === "ocultar"){
            this.setState({clase: "mostrar", texto:"Ver Menos"})
        } else{this.setState({clase:"ocultar", texto:"Ver Más"})}
    }

    render(){
        return(
            <> 
                {
               this.state.ready ? <div>
                <img 
                src={this.state.datos.album.cover}
                alt={`Una imagen de ${this.state.datos.album.cover}`}
            />
                <h1>Cancion: {this.state.datos.title}</h1>
                <h1>Artista: {this.state.datos.artist.name}</h1>
                <h2>Disco: {this.state.datos.album.title}</h2>
                <iframe title="iframe" src={this.state.datos.preview} />
                </div>
                :
                <h1>Cargando...</h1>
                 }
            </>
        )
    }
}

export default DetalleCancion;