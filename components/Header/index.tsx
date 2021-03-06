import React, { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import NextLink from 'next/link';
import { Link } from 'react-scroll';
import { CartPopup } from '../CartPopup';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
    // show dropdown
    const [showDropdownMenu, setShowDropdownMenu] = useState(false);
    const dropdownRef = useRef<any>(null);
    // show cart popup
    const [cartVisible, setCartVisible] = useState(false);
    //show menu
    const [showMenu, setShowMenu] = useState(false);

    const openCartPopup = () => {
        setCartVisible(true);
    };

    const closeCartPopup = () => {
        setCartVisible(false);
    };

    const handleShowDropdownMenu = () => {
        setShowDropdownMenu(!showDropdownMenu);
    };

    const handleHideMenu = (event: any) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(dropdownRef.current)) {
            setShowDropdownMenu(false);
        }
    };

    const listenToScroll = () => {
        if (window.scrollY > 41) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleHideMenu);
    }, [handleHideMenu]);

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll); 
    }, [listenToScroll]);

    return (
        <header className={`${styles.header} ${showMenu && 'fixed-top'}`}>
            <div className='container'>
                <div className={styles.content}>
                    <NextLink href="/">
                        <a className={styles.logo}>
                            <img src="/img/logo.svg" alt="" />
                        </a>
                    </NextLink>
                    {showMenu &&
                        <ul className={styles.menu__items} ref={dropdownRef}>
                            <li className={styles.menu__item}><NextLink href="/"><a>??????????</a></NextLink></li>
                            <li className={clsx(styles.menu__item, 'item')}><Link to="pizzas" spy={true} smooth={true} duration={500}>??????????</Link></li>
                            <li className={clsx(styles.menu__item, 'item')}><Link to="sushi" spy={true} smooth={true} duration={500}>????????</Link></li>
                            <li className={clsx(styles.menu__item, 'item')}><Link to="drinks" spy={true} smooth={true} duration={500}>??????????????</Link></li>
                            <li className={clsx(styles.menu__item, 'item')}><Link to="snaks" spy={true} smooth={true} duration={500}>??????????????</Link></li>
                            <li className={clsx(styles.menu__item, 'item')}><Link to="combo" spy={true} smooth={true} duration={500}>??????????</Link></li>
                            <li className={clsx(styles.menu__item, 'item')}><Link to="desert" spy={true} smooth={true} duration={500}>??????????????</Link></li>
                            <li className={clsx(styles.menu__item, 'item')}>
                                <button className={styles.other} onClick={handleShowDropdownMenu}>
                                    <div className={styles.other_text}>???????????? <img src="icons/ic_arrow_bottom.svg" alt="" /></div> 
                                </button>
                                {showDropdownMenu && (
                                    <ul className={`${styles.dropdown__items} ${showDropdownMenu && 'dropdown--active'}`}>
                                        <li className={styles.dropdown__item}><NextLink href="/"><a>??????????</a></NextLink></li>
                                        <li className={styles.dropdown__item}><NextLink href="/"><a>???????????????????????????????? ????????????????????</a></NextLink></li>
                                        <li className={styles.dropdown__item}><NextLink href="/"><a>?????????????? ????????????????</a></NextLink></li>
                                        <li className={styles.dropdown__item}><NextLink href="/"><a>????????????????</a></NextLink></li>
                                        <li className={styles.dropdown__item}><NextLink href="/"><a>????????????????</a></NextLink></li>
                                        <li className={styles.dropdown__item}><NextLink href="/"><a>??????????????????</a></NextLink></li>
                                        <li className={styles.dropdown__item}><NextLink href="/"><a>?????????????????? ??????????</a></NextLink></li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    }
                    <button className={styles.shopping_bag} onClick={openCartPopup} data-type="orange">??????????????
                        <div className={styles.line}></div>
                        <span>0</span>
                    </button>
                </div>
            </div>
            {cartVisible && (
                <CartPopup onClose={closeCartPopup} visible={cartVisible} />
            )}
        </header>
    )
}