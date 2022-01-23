import { Tooltip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ItemCount from '../../ItemCount';


const ItemDetail = ({item}) => {
    return(
        <div className='detailContainer'>
            <img className='detailContainer--img'  src={item.img} alt='Producto'/>

            <div className='detailContainer--info'>
                <h2 className='detailContainer--info__title'>{item.name}</h2>    

                <h5 className='detailContainer--info__price'>$ {item.precio}</h5>

                <p className='detailContainer--info__description'>{item.description}</p>

                <div className='detailContainer--info__accions'>
                    <Tooltip title="COMPRAR">
                        <ShoppingCartIcon className='contador__icono detailContainer--info__accions--button'/>
                    </Tooltip>
                    <ItemCount className='detailContainer--info__accions--stock' stock={item.stock} initial="1"/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;