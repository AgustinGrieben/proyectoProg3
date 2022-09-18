import React, {Component} from "react";
import VerTodoCanciones from "../VerTodoCanciones/VerTodoCanciones";
import VerTodoAlbum from "../VerTodoAlbum/VerTodoAlbum";

class VerTodo extends Component {
    constructor(props){
        super(props)
        this.state={
          datos: [],
          ready:false
        }
      }

    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?index=12&limit=80`)
        .then(resp => resp.json())
        .then(data => this.setState({
          datos: this.state.datos.concat(data.data),
        }))
        .catch(err => console.log(err))
    
      }
      cargarMas(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?index=${this.state.index + 10}&limit=10?page=${this.state.pagina + 1}`)
        .then(resp => resp.json())
        .then(data => this.setState({
          datos: this.state.datos.concat(data.data),
          pagina: this.state.pagina + 1,
          index: this.state.index + 10
        }))
        .catch(err => console.log(err))
    
      }

    render(){
        return(
            <>
             { this.state.ready ?
              <div>
                <h2 className='titulo-home'>canciones</h2>
                <section className='canciones-card'>
                  {this.state.datos.map((music, idx) => 
                    <VerTodoCanciones 
                      key={`${Date.now()}-${idx}`}
                      info={music}
                    />)}
        
                    <p onClick={()=> this.cargarMas()}>Cargar mas</p>
                    </section>
                    <h2 className=''>Albums</h2>
                <section className=''>
                  {this.state.datos.map((music, idx) => 
                    <VerTodoAlbum 
                      key={`${Date.now()}-${idx}`}
                      info={music}
                    />)}
                     <p onClick={()=> this.cargarMas()}>Cargar mas</p>
                    </section>
                    </div>  

                                    :
                                    <h1>Cargando...</h1>
                    }
                </>
            )
        }
    }
    export default VerTodo