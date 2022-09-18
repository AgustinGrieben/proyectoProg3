import React, {Component} from 'react'

class Favorites extends Component{
    constructor(props){
        super(props)
        this.state={
            personajesFavoritos: []
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if(storage !== null){
            let parsedStorage = JSON.parse(storage)
            Promise.all(
                parsedStorage.map(id =>{
                    return(
                        fetch(`https://rickandmortyapi.com/api/character/${id}`)
                        .then(resp => resp.json())
                        .then(data => data)
                    )
                })
            ).then(data => this.setState({
                personajesFavoritos: data
            }))
            .catch(err => console.log(err))

            // this.setState({
            //     personajesFavoritos: parsedStorage
            // })
        }
    }
    

    render(){
        return(
            <div>
                {this.state.datos.map((cancion, idx) =>
                <Cancion
                    key={`${Date.now()}-${idx}`}
                    info={cancion}
                />)}
            </div>
        )
    }
}

export default Favorites