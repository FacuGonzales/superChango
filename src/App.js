import "./styles/main.scss";

import React from 'react';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';


import NavBar from "./components/NavBar";
import CartContainer from './components/CartContainer';
import CartProvider from './components/Context';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from "./components/ItemListContainer";
import FormContainer from "./components/FormContainer";
import FooterContainer from "./components/FooterContainer";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>

        <NavBar/>
  
        <Routes>
          <Route exact path="/" element={ <ItemListContainer/> } />
          <Route path="/category/:categoria" element={ <ItemListContainer/> } />
          <Route path="/item/:id" element={ <ItemDetailContainer/> }  />
          <Route path="/carrito" element={ <CartContainer/> } />
          <Route path="/confirm" element={ <FormContainer/> } />
        </Routes>

        <FooterContainer/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
