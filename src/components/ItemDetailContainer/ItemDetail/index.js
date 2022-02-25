import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'

import { Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

import styles from './styles.module.scss'; 
import ItemCount from '../../ItemCount';
import { CartContext } from '../../Context';

const ItemDetail = ({item}) => {
    const [ confirm, setConfirm ] = useState(false);
    const { addItem }  = useContext(CartContext);
    
    function addToCart(cant) {
        setConfirm(true);

        if (cant > 0) addItem(item, cant);
    }

    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img className={styles.img}  src={item.img} alt='Producto'/>
            </div>

            <div className={styles.infoContainer}>
                <h2 className={styles.title}>{item.name}</h2>    

                <h5 className={styles.price}>$ {item.precio}</h5>

                <p className={styles.description}>{item.description}</p>

                <div className={styles.accions}>
                    <span>
                        {   confirm? 
                                <Link to="/carrito">
                                    <Button className={styles.buttons} variant="contained" startIcon={<CheckIcon />}>
                                        Confirmar Compra
                                    </Button>
                                </Link> 
                            :
                            <ItemCount stock={item.stock} initial="1" onClick={ (cantidad) => addToCart(cantidad)}/>
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;