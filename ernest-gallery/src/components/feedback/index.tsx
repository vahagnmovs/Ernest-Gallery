import styles from "@/styles/feedback.module.css"
import React from "react";
const Feedback = () => {
    return (
        <div className={styles.feedbackContainerWrapper}>
            <div className={styles.feedbackHeaderContainer}>
                <span className={styles.feedbackHeader}>What Our Customers Say</span>
            </div>
        </div>
    );
};

export default Feedback;