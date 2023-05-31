import styles from '@/styles/header.module.css'
import Link from "next/link";
import React, {useState} from "react";

const Header = () => {
    const [closedHelp, setClosedHelp] = useState(true)

    return (
        <>
            {
                closedHelp && <div className={styles.infoContainer}>
                    <div>
                        <span className={styles.info}>Need Help? call +1 818 221-1170 or contact me by </span>
                        <Link className={styles.infoLink} href={'/contact'}>email</Link>
                    </div>
                    <svg onClick={() => setClosedHelp(false)} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5L23 23" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 23.0005L23 5.00049" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            }
            <div className={styles.headerContainer}>
                <img className={styles.logo} src="/logo/ernestLogo3.png" alt="logo"/>
                <span className={styles.headerText}>Handmade Paintings From Photos</span>
            </div>
        </>

    );
};

export default Header;