import React from 'react';

import styles from './AuthPopup.module.scss';
import { AuthForm } from './forms/AuthForm';
import { ConfirmForm } from './forms/ConfirmForm';

interface AuthPopupProps {
    onClose: () => void;
    visible: boolean;
}

export const AuthPopup: React.FC<AuthPopupProps> = ({ onClose, visible }) => {
    const [formType, setFormType] = React.useState<'main' | 'auth' | 'confirm'>('main');
    
    return(
        <div className={`${styles.popup} ${visible ? styles.popupVisible : ''} ${formType === 'main' ? styles.popupAuth : styles.popupConfirm}`}>
            <div className={styles.content}>
                <button onClick={onClose} className={styles.close}><img src="/icons/ic_close.svg" alt="" /></button>
                {formType === 'main' && <AuthForm onOpenLogin={() => setFormType('auth')} onOpenConfirm={() => setFormType('confirm')} />}
                {formType === 'confirm' && <ConfirmForm onOpenConfirm={() => setFormType('confirm')} />}
            </div>
        </div>
    );
};