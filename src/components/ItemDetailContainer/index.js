import React, { useEffect, useState } from "react";
import {  useParams } from 'react-router-dom'
import { fetchData } from '../../services/FetchData';
import LoadingComponent from "../../utils/Loading";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [ item, setItem ] = useState({});
    const {id} = useParams();

    useEffect( () => {
        fetchData(id).then((response) => {
            setItem(response);
        });
    }, [id]);

    return (
        <span>

            { !item.id ?
                <LoadingComponent/> 
                :
                <ItemDetail item={item}/>
            }
        </span>
    )
};

export default ItemDetailContainer;
