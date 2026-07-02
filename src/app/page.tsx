import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import MapSpotlight from "@/components/MapSpotlight";
import AppShowcase from "@/components/AppShowcase";
import HowItWorks from "@/components/HowItWorks";
import Vision from "@/components/Vision";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <MapSpotlight />
      <AppShowcase />
      <HowItWorks />
      <Vision />
      <FinalCTA />
      <Footer />
    </main>
  );
}
