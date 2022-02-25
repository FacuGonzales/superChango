import React from 'react';
import styles from './styles.module.scss';

const FooterContainer = () => {
    
    let year = new Date();

    return (
        <div className={styles.container}>
            <p className={styles.text}>SUPER CHANGO | {year.getFullYear()}</p>
        </div>
    )
};

export default FooterContainer;