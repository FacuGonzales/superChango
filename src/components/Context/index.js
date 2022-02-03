import { createContext, useState} from 'react'
import { Alert, Snackbar } from "@mui/material";

export const CartContext = createContext();

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
        
        if(isInCart(item.id, amount)){
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

    const isInCart = (itemId, amount) => {
        let itemInCart = items.find(item => item.id === itemId);

        if(itemInCart && itemInCart.amount === amount) return true;
       
        return false;
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
        setAmount(items.length);
        return items.length
    }

    const totalPrice = () => {
        let suma = 0;
        
        items.forEach(i => suma += parseInt(i.precio) * i.amount)
        setTotal(suma)
        return suma;
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