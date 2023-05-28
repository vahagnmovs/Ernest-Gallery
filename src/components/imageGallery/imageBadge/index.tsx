import React from 'react';
import styles from "@/styles/imageBadge.module.css"

interface IImageBadge {
    id: number,
    src: string
}

const ImageBadge = ({id, src}: IImageBadge) => {
    return (
        <div className={styles.imageBadgeContainer}>
            <img src={src} alt=""/>
        </div>
    );
};

export default ImageBadge;