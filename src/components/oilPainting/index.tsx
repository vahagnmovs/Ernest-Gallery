import React, { useState } from 'react';
import styles from '@/styles/imageGallery.module.css';
import { gallery } from '@/data/gallery';
import ImageBadge from '@/components/imageGallery/imageBadge';

const dryBrushes = gallery.filter((image) => image.src.split('/').includes('oilPainting'))

const OilPainting = () => {
    const [visibleImages, setVisibleImages] = useState<number>(4);

    const firstHalf = dryBrushes.slice(0, Math.ceil(dryBrushes.length / 2));
    const secondHalf = dryBrushes.slice(Math.ceil(dryBrushes.length / 2));

    const visibleFirstHalf = firstHalf.slice(0, visibleImages);
    const visibleSecondHalf = secondHalf.slice(0, visibleImages);

    const loadMoreImages = (): void => {
        setVisibleImages((prevVisibleImages) => prevVisibleImages + 4);
    };

    return (
        <div className={styles.galleryContainerWrapper}>
            <span className={styles.info2}>GIVE BRIGHT EMOTIONS TO YOURSELF AND YOUR LOVED ONES</span>
            <span className={styles.info}>The cost of the painting includes a wooden stretcher and a natural canvas.</span>
            <div className={styles.galleryContainer}>
                <div className={styles.galleryImageBadges}>
                    {visibleFirstHalf.map((image) => (
                        <ImageBadge key={image.id} {...image} />
                    ))}
                </div>
                <div className={styles.galleryImageBadges}>
                    {visibleSecondHalf.map((image) => (
                        <ImageBadge key={image.id} {...image} />
                    ))}
                </div>
            </div>
            {(visibleFirstHalf.length < firstHalf.length || visibleSecondHalf.length < secondHalf.length) && (
                <button className={styles.loadMoreBtn} onClick={loadMoreImages}>
                    Load More
                </button>
            )}
        </div>
    );
};

export default OilPainting;
