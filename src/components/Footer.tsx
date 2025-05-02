import type React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
      bg-black 
      text-white 
      px-6 
      py-12 
      md:px-12 
      border-t 
      border-[1px] 
      [border-image-source:linear-gradient(90deg,#192235_0%,#0059FF_40%,#6FADFF_50%,#0059FF_60%,#192235_100%)] 
      [border-image-slice:1]
    "
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo and Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 40 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 12C16 9.79086 17.7909 8 20 8C22.2091 8 24 9.79086 24 12C24 14.2091 22.2091 16 20 16C17.7909 16 16 14.2091 16 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M24 12C24 9.79086 25.7909 8 28 8C30.2091 8 32 9.79086 32 12C32 14.2091 30.2091 16 28 16C25.7909 16 24 14.2091 24 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <span className="text-lg font-medium">Animify</span>
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <p>1234 Innovation Blvd, Suite 567</p>
              <p>Tech City, TC 67890, United States</p>
              <p className="pt-2">(555) 123-4567</p>
              <p className="pt-2">
                <a
                  href="mailto:contact@animify.com"
                  className="hover:text-white hover:underline"
                >
                  contact@animify.com
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Links - First Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">
              <span className="invisible">Navigation</span>
            </h3>
            <nav className="flex flex-col space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/404">404</FooterLink>
            </nav>
          </div>

          {/* Navigation Links - Second Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Other Pages</h3>
            <nav className="flex flex-col space-y-3">
              <FooterLink href="/login">Log In</FooterLink>
              <FooterLink href="/forgot-password">Forgot Password</FooterLink>
              <FooterLink href="/terms">Terms & Services</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </nav>
          </div>

          {/* Navigation Links - Third Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">My Work</h3>
            <nav className="flex flex-col space-y-3">
              <FooterLink href="https://dribbble.com" external>
                Dribbble
              </FooterLink>
              <FooterLink href="https://upwork.com" external>
                Upwork
              </FooterLink>
              <FooterLink href="https://awwwards.com" external>
                Awwwwards
              </FooterLink>
              <FooterLink href="https://x.com" external>
                X
              </FooterLink>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

function FooterLink({ href, children, external = false }: FooterLinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-400 transition-colors hover:text-white hover:underline"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="text-sm text-gray-400 transition-colors hover:text-white hover:underline"
    >
      {children}
    </Link>
  );
}
