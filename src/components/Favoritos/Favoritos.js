import React, {Component} from 'react'
import Cancion from '../Cancion/Cancion'

class Favoritos extends Component{
    constructor(props){
        super(props)
        this.state={
            datos: [],
            ready: false,
            arrayAguardar: [],
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if(storage !== null){
            let parsedStorage = JSON.parse(storage)
            Promise.all(
                parsedStorage.map(id =>{
                    return(
                        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${id}`)
                        .then(resp => resp.json())
                    )
                })
            ).then(data => this.setState({
                datos: data,
                ready: true
            }))
            .catch(err => console.log(err))

        }
    }
    

    render(){
        return(
            <>
            {

            this.state.ready ? 
            <div>
                {this.state.datos.map((cancion, idx) =>
                <Cancion
                    key={`${Date.now()}-${idx}`}
                    info={cancion}
                />)}
            </div>
    : ''
}
            </>
        )
    }
}

export default Favoritos