import Header from "../components/header";
import Navbar from "../components/navbar";
import CoverImage from "@/components/coverImage";
import Gallery from "@/components/gallery";
import WhyYouLoveMe from "@/components/whyYouLoveMe";
import SlidesMolbert from "@/components/slideMolbert";
import Sizes from "@/components/sizes";
import Feedback from "@/components/feedback";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <>
            <Header/>
            <Navbar navId={0}/>
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
