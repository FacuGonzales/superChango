import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss'; 

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import OfertComponent from '../../../utils/Ofert';

const Item = ({item}) => {
    const {id, img, name, precio, description, oferta} = item;
    
    return (
        <div className={styles.container}>
            {
                oferta ? <div className={styles.oferta}><OfertComponent/></div> : <span></span>
            }
            <div className={styles.imgContainer}>
                <img src={img} className={styles.image}/>
            </div>

            <div className={styles.infoContainer}>
                <h3 className={styles.title}>{name}</h3>
                <h5 className={styles.price}>$ {precio}</h5>

                {/* <p className={styles.description}>{description}</p> */}
            </div>

            <div className={styles.acttions}>
                <Link to={`/item/${id}`}>
                    <Button size="small" className={styles.button}>Ver producto</Button>
                </Link>
            </div>


        </div>




        // <Card sx={{ maxWidth: 345 }}>
            
        //     <CardMedia component="img" height="140" image={img}/>

        //     <CardContent>
        //         <Typography gutterBottom variant="h5" component="div">{name} - $ {precio}</Typography>
        
        //         <Typography variant="body2" color="text.secondary">{description}</Typography>
        //     </CardContent>

        //     <CardActions>
        //         <Link to={`/item/${id}`}>
        //             <Button size="small">Ver producto</Button>
        //         </Link>
        //     </CardActions>
        // </Card>
    )
};

export default Item;
