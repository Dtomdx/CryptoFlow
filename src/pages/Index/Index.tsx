
import Footer from "@/components/Footer/Footer"
import Faq from "./components/Faq"
import Features from "./components/Features"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"


const Index = () => {
    return (
        <div className={`max-w-7xl pt-48 px-6 mx-auto`}>
            <Hero/>
            <Features/>
            <HowItWorks/>
            <Testimonials/>
            <Pricing/>
            <Faq/>
            <Footer/>
        </div>
    )
}

export default Index