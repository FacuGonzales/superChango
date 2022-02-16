
import { collection, addDoc } from "firebase/firestore"
import { db } from "../utils/DataBase"

// resumen.preventDefault();
const guardarCompra = async(pedido)=>{
    const docSave = await addDoc(collection(db, 'ordenes'),{
        pedido,
        date: db.firestore?.Timestamp?.fromDate(new Date()),
    })
}   

export const saveData = (pedido) => {
    try{
        let response;
        response = guardarCompra(pedido)
        
        return response;
    }catch(err){
        console.error(err)
    }
} 