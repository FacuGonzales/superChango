import React from 'react';
import ItemCount from '../ItemCount';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {

    return (
        <section className="itemListContainer">
            <h1 className="itemListContainer--titleList">{greeting}</h1>
            
            <ItemList/>
        </section>
    )
};

export default ItemListContainer;