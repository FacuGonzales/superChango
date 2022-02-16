import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../services/FetchData';
import LoadingComponent from '../../utils/Loading';
import styles from './styles.module.scss'; 

import ItemList from './ItemList';

const ItemListContainer = () => {
    
    const [ items, setItems ] = useState ([]);
    const { categoria } =  useParams();
    const title = categoria ? `¡${categoria}!` : `¡Nuestras Ofertas!`;

    useEffect( () => {
        let isOferta = !categoria ? true : false;

        fetchData(null, categoria, isOferta).then((response) => {
            let productsList = [];

            productsList = response;
            setItems(productsList); 
        });
    }, [categoria]);

    return (
        <span>
            { !items.length ?
                <LoadingComponent/> 
                :
                <section className={styles.itemListContainer}>
                    <h1 className={styles.titleList}>{title}</h1>
                
                    <ItemList items={items}/>
                </section>
            }
        </span>
    )
};

export default ItemListContainer;