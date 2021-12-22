import React from 'react'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

const CardWidget = () => {

    return(
        <Badge className='contador' color="secondary">
            <ShoppingCartIcon className='contador__icono'/>
        </Badge>
    );
}

export default CardWidget;