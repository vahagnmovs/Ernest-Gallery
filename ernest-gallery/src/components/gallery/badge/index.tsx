import styles from '@/styles/galleryBadge.module.css'
const GalleryBadge = () => {
    return (
        <div className={styles.galleryBadgeContainer}>
            <div className={styles.galleryBadgeImages}>
                <img src="/images/galleryImage1.jpg" alt=""/>
            </div>
            <button className={styles.galleryBadgeBottom}>
                Dry Brushes
            </button>
        </div>
    );
};

export default GalleryBadge;