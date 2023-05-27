import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhyYouLoveMe from "@/components/whyYouLoveMe";

const QuestionsPage = () => {
    return (
        <>
            <Header />
            <Navbar navId={0}/>
            <WhyYouLoveMe />
            <Footer />
        </>
    );
};

export default QuestionsPage;