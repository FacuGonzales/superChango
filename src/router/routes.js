import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';

export const routes = [
    {
        path: "/",
        Component: ItemListContainer
    },
    {
        path: "category/:id",
        Component: ItemListContainer
    },
    {
        path: "item/:id",
        Component: ItemDetailContainer
    },
    {
        path: '/*',
        Component: ItemListContainer
    }
]