import './App.css'
import Boton from "./components/boton/boton.jsx";

function App() {
  return(
      <div className="container" style={{margin: 64}}>
          <Boton estilo={"secondary"} text={"Botón"} showIcon1={true} icon1={"fa-solid fa-right-to-bracket fa-fw"} showIcon2={true} icon2={"fa-solid fa-right-to-bracket fa-fw"} handleClick={clicksito}/>
      </div>
  )
}

function clicksito(){
    window.alert("Hola");
}

export default App;
