"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileMenuSheet from "./MobileMenuSheet";
import { openWhatsApp, whatsAppMessages } from "@/lib/whatsapp";

const NavLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "About",
    href: "/",
  },
];

export default function Header() {
  return (
    <div className="relative flex items-center justify-center py-4 z-10 overflow-x-clip">
      {/* Radial gradient background using Tailwind CSS - Centered */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-32 sm:h-40 md:h-52 opacity-90"
        style={{
          background: 'radial-gradient(ellipse 50% 100% at 50% 0%, rgba(0, 89, 255, 0.37) 0%, rgba(1, 1, 1, 0.32) 100%)'
        }}
      />
      <header className="relative w-full max-w-xl [background-color:rgba(0,0,0,0.25)] text-white border border-[#FFFFFF1F] rounded-full">
        {/* Grid SVG */}
        <svg
            className="absolute inset-0 stroke-white -translate-x-40"
          width="1035"
          height="995"
          viewBox="0 0 1035 995"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_1_553"
            maskUnits="userSpaceOnUse"
            x="0"
            y="-26"
            width="1035"
            height="1021"
          >
            <line
              x1="93.6264"
              y1="-26"
              x2="93.6264"
              y2="994.854"
              stroke="white"
              strokeOpacity="0.15"
            />
            <line
              x1="1035"
              y1="60.5535"
              x2="-5.53005e-08"
              y2="60.5534"
              stroke="white"
              strokeOpacity="0.15"
            />
            <line
              x1="187.932"
              y1="-26"
              x2="187.932"
              y2="994.854"
              stroke="white"
              strokeOpacity="0.15"
            />
            <line
              x1="1035"
              y1="154.859"
              x2="-5.53005e-08"
              y2="154.859"
              stroke="white"
              strokeOpacity="0.15"
            />
            <line
              x1="282.237"
              y1="-26"
              x2="282.237"
              y2="994.854"
              stroke="white"
              strokeOpacity="0.15"
            />
            <line
              x1="1035"
              y1="249.164"
              x2="-5.53005e-08"
              y2="249.164"
              stroke="white"
              strokeOpacity="0.15"
            />
            <line
              x1="376.542"
              y1="-26"
              x2="376.542"
              y2="994.854"
              stroke="white"
              strokeOpacity="0.15"
            />
            <line
              x1="1035"
              y1="343.469"
              x2="-5.53005e-08"
              y2="343.469"
              stroke="white"
              strokeOpacity="0.15"
            />
            <line
              x1="470.847"
              y1="-26"
              x2="470.847"
              y2="994.854"
              stroke="white"
              strokeOpacity="0.15"
            />
            <line
              x1="1035"
              y1="437.774"
              x2="-5.53005e-08"
              y2="437.774"
              stroke="white"
              strokeOpacity="0.15"
            />
            <line
              x1="565.153"
              y1="-26"
              x2="565.153"
              y2="994.854"
              stroke="white"
              strokeOpacity="0.15"
            />
            <line
              x1="1035"
              y1="532.08"
              x2="-5.53005e-08"
              y2="532.08"
              stroke="white"
              strokeOpacity="0.15"
            />
            <line
              x1="659.458"
              y1="-26"
              x2="659.458"
              y2="994.854"
              stroke="white"
              strokeOpacity="0.15"
            />
            <line
              x1="1035"
              y1="626.385"
              x2="-5.53005e-08"
              y2="626.385"
              stroke="white"
              strokeOpacity="0.15"
            />
            <line
              x1="753.763"
              y1="-26"
              x2="753.763"
              y2="994.854"
              stroke="white"
              strokeOpacity="0.15"
            />
            <line
              x1="1035"
              y1="720.69"
              x2="-5.53005e-08"
              y2="720.69"
              stroke="white"
              strokeOpacity="0.15"
            />
            <line
              x1="848.068"
              y1="-26"
              x2="848.068"
              y2="994.854"
              stroke="white"
              strokeOpacity="0.15"
            />
            <line
              x1="1035"
              y1="814.995"
              x2="-5.53005e-08"
              y2="814.995"
              stroke="white"
              strokeOpacity="0.15"
            />
            <line
              x1="942.374"
              y1="-26"
              x2="942.374"
              y2="994.854"
              stroke="white"
              strokeOpacity="0.15"
            />
            <line
              x1="1035"
              y1="909.301"
              x2="-5.53005e-08"
              y2="909.301"
              stroke="white"
              strokeOpacity="0.15"
            />
          </mask>
          <g mask="url(#mask0_1_553)">
            <ellipse
              cx="517.5"
              cy="511"
              rx="711.5"
              ry="642"
              fill="url(#paint0_radial_1_553)"
            />
            <path
              d="M517.5 -130.5C910.224 -130.5 1228.5 156.756 1228.5 511C1228.5 865.244 910.224 1152.5 517.5 1152.5C124.776 1152.5 -193.5 865.244 -193.5 511C-193.5 156.756 124.776 -130.5 517.5 -130.5Z"
              stroke="white"
              strokeOpacity="0.15"
            />
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_1_553"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(517.5 511) rotate(90) scale(642 711.5)"
            >
              <stop stopColor="white" stopOpacity="0.8" />
              <stop offset="0.874" stopColor="#010101" />
            </radialGradient>
          </defs>
        </svg>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Bar */}
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 z-10">
              <Link href="/" className="flex items-center">
                <svg
                  width="60"
                  height="25"
                  viewBox="0 0 60 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_580)">
                    <path
                      d="M14.2421 0.961426C11.8989 0.961426 9.65177 1.89223 7.99492 3.54909L2.58766 8.95635C0.930808 10.6132 0 12.8603 0 15.2035C0 20.0829 3.95549 24.0383 8.83485 24.0383C11.178 24.0383 13.4252 23.1075 15.082 21.4507L18.8222 17.7104C18.8222 17.7104 18.8223 17.7105 18.8222 17.7104L29.72 6.81266C30.5113 6.02136 31.5845 5.57681 32.7036 5.57681C34.5772 5.57681 36.1655 6.79789 36.7162 8.48763L40.1555 5.04832C38.5865 2.59092 35.8354 0.961426 32.7036 0.961426C30.3605 0.961426 28.1133 1.89223 26.4565 3.54909L11.8185 18.1871C11.0272 18.9784 9.95392 19.423 8.83485 19.423C6.50449 19.423 4.61538 17.5339 4.61538 15.2035C4.61538 14.0844 5.05993 13.0112 5.85123 12.2199L11.2585 6.81266C12.0498 6.02136 13.123 5.57681 14.2421 5.57681C16.1157 5.57681 17.704 6.79795 18.2547 8.48774L21.6941 5.0484C20.1251 2.59096 17.3739 0.961426 14.2421 0.961426Z"
                      fill="white"
                    />
                    <path
                      d="M30.28 18.1871C29.4887 18.9784 28.4154 19.423 27.2964 19.423C25.4231 19.423 23.8348 18.2022 23.284 16.5127L19.8448 19.952C21.4138 22.409 24.1648 24.0383 27.2964 24.0383C29.6395 24.0383 31.8867 23.1075 33.5435 21.4507L48.1815 6.81266C48.9728 6.02136 50.0461 5.57681 51.1651 5.57681C53.4955 5.57681 55.3846 7.46592 55.3846 9.79627C55.3846 10.9153 54.9401 11.9886 54.1488 12.7799L48.7415 18.1871C47.9502 18.9784 46.877 19.423 45.7579 19.423C43.8844 19.423 42.2961 18.202 41.7454 16.5123L38.3061 19.9517C39.8751 22.409 42.6262 24.0383 45.7579 24.0383C48.1011 24.0383 50.3482 23.1075 52.0051 21.4507L57.4123 16.0434C59.0691 14.3866 60 12.1394 60 9.79627C60 4.91692 56.0445 0.961426 51.1651 0.961426C48.822 0.961426 46.5748 1.89223 44.918 3.54909L30.28 18.1871Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_580">
                      <rect
                        width="60"
                        height="23.0769"
                        fill="white"
                        transform="translate(0 0.961426)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:space-x-10 z-10">
              {NavLinks.map((nav) => (
                <Link
                  key={nav.name}
                  href={nav.href}
                  className="text-sm font-medium text-white hover:text-gray-300"
                >
                  {nav.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="flex items-center justify-center gap-4 z-10">
              <MobileMenuSheet />
              <Button
                className="text-white px-4 py-2 bg-blue-500/25 hover:bg-blue-500/30 rounded-lg shadow-[inset_0_0_10px_0_#0099FF]"
                size="sm"
                onClick={() => openWhatsApp({
                  message: whatsAppMessages.general,
                })}
              >
                Try it now
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
