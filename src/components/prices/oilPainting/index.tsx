import React, {useState} from 'react';
import styles from "@/styles/prices.module.css";

const OilPainting = () => {
    const [selectedPersons, setSelectedPersons] = useState(1)


    return (
        <>
            <div className={styles.pricesSelect}>
                <div onClick={() => setSelectedPersons(1)}
                     className={`${styles.prices2Person} ${selectedPersons === 1 ? styles.selectedPerson : ""}`}
                >
                    <img src="/images/couplePart-removebg-preview.png" alt=""/>
                </div>
                <div onClick={() => setSelectedPersons(2)}
                     className={`${styles.prices3Person} ${selectedPersons === 2 ? styles.selectedPerson : ""}`}
                >
                    <img src="/images/singleMan-removebg-preview.png" alt=""/>
                </div>
                <div onClick={() => setSelectedPersons(3)}
                     className={`${styles.prices4Person} ${selectedPersons === 3 ? styles.selectedPerson : ""}`}
                >
                    <img src="/images/coupleWhole-removebg-preview.png" alt=""/>
                </div>
            </div>
            <div className={styles.pricesCurrency}>
                <span className={styles.pricesCurrencyHeader}>Currency: USD</span>
                <span className={styles.pricesCurrencyHeader}>Price list for Oil Painting / {selectedPersons === 2 ? 1 : 2} Person</span>
                <span className={styles.info}>The cost of the painting includes a wooden stretcher and a natural canvas.</span>
            </div>
            {
                selectedPersons === 1 &&
                <div>
                    <div className={styles.pricesSizePrice}>
                        <span>Size</span>
                        <span>Price</span>
                    </div>
                    <div className={styles.pricesSizePrice}>
                        <span>20 x 30 inch</span>
                        <span>2000$</span>
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
                        <span>60 x 30 inch</span>
                        <span>2000$</span>
                    </div>
                </div>
            }
            {
                selectedPersons === 3 &&
                <div>
                    <div className={styles.pricesSizePrice}>
                        <span>Size</span>
                        <span>Price</span>
                    </div>
                    <div className={styles.pricesSizePrice}>
                        <span>72 x 48 inch</span>
                        <span>4000$</span>
                    </div>
                </div>
            }
        </>
    );
};

export default OilPainting;