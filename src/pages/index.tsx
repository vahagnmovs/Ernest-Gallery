import Header from "../components/header";
import Navbar from "../components/navbar";
import CoverImage from "@/components/coverImage";
import Gallery from "@/components/gallery";
import WhyYouLoveMe from "@/components/whyYouLoveMe";
import SlidesMolbert from "@/components/slideMolbert";
import Sizes from "@/components/sizes";
import Feedback from "@/components/feedback";
import Footer from "@/components/footer";
import styles from "@/styles/home.module.css"
import React from "react";
import MobileHeader from "@/components/mobileHeader";

export default function Home() {
    return (
        <>
            <div className={styles.desktop}>
                <Header/>
                <Navbar navId={0}/>
            </div>
            <MobileHeader />
            <CoverImage/>
            <Gallery />
            <WhyYouLoveMe />
            <SlidesMolbert />
            <Sizes />
            <Feedback />
            <Footer />
        </>

    )
}
