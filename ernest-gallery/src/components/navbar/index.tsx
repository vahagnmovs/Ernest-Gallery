import styles from '@/styles/navbar.module.css'
import Link from "next/link";
const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarLinksContainer}>
                <Link href={'/'} className={styles.navbarLinks}>
                    HOME
                </Link>
                <Link href={'/'} className={styles.navbarLinks}>
                    GALLERY
                </Link>
                <Link href={'/prices'} className={styles.navbarLinks}>
                    PRICES
                </Link>
                <Link href={'/questions'} className={styles.navbarLinks}>
                    QUESTIONS
                </Link>
                <Link href={'/'} className={styles.navbarLinks}>
                    GET IN TOUCH
                </Link>
            </div>
        </div>
    );
};

export default Navbar;