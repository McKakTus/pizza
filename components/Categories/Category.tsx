import Link from 'next/link';
import React from 'react';

import styles from './Categories.module.scss';

interface CategoryProps {
    name: string;
    icon: string;
}

export const Category: React.FC<CategoryProps> = ({ name, icon }) => {
    return (
        <li className={styles.item}>
            <Link href="">
                <a><img src={icon} alt={name} />{name}</a>
            </Link>
        </li>
    )
};