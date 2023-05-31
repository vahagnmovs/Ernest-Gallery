import React, {useState} from 'react';
import styles from '@/styles/imageGallery.module.css';
import {gallery} from '@/data/gallery';
import ImageBadge from '@/components/imageGallery/imageBadge';

const dryBrushes = gallery.filter((image) => image.src.split('/').includes('dryBrushes'))

const DryBrushes = () => {
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

            <div className={styles.jocondaContainer}>
                <span className={styles.jocondaText}>
                    The technique of drybrush painting can be achieved with both water-based and oil-based media. With
                water-based media such as inks, acrylic paints, tempera paints or watercolor paints, the brush is
                usually dry or squeezed dry of all water. The brush is loaded with paint that is highly viscous or
                thick and then applied to a dry support. With other water-based media, the brush is loaded with paint
                then squeezed dry. When using oil-based media,such as oil paint, similar techniques are used, although
                instead of water, the brush is used dry or any oil or solvent is removed. Because oil paint has a longer
                drying time than water-based media, brushing over or blending drybrush strokes is often avoided to
                preserve the distinctive look of the drybrush painting technique.
                </span>
                <video autoPlay controls={true} muted loop className={styles.video}>
                    <source src="/videos/joconda.mp4"/>
                </video>
            </div>

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
            <div className={styles.buttonContainer}>
                {(visibleFirstHalf.length < firstHalf.length || visibleSecondHalf.length < secondHalf.length) && (
                    <button className={styles.loadMoreBtn} onClick={loadMoreImages}>
                        Load More
                    </button>
                )}
            </div>

        </div>
    );
};

export default DryBrushes;
