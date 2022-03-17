import Link from 'next/link';
import React from 'react';
import { Category } from './Category';

import styles from './Categories.module.scss';

const categories = [
    {
        id: '1',
        name: 'Пицца',
        icon: '/img/categories/ic_pizza.svg'
    },
    {
        id: '2',
        name: 'Суши',
        icon: '/img/categories/ic_sushi.svg'
    },
    {
        id: '3',
        name: 'Напитки',
        icon: '/img/categories/ic_drink.svg'
    },
    {
        id: '4',
        name: 'Закуски',
        icon: '/img/categories/ic_snacks.svg'
    },
    {
        id: '5',
        name: 'Комбо',
        icon: '/img/categories/ic_combo.svg'
    },
    {
        id: '6',
        name: 'Десерты',
        icon: '/img/categories/ic_dessert.svg'
    },
    {
        id: '7',
        name: 'Соусы',
        icon: '/img/categories/ic_sauce.svg'
    },
];

interface CategoriesProps {

}

export const Categories: React.FC<CategoriesProps> = () => {
    return (
        <div className={styles.categories}>
            <div className="container">
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <Link href="">
                            <a><img src="/img/categories/ic_actions.svg" alt="" />Акции</a>
                        </Link>
                    </li>
                    {categories.map((obj) => (
                        <Category key={obj.id} {...obj} />
                    ))}
                </ul>
            </div>
        </div>
    )
};