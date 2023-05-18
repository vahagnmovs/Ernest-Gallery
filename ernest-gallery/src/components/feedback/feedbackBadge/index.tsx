import styles from '@/styles/feedbackBadge.module.css'

interface IFeedbackBadge {
    name: string,
    text: string,
    location: string,
    photo: string
}

const FeedbackBadge = ({name, text, location, photo}: IFeedbackBadge) => {
    return (
        <div className={styles.feedbackBadgeContainer}>
            <div className={styles.feedbackBadgeTop}>
                <div className={styles.feedbackBadgeColor}>
                    <img className={styles.feedbackBadgeImage} src={photo} alt=""/>
                    <span className={styles.feedbackBadgeName}>{name}</span>
                </div>
                <span className={styles.feedbackBadgeText}>{text}</span>

            </div>
            <div className={styles.feedbackBadgeBottom}>
                <hr/>
                <span className={styles.feedbackBadgeText}>{location}</span>
            </div>

        </div>
    );
};

export default FeedbackBadge;