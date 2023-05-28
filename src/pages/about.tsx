import React from 'react';
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutMe from "@/components/aboutMe";
import styles from "@/styles/homoe.module.css";
import MobileHeader from "@/components/mobileHeader";

const AboutPage = () => {
    return (
        <>
            <div className={styles.desktop}>
                <Header/>
                <Navbar navId={5}/>
            </div>

            <MobileHeader />
            <AboutMe/>
            <Footer/>
        </>
    );
};

export default AboutPage;