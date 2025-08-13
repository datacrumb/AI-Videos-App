import AnimationEditor from "@/components/AnimationEditor"
import HeroSection from "@/components/Hero"
import FeaturesSection from "../components/Features"
import WhyChooseUs from "@/components/WhyChooseUs"
import PricingSection from "@/components/Pricing"
import { MarqueeDemo } from "@/components/OurCustomer"
import GetStarted from "@/components/GetStarted"
import FAQSection from "@/components/FAQ"
import OurClients from "@/components/OurClients"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="container mx-auto">
        <HeroSection />
        <AnimationEditor />
        <OurClients />
        <FeaturesSection />
        <WhyChooseUs />
        <PricingSection />
        <FAQSection />
        <MarqueeDemo />
        <GetStarted />
      </div>
    </main>
  )
}
