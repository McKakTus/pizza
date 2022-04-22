import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../redux/slices/userSlice';
import NextLink from 'next/link';
import { Link } from 'react-scroll';
import { AuthPopup } from '../AuthPopup';

import styles from './Navbar.module.scss';
import clsx from 'clsx';

export const Navbar: React.FC = () => {
    const userData = useSelector(selectUserData);
    const [authVisible, setAuthVisible] = useState(false);

    const openAuthPopup = () => {
        setAuthVisible(true);
    };

    const closeAuthPopup = () => {
        setAuthVisible(false);
    };

    useEffect(() => {
        if(authVisible && userData) {
            setAuthVisible(false);
        }
    }, [authVisible, userData]);
    
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
                        <li className={clsx(styles.item, styles.link)}>
                            <Link to="verification" spy={true} smooth={true} duration={500}>
                                Проверить адрес
                            </Link>
                        </li>
                        <li className={styles.item}>Среднее время доставки*: <span>00:24:19</span></li>
                    </ul>
                    <ul className={styles.items}>
                        <li className={styles.item}>Время работы: с 11:00 до 23:00</li>
                        <li className={styles.item}>
                            {userData ? (
                                <NextLink href="/profile/1">
                                    <a className={styles.account}>
                                        <img src="icons/ic_account.svg" alt="" />
                                        <div className={styles.signin}>{userData?.name}</div>
                                    </a>
                                </NextLink>
                            ) : (
                                <button className={styles.account} onClick={openAuthPopup}>
                                    <img src="icons/ic_account.svg" alt="" />
                                    <div className={styles.signin}>Войти в аккаунт</div>
                                </button>
                            )}
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