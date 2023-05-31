import React from 'react';
import styles from "@/styles/imageBadge.module.css"

interface IImageBadge {
    id: number,
    src: string,
    type?: string
}

const ImageBadge = ({id, src, type}: IImageBadge) => {
    return (
        <div className={styles.imageBadgeContainer}>
            <img src={src} alt=""/>
            <span className={styles.imageType}>{type}</span>
        </div>
    );
};

export default ImageBadge;