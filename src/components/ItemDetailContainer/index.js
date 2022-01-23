import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import ItemData from '../../utils/Items.json';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [ item, setItem ] = useState({});

    const {id} = useParams();

    const db = ItemData;


    useEffect( ()=>{
        const _prod = new Promise( (resolve) => {
            let _item = db.find(element => element.id === parseInt(id));

            setTimeout (()=>{
                resolve(_item);
            },2000);
        })

        _prod.then((response) => setItem(response));
    }, ); 
    
    return (
        <ItemDetail item={item}/>
    )
};

export default ItemDetailContainer;
