import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function ItemCount({ stock, initial, onClick }){
    const [ count, setCount ] = useState(parseInt(initial));

    const addAmount = () => {
        if(count < stock) setCount(count + 1);
    }

    const subsctracAmount = () => {
        if(count > 0) setCount(count - 1);
    }

    return(

        <div className="contadorContainer">
            <div className="contadorContainer--stockContainer">
                <p className="contadorContainer--stockContainer__valor">Stock disponible: {stock}</p>
            </div>

            <div className="contadorContainer--botonAgregarRestar">
                <AddCircleIcon className="contadorContainer--botonAgregarRestar__botonIcon" onClick={addAmount}></AddCircleIcon>

                <p className="contadorContainer--botonAgregarRestar__valorInicial">{count}</p>

                <RemoveCircleIcon className="contadorContainer--botonAgregarRestar__botonIcon" onClick={subsctracAmount}></RemoveCircleIcon>
            </div>
        </div>
    )
}

export default ItemCount;