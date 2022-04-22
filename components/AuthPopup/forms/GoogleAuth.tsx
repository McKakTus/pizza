import React, { useEffect } from 'react';
import { UserData } from '../../../pages';
import { AuthContext } from '..';
import Cookies from 'js-cookie';
import { setUserData } from '../../../redux/slices/userSlice';

import styles from '../AuthPopup.module.scss';

export const GoogleAuth: React.FC = () => {
    const { onNextStep } = React.useContext(AuthContext)

    const onClickAuth = () => {
        window.open(
          'http://localhost:3001/auth/google',
          'Auth',
          'width=500,height=500,status=yes,toolbar=no,menubar=no,location=no',
        );
    };

    useEffect(() => {
        window.addEventListener('message', ({ data }) => {
            const user: string = data;
            if (typeof user === 'string' && user.includes('googleId')) {
                Cookies.remove('token');
                const json: UserData = JSON.parse(user);
                setUserData(json);
                onNextStep();
                Cookies.set('token', json.token);
            }
        });
    }, []);

    return(
        <div className={styles.auth}>
            <h2>Вход в аккаунт</h2>
            <p>Сможете быстро оформлять заказы, использовать бонусы</p>
            <button className={styles.btnAuth} onClick={onClickAuth}>
                <img src="/icons/ic_google.svg" alt="" />
                Войти в систему через Google
            </button>
            <span>Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</span>
        </div>
    );
};