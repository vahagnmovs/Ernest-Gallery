import React from 'react';
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutMe from "@/components/aboutMe";

const AboutPage = () => {
    return (
        <>
            <Header/>
            <Navbar navId={5}/>
            <AboutMe/>
            <Footer/>
        </>
    );
};

export default AboutPage;