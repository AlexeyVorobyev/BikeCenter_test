import React, {useEffect} from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import {catalogueMenuData, CatalogueMenuItem} from "./assets/catalogueMenu";
import {
    catalogueDetailedMenuData,
    CatalogueDetailedMenuItem,
    CatalogueDetailedMenuSubItem
} from "./assets/catalogueDetailedMenu";
import {ReactComponent as ArrowSvg} from "./assets/arrow.svg";

const Catalogue = ({isHideCatalogue} : {isHideCatalogue:boolean}) => {

    const CatalogueMenuItem = ({item} : {item:CatalogueMenuItem}) => {
        return (
            <div className={classNames(styles.catalogueMenuItem, item.id === activeCatalogueElem ? styles.activeCatalogueMenuItem : "")}>
                <div className={styles.itemImageContainer}>
                    {item.imgSrc !== undefined && <img className={styles.itemImage} src={item.imgSrc} alt={""}/>}
                </div>
                <p className={
                    classNames(
                        styles.itemTitle,
                        item.type === "service" ? styles.itemTitleService : styles.itemTitleItem,
                        item.id === activeCatalogueElem ? styles.activeTitleItem : ""
                    )
                }>{item.name}</p>
                <ArrowSvg className={styles.itemArrowSvg}/>
            </div>
        )
    }

    const CatalogueDetailedMenuItem = ({item} : {item:CatalogueDetailedMenuItem}) => {
        return (
            <div className={styles.catalogueDetailedMenuItem}>
                <div className={styles.itemTitleWrapper}>
                    <p className={styles.itemTitle}>{item.name}</p>
                    <div className={styles.itemImageContainer}/>
                </div>
                <div className={styles.subItemsContainer}>
                    {item.subItems.map((item:CatalogueDetailedMenuSubItem) => <p className={styles.subItem}>{item.name}</p>)}
                </div>
            </div>
        )
    }

    const CatalogueImage = () => {
        return (
            <div className={styles.catalogueImage}/>
        )
    }

    const activeCatalogueElem = 6;

    return (
        <div className={classNames(styles.catalogue, isHideCatalogue ? styles.catalogueHidden : styles.catalogueShow)}>
            <div className={styles.catalogueWrapper}>
                <div className={styles.catalogueMenu}>
                    {catalogueMenuData.map((item:CatalogueMenuItem) => <CatalogueMenuItem item={item} key={item.id}/>)}
                </div>
                <div className={styles.catalogueDetailedMenuFlex}>
                    {catalogueDetailedMenuData.map((item:CatalogueDetailedMenuItem) => <CatalogueDetailedMenuItem item={item} key={item.id}/>)}
                </div>
                <div className={styles.catalogueImages}>
                    {(() => {
                        const arr:any = [];
                        for (let i = 0; i < 6; i++) arr.push(<CatalogueImage key={i}/>);
                        return arr;
                    })()}
                </div>
            </div>
        </div>
    )
}

export {Catalogue}