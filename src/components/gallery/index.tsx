import styles from '@/styles/gallery.module.css'
import GalleryBadge from "@/components/gallery/badge";
const Gallery = () => {
    return (
        <div className={styles.galleryContainer}>
            <div className={styles.galleryWrapper}>
                <div className={styles.galleryHeaderContainer}>
                    <span className={styles.galleryHeader}>Handmade Paintings From Photos</span>
                </div>
                <div className={styles.galleryBadgesContainer}>
                    <GalleryBadge
                        paintType={'Dry Brushes'}
                        image={'/images/galleryImage1.png'}
                    />
                    <GalleryBadge
                        paintType={'Oil Paintings'}
                        image={'/images/galleryImage2.png'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;