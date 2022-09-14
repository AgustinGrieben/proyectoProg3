import React, {Component} from "react";
import Listado from "../../components/Listado/Listado";
import Cancion from "../../components/Cancion/Cancion";

class Home extends Component {
    constructor (props){
        super(props)
        this.state = {
            valorInput: '',
            resultadoBusqueda: []
        }
    } 
    
    prevenirRefresh(event){
        event.preventDefault()
    }

    controlarCambiosDelInput(event){
        this.setState({
            valorInput: event.target.value
        }, ()=> this.metodoQueBusca())
    }

    metodoQueBusca(){
        if (this.state.valorInput !== ""){
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${this.state.valorInput}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({resultadoBusqueda: data.data})
                console.log(data);
            })
            .catch(err => console.log(err))
        }
    }

    render (){
        return (
            this.state.valorInput !== ""?
            <React.Fragment>
                <h1>
                    Resultado de Búsqueda  
                </h1>
                <form onSubmit={(event)=> this.prevenirRefresh(event)}>
                    <input onChange={(event)=> this.controlarCambiosDelInput(event)} value={this.state.valorInput} />
                    <button>Hola</button>
                </form>
                
                {this.state.resultadoBusqueda.length === 0?<h3>No se encontraron resultados de búsqueda</h3>:
                this.state.resultadoBusqueda.map((cancion, idx) => <Cancion datos={cancion} key={idx}/>)
                }

            </React.Fragment>
            
            :
            
            <React.Fragment>
                <form onSubmit={(event)=> this.prevenirRefresh(event)}>
                    <input onChange={(event)=> this.controlarCambiosDelInput(event)} value={this.state.valorInput} />
                    <button>Buscar</button>
                </form>
                <h2>Canciones populares</h2>
                <Listado canciones={true}/>
                <h2>Albumes populares</h2>
                <Listado canciones={false}/>
            </React.Fragment>
        )
    }

}

export default Home;