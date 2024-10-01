import React, { useState } from "react";

const Contadorinversa = () => {

    const [contador, setContadorinversa] = useState(10);
    const quitar = () => setContadorinversa(contador - 1);

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={quitar}>
                Restar 1
            </button>
        </div>
    );
}

export default Contadorinversa;
