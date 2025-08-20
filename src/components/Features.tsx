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
  imageClassName?: string;
  top?: boolean;
}

function FeatureCard({
  title,
  description,
  src,
  className = "",
  top = false,
  imageClassName = "",
}: FeatureCardProps) {
  return (
    <Card
      className={`gradient-card-alt overflow-hidden h-[400px] w-full rounded-lg flex flex-col ${className}`}>
      {top ? (
        <>
          <CardHeader className="pb-3 flex-shrink-0 space-y-2">
            <CardTitle className="text-white text-2xl">{title}</CardTitle>
            <CardDescription className="text-gray-400 text-xl">
              {description}
            </CardDescription>
            <button
              className="text-blue-400 items-center font-medium hover:text-blue-300 flex gap-1 text-xl cursor-pointer"
              onClick={() =>
                openWhatsApp({
                  message: whatsAppMessages.features(title),
                })
              }
            >
              Try it now <ArrowRight className="h-5 w-5 ml-1 mt-1.5" />
            </button>
          </CardHeader>
          <CardContent className="flex items-center justify-center flex-1 min-h-0">
            <Image
              src={src}
              alt={title}
              width={1000}
              height={1000}
              className={`h-full w-full object-contain ${imageClassName}`}
            />
          </CardContent>
        </>
      ) : (
        <>
          <CardContent className="flex items-center justify-center flex-1 min-h-0">
            <Image
              src={src}
              alt={title}
              width={1000}
              height={1000}
              className={`h-full w-full object-contain ${imageClassName}`}
            />
          </CardContent>
          <CardFooter className="pt-2 flex-shrink-0">
            <div className="w-full space-y-2">
              <CardTitle className="text-white text-2xl">{title}</CardTitle>
              <CardDescription className="text-gray-400 text-xl">
                {description}
              </CardDescription>
              <button
                className="text-blue-400 mt-4 font-medium hover:text-blue-300 flex gap-1 text-xl cursor-pointer items-center"
                onClick={() =>
                  openWhatsApp({
                    message: whatsAppMessages.features(title),
                  })
                }
              >
                Try it now <ArrowRight className="h-5 w-5 ml-1 mt-1.5" />
              </button>
            </div>
          </CardFooter>
        </>
      )}
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-6">
            <FeatureCard
              title="Boost Response Rates"
              description="Personalized videos outperform cold calls and emails, delivering up to 40% reply rates."
              src="/Icons/BoostResponseRates.png"
              className="h-full"
              imageClassName="max-h-[240px] max-w-[400px]"
              top={true}
            />
          </div>

          <div className="md:col-span-6">
            <FeatureCard
              title="Book More Meetings"
              description="Teams report 5x more meetings booked with video outreach compared to traditional methods."
              src="/Icons/BookMoreMeetings.png"
              className="h-full"
              imageClassName="max-h-[240px] max-w-[400px]"
              top={true}
            />
          </div>

          <div className="md:col-span-6">
            <FeatureCard
              title="Cut Outreach Costs"
              description="Send 1,000 personalized videos for just RS5,000—cheaper than SDR salaries or ads."
              src="/Icons/SaveCost.png"
              className="h-full"
              imageClassName="max-h-[240px] max-w-[400px]"
              top={false}
            />
          </div>

          <div className="md:col-span-6">
            <FeatureCard
              title="Stand Out Instantly"
              description="Unlike generic emails, videos build trust and leave a lasting impression."
              src="/Icons/StandOutInstantly.png"
              className="h-full"
              imageClassName="max-h-[240px] max-w-[400px]"
              top={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
