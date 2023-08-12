import React from "react";
import styles from "./style.module.scss";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import QrCodePng from './assets/toDownload/qrcode.png';
import {ReactComponent as WhatsappSvg} from './assets/socialNetworksIcons/whatsapp.svg';
import {ReactComponent as TelegramSvg} from './assets/socialNetworksIcons/telegram.svg';
import {ReactComponent as VKontakteSvg} from './assets/socialNetworksIcons/vkontakte.svg';
import {ReactComponent as YouTubeSvg} from './assets/socialNetworksIcons/youtube.svg';
import {ReactComponent as TikTokSvg} from './assets/socialNetworksIcons/tiktok.svg';
import {ReactComponent as GoogleSvg} from './assets/toDownload/google.svg';
import {ReactComponent as AppleSvg} from './assets/toDownload/apple.svg';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerWrapper}>
                    <div className={styles.footerGrid}>

                        <div className={styles.gridElemInfo}>
                            <h3 className={styles.infoTitle}>Помощь</h3>
                            <nav className={styles.questionsContainer}>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.footerNavLink, isActive ? styles.active : styles.disActive))}
                                >Как оплатить?</NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.footerNavLink, isActive ? styles.active : styles.disActive))}
                                >Как получить?</NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.footerNavLink, isActive ? styles.active : styles.disActive))}
                                >Пользовательское соглашение</NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.footerNavLink, isActive ? styles.active : styles.disActive))}
                                >Бонусная программа</NavLink>
                            </nav>
                        </div>

                        <div className={styles.gridElemInfo}>
                            <h3 className={styles.infoTitle}>О нас</h3>
                            <nav className={styles.questionsContainer}>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.footerNavLink, isActive ? styles.active : styles.disActive))}
                                >Ремонт и обслуживание</NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.footerNavLink, isActive ? styles.active : styles.disActive))}
                                >Прокат оборудывания</NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.footerNavLink, isActive ? styles.active : styles.disActive))}
                                >Наша история</NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.footerNavLink, isActive ? styles.active : styles.disActive))}
                                >Мероприятия от байк центра</NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.footerNavLink, isActive ? styles.active : styles.disActive))}
                                >Арендодателям</NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.footerNavLink, isActive ? styles.active : styles.disActive))}
                                >Вакансии</NavLink>
                                <NavLink
                                    to={"someRoute"}
                                    className={({ isActive }) =>
                                        (classNames(styles.footerNavLink, isActive ? styles.active : styles.disActive))}
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

                        <div className={styles.socialNetworksContainer}>
                            <VKontakteSvg/>
                            <YouTubeSvg/>
                            <TikTokSvg/>
                        </div>

                        <div className={styles.footerFormContainer}>
                            <h3 className={styles.footerFormTitle}>Узнавай о скидках первым</h3>
                            <form className={styles.footerForm}>
                                <input className={styles.emailInput} type={"email"} pattern={"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/"} placeholder={"Введите свой email"}/>
                                <button className={styles.subscriptButton}>
                                    <p className={styles.subscriptButtonText}>Подписаться</p>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className={styles.footerSecond}>
                <div className={styles.footerSecondWrapper}>
                    <p className={styles.footerCopyRight}>© 2022</p>
                    <p className={styles.footerCopyRight}>Сеть магазинов "Байк Центр" ® — bike-сentre.ru</p>
                </div>
            </footer>
        </>
    )
}

export {Footer}