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
                    I was graduated from the Yerevan Academy of Fine Arts in 1991. Next year, I moved to Philadelphia,
                    USA, where I participated in 2 exhibitions. I painted a multi-figure composition on the walls
                    of the Holy Trinity Armenian Church. Also, I painted a mural with a composition of two angels
                    in the interior of the St. Gregory Armenian Apostolic Church Philadelphia. Since 2000, I’m a
                    member of the International Arts Fund Moscow Association of Artists. For a long time, I had
                    students, whom I taught drawing and painting techniques. In 2014, I had my own Art Gallery,
                    where other artists’ paintings were also exhibited. I’ve painted more than 2,000 portraits and
                    paintings that are in private collections in Algeria, Argentina, Armenia, Austria, Belarus,
                    Bulgaria, Canada, China, France, Germany, Greece, Italy, Japan, Russia, Spain, United Kingdom,
                    Ukraine, and the United States. I currently live in Los Angeles.
                </span>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;