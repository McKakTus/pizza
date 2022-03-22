import React from 'react';

import styles from './CartPopup.module.scss';

export const CartPopup: React.FC = () => {
    
    return (
        <div className={styles.popup}>
            <div className={styles.content}>
                <main className={styles.popup__main}>
                    <div className={styles.main__header}>
                        <h2>Ваш заказ</h2>
                        <button className={styles.close}><img src="/icons/ic_close_pop.svg" alt="" /></button>
                    </div>
                    <div className={styles.cart}>
                        <div className={styles.cart__product}>
                            <div className={styles.cart__product_img}>
                                <img className='img-fluid' src="/img/pizza/pizza_1.jpeg" alt="" />
                            </div>
                            <div className={styles.cart__product_info}>
                                <h4>Чикен Сладкий Чили</h4>
                                <p>Традиционное тесто, 23 см</p>
                                <div className={styles.cart__product_count}>
                                    <div className={styles.cart__count}>
                                        <button className={styles.cart__count_btn} data-type='count'>
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 4C8 3.58579 7.66421 3.25 7.25 3.25H0.75C0.335786 3.25 0 3.58579 0 4C0 4.41421 0.335786 4.75 0.75 4.75H7.25C7.66421 4.75 8 4.41421 8 4Z" fill="#FF7010"/>
                                            </svg>
                                        </button>
                                        <span>1</span>
                                        <button className={styles.cart__count_btn} data-type='count'>
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_4980_9056)">
                                                <path d="M8 4C8 3.58579 7.66421 3.25 7.25 3.25H0.75C0.335786 3.25 0 3.58579 0 4C0 4.41421 0.335786 4.75 0.75 4.75H7.25C7.66421 4.75 8 4.41421 8 4Z" fill="#FF7010"/>
                                                <path d="M4 8C4.41421 8 4.75 7.66421 4.75 7.25L4.75 0.75C4.75 0.335786 4.41421 -1.46777e-08 4 -3.27835e-08C3.58579 -5.08894e-08 3.25 0.335786 3.25 0.75L3.25 7.25C3.25 7.66421 3.58579 8 4 8Z" fill="#FF7010"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_4980_9056">
                                                <rect width="8" height="8" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className={styles.product__price}>499 ₽</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cart__product}>
                            <div className={styles.cart__product_img}>
                                <img className='img-fluid' src="/img/pizza/pizza_1.jpeg" alt="" />
                            </div>
                            <div className={styles.cart__product_info}>
                                <h4>Чикен Сладкий Чили</h4>
                                <p>Традиционное тесто, 23 см</p>
                                <div className={styles.cart__product_count}>
                                    <div className={styles.cart__count}>
                                        <button className={styles.cart__count_btn} data-type='count'>
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 4C8 3.58579 7.66421 3.25 7.25 3.25H0.75C0.335786 3.25 0 3.58579 0 4C0 4.41421 0.335786 4.75 0.75 4.75H7.25C7.66421 4.75 8 4.41421 8 4Z" fill="#FF7010"/>
                                            </svg>
                                        </button>
                                        <span>1</span>
                                        <button className={styles.cart__count_btn} data-type='count'>
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_4980_9056)">
                                                <path d="M8 4C8 3.58579 7.66421 3.25 7.25 3.25H0.75C0.335786 3.25 0 3.58579 0 4C0 4.41421 0.335786 4.75 0.75 4.75H7.25C7.66421 4.75 8 4.41421 8 4Z" fill="#FF7010"/>
                                                <path d="M4 8C4.41421 8 4.75 7.66421 4.75 7.25L4.75 0.75C4.75 0.335786 4.41421 -1.46777e-08 4 -3.27835e-08C3.58579 -5.08894e-08 3.25 0.335786 3.25 0.75L3.25 7.25C3.25 7.66421 3.58579 8 4 8Z" fill="#FF7010"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_4980_9056">
                                                <rect width="8" height="8" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className={styles.product__price}>499 ₽</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cart__product}>
                            <div className={styles.cart__product_img}>
                                <img className='img-fluid' src="/img/pizza/pizza_1.jpeg" alt="" />
                            </div>
                            <div className={styles.cart__product_info}>
                                <h4>Чикен Сладкий Чили</h4>
                                <p>Традиционное тесто, 23 см</p>
                                <div className={styles.cart__product_count}>
                                    <div className={styles.cart__count}>
                                        <button className={styles.cart__count_btn} data-type='count'>
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 4C8 3.58579 7.66421 3.25 7.25 3.25H0.75C0.335786 3.25 0 3.58579 0 4C0 4.41421 0.335786 4.75 0.75 4.75H7.25C7.66421 4.75 8 4.41421 8 4Z" fill="#FF7010"/>
                                            </svg>
                                        </button>
                                        <span>1</span>
                                        <button className={styles.cart__count_btn} data-type='count'>
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_4980_9056)">
                                                <path d="M8 4C8 3.58579 7.66421 3.25 7.25 3.25H0.75C0.335786 3.25 0 3.58579 0 4C0 4.41421 0.335786 4.75 0.75 4.75H7.25C7.66421 4.75 8 4.41421 8 4Z" fill="#FF7010"/>
                                                <path d="M4 8C4.41421 8 4.75 7.66421 4.75 7.25L4.75 0.75C4.75 0.335786 4.41421 -1.46777e-08 4 -3.27835e-08C3.58579 -5.08894e-08 3.25 0.335786 3.25 0.75L3.25 7.25C3.25 7.66421 3.58579 8 4 8Z" fill="#FF7010"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_4980_9056">
                                                <rect width="8" height="8" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className={styles.product__price}>499 ₽</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className={styles.popup__footer}>
                    <div className={styles.total__price}>Итого: 2 379 ₽</div>
                    <button className={styles.btn__order}>Оформить заказ</button>
                </footer>
            </div>
        </div>
    );
};