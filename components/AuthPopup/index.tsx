import React from 'react';

import styles from './AuthPopup.module.scss';
import { EnterPhone } from './forms/EnterPhone';
import { EnterCode } from './forms/EnterCode';
import { GoogleAuth } from './forms/GoogleAuth';

interface AuthPopupProps {
    onClose: () => void;
    visible: boolean;
}

export const AuthPopup: React.FC<AuthPopupProps> = ({ onClose, visible }) => {
    const [formType, setFormType] = React.useState<'main' | 'gmail' | 'phone' | 'code'>('main');

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