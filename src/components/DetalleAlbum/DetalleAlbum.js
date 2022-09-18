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
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.props.id}`)
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
               this.state.datos.length !==0 ? <div>
                <img 
                src={this.state.datos.cover}
                alt={"/"}
            />
                <h1>Disco: {this.state.datos.title}</h1>
                <h1>Artista: {this.state.datos.artist.name}</h1>
                <h2>Canciones:</h2>
                {this.state.datos.tracks.data.map((UnaCancion)=><p>{UnaCancion.title}</p>)}
                </div>
                :
                <h1>Cargando...</h1>
                 }
            </>
        )
    }
}

export default DetalleCancion;