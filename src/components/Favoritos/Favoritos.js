import React, { Component } from 'react'
import Cancion from "../Cancion/Cancion";

class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datos: [],
            ready: false,
            arrayAguardar: [],
        }
    }
    componentDidMount() {           
        let storage = localStorage.getItem('favoritos')
        if (storage !== null) {
            let parsedStorage = JSON.parse(storage)
            Promise.all(        
                parsedStorage.map(id => {                //tengo el array de id, por cada id, hace el fetch al endpoint de detalle de cacncion
                    return (
                        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${id}`)
                            .then(resp => resp.json())
                    )
                })
            ).then(data => this.setState({
                arrayAguardar: data ,
                ready: true
            }
            ,()=> { console.log(this.state.arrayAguardar)}

            ))
                .catch(err => console.log(err))

        }
    }

    mostrar(cancion, idx){
        if(cancion.error){
            console.log("no entro");
            return ""
        }else {
            console.log(cancion.message);
            return <Cancion key={`${Date.now()}-${idx}`}info={cancion}/> 
            
        }
         
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

    render() {
        return (
            <React.Fragment>
                <p> lal</p>
                {

                    this.state.ready ?
                        
                            this.state.arrayAguardar.map((cancion, idx) => {
                                <Cancion datos={cancion} key={idx} favorito={(id)=> this.favorites(id)}/>
                                console.log(cancion);
                            } 
                                  
                                
                            
                                )
                        : <p> Cargando..</p>
                }
            </React.Fragment>
        )
    }
}

export default Favoritos