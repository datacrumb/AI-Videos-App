import type React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

interface PricingTierProps {
  name: string;
  price: string | React.ReactNode;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
}

function PricingTier({
  name,
  price,
  description,
  features,
  popular,
  buttonText,
}: PricingTierProps) {
  // Determine which gradient style to apply based on the plan name
  const getCardStyle = () => {
    if (popular) {
      return {
        background:
          "linear-gradient(180deg, #1B1430 0%, #0F0D16 50%, #1B1430 100%)",
        borderImageSource:
          "linear-gradient(90deg, #0D0F15 0%, #9A56FF 36.4%, #E5D3FF 50%, #9A56FF 63.9%, #0D0F15 100%)",
        borderTopWidth: "3.4px",
      };
    } else {
      // For non-popular plans
      return {
        background:
          "radial-gradient(43.69% 75.71% at 50% 44.52%, #10141A 0%, #0C121C 50%, #0A1017 100%)",
        borderImageSource:
          "linear-gradient(90deg, #192235 0%, #0059FF 30%, #6FADFF 50%, #0059FF 70%, #192235 100%)",
        borderTopWidth: "2.4px",
      };
    }
  };

  const cardStyle = getCardStyle();

  return (
    <div
      className="rounded-lg p-6 relative overflow-hidden"
      style={{
        background: cardStyle.background,
        borderTop: `${cardStyle.borderTopWidth} solid transparent`,
        borderRight: "0px solid transparent",
        borderBottom: "0px solid transparent",
        borderLeft: "0px solid transparent",
        borderImageSlice: "1",
        borderImageSource: cardStyle.borderImageSource,
      }}
    >
      {popular && (
        <div className="absolute right-6 top-6">
          <div
            className="border-[0.8px] border-[#6B49FF]
            [background:radial-gradient(77.66%_77.66%_at_50%_50%,#181620_15.9%,#1E1930_50.9%,#332C4F_100%)] 
            [box-shadow:inset_0px_-4px_12px_#6B49FF99,0px_16px_32px_#00000033] 
            text-white px-4 py-2 rounded-full"
          >
            Popular
          </div>
        </div>
      )}
      <h3 className="text-base font-medium text-white">{name}</h3>
      <div className="mt-2 flex items-baseline">
        <span className="text-3xl font-bold text-white">{price}</span>
        <span className="text-sm text-gray-400 ml-1">/monthly</span>
      </div>
      <p className="mt-2 text-xs text-gray-400">{description}</p>
      <button className="mt-5 mb-6 w-full rounded-md bg-white py-2 text-sm font-medium text-black hover:bg-gray-100 transition-colors">
        {buttonText}
      </button>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <IoIosCheckmarkCircleOutline  className="h-4 w-4 text-[#6366F1] mr-2 mt-0.5 flex-shrink-0 stroke-[3px]" />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="relative py-16 px-4 bg-black">
      {/* Grid SVG */}
      <svg
        className="absolute inset-0 left-1/2 transform -translate-x-1/2 stroke-white"
        width="533"
        height="526"
        viewBox="0 0 533 526"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1_503"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="533"
          height="526"
        >
          <line
            x1="48.4579"
            y1="0.000122098"
            x2="48.4579"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="44.8154"
            x2="-5.53006e-08"
            y2="44.8154"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="97.0228"
            y1="0.000122098"
            x2="97.0228"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="93.3799"
            x2="-5.53006e-08"
            y2="93.3798"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="145.588"
            y1="0.000122098"
            x2="145.588"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="141.945"
            x2="-5.53006e-08"
            y2="141.945"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="194.153"
            y1="0.000122098"
            x2="194.153"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="190.51"
            x2="-5.53006e-08"
            y2="190.51"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="242.718"
            y1="0.000122098"
            x2="242.718"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="239.075"
            x2="-5.53006e-08"
            y2="239.075"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="291.282"
            y1="0.000122098"
            x2="291.282"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="287.64"
            x2="-5.53006e-08"
            y2="287.64"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="339.847"
            y1="0.000122098"
            x2="339.847"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="336.205"
            x2="-5.53006e-08"
            y2="336.205"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="388.412"
            y1="0.000122098"
            x2="388.412"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="384.771"
            x2="-5.53006e-08"
            y2="384.77"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="436.977"
            y1="0.000122098"
            x2="436.977"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="433.335"
            x2="-5.53006e-08"
            y2="433.335"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="485.542"
            y1="0.000122098"
            x2="485.542"
            y2="525.715"
            stroke="white"
            strokeOpacity="0.15"
          />
          <line
            x1="533"
            y1="481.9"
            x2="-5.53006e-08"
            y2="481.9"
            stroke="white"
            strokeOpacity="0.15"
          />
        </mask>
        <g mask="url(#mask0_1_503)">
          <ellipse
            cx="266.5"
            cy="134"
            rx="465.5"
            ry="188"
            fill="url(#paint0_radial_1_503)"
          />
          <path
            d="M266.5 -53.5C394.996 -53.5 511.305 -32.4644 595.471 1.52734C637.555 18.5238 671.579 38.7499 695.073 61.1836C718.567 83.6161 731.5 108.223 731.5 134C731.5 159.777 718.567 184.384 695.073 206.816C671.579 229.25 637.555 249.476 595.471 266.473C511.305 300.464 394.996 321.5 266.5 321.5C138.004 321.5 21.6952 300.464 -62.4707 266.473C-104.555 249.476 -138.579 229.25 -162.073 206.816C-185.567 184.384 -198.5 159.777 -198.5 134C-198.5 108.223 -185.567 83.6161 -162.073 61.1836C-138.579 38.7499 -104.555 18.5238 -62.4707 1.52734C21.6952 -32.4644 138.004 -53.5 266.5 -53.5Z"
            stroke="white"
            strokeOpacity="0.15"
          />
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_1_503"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(266.5 134) rotate(90) scale(188 465.5)"
          >
            <stop stopColor="white" stopOpacity="0.8" />
            <stop offset="0.609" stopColor="#010101" />
          </radialGradient>
        </defs>
      </svg>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-medium text-white z-10">Explore all plans</h2>
          {/* Radial gradient background */}
          <svg
            className="absolute inset-0 left-1/2 transform -translate-x-1/2"
            width="531"
            height="249"
            viewBox="0 0 531 249"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6" filter="url(#filter0_f_1_1433)">
              <ellipse
                cx="265.5"
                cy="124.5"
                rx="185.5"
                ry="44.5"
                fill="url(#paint0_radial_1_1433)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1_1433"
                x="0"
                y="0"
                width="531"
                height="249"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="40"
                  result="effect1_foregroundBlur_1_1433"
                />
              </filter>
              <radialGradient
                id="paint0_radial_1_1433"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(265.5 124.5) rotate(90) scale(125.5 121.7)"
              >
                <stop stopColor="#9077FF" stopOpacity="0.8" />
                <stop
                  offset="0.122757"
                  stopColor="#6B49FF"
                  stopOpacity="0.7"
                />
                <stop offset="1" stopColor="#6B49FF" stopOpacity="0.6" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingTier
            name="Starter Plan"
            price="₹10"
            description="Ideal for small teams testing personalized video outreach."
            buttonText="Get Started"
            features={[
              "Basic personalization (name, company, logo, message)",
              "Multi-channel sharing (Email, WhatsApp, LinkedIn)",
              "Secure cloud storage",
              "Standard support",
              "Minimum: 5,000 videos (₹50,000 total)",
            ]}
          />
          <PricingTier
            name="Growth Plan"
            price="₹7"
            description="Ideal for agencies and sales teams scaling campaigns."
            buttonText="Get Started"
            popular={true}
            features={[
              "Advanced personalization (company details, industry insights, CTAs)",
              "Team collaboration (up to 5 members)",
              "Analytics dashboard (open rates, reply rates, meeting tracking)",
              "Priority support",
              "Minimum: 15,000 videos (₹1,05,000 total)",
            ]}
          />
          <PricingTier
            name="Enterprise Plan"
            price="₹5"
            description="Ideal for large organizations with advanced needs."
            buttonText="Contact Sales"
            features={[
              "API access & CRM integrations (HubSpot, Salesforce, Zoho, etc.)",
              "White-label branding (custom domain, templates, logos)",
              "Dedicated account manager",
              "Advanced reporting & compliance",
              "Minimum: 40,000 videos (₹2,00,000 total)",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
