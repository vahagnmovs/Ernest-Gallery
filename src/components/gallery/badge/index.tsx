import styles from '@/styles/galleryBadge.module.css'
import {useRouter} from "next/router";

interface IImage {
    paintType: string,
    image: string,
    url: string
}
const GalleryBadge = ({image, paintType, url}: IImage) => {
    const router = useRouter();

    return (
        <div onClick={() => router.push(url)} className={styles.galleryBadgeContainer}>
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