import styles from '@/styles/coverImage.module.css'

const CoverImage = () => {
    return (
        <div className={styles.coverImageContainer}>
            <img className={styles.coverImage} src="/images/coverImage.png" alt=""/>
            <div className={styles.turnBadgeTextWrapper}>
                <span className={styles.turnBadgeHeader}>Turn Your Favorite Photos Into Hand-Painted Portraits!</span>
                <div className={styles.turnBadgeTextContainer}>
                    <span className={styles.turnBadgeText}>✔ Fast production (from 3 days)</span>
                    <span className={styles.turnBadgeText}>✔ We coordinate the layout by e-mail</span>
                    <span className={styles.turnBadgeText}>✔ Orders of any complexity</span>
                </div>
                <button className={styles.turnBadgeButton}>CHECK PRICES</button>
            </div>
        </div>
    );
};

export default CoverImage;