import React, { useState } from 'react';

import styles from './AuthPopup.module.scss';
import { EnterPhone } from './forms/EnterPhone';
import { EnterCode } from './forms/EnterCode';
import { GoogleAuth } from './forms/GoogleAuth';
import { MainContext, UserData } from '../../pages';

interface AuthPopupProps {
    onClose: () => void;
    visible: boolean;
}

export const AuthPopup: React.FC<AuthPopupProps> = ({ onClose, visible }) => {
    const [formType, setFormType] = useState<'main' | 'gmail' | 'phone' | 'code'>('main');
    const { setUserData } = React.useContext(MainContext);

    const getUserData = (): UserData | null => {
        try {
            return JSON.parse(window.localStorage.getItem('userData'));
        } catch (error) {
            return null;
        }
    };    

    const onFormType = () => {
        setFormType('phone');
    }

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const json = getUserData();
            if (json) {
                setUserData(json);
                onFormType();
            }
        }
    }, []);

    return(
        <div className={`${styles.popup} ${visible ? styles.popupVisible : ''} ${formType === 'phone' ? styles.popupPhone : ''}`}>
            <div className={styles.content}>
                <button onClick={onClose} className={styles.close}><img src="/icons/ic_close.svg" alt="" /></button>
                {formType === 'main' && <GoogleAuth onOpenGoogleAuth={() => setFormType('gmail')} onOpenPhone={() => setFormType('phone')} />}
                {formType === 'phone' && <EnterPhone onOpenPhone={() => setFormType('phone')} onOpenCode={() => setFormType('code')} />}
                {formType === 'code' && <EnterCode onOpenCode={() => setFormType('code')} />}
            </div>
        </div>
    );
};