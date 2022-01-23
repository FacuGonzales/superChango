import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {

    return (
        <section className="itemListContainer">
            <h1 className="itemListContainer--titleList">¡Nuestras Ofertas!</h1>
            
            <ItemList/>
        </section>
    )
};

export default ItemListContainer;