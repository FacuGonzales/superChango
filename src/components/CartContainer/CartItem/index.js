import React,{useContext} from 'react';
import styles from './styles.module.scss'; 

import { CartContext } from '../../Context/index';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TotalContainer from '../TableTotalContainer';

const CartItem = () => {

    const {items,removeItem} = useContext(CartContext);

    const _th = ['Producto', 'Cantidad', 'Precio Unitario', 'Precio Total', 'Acciones'];

    return(

        <>
            <TableContainer className={styles.container}>
                <Table className={styles.table}>
                    <TableHead className={styles.tbHead}>
                        <TableRow className={styles.tbRowHead}>
                            {
                                _th.map((colum) => <TableCell className={styles.tbCellHead} align="center" key={colum}>{colum}</TableCell>)
                            }
                        </TableRow>
                    </TableHead>

                    <TableBody className={styles.tbBody}>
                        {
                            items.map((row) => (
                                <TableRow key={row.name} className={styles.tbRowBody}>
                                
                                    <TableCell className={styles.tbCell} align="center" component="th" scope="row"> {row.name} </TableCell>
                                    <TableCell className={styles.tbCell} align="center">{row.amount}</TableCell>
                                    <TableCell className={styles.tbCell} align="center">$ {row.precio}</TableCell>
                                    <TableCell className={styles.tbCell} align="center">$ {row.precio*row.amount}</TableCell>
                                    <TableCell className={styles.tbCell} align="center">
                                        <Tooltip title="ELIMINAR PRODUCTO">
                                            <IconButton className={styles.button} color="primary" onClick={ () => removeItem(row.id) } component="span">
                                                <DeleteIcon/>
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>

            </TableContainer>

            <TotalContainer/>
        </>
    )
}

export default CartItem
