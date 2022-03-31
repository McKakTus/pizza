import React from 'react';
import Link from 'next/link';

import styles from './Banners.module.scss';

interface BannerProps {
    image: string;
}

export const Banner: React.FC<BannerProps> = ({ image }) => {
    return (
        <li className={styles.item}>
            <Link href="/">
                <a><img src={image} alt="" /></a>
            </Link>
        </li>
    )
};