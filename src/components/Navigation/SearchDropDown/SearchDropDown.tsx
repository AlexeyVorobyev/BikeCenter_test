import React from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import {ReactComponent as SearchIconSvg} from './assets/lupaSearch.svg';
import {ReactComponent as ArrowLeftSearchIConSvg} from './assets/arrow.svg';

const SearchDropDown = ({isHideSearch} : {isHideSearch:boolean}) => {
    return (
        <div className={classNames(styles.searchDropDownContainer,isHideSearch ? styles.dropDownHidden : styles.dropDownShow)}>
            <div className={styles.searchDropDownScrollBox}>
                <div className={styles.searchGroupContainer}>
                    <h3 className={styles.searchGroupTitle}>Велосипеды</h3>
                    <div className={styles.searchGroupElems}>
                        <div className={styles.searchGroupElem}>
                            <SearchIconSvg/>
                            <p className={styles.searchGroupElemText}>Электровелосипеды</p>
                            <ArrowLeftSearchIConSvg className={styles.searchGroupArrowSvg}/>
                        </div>
                        <div className={styles.searchGroupElem}>
                            <SearchIconSvg/>
                            <p className={styles.searchGroupElemText}>Электровелосипеды</p>
                            <ArrowLeftSearchIConSvg className={styles.searchGroupArrowSvg}/>
                        </div>
                        <div className={styles.searchGroupElem}>
                            <SearchIconSvg/>
                            <p className={styles.searchGroupElemText}>Электровелосипеды</p>
                            <ArrowLeftSearchIConSvg className={styles.searchGroupArrowSvg}/>
                        </div>
                        <div className={styles.searchGroupElem}>
                            <SearchIconSvg/>
                            <p className={styles.searchGroupElemText}>Электровелосипеды</p>
                            <ArrowLeftSearchIConSvg className={styles.searchGroupArrowSvg}/>
                        </div>
                        <div className={styles.searchGroupElem}>
                            <SearchIconSvg/>
                            <p className={styles.searchGroupElemText}>Электровелосипеды</p>
                            <ArrowLeftSearchIConSvg className={styles.searchGroupArrowSvg}/>
                        </div>
                    </div>
                </div>
                <div className={styles.searchGroupContainer}>
                    <h3 className={styles.searchGroupTitle}>Все разделы</h3>
                    <div className={styles.searchGroupElems}>
                        <div className={styles.searchGroupElem}>
                            <p className={styles.searchGroupElemText}>Электровелосипеды</p>
                            <ArrowLeftSearchIConSvg className={styles.searchGroupArrowSvg}/>
                        </div>
                        <div className={styles.searchGroupElem}>
                            <p className={styles.searchGroupElemText}>Электровелосипеды</p>
                            <ArrowLeftSearchIConSvg className={styles.searchGroupArrowSvg}/>
                        </div>
                        <div className={styles.searchGroupElem}>
                            <p className={styles.searchGroupElemText}>Электровелосипеды</p>
                            <ArrowLeftSearchIConSvg className={styles.searchGroupArrowSvg}/>
                        </div>
                    </div>
                </div>
                <div className={styles.searchGroupContainer}>
                    <div className={styles.searchGroupElems}>
                        <div className={styles.searchGroupElem}>
                            <div className={styles.searchGroupRectangle}></div>
                            <p className={styles.searchGroupElemText}>Велосипед TECH TEAM Fox 20 (2021) черно-синий</p>
                            <p className={styles.searchGroupElemPrice}>235 265 Р</p>
                        </div>
                        <div className={styles.searchGroupElem}>
                            <div className={styles.searchGroupRectangle}></div>
                            <p className={styles.searchGroupElemText}>Велосипед TECH TEAM Fox 20 (2021) черно-синий</p>
                            <p className={styles.searchGroupElemPrice}>235 265 Р</p>
                        </div>
                        <div className={styles.searchGroupElem}>
                            <div className={styles.searchGroupRectangle}></div>
                            <p className={styles.searchGroupElemText}>Велосипед TECH TEAM Fox 20 (2021) черно-синий</p>
                            <p className={styles.searchGroupElemPrice}>235 265 Р</p>
                        </div>
                        <div className={styles.searchGroupElem}>
                            <div className={styles.searchGroupRectangle}></div>
                            <p className={styles.searchGroupElemText}>Велосипед TECH TEAM Fox 20 (2021) черно-синий</p>
                            <p className={styles.searchGroupElemPrice}>235 265 Р</p>
                        </div>
                        <div className={styles.searchGroupElem}>
                            <div className={styles.searchGroupRectangle}></div>
                            <p className={styles.searchGroupElemText}>Велосипед TECH TEAM Fox 20 (2021) черно-синий</p>
                            <p className={styles.searchGroupElemPrice}>235 265 Р</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.searchDropDownFooter}>
                <button className={styles.searchDropDownFooterButton}>
                    <p className={styles.searchDropDownFooterButton}>Все результаты</p>
                </button>
            </div>
        </div>
    )
}

export {SearchDropDown}