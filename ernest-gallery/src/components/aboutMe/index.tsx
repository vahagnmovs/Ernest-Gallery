import React from 'react';
import styles from "@/styles/about.module.css"

const AboutMe = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutWrapper}>
                <img src="/images/me.jpg" alt=""/>
                <div className={styles.aboutTexts}>
                    <span className={styles.aboutHeader}>Ernest Osipyan</span>
                    <span className={styles.aboutText}>
                    Graduated from the Academy of Arts in Yerevan. In 1992 I moved to Philadelphia where I
                    participated in two exhibitions. Since 1997 I have lived in Moscow. In 2000, I became a member of
                    the Art Foundation of Russia.For a long time I had students whom I taught drawing and painting
                    techniques.In 2014, I had my own art gallery, where paintings by other artists were also exhibited.
                    I have painted more than 2000 portraits and paintings that are in private collections in France,
                    Canada, USA, Argentina, Russia, Ukraine, Armenia, Italy, Spain, Austria, Greece. I currently live
                    in Los Angeles.
                </span>
                    <span className={styles.aboutText}>I became a member of <br/> INTERNATIONAL ARTS FUND <br/> MOSCOW ASSOCIATION OF ARTISTS.</span>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;