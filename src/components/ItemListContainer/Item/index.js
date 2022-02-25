import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss'; 

import Button from '@mui/material/Button';
import OfertComponent from '../../../utils/Ofert';

const Item = ({item}) => {
    const {id, img, name, precio, oferta} = item;
    
    return (
        <div className={styles.container}>
            {
                oferta ? <div className={styles.oferta}><OfertComponent/></div> : <span></span>
            }
            <div className={styles.imgContainer}>
                <img src={img} className={styles.image} alt="img"/>
            </div>

            <div className={styles.infoContainer}>
                <h3 className={styles.title}>{name}</h3>
                <h5 className={styles.price}>$ {precio}</h5>
            </div>

            <div className={styles.acttions}>
                <Link to={`/item/${id}`}>
                    <Button size="small" className={styles.button}>Ver producto</Button>
                </Link>
            </div>
        </div>
    )
};

export default Item;
