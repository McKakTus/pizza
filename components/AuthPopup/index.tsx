import React, { useEffect, useState } from 'react';

import styles from './AuthPopup.module.scss';
import { EnterPhone } from './forms/EnterPhone';
import { EnterCode } from './forms/EnterCode';
import { GoogleAuth } from './forms/GoogleAuth';
import { MainContext, UserData } from '../../pages';
import { Axios } from '../../core/axios';

const stepsAuth = {
    0: GoogleAuth,
    1: EnterPhone,
    2: EnterCode
};

interface Auth {
    onClose: () => void;
    visible: boolean;
}

type AuthPopupProps = {
    onNextStep: () => void;
    step: number;
}

export const AuthContext = React.createContext<AuthPopupProps>({} as AuthPopupProps);

const getUserData = (): UserData | null => {
    try {
        return JSON.parse(window.localStorage.getItem('userData'));
    } catch (error) {
        return null;
    }
}; 

const getFormStep = (): number => {
    const json = getUserData();
    if(json) {
        if(json.phone) {
            return 2;
        } else {
            return 1;
        }
    }
    return 0;
};

export const AuthPopup: React.FC<Auth> = ({ onClose, visible }) => {
    const { setUserData } = React.useContext(MainContext);
    const [step, setStep] = useState<number>(0);
    const Step = stepsAuth[step];

    const onNextStep = () => {
        setStep((prev) => prev + 1);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const json = getUserData();
            if (json) {
                setUserData(json);
                setStep(getFormStep());
            }
        }
    }, []);

    return(
        <AuthContext.Provider value={{ step, onNextStep }}>
            <div className={`${styles.popup} ${visible ? styles.popupVisible : ''} ${step === 1 ? styles.popupPhone : ''}`}>
                <div className={styles.content}>
                    <button onClick={onClose} className={styles.close}><img src="/icons/ic_close.svg" alt="" /></button>
                    <Step />
                </div>
            </div>
        </AuthContext.Provider>
    );
};