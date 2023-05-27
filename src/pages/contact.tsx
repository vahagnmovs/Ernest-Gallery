import React from 'react';
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactMe from "@/components/contactMe";

const ContactPage = () => {
    return (
        <>
            <Header/>
            <Navbar navId={4}/>
            <ContactMe/>
            <Footer/>
        </>
    );
};

export default ContactPage;