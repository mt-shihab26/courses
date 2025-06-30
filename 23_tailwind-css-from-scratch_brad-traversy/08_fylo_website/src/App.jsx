import EarlyAccessSection from "./pages/EarlyAccessSection.jsx";
import FeatureSection from "./pages/FeatureSection.jsx";
import FooterSection from "./pages/FooterSection.jsx";
import HeaderSection from "./pages/HeaderSection.jsx";
import HeroSection from "./pages/HeroSection.jsx";
import ProductiveSection from "./pages/ProductiveSection.jsx";
import TestimonialSection from "./pages/TestimonialSection.jsx";

const App = () => {
    return (
        <div>
            <HeaderSection />
            <HeroSection />
            <FeatureSection />
            <ProductiveSection />
            <TestimonialSection />
            <EarlyAccessSection />
            <FooterSection />
        </div>
    );
};

export default App;
