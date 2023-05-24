import styles from "@/styles/feedback.module.css"
import React from "react";
import FeedbackBadge from "@/components/feedback/feedbackBadge";
import {feedbacks} from "@/data/feedback";
import feedbackBadge from "@/components/feedback/feedbackBadge";


const Feedback = () => {
    return (
        <div className={styles.feedbackContainerWrapper}>
            <div className={styles.feedbackContainerContainer}>
                <div className={styles.feedbackHeaderContainer}>
                    <span className={styles.feedbackHeader}>What Customers Say</span>
                </div>
                <div className={styles.feedbackBadgesContainer}>
                    {
                        feedbacks.map(feedback => (
                            <FeedbackBadge key={feedback.id} {...feedback} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Feedback;