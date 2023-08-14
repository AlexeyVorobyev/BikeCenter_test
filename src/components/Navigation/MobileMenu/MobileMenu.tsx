import React from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import {catalogueMenuData, CatalogueMenuItem} from "./assets/catalogueMenu";
import {ReactComponent as ArrowSvg} from "./assets/arrow.svg";
const MobileMenu = ({isHideMobileMenu} : {isHideMobileMenu:boolean}) => {

    const CatalogueMenuItem = ({item} : {item:CatalogueMenuItem}) => {
        return (
            <div className={styles.catalogueMenuItem}>
                <div className={styles.itemImageContainer}>
                    {item.imgSrc !== undefined && <img className={styles.itemImage} src={item.imgSrc} alt={""}/>}
                </div>
                <p className={
                    classNames(
                        styles.itemTitle,
                        item.type === "service" ? styles.itemTitleService : styles.itemTitleItem,
                    )
                }>{item.name}</p>
                <ArrowSvg className={styles.itemArrowSvg}/>
            </div>
        )
    }

    return (
        <div className={classNames(styles.mobileMenu, isHideMobileMenu ? styles.mobileMenuHidden : styles.mobileMenuShow)}>
            <div className={styles.selector}>
                <button className={classNames(styles.selectButton,styles.active)}>
                    <p className={styles.selectButtonText}>Каталог</p>
                </button>
                <button className={styles.selectButton}>
                    <p className={styles.selectButtonText}>Бренды</p>
                </button>
            </div>
            <div className={styles.catalogueMenu}>
                {catalogueMenuData.map((item:CatalogueMenuItem) => <CatalogueMenuItem item={item} key={item.id}/>)}
            </div>
        </div>
    )
}

export {MobileMenu}