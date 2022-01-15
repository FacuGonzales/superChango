import React from 'react';
import ItemCount from '../ItemCount';

const ItemListContainer = ({greeting}) => {

    return (
        <section className="itemListContainer">
            <h1 className="itemListContainer--titleList">{greeting}</h1>
            
            <ItemCount stock="10" initial="1"/>
        </section>
    )
};

export default ItemListContainer;