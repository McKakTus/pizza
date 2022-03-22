import Link from 'next/link';
import React from 'react';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__content}>
                    <div className={styles.footer__item}>
                        <Link href="/">
                            <a className={styles.footer__logo}><img src="/img/logo.svg" alt="" /></a>
                        </Link>
                        <div className={styles.footer__copyright}>© Copyright 2021 — Куда Пицца</div>
                    </div>
                    <div className={styles.footer__item}>
                        <h3>Куда пицца</h3>
                        <ul className={styles.footer__lists}>
                            <li>О компании</li>
                            <li>Пользовательское соглашение</li>
                            <li>Условия гарантии</li>
                        </ul>
                    </div>
                    <div className={styles.footer__item}>
                        <h3>Помощь</h3>
                        <ul className={styles.footer__lists}>
                            <li>Ресторан</li>
                            <li>Контакты</li>
                            <li>Поддержка</li>
                            <li>Отследить заказ</li>
                        </ul>
                    </div>
                    <div className={styles.footer__item}>
                        <h3>Контакты</h3>
                        <Link href='tel:+7 (926) 223-10-11'><a className={styles.footer__contact}><img src="/icons/ic_phone.svg" alt="" />  +7 (926) 223-10-11</a></Link>
                        <Link href='/'><a className={styles.footer__contact}><img src="/icons/ic_local.svg" alt="" />  Москва, ул. Юных Ленинцев, д.99</a></Link>
                        <div className={styles.footer__socials}>
                            <Link href='/'><a className={styles.footer__contact}><img src="/icons/ic_facebook.svg" alt="" />  Facebok</a></Link>
                            <Link href='/'><a className={styles.footer__contact}><img src="/icons/ic_instagram.svg" alt="" />  Instagram</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};