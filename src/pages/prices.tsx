import React from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Prices from "@/components/prices";
import WhyYouLoveMe from "@/components/whyYouLoveMe";
import styles from "@/styles/homoe.module.css";
import MobileHeader from "@/components/mobileHeader";

const PricesPage = () => {
    return (
        <>
            <div className={styles.desktop}>
                <Header/>
                <Navbar navId={3}/>
            </div>
            <MobileHeader />
            <Prices />
            <WhyYouLoveMe />
            <Footer />
        </>
    );
};

export default PricesPage;