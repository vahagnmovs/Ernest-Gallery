import styles from '@/styles/footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerTopContainer}>
                <img className={styles.footerIcon} src="/icons/footer.svg" alt=""/>
                <span className={styles.footerHeader}>NEWSLETTER</span>
                <span>Subscribe to our newsletter for updates and special offers!</span>
                <div>
                    <input type="text"/>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;