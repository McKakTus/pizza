import React from 'react';

import styles from './Navbar.module.scss';
import { AuthPopup } from '../AuthPopup';
import Link from 'next/link';

export const Navbar: React.FC = () => {
    const [authVisible, setAuthVisible] = React.useState(false);

    const openAuthPopup = () => {
        setAuthVisible(true);
    };

    const closeAuthPopup = () => {
        setAuthVisible(false);
    };
    
    return (
        <nav className={styles.navbar}>
            <div className='container'>
                <div className={styles.content}>
                    <ul className={styles.items}>
                        <li className={styles.item}>
                            <button className={styles.location}>
                                <img src="icons/ic_location.svg" alt="" />
                                <span>Москва</span>
                                <img src="icons/ic_arrow_bottom.svg" alt="" />
                            </button>
                        </li>
                        <li className={styles.item}>
                            <Link href="">
                                <a className={styles.link}>Проверить адрес</a>
                            </Link>
                        </li>
                        <li className={styles.item}>Среднее время доставки*: <span>00:24:19</span></li>
                    </ul>
                    <ul className={styles.items}>
                        <li className={styles.item}>Время работы: с 11:00 до 23:00</li>
                        <li className={styles.item}>
                            <button className={styles.account} onClick={openAuthPopup}>
                                <img src="icons/ic_account.svg" alt="" />
                                <div className={styles.signin}>Войти в аккаунт</div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {authVisible && (
                <AuthPopup onClose={closeAuthPopup} visible={authVisible} />
            )}
        </nav>
    )
}