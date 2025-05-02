import React from "react";
import { Button } from "./ui/button";

const GetStarted = () => {
  return (
    <div>
      <div className="relative mt-20 text-center pb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white z-10">
          Get Started
        </h2>
        <p className="text-gray-100 mb-8 max-w-lg mx-auto z-10">
          Holds no opinions on what's and how's. Build whatever makes sense to
          you.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            size="lg"
            className="text-white z-10 px-4 py-2 bg-blue-500/25 rounded-lg shadow-[inset_0_0_10px_0_#0099FF]"
          >
            Try it now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-[0.8px] z-10 border-gray-700 [border-image-slice:1] [background:linear-gradient(249.49deg,#1F1F1F_8.6%,#191919_19.56%,#0F0F0F_44.25%)] text-white hover:text-white px-4 py-2 rounded-lg"
          >
            Book your demo
          </Button>
        </div>
        <svg
          className="absolute inset-0 -translate-x-80 md:translate-x-0"
          width="1403"
          height="472"
          viewBox="0 0 1403 472"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            opacity="0.9"
            cx="701.5"
            cy="236"
            rx="701.5"
            ry="236"
            fill="url(#paint0_radial_1_499)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1_499"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(701.5 236) rotate(90) scale(245.854 654.819)"
            >
              <stop stopColor="#0059FF" stopOpacity="0.37" />
              <stop offset="1" stopColor="#010101" stopOpacity="0.32" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default GetStarted;
