import React from 'react';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';

import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
 
      <Routes>
        <Route exact path="/" element={ <ItemListContainer/> } />
        <Route path="/category/:categoria" element={ <ItemListContainer/> } />
        <Route path="/item/:id" element={ <ItemDetailContainer/> }  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
