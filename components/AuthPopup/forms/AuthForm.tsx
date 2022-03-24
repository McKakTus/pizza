import React from 'react';
import NumberFormat from 'react-number-format';

import styles from '../AuthPopup.module.scss';

interface AuthFormProps {
  onOpenLogin: () => void;
  onOpenConfirm: () => void;
}

type InputValueState = {
  formattedValue: string;
  value: string;
};

export const AuthForm: React.FC<AuthFormProps> = ({ onOpenConfirm }) => {
  const [values, setValues] = React.useState<InputValueState>({} as InputValueState);
  const nextDisabled = !values.formattedValue || values.formattedValue.includes('_');

  const onSubmit = async () => {
    try {
      onOpenConfirm();
    } catch (error) {
      console.warn('Ошибка при отправке СМС', error);
    }
  };

  return (
    <div className={styles.auth}>
      <h2>Вход в аккаунт</h2>
      <p>Сможете быстро оформлять заказы, использовать бонусы</p>
      <label>Номер телефона</label>
      <NumberFormat
        className="field"
        format="+### (###) ##-###"
        mask="_"
        placeholder="+373 (605) 57-165"
        value={values.value}
        onValueChange={({ formattedValue, value }) => setValues({ formattedValue, value })}
      />
      <button className={styles.btnSubmit} disabled={nextDisabled} onClick={onSubmit} data-type="orange">Войти</button>
      <span>Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</span>
    </div>
  );
};