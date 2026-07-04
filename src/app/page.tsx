import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import MapSpotlight from "@/components/MapSpotlight";
import PulseFeed from "@/components/PulseFeed";
import Moments from "@/components/Moments";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Vision from "@/components/Vision";
import BetaSignup from "@/components/BetaSignup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <MapSpotlight />
      <PulseFeed />
      <Moments />
      <Features />
      <HowItWorks />
      <Vision />
      <BetaSignup />
      <Footer />
    </main>
  );
}
