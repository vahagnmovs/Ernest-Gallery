import styles from "@/styles/prices.module.css"
import React, {useState} from "react";

const Prices = () => {

    const [select, setSelect] = useState(false)

    return (
        <div className={styles.pricesContainer}>
            <div className={styles.pricesWrapper}>
                <div className={styles.sizesHeaderContainer}>
                    <span className={styles.sizesHeader}>Size and Price</span>
                </div>
                <div className={styles.sizeChoose}>
                    <div className={styles.pricesBrushContainer}>
                        <span className={styles.pricesBrush}>Dry Brushes</span>
                        <div onClick={() => setSelect(!select)}
                             className={select ? styles.sizeWrapper : styles.sizeWrapperOn}>
                            <img src="/images/galleryImage1.png" alt=""/>
                        </div>
                    </div>
                    <div className={styles.pricesBrushContainer}>
                        <span className={styles.pricesBrush}>Oil Painting</span>
                        <div onClick={() => setSelect(!select)}
                             className={!select ? styles.sizeWrapper : styles.sizeWrapperOn}>
                            <img src="/images/galleryImage2.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prices;