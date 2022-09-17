import React, { Component } from 'react';

class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state = {
            arrFavs:[]
        }
    }

ComponentDidMount(){
    let storage = localStorage.getItem('favoritos')
    if(storage !== null){
        let parsedStorage = JSON.parse(storage)
        parsedStorage.map(elm => {
            fetch(`https://api.deezer.com/user/2529/${elm}`)
            .then(resp => resp.json ())
            .then(data => this.setState({
                arrFavs: this.state.arrFavs.concat(data)
            }))
            .catch(err => console.log(err))
        })
    }
}

}

export default Favoritos;