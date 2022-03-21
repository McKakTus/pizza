import React from 'react';

import styles from './Products.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

export const Products: React.FC = () => {
    return (
        <div className={styles.section__products}>
            <div className="container">
                <h2 className={styles.title}>Пицца</h2>
                <section id='pizzas' className={styles.products}>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/pizza/pizza_1.jpeg" alt="Ветчина и сыр" title='Ветчина и сыр' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Ветчина и сыр</div>
                                <div className={styles.description}>Куриные кусочки, сладкий перец, смесь сыров чеддер и пармезан, моцарелла, красный лук, соус сладкий чили, соус альфредо</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>от 399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/pizza/pizza_2.jpeg" alt="Карбонара" title='Карбонара' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Карбонара</div>
                                <div className={styles.description}>Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, соус альфредо, итальянские травы</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>от 399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/pizza/pizza_3.jpeg" alt="Овощи и грибы 🌱" title='Овощи и грибы 🌱'/>
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Овощи и грибы 🌱</div>
                                <div className={styles.description}>Шампиньоны, томаты, сладкий перец, красный лук, кубики брынзы, моцарелла, томатный соус, итальянские травы</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>от 399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/pizza/pizza_4.jpeg" alt="Пепперони фреш" title='Пепперони фреш' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Пепперони фреш</div>
                                <div className={styles.description}>Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>от 399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/pizza/pizza_5.jpeg" alt="Сырная 🌱👶" title='Сырная 🌱👶' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Сырная 🌱👶</div>
                                <div className={styles.description}>Моцарелла, сыры чеддер и пармезан, соус альфредо</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>от 399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/pizza/pizza_6.jpeg" alt="Маргарита 🌱" title='Маргарита 🌱 ' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Маргарита 🌱</div>
                                <div className={styles.description}>Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>от 399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/pizza/pizza_7.jpeg" alt="Ветчина и грибы" title='Ветчина и грибы' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Ветчина и грибы</div>
                                <div className={styles.description}>Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>от 399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/pizza/pizza_8.jpeg" alt="Диабло 🌶️🌶️" title='Диабло 🌶️🌶️' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Диабло 🌶️🌶️ </div>
                                <div className={styles.description}>Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>от 399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                </section>
            </div>
        </div>
    );
};