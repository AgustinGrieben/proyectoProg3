import React from 'react'
import Favoritos from '../../components/Favoritos/Favoritos';

function Favorites(props){
    const id = props.match.params.id 
    return(
        <>
        <Favoritos id={id}/> 
        </>
    )
}

export default Favorites;