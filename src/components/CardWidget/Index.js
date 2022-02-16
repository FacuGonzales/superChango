import React, { useContext, useEffect, useState } from 'react'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { CartContext } from '../Context';
import styles from './styles.module.scss';

const CardWidget = () => {
    const { totalItems } = useContext(CartContext);
    const [itemsCount, setItemsCount] = useState(0);

    useEffect(() => {
        setItemsCount(totalItems);
    }, [totalItems])


    return(
        <Badge badgeContent={itemsCount} color="success">
            <ShoppingCartIcon className={styles.icono}/>
        </Badge>
    );
}

export default CardWidget;