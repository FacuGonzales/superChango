import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../services/FetchData';
import LoadingComponent from '../../utils/Loading';

import ItemList from './ItemList';

const ItemListContainer = () => {
    
    const [ items, setItems ] = useState ([]);
    const { categoria } =  useParams();

    useEffect( () => {
        let isOferta = !categoria ? true : false;

        fetchData(null, categoria, isOferta).then((response) => {
            let productsList = [];

            productsList = response;
            setItems(productsList); 
        });
    }, [categoria]);

    return (
        <section className="itemListContainer">
            <h1 className="itemListContainer--titleList">¡Nuestras Ofertas!</h1>
            
            { !items.length ?
                <LoadingComponent/> 
                :
                <ItemList items={items}/>
            }
           
        </section>
    )
};

export default ItemListContainer;