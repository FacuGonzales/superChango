import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from '../../ItemCount';

const Item = ({item}) => {
    const {id, img, name, precio, description} = item;
    return (

        <Card sx={{ maxWidth: 345 }}>
            
            <CardMedia component="img" height="140" image={img}/>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{name} - $ {precio}</Typography>
        
                <Typography variant="body2" color="text.secondary">{description}</Typography>
            </CardContent>

            <CardActions>
                <Button size="small">Ver producto</Button>
            </CardActions>

            <ItemCount stock="10" initial="1"/>
        </Card>
    )
};

export default Item;
