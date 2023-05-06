import styles from "@/styles/feedback.module.css"
import React from "react";
import FeedbackBadge from "@/components/feedback/feedbackBadge";
const Feedback = () => {
    return (
        <div className={styles.feedbackContainerWrapper}>
            <div className={styles.feedbackContainerContainer}>
                <div className={styles.feedbackHeaderContainer}>
                    <span className={styles.feedbackHeader}>What Our Customers Say</span>
                </div>
                <div className={styles.feedbackBadgesContainer}>
                    <FeedbackBadge />
                    <FeedbackBadge />
                    <FeedbackBadge />
                </div>
            </div>
        </div>
    );
};

export default Feedback;