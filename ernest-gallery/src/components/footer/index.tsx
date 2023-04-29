import styles from '@/styles/footer.module.css'
import {useEffect, useState} from "react";
import validator from 'validator';

const Footer = () => {
    const [email, setEmail] = useState("");
    const [errorMsg, setErrorMsg] = useState("")

    const handleValidateEmail = (e: any) => {
        const email = e.target.value;
        setEmail(email)

        if (validator.isEmail(email)) {
            setErrorMsg("")
        } else if(!email) {
            setErrorMsg("")
        } else {
            setErrorMsg("Enter correct email")
        }
    }

    const handleEmailForNews = () => {
        setEmail("")
    }

    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerTopContainer}>
                <img className={styles.footerIcon} src="/icons/footer.svg" alt=""/>
                <span className={styles.footerHeader}>NEWSLETTER</span>
                <span className={styles.footerText}>Subscribe to our newsletter for updates and special offers!</span>
                <div className={styles.footerNews}>
                    <input value={email} onChange={(e) => handleValidateEmail(e)} className={styles.footerInput} type="text"/>
                    <button onClick={handleEmailForNews} className={styles.footerBtn}>SUBSCRIBE</button>
                </div>
                <span className={styles.error}>{errorMsg}</span>
            </div>
        </div>
    );
};

export default Footer;