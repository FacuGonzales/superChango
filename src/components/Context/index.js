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

            let itemInCart = items.find(i => i.id === item.id);

            if(itemInCart.amount === amount) {
                return setAlertMessage({
                    text: 'El producto ya se encuentra en tu carrito',
                    severity: 'warning',
                    open: true
                });
            }else{
                let index = items.indexOf(itemInCart);

                items[index].amount += amount;

                setAlertMessage({
                    text: `Se agrego ${amount} productos correctamente a tu carrito`,
                    severity: 'success',
                    open: true
                });

                return setItems(items);
            }
            
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
        return !!items.find(item => item.id === itemId)
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
        items.forEach(i => cantidad += i.amount)
        setAmount(cantidad)
        return cantidad
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


    const orderSuccess = (id) => {
        setItems([]);

        setAlertMessage({
            text: `Se generó con éxito su orden. Número: ${id}`,
            severity: 'success',
            open: true
        });
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, clearCart, isInCart, totalItems, totalPrice, orderSuccess, items, cantidad:amount, total:total, alertMessage}}>
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