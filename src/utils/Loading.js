import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import styles from './styles.module.scss';

function LoadingComponent() {
    return (
        <CircularProgress disableShrink className={styles.loading}/>  
    )
}

export default LoadingComponent;