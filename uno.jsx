import React from 'react'

const Hola = (props) => {
    return(
        <h1>Que tal {props.names} ?</h1>
    )
}


const App = () =>{
    return(
        <div>
            <Hola names="Rocio"/>
        </div>
    )
}

export default App;