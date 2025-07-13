
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Destinations from "@/components/Destinations";
import TravelTips from "@/components/TravelTips";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <Destinations />
        <TravelTips />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
