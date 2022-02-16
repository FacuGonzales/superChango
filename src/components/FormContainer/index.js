import React, { useEffect, useState, useContext } from 'react';

import { collection, addDoc } from "firebase/firestore"
import { db } from '../../utils/DataBase';

import { CartContext } from '../Context';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

import styles from './styles.module.scss';

// import { saveData } from '../../services/SaveData';

const FormContainer = () => {
    const { items, totalPrice } = useContext(CartContext);

    const [ inputName, setInputName ] = useState("");
    const [ inputPhone, setInputPhone ] = useState("");
    const [ inputEmail, setInputEmail ] = useState("");

    const onChangeName = (name)=> setInputName(name.target.value);
    const onChangePhone = (phone)=> setInputPhone(phone.target.value);
    const onChangeEmail = (email)=> setInputEmail(email.target.value);


    // const resumen = () => {

    //     let pedido = {
    //         nombre: inputName,
    //         telefono:inputPhone,
    //         email:inputEmail,
    //         items:[...items],
    //         total:totalPrice(),
    //     }

    //     saveData(pedido)
    // }

    
    // saveData().then((response) => {
    //     console.log('GUARDADO CON EXITO', response);
    // })
      
    // const armarOrden = () => {
    //     let data = {
    //         nombre: inputName,
    //         telefono:inputPhone,
    //         email:inputEmail,
    //         items:[...items],
    //         total:totalPrice(),
    //         date: Firestore.Timestamp.fromDate(new Date()),
    //     }

    //     return data;
    // }

    // const success = ()=>{
    //     const orden = armarOrden();

    //     listadoOrdenes.add(orden).then(({id}) => {
    //         console.log(id)
    //     }).catch(err => {
    //         console.log('ERROR')
    //     })    
    // } 

    
    const success = (resumen)=>{
        resumen.preventDefault();
        const guardarCompra = async()=>{

            const docSave = await addDoc(collection(db, 'ordenes'),{
                nombre: inputName,
                telefono:inputPhone,
                email:inputEmail,
                items:[...items],
                total:totalPrice(),
                date: db.firestore?.Timestamp?.fromDate(new Date()),
            })
        }
        guardarCompra();     

    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Completá con los datos del comprador</h1>

            <form className={styles.formContainer}>
                <div className={styles.inputContainer}>
                    <TextField className={styles.input} label="Nombre y Apellido" type="text" variant="outlined" placeholder="Ingrese su nombre y apellido" onChange={ onChangeName }/>
                </div>

                <div className={styles.inputContainer}>
                    <TextField className={styles.input} label="Télefono" type="number" variant="outlined" placeholder="1234567890" onChange={ onChangePhone }/>
                </div>

                <div className={styles.inputContainer}>
                    <TextField className={styles.input} label="Correo Electronico" type="email" variant="outlined" placeholder="Ingrese su correo" onChange={ onChangeEmail }/>
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

        </div>
    )
}

export default FormContainer;