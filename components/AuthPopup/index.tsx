import React from 'react';

import styles from './AuthPopup.module.scss';
import { AuthForm } from './forms/AuthForm';

interface AuthPopupProps {
    onClose: () => void;
    visible: boolean;
}

export const AuthPopup: React.FC<AuthPopupProps> = ({ onClose, visible }) => {
    const [formType, setFormType] = React.useState<'main' | 'auth' | 'confirm'>('main');
    
    return(
        <div open={visible} onClose={onClose} className={styles.popup}>
            <div className={styles.content}>
                {formType === 'main' && <AuthForm onOpenLogin={() => setFormType('auth')} />}
            </div>
        </div>
    );
};