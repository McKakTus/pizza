import React from 'react';

import styles from './FilterPopup.module.scss';

interface FilterPopupProps {
    onClose: () => void;
    visible: boolean;
}

export const FilterPopup: React.FC<FilterPopupProps> = ({ onClose, visible }) => {
    return (
        <div className={`${styles.popup} ${visible ? styles.popupVisible : ''}`}>
            <div className={styles.content}>
                <main className={styles.popup__main}>
                    <div className={styles.main__header}>
                        <h2>Фильтры</h2>
                        <button className={styles.close} onClick={onClose}><img src="/icons/ic_close_pop.svg" alt="" /></button>
                    </div>
                    <div className={styles.filters}>
                        <div className={styles.filter}>
                            <h4>Общее</h4>
                            <div className={styles.filter__options}>
                                <div className={styles.filter__option}>
                                    <input id='hit' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="hit" className={styles.label}>Хит</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='new' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="new" className={styles.label}>Новинка</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='meat' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="meat" className={styles.label}>С мясом</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='vegetarian' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="vegetarian" className={styles.label}>Вегетарианская</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='chicken' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="chicken" className={styles.label}>С курицей</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='nobow' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="nobow" className={styles.label}>Без лука</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='mushrooms' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="mushrooms" className={styles.label}>С грибами</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='seafood' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="seafood" className={styles.label}>С морепродуктами</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='bbq' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="bbq" className={styles.label}>Барбекю</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.filter}>
                            <h4>Сыр</h4>
                            <div className={styles.filter__options}>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Реджанито</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Моцарелла</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Чеддер</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>С голубой плесенью</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Смесь итальянских сыров</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Мягкий молодой сыр</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.filter}>
                            <h4>Мясо</h4>
                            <div className={styles.filter__options}>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Пепперони</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Свинина</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Ветчина</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Бекон</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Говядина</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Чоризо</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Колбаски</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Куриная грудка</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.filter}>
                            <h4>Компонент</h4>
                            <div className={styles.filter__options}>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Креветка</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Ананасы</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Шампиньоны</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Лук</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Перец халапеньо</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Орегано</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Зеленый перец</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Томаты</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Чеснок</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Красный перец</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Оливки</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Маслины</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Клубника</label>
                                </div>
                                <div className={styles.filter__option}>
                                    <input id='' className={styles.checkbox} type="checkbox" />
                                    <label htmlFor="" className={styles.label}>Смесь итальянских трав</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className={styles.popup__footer}>
                    <button className={styles.btn} data-type='primary'>Сбросить</button>
                    <button className={styles.btn} data-type='orange'>Оформить заказ</button>
                </footer>
            </div>
        </div>
    );
};