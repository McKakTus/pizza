import React from 'react';

import styles from './Navbar.module.scss';

export const Navbar: React.FC = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <div className='container'>
                    <div className={styles.content}>
                        <ul className={styles.items}>
                            <li className={styles.item}>
                                <button className={styles.location}>
                                    <img src="/icons/ic_location.svg" alt="" />
                                    <span>Москва</span>
                                    <img src="/icons/ic_arrow_bottom.svg" alt="" />
                                </button>
                            </li>
                            <li className={styles.item}>
                                <a className={styles.link} href="#">Проверить адрес</a>
                            </li>
                            <li className={styles.item}>Среднее время доставки*: <span>00:24:19</span></li>
                        </ul>
                        <ul className={styles.items}>
                            <li className={styles.item}>Время работы: с 11:00 до 23:00</li>
                            <li className={styles.item}>
                                <button className={styles.account}><img src="/icons/ic_account.svg" alt="" />Войти в аккаунт</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}