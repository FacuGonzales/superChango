import React,{useContext} from 'react';
import styles from './styles.module.scss'; 

import { CartContext } from '../../Context/index';

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const TotalContainer = () => {

    const {totalPrice, totalItems} = useContext(CartContext);

    return(
        <TableContainer className={styles.containerPrice}>
            <Table className={styles.table}>
                <TableHead className={styles.tbHead}>
                    <TableRow className={styles.tbRowHead}>
                        <TableCell className={styles.tbCell} align="center"> TOTAL DE ITEMS: {totalItems()} </TableCell>
                        <TableCell className={styles.tbCell} align="center"> TOTAL A PAGAR: $ {totalPrice()} </TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    )
}

export default TotalContainer
