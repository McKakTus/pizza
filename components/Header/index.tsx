import Link from 'next/link';
import React from 'react';

import styles from './Header.module.scss';

interface HeaderProps {
    hideMenu?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ hideMenu }) => {
    return (
        <>
            <header className={styles.header}>
                <div className='container'>
                    <div className={styles.content}>
                        <Link href="/">
                            <a className={styles.logo}>
                                <img src="/img/logo.svg" alt="" />
                            </a>
                        </Link>
                        {!hideMenu &&
                            <ul className={styles.menu__items}>
                                <li className={styles.menu__item}><Link href=""><a>Акции</a></Link></li>
                                <li className={styles.menu__item}><Link href="#pizza"><a>Пицца</a></Link></li>
                                <li className={styles.menu__item}><Link href="#sushi"><a>Суши</a></Link></li>
                                <li className={styles.menu__item}><Link href="#drinks"><a>Напитки</a></Link></li>
                                <li className={styles.menu__item}><Link href="#snaks"><a>Закуски</a></Link></li>
                                <li className={styles.menu__item}><Link href="#combo"><a>Комбо</a></Link></li>
                                <li className={styles.menu__item}><Link href="#desert"><a>Десерты</a></Link></li>
                                <li className={styles.menu__item}><Link href="#souces"><a>Соусы</a></Link></li>
                                <li className={styles.menu__item}>
                                    <button className={styles.other}>
                                        <div className={styles.other_text}>Другое</div> 
                                        <img src="/icons/ic_shopping_bag.svg" alt="" />
                                    </button>
                                    {/* <ul className={styles.dropdown__items}>
                                        <li className={styles.dropdown__item}><Link href=""><a>Акции</a></Link></li>
                                        <li className={styles.dropdown__item}><Link href=""><a>Пользовательское соглашение</a></Link></li>
                                        <li className={styles.dropdown__item}><Link href=""><a>Условия гарантии</a></Link></li>
                                        <li className={styles.dropdown__item}><Link href=""><a>Ресторан</a></Link></li>
                                        <li className={styles.dropdown__item}><Link href=""><a>Контакты</a></Link></li>
                                        <li className={styles.dropdown__item}><Link href=""><a>Поддержка</a></Link></li>
                                        <li className={styles.dropdown__item}><Link href=""><a>Отследить заказ</a></Link></li>
                                    </ul> */}
                                </li>
                            </ul>
                        }
                        <button className={styles.shopping_bag}>
                            <img src="/icons/ic_shopping_bag.svg" alt="" />
                            <div className={styles.price}>0 ₽</div>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}