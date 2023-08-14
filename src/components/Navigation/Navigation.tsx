import React, {useEffect, useState} from "react";
import styles from "./style.module.scss";
import {ReactComponent as HeaderCityIconSvg} from './assets/headerCityIcon.svg';
import {ReactComponent as HeaderLogo} from './assets/logo.svg';
import {ReactComponent as HeaderSecondButtonIconSvg} from './assets/headerSecondButtonIcon.svg';
import {ReactComponent as HeaderSecondButtonCloseIconSvg} from './assets/headerSecondButtonCloseIcon.svg';
import {ReactComponent as HeaderSecondInputButtonIconSvg} from './assets/headerSecondInputButtonIcon.svg';
import {ReactComponent as OrdersSvg} from './assets/headerSecondNavIcons/orders.svg';
import {ReactComponent as ComparisonSvg} from './assets/headerSecondNavIcons/comparison.svg';
import {ReactComponent as FavoritesSvg} from './assets/headerSecondNavIcons/favorites.svg';
import {ReactComponent as ShoppingCartSvg} from './assets/headerSecondNavIcons/shoppingCart.svg';
import {ReactComponent as PersonSvg} from './assets/headerSecondNavIcons/person.svg';
import {ReactComponent as HeaderMobileLogo} from './assets/headerMobile/logo.svg';
import {ReactComponent as MobileShoppingCartSvg} from './assets/headerMobile/shopcart.svg';
import {ReactComponent as MobileSearchIconSvg} from './assets/headerMobile/lupa.svg';
import {ReactComponent as MobileUserIconSvg} from './assets/headerMobile/user.svg';
import {ReactComponent as MobileBurgerSvg} from './assets/headerMobile/burger.svg';
import {ReactComponent as HeaderBurgerCloseSvg} from './assets/headerMobile/close.svg';
import {ReactComponent as CityNavSvg} from './assets/headerMobile/nav.svg';
import {NavLink, Outlet} from "react-router-dom";
import classNames from "classnames";
import {Footer} from "./Footer/Footer";
import {SearchDropDown} from "./SearchDropDown/SearchDropDown";
import {Catalogue} from "./Catalogue/Catalogue";
import {MobileMenu} from "./MobileMenu/MobileMenu";

const Navigation = () => {

    const [isHideCatalogue,setHideCatalogue] = React.useState(true);
    const [isHideMobileMenu,setHideMobileMenu] = React.useState(true);
    const [isHideSearch,setHideSearch] = React.useState(true);


    useEffect(() => {
        const handleResize = (event:any) => {
            const width = event.target.innerWidth;
            if (width <= 800) {
                setHideCatalogue(true);
                setHideSearch(true);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
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

            <header className={styles.headerSecond}>
                <div className={styles.headerSecondOuterWrapper}>
                    <div className={styles.headerSecondWrapper}>
                        <div className={styles.headerSecondContainer}>
                            <HeaderLogo className={styles.headerSecondLogoSvg}/>
                            <div className={styles.headerSecondSearchWrapper}>
                                <button
                                    className={styles.headerSecondSearchButton}
                                    onClick={() => {
                                        setHideCatalogue(!isHideCatalogue)
                                        if (document.body.style.overflowY === "hidden") {
                                            document.body.style.overflowY = "visible";
                                        }
                                        else document.body.style.overflowY = "hidden";
                                    }}
                                >
                                    {!isHideCatalogue && <HeaderSecondButtonCloseIconSvg className={styles.headerSecondSearchButtonSvg}/>}
                                    {isHideCatalogue && <HeaderSecondButtonIconSvg className={styles.headerSecondSearchButtonSvg}/>}
                                    <p className={styles.headerSecondSearchButtonText}>Каталог</p>
                                </button>
                                <div className={styles.headerSecondSearch}>
                                    <input
                                        className={styles.headerSecondSearchInput}
                                        placeholder={"Поиск на сайте"}
                                        onBlur={() => setHideSearch(true)}
                                        onFocus={() => setHideSearch(false)}
                                    />
                                    <button className={styles.headerSecondSearchInputButton}>
                                        <HeaderSecondInputButtonIconSvg className={styles.headerSecondSearchInputButtonSvg}/>
                                    </button>

                                    <SearchDropDown isHideSearch={isHideSearch}/>
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
                        <div className={styles.headerMobileContainer}>
                            <div className={styles.headerMobileFirstWrapper}>
                                <button
                                    className={styles.headerMobileBurger}
                                    onClick={() => {
                                        setHideMobileMenu(!isHideMobileMenu)
                                        if (document.body.style.overflowY === "hidden") {
                                            document.body.style.overflowY = "visible";
                                        }
                                        else document.body.style.overflowY = "hidden";
                                    }}
                                >
                                    {isHideMobileMenu && <MobileBurgerSvg className={styles.headerMobileBurgerIcon}/>}
                                    {!isHideMobileMenu && <HeaderBurgerCloseSvg className={styles.headerMobileBurgerIcon}/>}
                                </button>
                                <HeaderMobileLogo className={styles.headerMobileLogo}/>
                                <nav className={styles.headerMobileNavContainer}>
                                    <NavLink
                                        to={"someRoute"}
                                        className={({ isActive }) =>
                                            (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                                    >
                                        <MobileSearchIconSvg className={styles.headerSecondNavLinkIconSvg}/>
                                    </NavLink>
                                    <NavLink
                                        to={"someRoute"}
                                        className={({ isActive }) =>
                                            (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                                    >
                                        <MobileShoppingCartSvg className={styles.headerSecondNavLinkIconSvg}/>
                                    </NavLink>
                                    <NavLink
                                        to={"someRoute"}
                                        className={({ isActive }) =>
                                            (classNames(styles.headerNavLink, isActive ? styles.active : styles.disActive))}
                                    >
                                        <MobileUserIconSvg className={styles.headerSecondNavLinkIconSvg}/>
                                    </NavLink>
                                </nav>
                            </div>
                            <div className={styles.headerMobileSecondWrapper}>
                                <p className={styles.paragraph}>Ваш город</p>
                                <div className={styles.city}>
                                    <CityNavSvg/>
                                    <p className={styles.cityText}>Краснодар</p>
                                </div>
                            </div>

                            <MobileMenu isHideMobileMenu={isHideMobileMenu}/>

                        </div>
                    </div>
                </div>

                <Catalogue isHideCatalogue={isHideCatalogue}/>

            </header>


            <main className={styles.main}>
                <div className={styles.mainWrapper}>
                    <Outlet/>
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export {Navigation}