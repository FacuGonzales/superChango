import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import { fetchData } from '../../services/FetchData';
import LoadingComponent from "../../utils/Loading";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [ item, setItem ] = useState({});
    const {id} = useParams();

    useEffect( () => {

        fetchData().then((response) => {
            const itemById = response.find( element => element.id === parseInt(id));
            setItem(itemById);
        });
    }, [id]);

    return (
        <Link to={ `/item/${id}` }>
            { !item ?
                <LoadingComponent/> 
                :
                <ItemDetail item={item}/>
            }
        </Link>
    )
};

export default ItemDetailContainer;
