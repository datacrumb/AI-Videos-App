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
              <span className="text-2xl font-medium">Animify</span>
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
