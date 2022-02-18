import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'; 

import CartItem from './CartItem';
import { CartContext } from '../Context';

import { Button, ButtonGroup } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const CartContainer = () => {
    const { items, clearCart} = useContext(CartContext);

    const buttons = [
        <Link to="/" key='buttonContinuar'>
            <Button className={styles.buttonContinuar} variant="outlined" startIcon={<KeyboardBackspaceIcon />}>
                Continuar Comprando
            </Button>
        </Link>,

        <Button className={styles.buttonVaciar} key='buttonVaciar' variant="outlined" aria-label="upload picture" component="span" onClick={ () => clearCart() } startIcon={<DeleteIcon />}>
            Vacíar Carrito
        </Button>,

        <Link to="/confirm" key='buttonConfirmar'>
            <Button className={styles.buttonConfirmar} variant="outlined" startIcon={<CreditScoreIcon />}>
                Confirmar Compra
            </Button>
        </Link>
    ];

    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Tú Carrito</h2>

            {
                !items.length ? 
                    <div className={styles.sinProdContainer}>
                        <h5 className={styles.message}>No hay productos en el carrito</h5>

                        {buttons[0]}
                    </div>
                :
                <div className={styles.listContainer}>
                    <h5 className={styles.listTitle}>Listado de Productos</h5>

                    <CartItem/>
                        
                    <ButtonGroup size="large" className={styles.buttonGroup}>
                        {buttons}
                    </ButtonGroup>
                </div>
            }
        </div>
    )
}

export default CartContainer;