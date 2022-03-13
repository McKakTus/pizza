import Image from 'next/image';
import React from 'react';

import locationIcn from '../../public/icons/ic_location.svg';
import arrowIcn from '../../public/icons/ic_arrow_bottom.svg';
import accountIcn from '../../public/icons/ic_account.svg';

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
                                    <Image src={locationIcn} alt="" />
                                    <span>Москва</span>
                                    <Image src={arrowIcn} alt="" />
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
                                <button className={styles.account}>
                                    <Image src={accountIcn} alt="" />
                                    <div className={styles.signin}>Войти в аккаунт</div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}