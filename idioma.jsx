import react from 'react'

const Hola = (props) => {
    const {nombre, idioma} = props;
    let texto ;
    switch (idioma) {
        case 'En':
            texto = `Hello ${nombre}`;
            break;
        case 'Aleman':
            texto = `Hallo`;
            break;
        default:
            texto =  `Sin idioma` ;
            break;
    }
    return(
        <h1> {texto}</h1>
    );
};


const App = () => {
    return (
        <div>
            <Hola nombre ="Fabian" idioma = "En"/>
            <Hola nombre = "Karina" idioma = "Aleman"/>
        </div>
    );
};

export default App;