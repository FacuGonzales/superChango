import React,{useContext} from 'react';
import { CartContext } from '../../Context/index';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = () => {

    const {items,removeItem} = useContext(CartContext);


    return (
        
        <div>
            {
                items.map(i=>{
                    return(
                        <div>
                            <h2>{i.name}</h2>
                            <h5>Cantidad: {i.amount}</h5>
                            <h5>Precio Unitario: {i.precio}</h5>
                            <h5>Precio Total: {i.precio*i.amount}</h5>

                            <Button variant="outlined" aria-label="upload picture" component="span" onClick={ () => removeItem(i.id) } startIcon={<DeleteIcon />}></Button>

                            <hr></hr>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartItem
