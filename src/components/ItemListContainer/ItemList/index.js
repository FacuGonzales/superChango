import Item from '../Item';
import styles from './styles.module.scss'; 

const ItemList = ({items}) => {
    
    return (
        <div className={styles.listado}>
            {items.map((item)=> <Item item={item} key={item.id} />)}
        </div>
    )
};

export default ItemList;
