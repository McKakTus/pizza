import React from 'react';
import { Banner } from './Banner';

import styles from './Banners.module.scss';

const banners = [
    {
        id: '1',
        image: '/img/banners/banner_1.png'
    },
    {
        id: '2',
        image: '/img/banners/banner_2.png'
    },
    {
        id: '3',
        image: '/img/banners/banner_1.png'
    },
    {
        id: '4',
        image: '/img/banners/banner_2.png'
    },
]

export const Banners: React.FC = () => {
    return (
        <div className={styles.banners}>
            <div className="container">
                <ul className={styles.items}>
                    {banners.map((obj) => (
                        <Banner key={obj.id} {...obj} />
                    ))}
                </ul>
            </div>
        </div>
    );
};