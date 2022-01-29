import { useState} from 'react'
import { Alert, Snackbar } from "@mui/material";

import { CartContext } from '../components/Context';

export const CartProvider = ( {children} ) => {

    const [ alertMessage, setAlertMessage ] = useState({
        text: '',
        severity: 'success',
        open: false,
    });

    const positionSnackbars = {
        vertical: 'top',
        horizontal: 'center',
    }

    const [ items, setItems ] = useState([]);
    const [ amount, setAmount ] = useState(0);
    const [ total, setTotal ] = useState(0);

    const addItem = ( item, amount ) => {
        
        if(isInCart(item.id)){
            return setAlertMessage({
                text: 'El producto ya se encuentra en tu carrito',
                severity: 'warning',
                open: true
            });
        };

        setAlertMessage({
            text: `Se agrego ${amount} productos correctamente a tu carrito`,
            severity: 'success',
            open: true
        });

        setItems([...items, { amount: amount, ...item }]);
    }

    const removeItem = (itemId) => {
        setItems(items.filter(item => item.id !== itemId));

        setAlertMessage({
            text: `Se elimino el producto de tu carrito`,
            severity: 'success',
            open: true
        });
    }

    const isInCart = (itemId) => {
        return !!items.find(item => item.id === itemId);
    }

    const clearCart = () => {
        setItems([]);

        setAlertMessage({
            text: `Se vacío correctamente tu carrito`,
            severity: 'success',
            open: true
        });
    }

    const totalItems = () => {
        let cantidad = 0;
        items.forEach(i => cantidad += i.cantidad)
        setAmount(cantidad)
        return cantidad
    }

    const totalPrice = () => {
        let suma = 0;
        items.forEach(i => suma += parseInt(i.precio) * i.cantidad)
        setTotal(suma)
        return suma
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlertMessage({
            text: '',
            severity: 'success',
            open: false
        });
    };

    return (
        <CartContext.Provider value={{ addItem, removeItem, clearCart, isInCart, totalItems, totalPrice, items, cantidad:amount, total:total, }}>
            {children}

            <Snackbar open={alertMessage.open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={positionSnackbars}>
                <Alert onClose={handleClose} severity={alertMessage.severity} sx={{ width: '100%' }}>
                    {alertMessage.text}
                </Alert>
            </Snackbar>
        </CartContext.Provider>
    );
}

export default CartProvider;