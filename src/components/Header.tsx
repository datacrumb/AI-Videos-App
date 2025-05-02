"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileMenuSheet from "./MobileMenuSheet";

const NavLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Template",
    href: "/",
  },
  {
    name: "Pricing",
    href: "/",
  },
  {
    name: "About",
    href: "/",
  },
];

export default function Header() {
  return (
    <div className="flex items-center justify-center py-4 z-10">
      <header className="relative w-full max-w-xl bg-black text-white border border-blue-900 rounded-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Bar */}
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
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
            <nav className="hidden md:flex md:space-x-10">
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
            <div className="flex items-center justify-center gap-4">
            <MobileMenuSheet />
              <Button
                className="text-white px-4 py-2 bg-blue-500/25 rounded-lg shadow-[inset_0_0_10px_0_#0099FF]"
                size="sm"
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
