import React, {useState} from 'react';
import styles from '@/styles/imageGallery.module.css';
import {gallery} from '@/data/gallery';
import ImageBadge from '@/components/imageGallery/imageBadge';

const ImageGallery: React.FC = () => {
    const [visibleImages, setVisibleImages] = useState<number>(4);
    const [filter, setFilter] = useState<string>('All');
    const [toggleDropDown, setToggleDropDown] = useState<boolean>(false);

    const firstHalf = gallery.slice(0, Math.ceil(gallery.length / 2));
    const secondHalf = gallery.slice(Math.ceil(gallery.length / 2));

    const [filteredFirstHalf, setFilteredFirstHalf] = useState([...firstHalf]);
    const [filteredSecondHalf, setFilteredSecondHalf] = useState([...secondHalf]);

    const visibleFirstHalf = filteredFirstHalf.slice(0, visibleImages);
    const visibleSecondHalf = filteredSecondHalf.slice(0, visibleImages);


    const loadMoreImages = (): void => {
        setVisibleImages((prevVisibleImages) => prevVisibleImages + 4);
    };

    const handleFilter = (filter: string): void => {
        setToggleDropDown(!toggleDropDown);

        if (filter === 'All') {
            setFilter('All');
            setFilteredFirstHalf(firstHalf);
            setFilteredSecondHalf(secondHalf);
            return;
        }

        if (filter === 'dryBrushes') {
            setFilter('Dry Brushes');
        }

        if (filter === 'oilPainting') {
            setFilter('Oil');
        }

        setFilteredFirstHalf(firstHalf.filter((image) => image.src.split('/').includes(filter)));
        setFilteredSecondHalf(secondHalf.filter((image) => image.src.split('/').includes(filter)));
    };

    return (
        <div className={styles.galleryContainerWrapper}>
            <span className={styles.info2}>GIVE BRIGHT EMOTIONS TO YOURSELF AND YOUR LOVED ONES</span>
            <div className={styles.show}>
                <span>Show:</span>
                <div className={styles.dropDown}>
                    <div onClick={() => setToggleDropDown(!toggleDropDown)} className={styles.selected}>
                        <span>{filter}</span>
                        {toggleDropDown ? (
                            <svg
                                width="12"
                                height="7"
                                viewBox="0 0 12 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.00145 -2.53199e-05C5.81329 -0.000310008 5.63283 0.0740432 5.49977 0.206944L0.198841 5.50641C0.0250636 5.68632 -0.0408868 5.94472 0.0252057 6.18601C0.0914412 6.42731 0.279892 6.6159 0.521203 6.68201C0.7625 6.74824 1.02088 6.68215 1.2008 6.50837L5.99924 1.71066L10.7991 6.50837C10.979 6.68215 11.2374 6.74825 11.4787 6.68201C11.72 6.61592 11.9086 6.42732 11.9747 6.18601C12.041 5.94472 11.9749 5.68633 11.8011 5.50641L6.50528 0.206944C6.37167 0.0736203 6.19034 -0.000878365 6.00162 -2.53199e-05L6.00145 -2.53199e-05Z"
                                    fill="#7A7A7A"
                                />
                            </svg>
                        ) : (
                            <svg
                                width="12"
                                height="7"
                                viewBox="0 0 12 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.99855 6.7073C6.18671 6.70758 6.36717 6.63323 6.50023 6.50033L11.8012 1.20086C11.9749 1.02096 12.0409 0.762552 11.9748 0.521263C11.9086 0.279966 11.7201 0.0913765 11.4788 0.0252653C11.2375 -0.0409698 10.9791 0.025123 10.7992 0.198901L6.00076 4.99661L1.20086 0.198901C1.02096 0.0251233 0.762553 -0.0409698 0.521263 0.0252653C0.279967 0.0913583 0.0913765 0.279952 0.0252653 0.521263C-0.0409698 0.762559 0.025123 1.02094 0.198901 1.20086L5.49472 6.50033C5.62833 6.63365 5.80966 6.70815 5.99838 6.7073H5.99855Z"
                                    fill="#7A7A7A"
                                />
                            </svg>
                        )}
                    </div>
                    {toggleDropDown && (
                        <div className={styles.dropDownSelects}>
                            <span onClick={() => handleFilter('All')}>All</span>
                            <span onClick={() => handleFilter('dryBrushes')}>Dry Brushes</span>
                            <span onClick={() => handleFilter('oilPainting')}>Oil</span>
                        </div>
                    )}
                </div>
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
            {(visibleFirstHalf.length < filteredFirstHalf.length || visibleSecondHalf.length < filteredSecondHalf.length) && (
                <button className={styles.loadMoreBtn} onClick={loadMoreImages}>
                    Load More
                </button>
            )}
        </div>
    );
};

export default ImageGallery;
