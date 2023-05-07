import React, {useState} from 'react';
import styles from "@/styles/prices.module.css";

const DryBrash = () => {

    const [selectedPersons, setSelectedPersons] = useState(1)

    return (
        <>
            <div className={styles.pricesSelect}>
                <div
                    onClick={() => setSelectedPersons(1)}
                    className={
                    `${styles.prices1Person} ${selectedPersons === 1 ? styles.selectedPerson : ""}`
                }
                >
                    <img src="/images/sizes/size6.svg" alt=""/>
                </div>
                <div
                    onClick={() => setSelectedPersons(2)}
                    className={
                    `${styles.prices2Person} ${selectedPersons === 2 ? styles.selectedPerson : ""}`
                }
                >
                    <img src="/images/couplePart-removebg-preview.png" alt=""/>
                </div>
            </div>
            <div className={styles.pricesCurrency}>
                <span className={styles.pricesCurrencyHeader}>Currency: USD</span>
                <span className={styles.pricesCurrencyHeader}>Price list for Dry Brash / {selectedPersons} Person</span>
            </div>
            {
                selectedPersons === 1 &&
                <div>
                    <div className={styles.pricesSizePrice}>
                        <span>Size</span>
                        <span>Price</span>
                    </div>
                    <div className={styles.pricesSizePrice}>
                        <span>16 x 20 inch Black and white</span>
                        <span>350$</span>
                    </div>
                    <div className={styles.pricesSizePrice}>
                        <span>16 x 20 inch Color</span>
                        <span>500$</span>
                    </div>
                    <div className={styles.pricesSizePrice}>
                        <span>24 x 36 inch Black and white</span>
                        <span>500$</span>
                    </div>
                    <div className={styles.pricesSizePrice}>
                        <span>24 x 36 inch color</span>
                        <span>900$</span>
                    </div>
                </div>
            }
            {
                selectedPersons === 2 &&
                <div>
                    <div className={styles.pricesSizePrice}>
                        <span>Size</span>
                        <span>Price</span>
                    </div>
                    <div className={styles.pricesSizePrice}>
                        <span>24 x 36 inch Black and white</span>
                        <span>600$</span>
                    </div>
                    <div className={styles.pricesSizePrice}>
                        <span>24 x 36 inch color</span>
                        <span>1000$</span>
                    </div>
                </div>
            }</>
    );
};

export default DryBrash;