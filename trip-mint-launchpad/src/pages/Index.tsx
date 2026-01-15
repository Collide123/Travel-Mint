import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import AboutUs from "@/components/sections/AboutUs";
import Destinations from "@/components/sections/Destinations";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";
import FloatingSupport from "@/components/FloatingSupport";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <Destinations />
        <Testimonials />
      </main>
      <Footer />
      <FloatingSupport />
    </div>
  );
};

export default Index;
