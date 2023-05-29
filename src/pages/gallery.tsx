import React from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ImageGallery from "@/components/imageGallery";
import styles from "@/styles/home.module.css";
import MobileHeader from "@/components/mobileHeader";

const GalleryPage = () => {
    return (
        <div>
            <div className={styles.desktop}>
                <Header/>
                <Navbar navId={2}/>
            </div>

            <MobileHeader />
            <ImageGallery />
            <Footer />
        </div>
    );
};

export default GalleryPage;