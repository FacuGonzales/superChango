import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../services/FetchData';

import ItemList from './ItemList';

const ItemListContainer = () => {
    
    const [ items, setItems ] = useState ([]);
    const { categoria } =  useParams();

    useEffect( () => {

        fetchData().then((response) => {
            let productsList = [];
            if(categoria){
                productsList = response.filter( item => item.category === categoria);
            }else{
                productsList = response;
            }
            setItems(productsList); 
        });
    }, [categoria]);

    return (
        <section className="itemListContainer">
            <h1 className="itemListContainer--titleList">¡Nuestras Ofertas!</h1>
            
            <ItemList items={items}/>
        </section>
    )
};

export default ItemListContainer;