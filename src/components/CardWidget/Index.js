import React, { useContext, useEffect, useState } from 'react'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { CartContext } from '../Context';

const CardWidget = () => {
    const { items } = useContext(CartContext);
    const [itemsCount, setItemsCount] = useState(0);

    useEffect(() => {
        setItemsCount(items.length);
    }, [items])


    return(
        <Badge badgeContent={itemsCount} className='contador' color="success">
            <ShoppingCartIcon className='contador__icono'/>
        </Badge>
    );
}

export default CardWidget;