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
      <div className="mb-4 text-white">{icon}</div>
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

        <div className="bg-gray-950/65 rounded-xl p-8 border border-[#FFFFFF33]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature
              icon={<Monitor size={24} />}
              title="Seamless Video Creation"
              description="Generate 100-10,000+ personalized outreach videos in minutes—no steep learning curve."
            />
            <Feature
              icon={<Zap size={24} />}
              title="Boost Sales Productivity"
              description="Cut manual work and scale campaigns effortlessly, booking 2-3x more meetings."
            />
            <Feature
              icon={<Layout size={24} />}
              title="Fully Customizable Templates"
              description="Easily adapt videos with personalized names, logos, and details for each lead."
            />
            <Feature
              icon={<Headphones size={24} />}
              title="Always-On Support"
              description="24/7 assistance to help you launch, scale, and optimize your outreach campaigns."
            />
            <Feature
              icon={<Shield size={24} />}
              title="Enterprise-Grade Security"
              description="Your videos and lead data are protected with encrypted, cloud-secure storage."
            />
            <Feature
              icon={<Share2 size={24} />}
              title="High-Quality Video Delivery"
              description="Export and share videos across email, LinkedIn, WhatsApp, or your CRM in seconds."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
