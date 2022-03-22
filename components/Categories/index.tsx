import React from 'react';
import NextLink from 'next/link';
import { Link } from 'react-scroll';
// import { Category } from './Category';

import styles from './Categories.module.scss';

// const categories = [
//     {
//         id: '1',
//         name: 'Пицца',
//         icon: '/img/categories/ic_pizza.svg'
//     },
//     {
//         id: '2',
//         name: 'Суши',
//         icon: '/img/categories/ic_sushi.svg'
//     },
//     {
//         id: '3',
//         name: 'Напитки',
//         icon: '/img/categories/ic_drink.svg'
//     },
//     {
//         id: '4',
//         name: 'Закуски',
//         icon: '/img/categories/ic_snacks.svg'
//     },
//     {
//         id: '5',
//         name: 'Комбо',
//         icon: '/img/categories/ic_combo.svg'
//     },
//     {
//         id: '6',
//         name: 'Десерты',
//         icon: '/img/categories/ic_dessert.svg'
//     },
//     {
//         id: '7',
//         name: 'Соусы',
//         icon: '/img/categories/ic_sauce.svg'
//     },
// ];

interface CategoriesProps {

}

export const Categories: React.FC<CategoriesProps> = () => {
    return (
        <div className={styles.categories}>
            <div className="container">
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <NextLink href="">
                            <a><img src="/img/categories/ic_actions.svg" alt="" />Акции</a>
                        </NextLink>
                    </li>
                    <li className={styles.item}>
                        <Link to="pizzas" spy={true} smooth={true} duration={500}>
                            <img src="/img/categories/ic_pizza.svg" alt="" />
                            Пицца
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="sushi" spy={true} smooth={true} duration={500}>
                            <a><img src="/img/categories/ic_sushi.svg" alt="" />Суши</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="drinks" spy={true} smooth={true} duration={500}>
                            <a><img src="/img/categories/ic_drink.svg" alt="" />Напитки</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="snacks" spy={true} smooth={true} duration={500}>
                            <a><img src="/img/categories/ic_snacks.svg" alt="" />Закуски</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="combo" spy={true} smooth={true} duration={500}>
                            <a><img src="/img/categories/ic_combo.svg" alt="" />Комбо</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="desert" spy={true} smooth={true} duration={500}>
                            <a><img src="/img/categories/ic_dessert.svg" alt="" />Десерты</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <NextLink href="/">
                            <a><img src="/img/categories/ic_sauce.svg" alt="" />Другие</a>
                        </NextLink>
                    </li>
                    {/* {categories.map((obj) => ( */}
                        {/* <Category key={obj.id} {...obj} /> */}
                    {/* ))} */}
                </ul>
            </div>
        </div>
    )
};