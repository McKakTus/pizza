import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Axios } from '../../../core/axios';
import { MainContext } from '../../../pages';

import clsx from 'clsx';
import styles from '../AuthPopup.module.scss';

export const EnterCode: React.FC = () => {
    const router = useRouter();
    const { userData } = React.useContext(MainContext);
    const [codes, setCodes] = useState(['', '', '', '']);
    const nextDisabled = codes.some((v) => !v);
    const [counter, setCounter] = useState(10);
    const timerRef = useRef<any>();

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
        } else {
            onSubmit([...codes, value].join(''));
        }
    };
    
    const onSubmit = async (code: string) => {
        try {
            await Axios.post(`/auth/sms/activate`, {
                code,
                user: userData,
            });
            router.push('/');
        } catch (error) {
            alert('Ошибка при активации!');
            setCodes(['', '', '', '']);
        }
    };

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCounter((prevTimeLeft) => {
                if (prevTimeLeft > 0) {
                    return prevTimeLeft - 1;
                }
                return prevTimeLeft;
            });
        }, 1000);
        return () => {
            clearInterval(timerRef.current);
        };
    }, [setCounter]);

    return (
        <div className={styles.confirm}>
            <h2>Код из смс</h2>
            <p>На номер +{userData.phone}</p>
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
            <button className={clsx(styles.btnConfirm, styles.btnSubmit)} disabled={nextDisabled} data-type="orange">Войти</button>
            {counter ? (
                <p>Отправить код ещё раз через: <span>{counter} секунд</span></p>
            ) : (
                <p>Отправить код ещё раз: <button className={styles.btnAgain}>Отправить</button></p>
            )}
        </div>
    );
};