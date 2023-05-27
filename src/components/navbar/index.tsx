import styles from '@/styles/navbar.module.css'
import Link from "next/link";

interface INavbar {
    navId: number
}

const Navbar = ({navId}: INavbar) => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarLinksContainer}>
                <Link href={'/'} className={navId === 1 ?styles.navbarLinksActive : styles.navbarLinks}>
                    HOME
                </Link>
                <Link href={'/gallery'} className={navId === 2 ?styles.navbarLinksActive : styles.navbarLinks}>
                    GALLERY
                </Link>
                <Link href={'/prices'} className={navId === 3 ?styles.navbarLinksActive : styles.navbarLinks}>
                    PRICES
                </Link>
                <Link href={'/contact'} className={navId === 4 ?styles.navbarLinksActive : styles.navbarLinks}>
                    CONTACT ME
                </Link>
                <Link href={'/about'} className={navId === 5 ?styles.navbarLinksActive : styles.navbarLinks}>
                    ABOUT ME
                </Link>
            </div>
        </div>
    );
};

export default Navbar;