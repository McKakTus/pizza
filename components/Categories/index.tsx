import Link from 'next/link';
import React from 'react';
import styles from './Categories.module.scss';

export const Categories: React.FC = () => {
    return (
        <>
            <div className={styles.categories}>
                <div className="container">
                    <ul className={styles.items}>
                        <li className={styles.item}>
                            <Link href="">
                                <a><img src="/img/categories/ic_actions.svg" alt="" />Акции</a>
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="">
                                <a><img src="/img/categories/ic_pizza.svg" alt="" />Пицца</a>
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="">
                                <a><img src="/img/categories/ic_sushi.svg" alt="" />Суши</a>
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="">
                                <a><img src="/img/categories/ic_drink.svg" alt="" />Напитки</a>
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="">
                                <a><img src="/img/categories/ic_snacks.svg" alt="" />Закуски</a>
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="">
                                <a><img src="/img/categories/ic_combo.svg" alt="" />Комбо</a>
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="">
                                <a><img src="/img/categories/ic_dessert.svg" alt="" />Десерты</a>
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="">
                                <a><img src="/img/categories/ic_sauce.svg" alt="" />Соусы</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}