"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { openWhatsApp, whatsAppMessages } from "@/lib/whatsapp";

interface FeatureCardProps {
  title: string;
  description: string;
  src: string;
  className?: string;
}

function FeatureCard({ title, description, src, className = "" }: FeatureCardProps) {
  return (
    <Card 
      className={`overflow-hidden border-[#1e2d3d] h-[400px] w-full rounded-lg flex flex-col ${className}`}
      style={{
        background: 'radial-gradient(circle at 30% 20%, rgba(88, 28, 135, 0.3) 0%, rgba(59, 130, 246, 0.2) 25%, rgba(15, 23, 42, 0.8) 50%, rgba(8, 8, 15, 0.9) 100%)',
        border: '1px solid rgba(59, 107, 191, 0.3)',
        borderRadius: '8px',
        boxShadow: 'inset 0 0 20px rgba(88, 28, 135, 0.2), 0 0 20px rgba(59, 130, 246, 0.1)'
      }}
    >
        <CardHeader className="pb-3 flex-shrink-0">
          <CardTitle className="text-white text-lg">{title}</CardTitle>
          <CardDescription className="text-gray-400 text-xs">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center flex-1 min-h-0">
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="h-full w-full max-h-[280px] max-w-[500px] object-contain"
          />
        </CardContent>
        <CardFooter className="pt-2 flex-shrink-0">
          <Button
            variant="link"
            className="text-blue-400 p-0 h-auto font-medium hover:text-blue-300 hover:no-underline flex items-center gap-1 text-xs"
            asChild
            onClick={() => openWhatsApp({
              message: whatsAppMessages.features(title),
            })}
          >
            <Link href="/">
              Try it now <ArrowRight className="h-3 w-3 ml-1" />
            </Link>
          </Button>
        </CardFooter>
    </Card>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4" id="features">
      <div className="max-w-7xl mx-auto">
        {/* Feature Section */}
        <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <Button
              className="  
            border-[0.8px] border-[#6B49FF]
            [background:radial-gradient(77.66%_77.66%_at_50%_50%,#181620_15.9%,#1E1930_50.9%,#332C4F_100%)] 
            [box-shadow:inset_0px_-4px_12px_#6B49FF99,0px_16px_32px_#00000033] 
            text-white px-4 py-2 rounded-full mb-10"
            >
              Amazing
            </Button>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Features and benefits
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base text-gray-300 sm:text-lg md:text-xl">
              Create, customize, and collaborate effortlessly with our intuitive
              platform. From simple edits to complex designs, bring your vision
              to life in no time.
            </p>
          </div>
        </div>
        
        {/* Custom grid layout with specific sizing */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Top-left: Large card spanning 4 columns (66.7% width) */}
          <div className="md:col-span-4">
            <FeatureCard
              title="Boost Response Rates"
              description="Personalized videos outperform cold calls and emails, delivering up to 40% reply rates."
              src="/Images/boost.png"
              className="h-full"
            />
          </div>

          {/* Top-right: Small card spanning 2 columns (33.3% width) */}
          <div className="md:col-span-2">
            <FeatureCard
              title="Book More Meetings"
              description="Teams report 5x more meetings booked with video outreach compared to traditional methods."
              src="/Images/meetings.png"
              className="h-full"
            />
          </div>

          {/* Bottom-left: Equal size card spanning 3 columns */}
          <div className="md:col-span-3">
            <FeatureCard
              title="Cut Outreach Costs"
              description="Send 1,000 personalized videos for just ₹5,000—cheaper than SDR salaries or ads."
              src="/Images/cost.png"
              className="h-full"
            />
          </div>

          {/* Bottom-right: Equal size card spanning 3 columns */}
          <div className="md:col-span-3">
            <FeatureCard
              title="Stand Out Instantly"
              description="Unlike generic emails, videos build trust and leave a lasting impression."
              src="/Images/standout.png"
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
