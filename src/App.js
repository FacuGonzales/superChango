// import logo from './logo.svg';
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./styles/main.scss";

function App() {

  const mensaje = 'Hola! Soy el primer componente';
  return (
    <>
      <NavBar/>

      <ItemListContainer greeting={mensaje}/>
    </>
  );
}

export default App;
