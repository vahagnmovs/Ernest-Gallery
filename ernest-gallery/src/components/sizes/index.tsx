import styles from "@/styles/sizes.module.css"
import React from "react";

const Sizes = () => {
    return (
        <div className={styles.sizesContainerWrapper}>
            <div className={styles.sizesWrapWrapper}>
                <div className={styles.sizesHeaderContainer}>
                    <span className={styles.sizesHeader}>Size and Price</span>
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

                    <div className={styles.sizesSize}>
                        <div className={styles.sizesCostWrapper}>
                            <span className={styles.sizesCostText}>1 person</span>
                            <img className={styles.sizesCostQuantity2} src="/images/sizes/size6.svg" alt=""/>
                            <span className={styles.sizesCostHeader}>16 x 20 inch</span>
                            <span className={styles.sizesCostText}>Dry Brash B/W 350$</span>
                            <span className={styles.sizesCostText}>Dry Brash Color 500$</span>
                        </div>
                    </div>
                    <div className={styles.sizesSize}>
                        <div className={styles.sizesCostWrapper}>
                            <span className={styles.sizesCostText}>1 person</span>
                            <img className={styles.sizesCostQuantity2} src="/images/sizes/size6.svg" alt=""/>
                            <span className={styles.sizesCostHeader}>24 x 36 inch</span>
                            <span className={styles.sizesCostText}>Dry Brash B/W 500$</span>
                            <span className={styles.sizesCostText}>Dry Brash Color 900$</span>
                        </div>
                    </div>
                    <div className={styles.sizesSize}>
                        <div className={styles.sizesCostWrapper}>
                            <span className={styles.sizesCostText}>2 persons</span>
                            <img className={styles.sizesCostQuantity} src="/images/sizes/couplePart.jpg" alt=""/>
                            <span className={styles.sizesCostHeader}>24 x 36 inch</span>
                            <span className={styles.sizesCostText}>Dry Brash B/W 600$</span>
                            <span className={styles.sizesCostText}>Dry Brash Color 1000$</span>
                        </div>
                    </div>
                    <div className={styles.sizesSize}>
                        <div className={styles.sizesCostWrapper}>
                            <span className={styles.sizesCostText}>2 persons</span>
                            <img className={styles.sizesCostQuantity} src="/images/sizes/couplePart.jpg" alt=""/>
                            <span className={styles.sizesCostHeader}>20 x 30 inch</span>
                            <span className={styles.sizesCostText}>Oil Painting 2000$</span>
                        </div>
                    </div>
                    <div className={styles.sizesSize}>
                        <div className={styles.sizesCostWrapper}>
                            <span className={styles.sizesCostText}>1 person</span>
                            <img className={styles.sizesCostQuantity} src="/images/sizes/singleMan.jpg" alt=""/>
                            <span className={styles.sizesCostHeader}>60 x 30 inch</span>
                            <span className={styles.sizesCostText}>Oil Painting 2000$</span>
                        </div>
                    </div>
                    <div className={styles.sizesSize}>
                        <div className={styles.sizesCostWrapper}>
                            <span className={styles.sizesCostText}>2 persons</span>

                            <img className={styles.sizesCostQuantity} src="/images/sizes/coupleWhole.jpg" alt=""/>
                            <span className={styles.sizesCostHeader}>72 x 48 inch</span>
                            <span className={styles.sizesCostText}>Oil Painting 4000$</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sizes;