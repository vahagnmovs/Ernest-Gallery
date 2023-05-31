import styles from "@/styles/mobileHeader.module.css";
import React, {useState} from "react";
import {useRouter} from "next/router";
import Sheet from 'react-modal-sheet';
import Link from "next/link";

const MobileHeader = () => {
    const router = useRouter();
    const [isOpen, setOpen] = useState(false);
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
            <div className={styles.mobile}>
                <Sheet isOpen={isOpen} onClose={() => setOpen(false)} detent="content-height">
                    <Sheet.Container style={{
                        background: "#5B4856",
                        borderRadius: "0"
                    }} >
                        <Sheet.Header />
                        <Sheet.Content>
                            <div className={styles.footerLinks}>
                                <Link className={styles.footerLink} href={'/'}>Home</Link>
                                <Link className={styles.footerLink} href={'/gallery'}>Gallery</Link>
                                <Link className={styles.footerLink} href={'/prices'}>Prices</Link>
                                <Link className={styles.footerLink} href={'/contact'}>Contact me</Link>
                                <Link className={styles.footerLink2} href={'/about'}>About me</Link>
                            </div>
                        </Sheet.Content>
                    </Sheet.Container>
                    <Sheet.Backdrop />
                </Sheet>
                <div className={styles.mobileLogoContainer}>
                    <span onClick={() => router.push("/")} className={styles.headerText}>Ernest</span>
                    <img className={styles.mobileLogo} src={"/logo/logoMobile.png"} alt=""/>
                    <span onClick={() => router.push("/")} className={styles.headerText}>Gallery</span>
                </div>
                <svg onClick={() => setOpen(true)} width="35" height="38" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8.5L22 8.5" stroke="#F6E5F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 14.5L22 14.5" stroke="#F6E5F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 20.5L22 20.5" stroke="#F6E5F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </>

    );
};

export default MobileHeader;