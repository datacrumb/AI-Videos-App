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

interface FeatureCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function FeatureCard({ title, description, children }: FeatureCardProps) {
  return (
    <Card className="bg-[#0a1428] border-[#1e2d3d] overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-white text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-400 text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">{children}</CardContent>
      <CardFooter>
        <Button
          variant="link"
          className="text-blue-400 p-0 h-auto font-medium hover:text-blue-300 hover:no-underline flex items-center gap-1 text-sm"
          asChild
        >
          <Link href="/">
            Try it now <ArrowRight className="h-3.5 w-3.5 ml-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Easy-to-Use Interface */}
          <FeatureCard
            title="Easy-to-Use Interface"
            description="Users can quickly start using the platform without needing a steep learning curve."
          >
            <div className="bg-[#0d1a2d] rounded-lg p-3 relative overflow-hidden">
              <div className="flex">
                <div className="w-1/3 pr-2">
                  <div className="bg-[#0a1428] rounded p-2 mb-2">
                    <div className="text-xs text-gray-400 mb-2">Layers</div>
                    <div className="bg-blue-900/30 rounded p-1.5 flex items-center mb-1">
                      <div className="w-3 h-3 rounded-sm bg-blue-500 mr-2"></div>
                      <span className="text-xs text-white">Scene</span>
                    </div>
                    <div className="rounded p-1.5 flex items-center mb-1">
                      <div className="w-3 h-3 rounded-sm border border-white mr-2"></div>
                      <span className="text-xs text-white">Rectangle</span>
                    </div>
                    <div className="rounded p-1.5 flex items-center mb-1">
                      <div className="w-3 h-3 rounded-sm border border-white mr-2"></div>
                      <span className="text-xs text-white">User Interface</span>
                    </div>
                    <div className="rounded p-1.5 flex items-center">
                      <div className="w-3 h-3 rounded-sm border border-white mr-2"></div>
                      <span className="text-xs text-white">Image</span>
                    </div>
                  </div>
                </div>
                <div className="w-2/3">
                  <div className="bg-[#0a1428] rounded p-2">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-xs text-gray-400">Design</div>
                      <div className="flex gap-1">
                        <div className="bg-blue-900/50 rounded w-5 h-5 flex items-center justify-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                        </div>
                        <div className="bg-[#1a2a3a] rounded w-5 h-5"></div>
                        <div className="bg-[#1a2a3a] rounded w-5 h-5"></div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="text-xs text-gray-400 mb-1">Layout</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <div className="text-xs text-gray-400">X</div>
                          <div className="bg-[#1a2a3a] rounded p-1 text-xs text-white">
                            187
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400">Y</div>
                          <div className="bg-[#1a2a3a] rounded p-1 text-xs text-white">
                            608
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400">Width</div>
                          <div className="bg-[#1a2a3a] rounded p-1 text-xs text-white">
                            480
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400">Height</div>
                          <div className="bg-[#1a2a3a] rounded p-1 text-xs text-white">
                            320
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400">Angle</div>
                          <div className="bg-[#1a2a3a] rounded p-1 text-xs text-white">
                            0°
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400">Radius</div>
                          <div className="bg-[#1a2a3a] rounded p-1 text-xs text-white">
                            0
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Opacity</div>
                      <div className="flex items-center">
                        <div className="flex-1 h-1 bg-[#1a2a3a] rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-full"></div>
                        </div>
                        <div className="text-xs text-white ml-2">100%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Collaboration Tools */}
          <FeatureCard
            title="Collaboration Tools"
            description="Explanation: If your product enables collaboration, emphasize the ability for teams to work together in real time."
          >
            <div className="flex justify-center items-center h-[180px] relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="text-center text-white text-sm font-medium mb-1">
                  Collaboration
                </div>
                <div className="relative w-[200px] h-[120px]">
                  {/* Center avatar */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
                      <Image
                        src="/Images/Group 4.png"
                        alt="Avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  {/* Top avatar */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center">
                      <Image
                        src="/Images/Group 3.png"
                        alt="Avatar"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  {/* Right avatar */}
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                      <Image
                        src="/Images/Group 7.png"
                        alt="Avatar"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  {/* Bottom avatar */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                      <Image
                        src="/Images/Group 23.png"
                        alt="Avatar"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  {/* Left avatar */}
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center">
                      <Image
                        src="/Images/Group 26.png"
                        alt="Avatar"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  {/* Connection lines */}
                  <div className="absolute inset-0 z-0">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 200 120"
                      className="opacity-30"
                    >
                      <line
                        x1="100"
                        y1="0"
                        x2="100"
                        y2="60"
                        stroke="#8B5CF6"
                        strokeWidth="1"
                      />
                      <line
                        x1="100"
                        y1="60"
                        x2="200"
                        y2="60"
                        stroke="#8B5CF6"
                        strokeWidth="1"
                      />
                      <line
                        x1="100"
                        y1="60"
                        x2="100"
                        y2="120"
                        stroke="#8B5CF6"
                        strokeWidth="1"
                      />
                      <line
                        x1="100"
                        y1="60"
                        x2="0"
                        y2="60"
                        stroke="#8B5CF6"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Secure Cloud Storage */}
          <FeatureCard
            title="Secure Cloud Storage"
            description="With cloud storage, users' projects are automatically saved, ensuring their data is never lost."
          >
            <div className="flex justify-center items-center h-[180px] relative">
              <div className="relative">
                {/* Main cloud icon */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                  </svg>
                </div>

                {/* Orbital elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute w-full h-full rounded-full border border-blue-500/20 animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute w-[140%] h-[140%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/10 animate-[spin_30s_linear_infinite]"></div>

                  {/* Security icon 1 */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 rounded-full bg-[#1a2a3a] border border-blue-500/30 flex items-center justify-center shadow-md shadow-blue-500/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          width="18"
                          height="11"
                          x="3"
                          y="11"
                          rx="2"
                          ry="2"
                        />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                  </div>

                  {/* Security icon 2 */}
                  <div className="absolute top-1/2 right-0 translate-x-1/2">
                    <div className="w-8 h-8 rounded-full bg-[#1a2a3a] border border-blue-500/30 flex items-center justify-center shadow-md shadow-blue-500/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      </svg>
                    </div>
                  </div>

                  {/* Security icon 3 */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="w-8 h-8 rounded-full bg-[#1a2a3a] border border-blue-500/30 flex items-center justify-center shadow-md shadow-blue-500/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="4" />
                        <line x1="21.17" x2="12" y1="8" y2="8" />
                        <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
                        <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
                      </svg>
                    </div>
                  </div>

                  {/* Security icon 4 */}
                  <div className="absolute top-1/2 left-0 -translate-x-1/2">
                    <div className="w-8 h-8 rounded-full bg-[#1a2a3a] border border-blue-500/30 flex items-center justify-center shadow-md shadow-blue-500/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="3"
                          rx="2"
                          ry="2"
                        />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Wide Integration Support */}
          <FeatureCard
            title="Wide Integration Support"
            description="The ability to integrate with third-party apps (e.g., Google Drive, Dropbox, Slack) is essential for users who rely on a suite of tools."
          >
            <div className="flex justify-center items-center h-[180px]">
              <div className="flex items-center gap-4">
                {/* Dropbox */}
                <div className="w-14 h-14 rounded-lg bg-[#0061FF] flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2L6 7l6 5-6 5 6 5 6-5-6-5 6-5z" />
                  </svg>
                </div>

                {/* Connector */}
                <div className="w-8 h-[2px] bg-gray-600"></div>

                {/* AWS */}
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#232F3E] to-[#232F3E] flex items-center justify-center shadow-lg shadow-blue-500/10">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <path d="M13.5 12.5L7 16v-7l6.5 3.5zM17 16l-6.5-3.5L17 9v7z" />
                  </svg>
                </div>

                {/* Connector */}
                <div className="w-8 h-[2px] bg-gray-600"></div>

                {/* Google */}
                <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center shadow-lg">
                  <div className="flex">
                    <div className="w-2 h-6 bg-blue-500 rounded-l-sm"></div>
                    <div className="w-2 h-6 bg-red-500"></div>
                    <div className="w-2 h-6 bg-yellow-500"></div>
                    <div className="w-2 h-6 bg-green-500 rounded-r-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
