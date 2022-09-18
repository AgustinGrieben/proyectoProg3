import React, { Component } from 'react';
import Cancion from '../Cancion/Cancion';

class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state = {
            datos:[]
        }
    }

/* ComponentDidMount(){
    let storage = localStorage.getItem('favoritos')
    if(storage !== null){
        let parsedStorage = JSON.parse(storage)
        
        Promise.all(
        parsedStorage.map(id => {
            fetch(`https://api.deezer.com/track/${id}`)
            .then(resp => resp.json ())
        })
        )
        .then(data => this.setState({
            datos: this.state.datos.concat(data)
        }))
        .catch(err => console.log(err))
    }
}

render(){
    return(
        <div>
            {this.state.datos.map((cancion, idx) =>
            <Cancion
                key={`${}-${idx}`}
                info={cancion}
            />)}
        </div>
    )
}
*/
}

export default Favoritos;