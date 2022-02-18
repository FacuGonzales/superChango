
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore, collection, addDoc   } from "firebase/firestore"

import { Button, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

import { CartContext } from '../Context';
import styles from './styles.module.scss';
import LoadingComponent from '../../utils/Loading';

const FormContainer = () => {
    const { items, totalPrice, orderSuccess } = useContext(CartContext);

    const [ loading, setLoading ] = useState(false);

    const [ inputName, setInputName ] = useState("");
    const [ inputPhone, setInputPhone ] = useState("");
    const [ inputEmail, setInputEmail ] = useState("");

    const [ orderId, setOrderId ] = useState("")
    
    const buyer = {
        name: inputName,
        phone: inputPhone,
        email: inputEmail
    }

    const success = async ( e ) => {
        e.preventDefault();
        setLoading(true);
        
        let order = {};

        order.buyer = buyer;
        order.total = totalPrice();

        order.products = items.map(i => {

            const id = i.id;
            const name = i.name;
            const price = i.precio;
            const cantidad = i.amount;
            const time = new Date().toLocaleString();

            return {id, name, price, cantidad, time};

        })

        const db = getFirestore();
        const orderCollection = collection( db, 'ordenes' );

        const response = await addDoc( orderCollection, order )


        if(response.id){
            setLoading(false);
            setOrderId(response.id)
            orderSuccess(response.id)
        }
    };

    return (
        
        <div className={styles.container}>
            {
                !orderId ? 
                    <span>
                        {
                            loading ?  
                                <LoadingComponent/> 
                            :
                                <span>
                                    <h1 className={styles.title}>Completá con los datos del comprador</h1>

                                    <form className={styles.formContainer}>
                                        <div className={styles.inputContainer}>
                                            <TextField className={styles.input} label="Nombre y Apellido" type="text" variant="outlined" placeholder="Ingrese su nombre y apellido" onChange={(e)=>setInputName(e.target.value)}/>
                                        </div>

                                        <div className={styles.inputContainer}>
                                            <TextField className={styles.input} label="Télefono" type="number" variant="outlined" placeholder="1234567890" onChange={ (e)=>setInputPhone(e.target.value) }/>
                                        </div>

                                        <div className={styles.inputContainer}>
                                            <TextField className={styles.input} label="Correo Electronico" type="email" variant="outlined" placeholder="Ingrese su correo" onChange={ (e)=>setInputEmail(e.target.value) }/>
                                        </div>

                                        <div className={styles.btnContainer}>
                                            <Link to="/">
                                                <Button className={styles.btnClose} variant="outlined" startIcon={<CloseIcon />}>
                                                    Cancelar
                                                </Button>
                                            </Link>
                                            <Button className={styles.btnSend} variant="contained" endIcon={<SendIcon />} onClick={ success }>
                                                Enviar pedido
                                            </Button>
                                        </div>
                                    </form>
                                </span>
                        }
                        
                    </span>
                :

                    <Link to="/">
                         <Button className={styles.btnClose} variant="outlined" startIcon={<CloseIcon />}>
                            Continuar comprando.
                         </Button>
                    </Link>

            }

        </div>


    )
}

export default FormContainer;
