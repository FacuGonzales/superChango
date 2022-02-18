import React,{useContext, useEffect, useState} from 'react';
import styles from './styles.module.scss'; 

import { CartContext } from '../../Context/index';

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const TotalContainer = () => {

    const { items } = useContext(CartContext);

    const [itemsCount, setItemsCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let cantidad = 0;
        items.forEach(i => cantidad += i.amount)
        setItemsCount(cantidad);

        let suma = 0;
        items.forEach(i => suma += parseInt(i.precio) * i.amount)
        setTotalPrice(suma)
        
    }, [items])


    // const count = ( () => {
        
    // })

    // const price = ( () => {
        
    // })

    return(
        <TableContainer className={styles.containerPrice}>
            <Table className={styles.table}>
                <TableHead className={styles.tbHead}>
                    <TableRow className={styles.tbRowHead}>
                        <TableCell className={styles.tbCell} align="center"> TOTAL DE ITEMS: {itemsCount} </TableCell>
                        <TableCell className={styles.tbCell} align="center"> TOTAL A PAGAR: $ {totalPrice} </TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    )
}

export default TotalContainer
