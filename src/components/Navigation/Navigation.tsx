import React from "react";
import styles from "./style.module.scss";
import {ReactComponent as HeaderCityIconSvg} from './assets/headerCityIcon.svg';
import {ReactComponent as HeaderLogo} from './assets/logo.svg';
import {ReactComponent as HeaderSecondButtonIconSvg} from './assets/headerSecondButtonIcon.svg';
import {ReactComponent as HeaderSecondInputButtonIconSvg} from './assets/headerSecondInputButtonIcon.svg';
import {ReactComponent as OrdersSvg} from './assets/headerSecondNavIcons/orders.svg';
import {ReactComponent as ComparisonSvg} from './assets/headerSecondNavIcons/comparison.svg';
import {ReactComponent as FavoritesSvg} from './assets/headerSecondNavIcons/favorites.svg';
import {ReactComponent as ShoppingCartSvg} from './assets/headerSecondNavIcons/shoppingCart.svg';
import {ReactComponent as PersonSvg} from './assets/headerSecondNavIcons/person.svg';
import {ReactComponent as WhatsappSvg} from './assets/socialNetworksIcons/whatsapp.svg';
import {ReactComponent as TelegramSvg} from './assets/socialNetworksIcons/telegram.svg';
import QrCodePng from './assets/toDownload/qrcode.png'
import {ReactComponent as GoogleSvg} from './assets/toDownload/google.svg';
import {ReactComponent as AppleSvg} from './assets/toDownload/apple.svg';
import {NavLink, Outlet} from "react-router-dom";
import classNames from "classnames";

const Navigation = () => {

    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerWrapper}>
                    <div className={styles.headerInfoContainer}>
                        <div className={styles.headerCityContainer}>
                            <HeaderCityIconSvg className={styles.headerCityIcon}/>
                            <p className={styles.headerCityText}>Магадан</p>
                        </div>
                        <p className={styles.headerAddressText}>ул. Дорожная, 1Е и еще 3</p>
                        <p className={styles.headerPhoneText}>8 800 500-03-20</p>
                        <p className={styles.headerPhoneText}>8 861 200-03-20</p>
                    </div>
                    <div className={styles.headerButtonsContainer}>
                        <NavLink
                            to={"someRoute"}
                            className={({ isActive }) =>
                                (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                        >
                            <button className={styles.headerButton}>
                                <p className={styles.headerButtonText}>Ремонт и обслуживание</p>
                            </button>
                        </NavLink>
                        <NavLink
                            to={"someRoute"}
                            className={({ isActive }) =>
                                (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                        >
                            <button className={styles.headerButton}>
                                <p className={styles.headerButtonText}>Прокат оборудывания</p>
                            </button>
                        </NavLink>
                    </div>
                    <nav className={styles.headerNavigationContainer}>
                        <NavLink
                            to={"someRoute"}
                            className={({ isActive }) =>
                                (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                        >О нас</NavLink>
                        <NavLink
                            to={"someRoute"}
                            className={({ isActive }) =>
                                (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                        >Доставка</NavLink>
                        <NavLink
                            to={"someRoute"}
                            className={({ isActive }) =>
                                (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                        >Оплата</NavLink>
                        <NavLink
                            to={"someRoute"}
                            className={({ isActive }) =>
                                (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                        >Вакансии</NavLink>
                        <NavLink
                            to={"someRoute"}
                            className={({ isActive }) =>
                                (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                        >Помощь</NavLink>
                        <NavLink
                            to={"someRoute"}
                            className={({ isActive }) =>
                                (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                        >Контакты</NavLink>
                    </nav>
                </div>
            </header>

            <header className={classNames(styles.headerSecond)}>
                <div className={styles.headerSecondWrapper}>
                    <div className={styles.headerSecondContainer}>
                        <HeaderLogo className={styles.headerSecondLogoSvg}/>
                        <div className={styles.headerSecondSearchWrapper}>
                            <button className={styles.headerSecondSearchButton}>
                                <HeaderSecondButtonIconSvg className={styles.headerSecondSearchButtonSvg}/>
                                <p className={styles.headerSecondSearchButtonText}>Каталог</p>
                            </button>
                            <div className={styles.headerSecondSearch}>
                                <input className={styles.headerSecondSearchInput} placeholder={"Поиск на сайте"}/>
                                <button className={styles.headerSecondSearchInputButton}>
                                    <HeaderSecondInputButtonIconSvg className={styles.headerSecondSearchInputButtonSvg}/>
                                </button>
                            </div>
                        </div>
                        <nav className={styles.headerSecondNavigationContainer}>
                            <NavLink
                                to={"someRoute"}
                                className={({ isActive }) =>
                                    (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                            >
                                <button className={styles.headerSecondNavLinkButton}>
                                    <div className={styles.headerSecondNavLinkCircle}>
                                        <PersonSvg className={styles.headerSecondNavLinkIconSvg}/>
                                    </div>
                                    <p className={styles.headerSecondNavLinkText}>Вход</p>
                                </button>
                            </NavLink>
                            <div className={styles.headerSecondNavigationWrapper}>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                                >
                                    <div className={styles.headerSecondNavLinkContainer}>
                                        <OrdersSvg className={styles.headerSecondNavLinkIconSvg}/>
                                        <p className={styles.headerSecondNavLinkText}>Заказы</p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                                >
                                    <div className={styles.headerSecondNavLinkContainer}>
                                        <ComparisonSvg className={styles.headerSecondNavLinkIconSvg}/>
                                        <p className={styles.headerSecondNavLinkText}>Сравнение</p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                                >
                                    <div className={styles.headerSecondNavLinkContainer}>
                                        <FavoritesSvg className={styles.headerSecondNavLinkIconSvg}/>
                                        <p className={styles.headerSecondNavLinkText}>Избранное</p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                                >
                                    <div className={styles.headerSecondNavLinkContainer}>
                                        <ShoppingCartSvg className={styles.headerSecondNavLinkIconSvg}/>
                                        <p className={styles.headerSecondNavLinkText}>Корзина</p>
                                        <div className={styles.headerSecondShopAmountContainer}>
                                            <p className={styles.headerSecondShopAmountText}>2</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </nav>
                    </div>
                    <div className={styles.headerSecondContainer}>
                        <nav className={styles.headerSecondNavigationContainer}>
                            <NavLink
                                to={"someRoute"}
                                className={({ isActive }) =>
                                    (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                            >Горные велосипеды</NavLink>
                            <NavLink
                                to={"someRoute"}
                                className={({ isActive }) =>
                                    (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                            >Детские велосипеды</NavLink>
                            <NavLink
                                to={"someRoute"}
                                className={({ isActive }) =>
                                    (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                            >Детские Самокаты</NavLink>
                            <NavLink
                                to={"someRoute"}
                                className={({ isActive }) =>
                                    (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                            >Электросамокаты</NavLink>
                        </nav>
                        <nav className={styles.headerSecondNavigationContainer}>
                            <NavLink
                                to={"someRoute"}
                                className={({ isActive }) =>
                                    (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                            ><span>Распродажа</span></NavLink>
                            <NavLink
                                to={"someRoute"}
                                className={({ isActive }) =>
                                    (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                            >Бренды</NavLink>
                        </nav>
                    </div>
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.mainWrapper}>
                    <Outlet/>
                </div>
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerWrapper}>
                    <div className={styles.footerGrid}>
                        <div className={styles.gridElemInfo}>
                            <h3 className={styles.infoTitle}>Помощь</h3>
                            <nav className={styles.questionsContainer}>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                                >Как оплатить?</NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                                >Как получить?</NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                                >Пользовательское соглашение</NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                                >Бонусная программа</NavLink>
                            </nav>
                        </div>
                        <div className={styles.gridElemInfo}>
                            <h3 className={styles.infoTitle}>О нас</h3>
                            <nav className={styles.questionsContainer}>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                                >Ремонт и обслуживание</NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                                >Прокат оборудывания</NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                                >Наша история</NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                                >Мероприятия от байк центра</NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                                >Арендодателям</NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                                >Вакансии</NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                                >Контакты</NavLink>
                            </nav>
                        </div>
                        <div className={styles.gridElemInfo}>
                            <h3 className={styles.infoTitle}>Контакты</h3>
                            <div className={styles.contactsContainer}>
                                <div className={styles.phonesContainer}>
                                    <p className={styles.phoneText}>8 (800) 500-03-20</p>
                                    <p className={styles.phoneText}>8 (861) 202-58-40</p>
                                </div>
                                <div className={styles.socialNetworksContainer}>
                                    <a className={styles.socialNetworkLink}>
                                        <WhatsappSvg className={styles.socialNetworkIconSvg}/>
                                        <p className={styles.socialNetworkLinkText}>WhatsApp</p>
                                    </a>
                                    <a className={styles.socialNetworkLink}>
                                        <TelegramSvg className={styles.socialNetworkIconSvg}/>
                                        <p className={styles.socialNetworkLinkText}>Telegram</p>
                                    </a>
                                </div>
                            </div>
                            <h4 className={styles.infoAddressesTitle}>Адреса в г. Краснодаре</h4>
                            <div className={styles.addressesContainer}>
                                <p className={styles.addressText}>ул. Дорожная, 1Е (Яблоновский)</p>
                                <p className={styles.addressText}>ул. Сормовская, 2а</p>
                                <p className={styles.addressText}>ул. Красных Партизан, 237</p>
                                <p className={styles.addressText}>ул. Российская, 131/5</p>
                            </div>
                        </div>
                        <div className={styles.gridElemInfo}>
                            <h4 className={styles.infoTitle}>Скачайте наше приложение</h4>
                            <div className={styles.gridLinks}>
                                <img className={styles.qrCodePng} src={QrCodePng}/>
                                <a className={styles.link}>
                                    <AppleSvg className={styles.shopSvg}/>
                                </a>
                                <a className={styles.link}>
                                    <GoogleSvg className={styles.shopSvg}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export {Navigation}