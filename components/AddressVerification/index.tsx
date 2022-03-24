import React from "react";

import styles from './AddressVerification.module.scss';

export const AddressVerification: React.FC = () => {
    return (
        <div className={styles.verification}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.title}>Проверить адрес доставки</div>
                    <div className={styles.form}>
                        <div className={styles.input}>
                            <input type="text" placeholder="Адрес" />
                            <img src="/icons/ic_location.svg" alt="" />
                        </div>
                        <button className={styles.button} data-type="orange">Проверить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};