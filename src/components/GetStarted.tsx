"use client";

import React from "react";
import { Button } from "./ui/button";
import { openWhatsApp, whatsAppMessages } from "@/lib/whatsapp";

const GetStarted = () => {
  return (
    <div>
      <div className="relative mt-20 text-center pb-10">
        {/* Radial gradient background using Tailwind CSS - Centered at bottom */}
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-32 sm:h-40 md:h-52 opacity-90"
          style={{
            background: 'radial-gradient(ellipse 50% 100% at 50% 100%, rgba(0, 89, 255, 0.37) 0%, rgba(1, 1, 1, 0.32) 100%)'
          }}
        />
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white z-10 relative">
          Get Started
        </h2>
        <p className="text-gray-100 mb-8 max-w-lg mx-auto z-10 relative">
          Holds no opinions on what's and how's. Build whatever makes sense to
          you.
        </p>
        <div className="flex justify-center gap-4 flex-wrap relative z-10">
          <Button
            size="lg"
            className="text-white px-4 py-2 bg-blue-500/25 hover:bg-blue-500/30 rounded-lg shadow-[inset_0_0_10px_0_#0099FF]"
            onClick={() => openWhatsApp({
              message: whatsAppMessages.getStarted,
            })}
          >
            Try it now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-[0.8px] border-gray-700 [border-image-slice:1] [background:linear-gradient(249.49deg,#1F1F1F_8.6%,#191919_19.56%,#0F0F0F_44.25%)] text-white hover:text-white px-4 py-2 rounded-lg"
            onClick={() => openWhatsApp({
              message: whatsAppMessages.demo,
            })}
          >
            Book your demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
