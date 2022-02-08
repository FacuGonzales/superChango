// import { getProducts } from '../utils/Items';
// import { useState, useEffect } from 'react';
import { collection, getDocs, getDoc,doc, query, where} from "firebase/firestore";
import { db } from "../utils/DataBase"

const getById = async (id) => {
    const docRef = doc(db, 'productos', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const item = docSnap.data();
        const id = docSnap.id;

        const prod = {...item, id};
        return(prod)
    }
}

const getData = async (filtro, ofertas) => {
    let resultadoDB;

    if(filtro){
        resultadoDB = query(collection(db, "productos"), where("category", "==", filtro));
    }else if(ofertas){
        resultadoDB = query(collection(db, "productos"), where("oferta", "==", ofertas));
    }
    
    const querySnapshot =  await getDocs(resultadoDB);
     
    const prod = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
    })

    return(prod)
};


export const fetchData = (id, filtro, ofertas) => {
    try{
        let response = {};

        if(id) {
            response = getById(id)
        }else{
            response = getData(filtro, ofertas);
        }
        
        return response;
    }catch(err){
        console.error(err)
    }
} 
