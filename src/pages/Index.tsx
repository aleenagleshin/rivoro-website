import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import VehicleSearch from "@/components/VehicleSearch";
import BestSellers from "@/components/BestSellers";
import PromoBanner from "@/components/PromoBanner";
import CategoryShowcase from "@/components/CategoryShowcase";
import Brands from "@/components/Brands";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background">
      {/* <TopBar /> */}
      <Header />
      <main>
        <HeroSlider />
       {/* <VehicleSearch /> */}
        <BestSellers />
        <PromoBanner />
        <CategoryShowcase />
        <Brands />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
