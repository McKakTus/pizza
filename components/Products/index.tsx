import React from 'react';
import clsx from 'clsx';

import styles from './Products.module.scss';

export const Products: React.FC = () => {
    return (
        <div className={styles.section__products}>
            <div className="container">

                <div className={styles.header}>
                    <h2 className={styles.title}>Пицца</h2>
                    <button className={styles.btn__filter}>
                        <img src="/icons/ic_filter.svg" alt="" />
                        Фильтры
                    </button>
                </div>
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

                <div className={styles.header}>
                    <h2 className={styles.title}>Суши</h2>
                </div>
                <section id='sushi' className={clsx(styles.products, styles.products__sushi)}>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/sushi/sushi_1.png" alt="Филадельфия кранч" title='Филадельфия кранч' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Филадельфия кранч</div>
                                <div className={styles.description}>Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чипcы</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/sushi/sushi_2.png" alt="Филадельфия крем-брюле" title='Филадельфия крем-брюле' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Филадельфия крем-брюле</div>
                                <div className={styles.description}>Сливочный сыр, семга татаки с тростниковым сахаром, соус</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/sushi/sushi_3.png" alt="Супер Филадельфия" title='Супер Филадельфия'/>
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Супер Филадельфия</div>
                                <div className={styles.description}>Действительно много семги, сливочный сыр, огурец, рис</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/sushi/sushi_4.png" alt="Гункан с лососем и сырным кремом" title='Гункан с лососем и сырным кремом' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Гункан с лососем и сырным кремом</div>
                                <div className={styles.description}>Лосось, сливочный сыр, японский рис, соус. 75гр</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/sushi/sushi_2.png" alt="Нигири тунец" title='Нигири тунец' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Нигири тунец</div>
                                <div className={styles.description}>Тунец, японский рис.</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/sushi/sushi_1.png" alt="Сашими с тунцом" title='Сашими с тунцом' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Сашими с тунцом</div>
                                <div className={styles.description}>Авокадо, семга, тунец, лук шнитт, тобико черная, дрессинг с экстрактом имбиря на трюфельном масле, соус Хондаши 4 шт.</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/sushi/sushi_4.png" alt="Нигири с семгой" title='Нигири с семгой' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Нигири с семгой</div>
                                <div className={styles.description}>Нигири приготовленые с ссемгой</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/sushi/sushi_3.png" alt="Сашими ролл с семгой" title='Сашими ролл с семгой' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Сашими ролл с семгой</div>
                                <div className={styles.description}>Нори, Лосось, Тунец, Креветки, Спайси соус, Авокадо, Васаби майонез, Виноград</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                </section>

                <div className={styles.header}>
                    <h2 className={styles.title}>Комбо</h2>
                </div>
                <section id='combo' className={styles.products}>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/combo/combo_1.webp" alt="Филадельфия кранч" title='Филадельфия кранч' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Филадельфия кранч</div>
                                <div className={styles.description}>Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чипcы</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/combo/combo_2.webp" alt="Филадельфия крем-брюле" title='Филадельфия крем-брюле' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Филадельфия крем-брюле</div>
                                <div className={styles.description}>Сливочный сыр, семга татаки с тростниковым сахаром, соус</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/combo/combo_3.webp" alt="Супер Филадельфия" title='Супер Филадельфия'/>
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Супер Филадельфия</div>
                                <div className={styles.description}>Действительно много семги, сливочный сыр, огурец, рис</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/combo/combo_4.webp" alt="Гункан с лососем и сырным кремом" title='Гункан с лососем и сырным кремом' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Гункан с лососем и сырным кремом</div>
                                <div className={styles.description}>Лосось, сливочный сыр, японский рис, соус. 75гр</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/combo/combo_5.webp" alt="Нигири тунец" title='Нигири тунец' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Нигири тунец</div>
                                <div className={styles.description}>Тунец, японский рис.</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/combo/combo_6.webp" alt="Сашими с тунцом" title='Сашими с тунцом' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Сашими с тунцом</div>
                                <div className={styles.description}>Авокадо, семга, тунец, лук шнитт, тобико черная, дрессинг с экстрактом имбиря на трюфельном масле, соус Хондаши 4 шт.</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/combo/combo_7.webp" alt="Нигири с семгой" title='Нигири с семгой' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Нигири с семгой</div>
                                <div className={styles.description}>Нигири приготовленые с ссемгой</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/combo/combo_8.webp" alt="Сашими ролл с семгой" title='Сашими ролл с семгой' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Сашими ролл с семгой</div>
                                <div className={styles.description}>Нори, Лосось, Тунец, Креветки, Спайси соус, Авокадо, Васаби майонез, Виноград</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                </section>

                <div className={styles.header}>
                    <h2 className={styles.title}>Закуски</h2>
                </div>
                <section id='snaks' className={styles.products}>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/snaks/snak_1.jpeg" alt="Филадельфия кранч" title='Филадельфия кранч' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Филадельфия кранч</div>
                                <div className={styles.description}>Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чипcы</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/snaks/snak_2.jpeg" alt="Филадельфия крем-брюле" title='Филадельфия крем-брюле' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Филадельфия крем-брюле</div>
                                <div className={styles.description}>Сливочный сыр, семга татаки с тростниковым сахаром, соус</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/snaks/snak_3.jpeg" alt="Супер Филадельфия" title='Супер Филадельфия'/>
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Супер Филадельфия</div>
                                <div className={styles.description}>Действительно много семги, сливочный сыр, огурец, рис</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/snaks/snak_4.jpeg" alt="Гункан с лососем и сырным кремом" title='Гункан с лососем и сырным кремом' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Гункан с лососем и сырным кремом</div>
                                <div className={styles.description}>Лосось, сливочный сыр, японский рис, соус. 75гр</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/snaks/snak_5.jpeg" alt="Нигири тунец" title='Нигири тунец' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Нигири тунец</div>
                                <div className={styles.description}>Тунец, японский рис.</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/snaks/snak_6.jpeg" alt="Сашими с тунцом" title='Сашими с тунцом' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Сашими с тунцом</div>
                                <div className={styles.description}>Авокадо, семга, тунец, лук шнитт, тобико черная, дрессинг с экстрактом имбиря на трюфельном масле, соус Хондаши 4 шт.</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/snaks/snak_7.jpeg" alt="Нигири с семгой" title='Нигири с семгой' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Нигири с семгой</div>
                                <div className={styles.description}>Нигири приготовленые с ссемгой</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/snaks/snak_8.jpeg" alt="Сашими ролл с семгой" title='Сашими ролл с семгой' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Сашими ролл с семгой</div>
                                <div className={styles.description}>Нори, Лосось, Тунец, Креветки, Спайси соус, Авокадо, Васаби майонез, Виноград</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                </section>

                <div className={styles.header}>
                    <h2 className={styles.title}>Десерты</h2>
                </div>
                <section id='desert' className={styles.products}>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/deserts/desert_1.jpeg" alt="Вишневый пирог" title='Вишневый пирог' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Вишневый пирог</div>
                                <div className={styles.description}>Это не просто десерт, а вишенка на торте! Творожно-песочное тесто с ягодами, заварным кремом и лепестками миндаля.</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">В корзину</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/deserts/desert_2.jpeg" alt="Пончики Тройной шоколад и Клубничный" title='Пончики Тройной шоколад и Клубничный' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Пончики Тройной шоколад и Клубничный</div>
                                <div className={styles.description}>Такие разные, но вместе. Один пончик с шоколадной начинкой и посыпкой, а другой с клубничной начинкой внутри и яркой посыпкой снаружи</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">В корзину</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/deserts/desert_3.jpeg" alt="2 Маффина Три шоколада" title='2 Маффина Три шоколада'/>
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>2 Маффина Три шоколада</div>
                                <div className={styles.description}>Основное блюдо заканчивается, начинаются маффины с начинкой на шоколадной основе с кубиками белого и молочного шоколада</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">В корзину</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/deserts/desert_4.jpeg" alt="Фонданы" title='Фонданы' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Фонданы</div>
                                <div className={styles.description}>Четверо из пяти гостей говорят «Oh la la!», когда едят этот французский десерт с хрустящей корочкой и топленой шоколадной начинкой.</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">В корзину</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/deserts/desert_5.jpeg" alt="Бруслетики, 16 шт" title='Бруслетики, 16 шт' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Бруслетики, 16 шт</div>
                                <div className={styles.description}>Это задорные сладкие рулетики, в которых закрутился микс из натуральной брусники и сгущенного молока.</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">В корзину</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/deserts/desert_6.jpeg" alt="Рулетики с корицей, 16 шт" title='Рулетики с корицей, 16 шт' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Рулетики с корицей, 16 шт</div>
                                <div className={styles.description}>Десерт, одобренный нашими бабушками. Горячие сладкие рулетики с пряной корицей и сахаром.</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">В корзину</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/deserts/desert_7.jpeg" alt="Сырники с малиновым вареньем 👶" title='Сырники с малиновым вареньем 👶' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Сырники с малиновым вареньем 👶</div>
                                <div className={styles.description}>Любимый десерт многих наших гостей — румяные сырники из печи. Такие нежные, в меру сладкие и напоминающие детство, 4 шт.</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">В корзину</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/deserts/desert_8.jpeg" alt="Шоколадный молочный коктейль" title='Шоколадный молочный коктейль' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Шоколадный молочный коктейль</div>
                                <div className={styles.description}>Это шок! Шоколадный молочный коктейль со сливочным мороженым и фирменным какао</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">В корзину</button>
                        </footer>
                    </div>
                </section>
                
                <div className={styles.header}>
                    <h2 className={styles.title}>Напитки</h2>
                </div>
                <section id='drinks' className={styles.products}>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/drinks/drink_1.jpeg" alt="Coca-Cola" title='Coca-Cola' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Coca-Cola</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">В корзину</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/drinks/drink_2.jpeg" alt="Sprite" title='Sprite' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Sprite</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">В корзину</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/drinks/drink_3.jpeg" alt="Fanta" title='Fanta'/>
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Fanta</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">В корзину</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/drinks/drink_4.jpeg" alt="FuzeTea Черный с лимоном и лемонграссом" title='FuzeTea Черный с лимоном и лемонграссом' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>FuzeTea Черный с лимоном и лемонграссом</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">В корзину</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/drinks/drink_5.jpeg" alt="BonAqua, негазированная" title='BonAqua, негазированная' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>BonAqua, негазированная</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">В корзину</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/drinks/drink_6.jpeg" alt="Апельсиновый сок Rich" title='Апельсиновый сок Rich' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Апельсиновый сок Rich</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">В корзину</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/drinks/drink_7.jpeg" alt="Кофе Кокосовый Латте" title='Кофе Кокосовый Латте' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Кофе Кокосовый Латте</div>
                                <div className={styles.description}>Горячий напиток на основе эспрессо с увеличенной порцией молока и кокосовым сиропом</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">Выбрать</button>
                        </footer>
                    </div>
                    <div className={styles.product}>
                        <main>
                            <div className={styles.product__img}>
                                <img className='img-fluid' src="/img/drinks/drink_8.jpeg" alt="Морс Черная смородина 👶" title='Морс Черная смородина 👶' />
                            </div>
                            <div className={styles.product__info}>
                                <div className={styles.name}>Морс Черная смородина 👶</div>
                                <div className={styles.description}>Для усиления ощущений от морса рекомендуем закрыть глаза и представить себя у бабушки в саду</div>
                            </div>
                        </main>
                        <footer>
                            <div className={styles.price}>399 ₽</div>
                            <button className={styles.select} data-type="secondary">В корзину</button>
                        </footer>
                    </div>
                </section>
            </div>
        </div>
    );
};