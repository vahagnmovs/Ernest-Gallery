import React from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ImageGallery from "@/components/imageGallery";

const GalleryPage = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <ImageGallery />
            <Footer />
        </div>
    );
};

export default GalleryPage;