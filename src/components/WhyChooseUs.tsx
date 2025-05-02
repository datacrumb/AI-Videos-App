import type React from "react";
import { Monitor, Zap, Layout, Headphones, Shield, Share2 } from "lucide-react";
import { GradientBlob } from "./ui/GradientBlob";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="mb-4 text-blue-400">{icon}</div>
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative pt-16 pb-24 px-4 overflow-x-clip">
      <div className="hidden md:block absolute inset-0 z-0 translate-x-[390px] translate-y-40">
        <GradientBlob colors={["#6B49FF", "#6B49FF"]} size={440} blur={80} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-satoshi text-white mb-2">Why choose us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl">
            Unlock the full potential of your business with exceptional features<br />
            and unmatched performance.
          </p>
        </div>

        <div className="[background-color:rgba(10,20,40,0.85)] rounded-xl p-8 border border-[#1e2d3d]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature
              icon={<Monitor size={24} />}
              title="Intuitive User Experience"
              description="A clean and simple interface designed for maximum ease and efficiency."
            />
            <Feature
              icon={<Zap size={24} />}
              title="Boost Productivity"
              description="Use our powerful tools to increase productivity."
            />
            <Feature
              icon={<Layout size={24} />}
              title="Customizable Templates"
              description="Get ready-made templates that you can customize for your projects."
            />
            <Feature
              icon={<Headphones size={24} />}
              title="24/7 Support"
              description="Access our support anytime and get intelligent, always available assistance."
            />
            <Feature
              icon={<Shield size={24} />}
              title="Data Security & Compliance"
              description="Secured and protected with the industry leading standards."
            />
            <Feature
              icon={<Share2 size={24} />}
              title="High-Quality Export"
              description="Share high-quality outputs in various download-size formats & formats."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
