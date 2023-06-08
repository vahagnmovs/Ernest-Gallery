import React from 'react';
import styles from "@/styles/imageBadge.module.css"

interface IImageBadge {
    id: number,
    src: string,
    type?: string,
    badge: boolean
}

const ImageBadge = ({id, src, type, badge}: IImageBadge) => {
    return (
        <div className={styles.imageBadgeContainer}>
            <div className="box">
                <img src={src} alt=""/>
                {
                    badge &&
                    <div><span>SOLD</span></div>
                }

            </div>
            <span className={styles.imageType}>{type}</span>
        </div>
    );
};

export default ImageBadge;