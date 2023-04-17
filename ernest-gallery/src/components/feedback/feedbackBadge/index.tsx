import styles from '@/styles/feedbackBadge.module.css'

const FeedbackBadge = () => {
    return (
        <div className={styles.feedbackBadgeContainer}>
            <div className={styles.feedbackBadgeColor}>
                <img className={styles.feedbackBadgeImage} src="/images/feedback/feedback1.jpg" alt=""/>
                <span className={styles.feedbackBadgeName}>Michelle Anderson</span>
            </div>
            <span className={styles.feedbackBadgeText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae eius expedita minima
                placeat quam ratione reprehenderit, sequi similique? Aspernatur, est fugiat id illo magnam
                neque sequi sint? Dolorem, impedit.</span>
            <hr/>
            <span className={styles.feedbackBadgeText}>Managing Director</span>
        </div>
    );
};

export default FeedbackBadge;