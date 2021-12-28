// import logo from './logo.svg';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./styles/main.scss";
import NavBar from './utils/NavBar';

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
