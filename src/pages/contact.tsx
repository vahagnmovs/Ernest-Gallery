import React from 'react';
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactMe from "@/components/contactMe";
import styles from "@/styles/home.module.css";
import MobileHeader from "@/components/mobileHeader";

const ContactPage = () => {
    return (
        <>
            <div className={styles.desktop}>
                <Header/>
                <Navbar navId={4}/>
            </div>

            <MobileHeader />
            <ContactMe/>
            <Footer/>
        </>
    );
};

export default ContactPage;