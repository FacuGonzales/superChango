import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from './styles.module.scss';

function ItemCount({ stock, initial, onClick }){
    const [ count, setCount ] = useState(parseInt(initial));

    const addAmount = () => {
        if(count < stock) setCount(count + 1);
    }

    const subsctracAmount = () => {
        if(count > 0) setCount(count - 1);
    }

    const buttons = [
        <Link to="/" key='backBtn'>
            <Button className={styles.backBtn} variant="outlined" startIcon={<KeyboardBackspaceIcon />}   >
                Volver
            </Button>
        </Link>,

        <Button className={styles.confirmBtn} onClick={()=>onClick(count)} variant="contained" startIcon={<AddShoppingCartIcon />}  key='confirmBtn'>
            Agregar
        </Button>
    ];

    return(

        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <p className={styles.title}>Stock disponible: {stock}</p>

                <div className={styles.botones}>
                    <RemoveCircleIcon className={styles.btnIcon} onClick={subsctracAmount}></RemoveCircleIcon>

                    <p className={styles.contador}>{count}</p>

                    <AddCircleIcon className={styles.btnIcon} onClick={addAmount}></AddCircleIcon>
                </div>
            </div>

            <div className={styles.botones}>
                <ButtonGroup>
                   {buttons}
                </ButtonGroup>
            </div>
        </div>
    )
}

export default ItemCount;