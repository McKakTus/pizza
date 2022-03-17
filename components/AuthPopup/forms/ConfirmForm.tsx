import clsx from 'clsx';
import React from 'react';

import styles from '../AuthPopup.module.scss';

interface ConfirmFormProps {
  onOpenConfirm: () => void;
}

type InputValueState = {
  formattedValue: string;
  value: string;
};

export const ConfirmForm: React.FC<ConfirmFormProps> = () => {
    const [codes, setCodes] = React.useState(['', '', '', '']);
    const nextDisabled = codes.some((v) => !v);

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = Number(event.target.getAttribute('id'));
        const value = event.target.value;
        setCodes((prev) => {
            const newArr = [...prev];
            newArr[index] = value;
            return newArr;
        });
        if (event.target.nextSibling) {
            (event.target.nextSibling as HTMLInputElement).focus();
        }
    };
    
    const onSubmit = async (code: string) => {
        try {
            alert('Успешная активация!');
        } catch (error) {
            alert('Ошибка при активации!');
            setCodes(['', '', '', '']);
        }
    };

    return (
        <div className={styles.confirm}>
            <h2>Код из смс</h2>
            <p>На номер +7 (926) 223-10-11</p>
            <div className={styles.formGroup}>
                {codes.map((code, index) => (
                    <input
                        className={styles.input}
                        key={index}
                        type="tel"
                        placeholder="X"
                        maxLength={1}
                        id={String(index)}
                        onChange={handleChangeInput}
                        value={code}
                    />
                ))}
            </div>
            <button className={clsx(styles.btnConfirm, styles.btnSubmit)} disabled={nextDisabled}>Войти</button>
            <p>Отправить код ещё раз через: <span>59 секунд</span></p>
        </div>
    );
};