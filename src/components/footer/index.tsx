import styles from '@/styles/footer.module.css'
import {useEffect, useState} from "react";
import validator from 'validator';
import Link from "next/link";
import {useRouter} from "next/router";
import emailjs from "emailjs-com";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [errorMsg, setErrorMsg] = useState("")
    const router = useRouter();

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
        const serviceId = 'service_dcnmrxk';
        const templateId = 'template_kcrvtdr';
        const userId = 'KQye7tT2_fV9EaWLn';

        const emailData = {
            to_email: 'ernestosipyannewsletter@gmail.com',
            from_email: email,
            message: "for newsletter",
        };

        emailjs.send(serviceId, templateId, emailData, userId)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setEmail('');
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
            });
    }

    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerTopContainer}>
                    <img className={styles.footerIcon} src="/icons/footer.svg" alt=""/>
                    <span className={styles.footerHeader}>NEWSLETTER</span>
                    <span className={styles.footerText}>Subscribe to my newsletter for updates and special offers!</span>
                    <div className={styles.footerNews}>
                        <input value={email} onChange={(e) => handleValidateEmail(e)} className={styles.footerInput} type="text"/>
                        <button
                            disabled={!!errorMsg || !email}
                            onClick={handleEmailForNews}
                            className={styles.footerBtn}
                        >SUBSCRIBE</button>
                    </div>
                    <span className={styles.error}>{errorMsg}</span>
                </div>
                <div className={styles.social}>
                    <img onClick={() => router.push('https://www.instagram.com/ernestosipyan')} src="/icons/instagram.svg" alt=""/>
                    <img onClick={() => router.push('https://www.facebook.com/profile.php?id=100090060194846&mibextid=LQQJ4d')} src="/icons/facebook.svg" alt=""/>
                </div>
                <div className={styles.footerLinks}>
                    <Link className={styles.footeLink} href={'/'}>Home</Link>
                    <Link className={styles.footeLink} href={'/gallery'}>Gallery</Link>
                    <Link className={styles.footeLink} href={'/prices'}>Prices</Link>
                    <Link className={styles.footeLink} href={'/contact'}>Contact me</Link>
                    <Link className={styles.footeLink} href={'/about'}>About me</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;