import React from 'react';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
    return (
        <>
            <header className={styles.header}>
                <div className='container'>
                    <div className={styles.content}>
                        <a className={styles.logo} href="index.html"><img src="/img/logo.svg" alt="" /></a>
                    <button className={styles.shopping_bag}>
                        <img src="/icons/ic_shopping_bag.svg" alt="" />
                        0 ₽
                    </button>
                    </div>
                </div>
            </header>
        </>
    )
}