import type React from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PricingTierProps {
  name: string
  price: string | React.ReactNode
  description: string
  features: string[]
  popular?: boolean
  buttonText: string
}

function PricingTier({ name, price, description, features, popular, buttonText }: PricingTierProps) {
  return (
    <div
      className={`rounded-xl p-6 ${
        popular ? "bg-[#1a2a3a] border-blue-500/30" : "bg-[#0a1428] border-[#1e2d3d]"
      } border relative`}
    >
      {popular && <Badge className="absolute -top-2 right-6 bg-blue-600 hover:bg-blue-700">Popular</Badge>}
      <h3 className="text-lg font-medium text-white mb-1">{name}</h3>
      <div className="flex items-baseline mb-1">
        <span className="text-3xl font-bold text-white">{price}</span>
        <span className="text-sm text-gray-400 ml-1">/monthly</span>
      </div>
      <p className="text-xs text-gray-400 mb-4">{description}</p>
      <Button className={`w-full mb-6 ${popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-800 hover:bg-gray-700"}`}>
        {buttonText}
      </Button>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-4 w-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function PricingSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#050a14] to-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Explore all plans</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingTier
            name="Starter"
            price="$0"
            description="Perfect for creative workflow and motion graphics."
            buttonText="Sign Up with Enterprise"
            features={[
              "Unlimited files",
              "Unlimited editors",
              "Export video, GIF, JPEG",
              "720p-30fps",
              "Import from Figma",
            ]}
          />
          <PricingTier
            name="Professional"
            price="$20"
            description="Perfect for creative workflow and motion graphics."
            buttonText="Sign Up with Professional"
            popular={true}
            features={[
              "Everything in Free",
              "Unlimited folders",
              "No watermark",
              "HD export in 4K, 120fps",
              "Team Boards",
            ]}
          />
          <PricingTier
            name="Enterprise"
            price={<span>Custom</span>}
            description="Perfect for creative workflow and motion graphics."
            buttonText="Get Quote"
            features={[
              "Everything in Studio",
              "Single sign-on (SSO)",
              "Pre-release features",
              "Personalized demo",
              "Priority support",
            ]}
          />
        </div>
      </div>
    </section>
  )
}
