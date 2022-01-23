import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Item from '../Item';
import ItemData from '../../../utils/Items.json';

const ItemList = () => {
    const [items, setItems] = useState ([]);
    const {categoria} = useParams()

    useEffect( ()=>{
        let db = ItemData;
        // let listado = categoria ?  db.map(element => element.category === categoria) : db;
        let listado = [];
        
        if(categoria){
            db.map(element => {
                if(element.category === categoria) listado.push(element);
            });
        }else{
            listado = db;
        }
        
        const promList = new Promise ((resolve) =>{
            setTimeout (()=>{
                resolve(listado);
            },2000);
        });

        promList.then((response) => {
            setItems(response);
        });
    }, []); 
    
    return (
        <>
            { categoria ? 
                <div className="itemListContainer">                    
                    <div className="itemListContainer--itemsList">
                        {items.map((item)=> <Item item={item} key={item.id} />)}
                    </div> 
                </div>
                :
                <div className="itemListContainer--itemsList">
                    {items.map((item)=> <Item item={item} key={item.id} />)}
                </div>
            }
        </>

        
    )
};

export default ItemList;
