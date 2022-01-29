import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'

import { Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

import ItemCount from '../../ItemCount';
import { CartContext } from '../../Context';


const ItemDetail = ({item}) => {

    const [ confirm, setConfirm ] = useState(false);
    const { addItem }  = useContext(CartContext);
    
    function addToCart(cant) {
        setConfirm(true);

        if (cant > 0) addItem(item, cant);
    }


    return(
        <div className='detailContainer'>
            <img className='detailContainer--img'  src={item.img} alt='Producto'/>

            <div className='detailContainer--info'>
                <h2 className='detailContainer--info__title'>{item.name}</h2>    

                <h5 className='detailContainer--info__price'>$ {item.precio}</h5>

                <p className='detailContainer--info__description'>{item.description}</p>

                <div className='detailContainer--info__accions'>
                    <span>
                        {   confirm? 
                                <Link to="/carrito">
                                    <Button variant="contained" startIcon={<CheckIcon />}>
                                        Confirmar Compra
                                    </Button>
                                </Link> 
                            :
                            <ItemCount className='detailContainer--info__accions--stock' stock={item.stock} initial="1" onClick={ (cantidad) => addToCart(cantidad)}/>
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;