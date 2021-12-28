import React from 'react';

const ItemListContainer = ({greeting}) => {

    return (
        <section className="itemListContainer">
            <h1 className="itemListContainer--titleList">{greeting}</h1>
            
        </section>
    )
};

export default ItemListContainer;