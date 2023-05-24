import styles from '@/styles/galleryBadge.module.css'

interface IImage {
    paintType: string,
    image: string
}
const GalleryBadge = ({image, paintType}: IImage) => {
    return (
        <div className={styles.galleryBadgeContainer}>
            <div className={styles.galleryBadgeImages}>
                <img src={image} alt=""/>
            </div>
            <button className={styles.galleryBadgeBottom}>
                {paintType}
            </button>
        </div>
    );
};

export default GalleryBadge;