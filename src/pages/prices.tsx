import React from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Prices from "@/components/prices";
import WhyYouLoveMe from "@/components/whyYouLoveMe";

const PricesPage = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Prices />
            <WhyYouLoveMe />
            <Footer />
        </>
    );
};

export default PricesPage;