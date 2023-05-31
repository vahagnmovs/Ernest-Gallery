import styles from "@/styles/prices.module.css"
import React, {useState} from "react";
import DryBrash from "@/components/prices/dryBrash";
import OilPainting from "@/components/prices/oilPainting";

const Prices = () => {

    const [select, setSelect] = useState(1)

    return (
        <div className={styles.pricesContainer}>
            <div className={styles.pricesWrapper}>
                <div className={styles.sizesHeaderContainer}>
                    <span className={styles.sizesHeader}>Size and Price</span>
                </div>
                <div className={styles.sizeChoose}>
                    <div className={styles.pricesBrushContainer}>
                        <span className={styles.pricesBrush}>DryBrush</span>
                        <div onClick={() => setSelect(1)}
                             className={select === 1 ? styles.sizeWrapper : styles.sizeWrapperOn}>
                            <img src="/images/galleryImage1.png" alt=""/>
                        </div>
                    </div>
                    <div className={styles.pricesBrushContainer}>
                        <span className={styles.pricesBrush}>Oil Painting</span>
                        <div onClick={() => setSelect(2)}
                             className={select === 2 ? styles.sizeWrapper : styles.sizeWrapperOn}>
                            <img src="/images/galleryImage2.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.pricesSelectContainer}>
                <span className={styles.pricesHeader}>Select style</span>
                {
                    select === 1 ?
                        <DryBrash />
                        : <OilPainting />
                }
            </div>
        </div>
    );
};

export default Prices;