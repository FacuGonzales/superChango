import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function ItemCount({ stock, initial, onClick }){
    const [ count, setCount ] = useState(parseInt(initial));

    const addAmount = () => {
        if(count < stock) setCount(count + 1);
    }

    const subsctracAmount = () => {
        if(count > 0) setCount(count - 1);
    }

    const buttons = [
        <Link to="/">
            <Button variant="outlined" startIcon={<KeyboardBackspaceIcon />}>
                Volver
            </Button>
        </Link>,

        <Button onClick={()=>onClick(count)} variant="contained" startIcon={<AddShoppingCartIcon />}>
            Agregar
        </Button>
    ];

    return(

        <div className="contadorContainer">
            <div className="contadorContainer--infoContainer">

                <div className="contadorContainer--infoContainer__stockContainer">
                    <p className="contadorContainer--infoContainer__stockContainer--valor">Stock disponible: {stock}</p>
                </div>

                <div className="contadorContainer--infoContainer__botonAgregarRestar">
                    <RemoveCircleIcon className="contadorContainer--infoContainer__botonAgregarRestar--botonIcon" onClick={subsctracAmount}></RemoveCircleIcon>

                    <p className="contadorContainer--infoContainer__botonAgregarRestar--valorInicial">{count}</p>

                    <AddCircleIcon className="contadorContainer--infoContainer__botonAgregarRestar--botonIcon" onClick={addAmount}></AddCircleIcon>
                </div>
            </div>


            <div className="contadorContainer--botonesContainer">
                <ButtonGroup>
                   {buttons}
                </ButtonGroup>
            </div>
        </div>
    )
}

export default ItemCount;