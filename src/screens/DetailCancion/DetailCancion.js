import React from 'react'
import DetalleCancion from '../../components/DetalleCancion/DetalleCancion'

function DetailCancion(props){
    const id = props.match.params.id
    return(
        <>
        <DetalleCancion id={id}/> 
        </>
    )
}

export default DetailCancion;