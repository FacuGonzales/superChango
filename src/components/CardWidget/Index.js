import React, { useContext, useEffect, useState } from 'react'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { CartContext } from '../Context';
import styles from './styles.module.scss';

const CardWidget = () => {
    const { items } = useContext(CartContext);
    const [itemsCount, setItemsCount] = useState(0);

    useEffect(() => {
        let cantidad = 0;
        items.forEach(i => cantidad += i.amount)
        setItemsCount(cantidad);
            // setItemsCount(totalItems);
        
    }, [items])

    return(
        <Badge badgeContent={itemsCount} color="success">
            <ShoppingCartIcon className={styles.icono}/>
        </Badge>
    );
}

export default CardWidget;