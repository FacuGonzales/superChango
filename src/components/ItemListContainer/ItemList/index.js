import Item from '../Item';

const ItemList = ({items}) => {
    
    return (
        <div className="itemListContainer--itemsList">
            {items.map((item)=> <Item item={item} key={item.id} />)}
        </div>
    )
};

export default ItemList;
