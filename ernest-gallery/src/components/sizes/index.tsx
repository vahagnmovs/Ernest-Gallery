import {sizes} from "@/data/sizes"
import styles from "@/styles/sizes.module.css"
import React from "react";

const Sizes = () => {
    return (
        <div className={styles.sizesContainerWrapper}>
            <div className={styles.sizesHeaderContainer}>
                <span className={styles.sizesHeader}>Title For Section</span>
            </div>
            <div className={styles.sizesContainer}>
                {/*{*/}
                {/*    sizes.map(size => (*/}
                {/*        <div key={size.id} className={styles.sizesSizeWrapper}>*/}
                {/*            <img src={size.image} alt=""/>*/}
                {/*            <div className={styles.sizesCostWrapper}>*/}
                {/*                <span className={styles.sizesCostHeader}>30x40 sm</span>*/}
                {/*                <span className={styles.sizesCostText}>Печать от 1170 руб.</span>*/}
                {/*                <span className={styles.sizesCostText}>Маслом от 5880 руб.</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    ))*/}
                {/*}*/}

                <div className={styles.sizesSize1}>
                    <div className={styles.sizesCostWrapper}>
                        <span className={styles.sizesCostHeader}>16 x 20 inch</span>
                        <span className={styles.sizesCostText}>Dry Brash B/W 350$</span>
                        <span className={styles.sizesCostText}>Dry Brash Color 500$</span>
                    </div>
                </div>
                <div className={styles.sizesSize2}>
                    <div className={styles.sizesCostWrapper}>
                        <span className={styles.sizesCostHeader}>30 x 40 inch</span>
                        <span className={styles.sizesCostText}>Dry Brash B/W 500$</span>
                        <span className={styles.sizesCostText}>Dry Brash Color 900$</span>
                    </div>
                </div>
                <div className={styles.sizesSize3}>
                    <div className={styles.sizesCostWrapper}>
                        <span className={styles.sizesCostHeader}>20 x 30 inch</span>
                        <span className={styles.sizesCostText}>Oil Painting 2000$</span>
                    </div>
                </div>
                <div className={styles.sizesSize4}>
                    <div className={styles.sizesCostWrapper}>
                        <span className={styles.sizesCostHeader}>60 x 30 inch</span>
                        <span className={styles.sizesCostText}>Oil Painting 2000$</span>
                    </div>
                </div>
                <div className={styles.sizesSize5}>
                    <div className={styles.sizesCostWrapper}>
                        <span className={styles.sizesCostHeader}>72 x 48 inch</span>
                        <span className={styles.sizesCostText}>Oil Painting 4000$</span>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Sizes;