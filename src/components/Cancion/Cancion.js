import React, {Component} from "react";
import { Link } from "react-router-dom";

class Cancion extends Component {
    constructor (props){
        super(props)
        this.state = {
            datos: []
        }
    }
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10`)
                    .then(response=>response.json())
                    .then(data=> {
                        {this.setState({datos: data.data})}
                        console.log(data.data)
                    })
                    .catch(error=>console.log('El error fue: ' + error))
    }
    render(){
        return(
            <React.Fragment>
            </React.Fragment>
        )
    }
}

export default Cancion;