import React from "react";

const Contenedor = (props) =>{
    return(
        <div >
            <p> {props.NombreCont}</p>
            <div>{props.children}</div>
        </div>
    );
}


function App() {
    return(
        <div style={{border: "0.5px solid black"}}>
            <Contenedor >
                <h1 NombreCont="Titulo del contenedor"> </h1>
                <p> hijo 1</p>
                <p>hijo 2</p>
                <p> hijo 3</p>
            </Contenedor>
        </div>
    )
}

export default App;