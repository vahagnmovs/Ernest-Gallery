import styles from '@/styles/whyYouLoveMe.module.css'
import {whyLoveMes1} from '@/data/whyLoveMe1.js'
import {whyLoveMes2} from '@/data/whyLoveMe2.js'
import {whyLoveMes3} from '@/data/whyLoveMe3.js'
const WhyYouLoveMe = () => {
    return (
        <div className={styles.whyLoveMeContainer}>
            <div className={styles.whyLoveMeHeaderContainer}>
                <span className={styles.whyLoveMeHeader}>Why You'll Love Me</span>
            </div>
            <div className={styles.whyWrapperContainer}>
                <div className={styles.whyWrapper}>
                    {
                        whyLoveMes1.map(whyLoveMe => (
                            <span key={whyLoveMe.id}>{whyLoveMe.text}</span>
                        ))
                    }
                </div>
                <div className={styles.whyWrapper}>
                    {
                        whyLoveMes2.map(whyLoveMe => (
                            <span key={whyLoveMe.id}>{whyLoveMe.text}</span>
                        ))
                    }
                </div>
                <div className={styles.whyWrapper}>
                    {
                        whyLoveMes3.map(whyLoveMe => (
                            <span key={whyLoveMe.id}>{whyLoveMe.text}</span>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default WhyYouLoveMe;