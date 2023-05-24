import styles from '@/styles/singleSlide.module.css'

interface ISlideSingle {
    id?: number,
    image: string
}

const SlideSingle = ({image}: ISlideSingle) => {
    return (
        <div className={styles.slideSingleContainer}>
            <img src={image} alt=""/>
        </div>
    );
};

export default SlideSingle;