import { getProducts } from '../utils/Items';

export const fetchData = () => {
    try{
        const response = getProducts;
        return response;
    }catch(error){
        console.error(error)
    }
} 
