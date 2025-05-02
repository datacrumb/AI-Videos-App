"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const faqs: FAQItem[] = [
    {
      question: "Can I use Animify for free?",
      answer:
        "Yes, Animify offers a free tier with limited features. You can create animations, export at lower resolutions, and access basic templates without paying anything. This is perfect for beginners or those wanting to try out the platform before committing to a paid plan.",
    },
    {
      question: "Why should I upgrade to the Starter plan?",
      answer:
        "The Starter plan removes watermarks, increases export quality to HD, and gives you access to more templates and features. It's ideal for individual creators who need professional-quality outputs without the enterprise-level features. You'll also get priority support and higher export limits.",
    },
    {
      question: "How does workspace billing work?",
      answer:
        "Workspace billing is based on the number of seats (users) and your selected plan. You'll be billed monthly or annually, depending on your preference. Each workspace can have multiple projects, and billing is consolidated into a single invoice. You can add or remove seats at any time, and your bill will be prorated accordingly.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel your subscription at any time from your account settings. Navigate to Billing > Subscription and click the 'Cancel Subscription' button. Your access will continue until the end of your current billing period. We don't offer refunds for partial months, but you won't be charged again after cancellation.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 14-day money-back guarantee for all new subscriptions. If you're not satisfied with our service within the first 14 days, contact our support team for a full refund. After this period, refunds are handled on a case-by-case basis. Annual subscriptions may be eligible for partial refunds of unused months.",
    },
  ];

  return (
    <section className="py-16 px-4 relative overflow-x-clip bg-black">
      {/* Background gradient */}
      <svg
        className="absolute inset-0 translate-x-32 -translate-y-20"
        width="994"
        height="708"
        viewBox="0 0 994 708"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.2" filter="url(#filter0_f_1_502)">
          <ellipse
            cx="497"
            cy="354"
            rx="417"
            ry="274"
            fill="url(#paint0_radial_1_502)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_502"
            x="0"
            y="0"
            width="994"
            height="708"
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
              result="effect1_foregroundBlur_1_502"
            />
          </filter>
          <radialGradient
            id="paint0_radial_1_502"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(497 354) rotate(90) scale(371.678 565.656)"
          >
            <stop stopColor="#A793FF" />
            <stop offset="1" stopColor="#A793FF" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none rounded-lg overflow-hidden bg-[#0a1428] border border-[#1e2d3d]"
            >
              <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-[#0d1a2d] transition-colors">
                <span className="text-left text-base font-medium">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-1 text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
