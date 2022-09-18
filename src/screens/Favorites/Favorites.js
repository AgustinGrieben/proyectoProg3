import React from 'react'
import Favoritos from '../../components/Favoritos/Favoritos';

function Favorites(props){
    const id = props.match.params.id 
    console.log(id);
    return(
        <>
        <Favorites id={id}/> 
        </>
    )
}

export default Favorites;