import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from "./components/ItemListContainer";
import ItemList from './components/ItemListContainer/ItemList';
import NavBar from "./components/NavBar";
import { Navigation } from './router/Navigation';
import "./styles/main.scss";

function App() {

  // const mensaje = 'Hola! Soy el primer componente';
  return (
    // <Router>
    //     <NavBar/>
     
    //     <Switch>
    //       <Route exact component={ <ItemListContainer/> } path="/" />
    //       <Route component={ <ItemList/> } path="/category/:categoria" />
    //       <Route component={ <ItemDetailContainer/> } path="/detalle/:id" />
    //     </Switch>
    // </Router>

    <Navigation/>
  );
}

export default App;
