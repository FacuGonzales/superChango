import React, {useContext} from 'react';
import { Link } from 'react-router-dom'

import { CartContext } from '../Context';

import { Button, ButtonGroup } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CartItem from './CartItem';

const CartContainer = () => {
    const { items, totalItems, totalPrice, clearCart} = useContext(CartContext);
    // 
    const buttons = [
        <Link to="/">
            <Button variant="outlined" startIcon={<KeyboardBackspaceIcon />}>
                Continuar Comprando
            </Button>
        </Link>,

        <Button variant="outlined" aria-label="upload picture" component="span" onClick={ () => clearCart() } startIcon={<DeleteIcon />}>
            Vacíar Carrito
        </Button>,

        <Link to="/confirmarCompra">
            <Button variant="outlined" startIcon={<CreditScoreIcon />}>
                Confirmar Compra
            </Button>
        </Link>
    ];

    return(
        <div>
            <h2>Tú Carrito</h2>

            {
                !items.length ? 
                    <div>
                        <h5>No hay productos en el carrito</h5>

                        {buttons[0]}
                    </div>

                :

                <div>
                    <h5>Listado de Productos</h5>

                    <hr></hr>
                    <div>
                        <CartItem className="cartContainer--comprasContainer__itemContainer"/>
                       
                        <p>TOTAL: { totalPrice() }</p>

                        <p>TOTAL DE PRODUCTOS: { totalItems() }</p>
                    </div>

                    <div>
                        <ButtonGroup size="large" aria-label="large button group">
                            {buttons}
                        </ButtonGroup>
                    </div>
                </div>

            }
        </div>
    )
}

export default CartContainer;