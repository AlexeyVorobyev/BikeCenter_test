import React from "react";
import styles from "./style.module.scss";
import {NavLink} from "react-router-dom";
import {ReactComponent as GearsSvg} from './assets/gears.svg';
import {ReactComponent as ElectricitySvg} from './assets/electricity.svg';
import {ReactComponent as ArrowSvg} from './assets/arrow.svg';
import moneyPng from './assets/money.png';
import ruporPng from './assets/electricityAdditions/rupor.png';
import coin1Png from './assets/electricityAdditions/coin1.png';
import coin2Png from './assets/electricityAdditions/coin2.png';
import coin3Png from './assets/electricityAdditions/coin3.png';
import carPng from './assets/car.png';
import boxesPng from './assets/boxes.png';
import classNames from "classnames";

const Help = () => {
    return (
        <>
            <p className={styles.pagePath}>Главная страница / <span>Помощь</span></p>
            <div className={styles.pageInfoContainer}>
                <h2 className={styles.title}>Помощь</h2>
                <p className={styles.phone}>Телефон горячей линии</p>
                <p className={styles.phoneNum}>8 (800) 500-30-20</p>
            </div>
            <div className={styles.helpGrid}>
                <div className={styles.helpGridElem}>
                    <GearsSvg className={styles.gearsSvg}/>
                    <h3 className={styles.helpGridElemTitle}>Мы всегда рады помочь</h3>
                    <p className={styles.helpGridElemParagraph}>Если у вас есть нерешенный вопрос</p>
                    <NavLink
                        to={"someRoute"}
                        className={({ isActive }) =>
                            (classNames(styles.helpNavLink, isActive ? styles.active : styles.disActive))}
                    >
                        <button className={styles.helpGridElemButton}>
                            <p className={styles.helpGridElemButtonText}>Напишите нам в чат</p>
                        </button>
                    </NavLink>
                </div>

                <div className={styles.helpGridElem}>
                    <img className={styles.moneyImg} src={moneyPng}/>
                    <h3 className={styles.helpGridElemTitle}>Оплата</h3>
                    <div className={styles.helpGridElemLinksContainer}>
                        <NavLink
                            to={"someRoute"}
                            className={({ isActive }) =>
                                (classNames(styles.helpNavLink, isActive ? styles.active : styles.disActive))}
                        >
                            <p className={styles.helpNavLinkText}>Как оплатить заказ</p>
                        </NavLink>
                        <NavLink
                            to={"someRoute"}
                            className={({ isActive }) =>
                                (classNames(styles.helpNavLink, isActive ? styles.active : styles.disActive))}
                        >
                            <p className={styles.helpNavLinkText}>Наложенный платёж</p>
                        </NavLink>
                        <NavLink
                            to={"someRoute"}
                            className={({ isActive }) =>
                                (classNames(styles.helpNavLink, isActive ? styles.active : styles.disActive))}
                        >
                            <p className={styles.helpNavLinkText}>Оплата электронными деньгами</p>
                        </NavLink>
                        <NavLink
                            to={"someRoute"}
                            className={({ isActive }) =>
                                (classNames(styles.helpNavLink, isActive ? styles.active : styles.disActive))}
                        >
                            <p className={styles.helpNavLinkText}>Как оплатить если нет карты?</p>
                        </NavLink>
                        <NavLink
                            to={"someRoute"}
                            className={({ isActive }) =>
                                (classNames(styles.helpNavLink, isActive ? styles.active : styles.disActive))}
                        >
                            <p className={styles.helpNavLinkText}>Подарочные карты</p>
                        </NavLink>
                    </div>
                </div>

                <div className={styles.helpGridElem}>
                    <div className={styles.helpGridElemInfoWrapper}>
                        <h3 className={styles.helpGridElemTitle}>Бонусная система</h3>
                        <ul className={styles.helpGridElemList}>
                            <li className={styles.helpGridElemListElem}>Покупай</li>
                            <li className={styles.helpGridElemListElem}>Управляй заказами</li>
                            <li className={styles.helpGridElemListElem}>Накапливай cashback—бонусы</li>
                        </ul>
                    </div>
                    <div className={styles.helpGridElemImgContainer}>
                        <ElectricitySvg className={styles.electricitySvg}/>
                        <img className={styles.electricityImg} src={ruporPng}/>
                        <img className={styles.electricityImg} src={coin1Png}/>
                        <img className={styles.electricityImg} src={coin2Png}/>
                        <img className={styles.electricityImg} src={coin3Png}/>
                    </div>
                </div>

                <div className={styles.helpGridElem}>
                    <div className={styles.helpGridElemInfoWrapper}>
                        <h3 className={styles.helpGridElemTitle}>Гарантия</h3>
                        <p className={styles.helpGridElemParagraph}>Информацию по всем вопросам гарантии можно узнать тут.</p>
                    </div>
                    <NavLink
                        to={"someRoute"}
                        className={({ isActive }) =>
                            (classNames(styles.helpNavLink, isActive ? styles.active : styles.disActive))}
                    >
                        <button className={styles.helpGridElemButton}>
                            <p className={styles.helpGridElemButtonText}>Гарантийные талоны</p>
                            <ArrowSvg className={styles.arrowSvg}/>
                        </button>
                    </NavLink>
                </div>

                <div className={styles.helpGridElem}>
                    <div className={styles.helpGridElemInfoWrapper}>
                        <h3 className={styles.helpGridElemTitle}>Легкий возврат</h3>
                        <p className={styles.helpGridElemParagraph}>Вернуть товары легко и удобно, если сохранён его товарный вид и потребительские свойства.</p>
                        <NavLink
                            to={"someRoute"}
                            className={({ isActive }) =>
                                (classNames(styles.helpNavLink, isActive ? styles.active : styles.disActive))}
                        >
                            <button className={styles.helpGridElemButton}>
                                <p className={styles.helpGridElemButtonText}>Узнать подробнее</p>
                            </button>
                        </NavLink>
                    </div>
                    <img className={styles.boxesPng} src={boxesPng}/>
                </div>

                <div className={styles.helpGridElem}>
                    <div className={styles.helpGridElemInfoWrapper}>
                        <h3 className={styles.helpGridElemTitle}>Доставка</h3>
                        <p className={styles.helpGridElemParagraph}>Стоимость доставки будет зависеть от города в котором вы находитесь</p>
                        <NavLink
                            to={"someRoute"}
                            className={({ isActive }) =>
                                (classNames(styles.helpNavLink, isActive ? styles.active : styles.disActive))}
                        >
                            <button className={styles.helpGridElemButton}>
                                <p className={styles.helpGridElemButtonText}>Расчитать доставку</p>
                            </button>
                        </NavLink>
                    </div>
                    <img className={styles.carPng} src={carPng}/>
                </div>
            </div>

            <div className={styles.helpFlex}>
                <div className={styles.helpFlexElem}>
                    <h3 className={styles.helpFlexElemTitle}>Как сделать заказ</h3>
                    <p className={styles.helpFlexElemParagraph}>Мы делаем все возможное, чтобы максимально облегчить вам оформление заказа. Для того, чтобы сделать это:</p>
                    <ul className={styles.helpFlexElemList}>
                        <li className={styles.helpFlexElemListElem}>Перейдите в раздел «Каталог»;</li>
                        <li className={styles.helpFlexElemListElem}>под понравившимся вам товаром нажать на зеленую кнопку «Купить»: это отправляет ваш заказ в виртуальную корзину;</li>
                        <li className={styles.helpFlexElemListElem}>переходите в корзину и оформляете заказ;</li>
                        <li className={styles.helpFlexElemListElem}>система автоматически зарегистрирует вас;</li>
                        <li className={styles.helpFlexElemListElem}>ожидайте смс и email уведомления о статусе вашего заказа. При возникновении вопросов будем рады помочь по телефону 8(800)500-03-20.</li>
                    </ul>
                </div>

                <div className={styles.helpFlexElem}>
                    <h3 className={styles.helpFlexElemTitle}>Лёгкий возврат</h3>
                    <p className={styles.helpFlexElemParagraph}>Покупайте, пробуйте, вам понравится, если нет, мы вернем вам деньги! Без вопросов, заявлений и дополнительных комиссий. <br/>Вы вправе передумать. Мы в «Байк Центре» понимаем это, и с радостью сделаем вам обмен на понравившийся вам товар или вернём деньги.</p>
                    <ul className={styles.helpFlexElemList}>
                        <li className={styles.helpFlexElemListElem}>Свяжитесь с нами по телефону или онлайн-чаты. Мы оформим вам бланк возврата и вышлем его вам на электронную почту;</li>
                        <li className={styles.helpFlexElemListElem}>распечатайте и заполните бланк, его нужно будет сдать вместе с заказом на указанном нами пункте выдачи;</li>
                        <li className={styles.helpFlexElemListElem}>надёжно упакуйте товар в коробку, предотвращая трение изделий между собой и свободное перемещение товара внутри упаковки;</li>
                        <li className={styles.helpFlexElemListElem}>сдайте заказ в том же месте, где получали его или другом удобном вам партнёрском пункте выдачи заказов или магазине;</li>
                    </ul>
                    <p className={styles.helpFlexElemParagraph}>Возврат и обмен товара производится на основании Закона РФ "О защите прав потребителей" и регулируется ст. 18, 19, 20, 21.</p>
                    <p className={styles.helpFlexElemParagraph}>В случае доставки на дом и возникновения гарантийного случая/наличия брака у товара, мы самостоятельно и за свой счёт заберём от вас данный товар.</p>
                </div>

                <div className={styles.helpFlexElem}>
                    <h3 className={styles.helpFlexElemTitle}>Обратная связь</h3>
                    <p className={styles.helpFlexElemParagraph}>Если у вас есть предложения или замечания по работе интернет-магазина «Байк Центр», то вы всегда можете обратиться к нам:</p>
                    <ul className={styles.helpFlexElemList}>
                        <li className={styles.helpFlexElemListElem}>в социальной сети ВКонтакте;</li>
                        <li className={styles.helpFlexElemListElem}>по электронной почте руководителю интернет-магазина info@bike-centre.ru;</li>
                        <li className={styles.helpFlexElemListElem}>написав отзыв о работе «Байк Центра».</li>
                    </ul>
                </div>
            </div>

            <div className={styles.helpContainer}>
                <h4 className={styles.helpContainerTitle}>Не нашли то что нужно?</h4>
                <p className={styles.helpContainerText}>Позвоните нам по номеру <span>8 (800) 000000000</span></p>
            </div>
        </>
    )
}

export {Help}