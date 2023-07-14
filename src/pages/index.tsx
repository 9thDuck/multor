import Features from "@/components/Features";
import FormAndBenefitsSection from "@/components/FormAndBenefitsSection";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import VideoSection from "@/components/VideoSection";
import About from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
 return (
  <main
   className={`min-h-screen flex-col items-center justify-centeroverflow-x-hidden`}
  >
   <Hero />
   <FormAndBenefitsSection />
   <VideoSection />
   <Reviews />
   <Features />
   <About />
   <Footer />
  </main>
 );
}
