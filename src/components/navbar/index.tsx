import styles from '@/styles/navbar.module.css'
import Link from "next/link";
const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarLinksContainer}>
                <Link href={'/'} className={styles.navbarLinks}>
                    HOME
                </Link>
                <Link href={'/gallery'} className={styles.navbarLinks}>
                    GALLERY
                </Link>
                <Link href={'/prices'} className={styles.navbarLinks}>
                    PRICES
                </Link>
                <Link href={'/contact'} className={styles.navbarLinks}>
                    CONTACT ME
                </Link>
                <Link href={'/about'} className={styles.navbarLinks}>
                    ABOUT ME
                </Link>
            </div>
        </div>
    );
};

export default Navbar;