import React from 'react';
import styles from "@/styles/homoe.module.css";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import MobileHeader from "@/components/mobileHeader";
import OilPainting from "@/components/oilPainting";
import Footer from "@/components/footer";

const DryBrushesPage = () => {
    return (
        <div>
            <div className={styles.desktop}>
                <Header/>
                <Navbar navId={0}/>
            </div>
            <MobileHeader />
            <OilPainting />
            <Footer />
        </div>
    );
};

export default DryBrushesPage;