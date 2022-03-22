import NextLink from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';

import styles from './Header.module.scss';
interface HeaderProps {
    hideMenu?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ hideMenu }) => {
    const [scroll, setScroll] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const dropdownRef = useRef<any>(null);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleHideMenu = (event: any) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(dropdownRef.current)) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener('click', handleHideMenu);

        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 41);
        });
    }, []);

    return (
        <header className={`${styles.header} ${scroll && 'fixed-top'}`}>
            <div className='container'>
                <div className={styles.content}>
                    <NextLink href="/">
                        <a className={styles.logo}>
                            <img src="/img/logo.svg" alt="" />
                        </a>
                    </NextLink>
                    {!hideMenu &&
                        <ul className={styles.menu__items} ref={dropdownRef}>
                            <li className={styles.menu__item}><NextLink href=""><a>Акции</a></NextLink></li>
                            <li className={styles.menu__item}><Link to="pizzas" spy={true} smooth={true} duration={500}>Пицца</Link></li>
                            <li className={styles.menu__item}><Link to="sushi" spy={true} smooth={true} duration={500}>Суши</Link></li>
                            <li className={styles.menu__item}><Link to="drinks" spy={true} smooth={true} duration={500}>Напитки</Link></li>
                            <li className={styles.menu__item}><Link to="snaks" spy={true} smooth={true} duration={500}>Закуски</Link></li>
                            <li className={styles.menu__item}><Link to="combo" spy={true} smooth={true} duration={500}>Комбо</Link></li>
                            <li className={styles.menu__item}><Link to="desert" spy={true} smooth={true} duration={500}>Десерты</Link></li>
                            <li className={styles.menu__item}><NextLink href="/">Другие товары</NextLink></li>
                            <li className={styles.menu__item}>
                                <button className={styles.other} onClick={handleShowMenu}>
                                    <div className={styles.other_text}>Другое</div> 
                                    <img src="/icons/ic_shopping_bag.svg" alt="" />
                                </button>
                                {showMenu && (
                                    <ul className={`${styles.dropdown__items} ${showMenu && 'dropdown--active'}`}>
                                        <li className={styles.dropdown__item}><NextLink href="/"><a>Акции</a></NextLink></li>
                                        <li className={styles.dropdown__item}><NextLink href="/"><a>Пользовательское соглашение</a></NextLink></li>
                                        <li className={styles.dropdown__item}><NextLink href="/"><a>Условия гарантии</a></NextLink></li>
                                        <li className={styles.dropdown__item}><NextLink href="/"><a>Ресторан</a></NextLink></li>
                                        <li className={styles.dropdown__item}><NextLink href="/"><a>Контакты</a></NextLink></li>
                                        <li className={styles.dropdown__item}><NextLink href="/"><a>Поддержка</a></NextLink></li>
                                        <li className={styles.dropdown__item}><NextLink href="/"><a>Отследить заказ</a></NextLink></li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    }
                    <button className={styles.shopping_bag}>Корзина
                        <div className={styles.line}></div>
                        <div className='count'>0</div>
                    </button>
                </div>
            </div>
        </header>
    )
}