import React from 'react'
import VerTodo from '../../components/VerTodo/VerTodo';

function VerTodas(props){

    const id = props.match.params.id

    return(
        <>
        < VerTodo id={id}/>
        </>
    )
}

export default VerTodas;