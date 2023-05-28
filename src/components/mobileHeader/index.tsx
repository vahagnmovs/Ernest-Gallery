import styles from "@/styles/mobileHeader.module.css";
import React, {useState} from "react";
import {useRouter} from "next/router";
import Sheet from 'react-modal-sheet';
import Link from "next/link";

const MobileHeader = () => {
    const router = useRouter();
    const [isOpen, setOpen] = useState(false);

    return (
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
                            <Link className={styles.footerLink} href={'/about'}>About me</Link>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
            <span onClick={() => router.push("/")} className={styles.headerText}>Ernest Gallery</span>
            <svg onClick={() => setOpen(true)} width="35" height="38" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 8.5L22 8.5" stroke="#F6E5F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 14.5L22 14.5" stroke="#F6E5F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 20.5L22 20.5" stroke="#F6E5F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
};

export default MobileHeader;