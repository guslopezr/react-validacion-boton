import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import 'bootstrap/dist/css/bootstrap.min.css'; //este componente activa Boostrap en el archivo final

function App() {
  return (
    <div className="maincontainer" >
      <Header title="Formulario de validación de botón"/>
      <br />
      <Formulario/>
    </div>
  )
}

export default App;
