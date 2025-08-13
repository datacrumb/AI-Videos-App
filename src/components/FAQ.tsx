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
    <section className="pt-16 pb-30 px-4 relative overflow-x-clip bg-black">
      {/* Background gradient - Responsive and Centered */}
      <div
        className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 opacity-20"
        style={{
          background: 'radial-gradient(ellipse 50% 100% at 50% 50%, #A793FF 0%, rgba(167, 147, 255, 0) 100%)',
          filter: 'blur(40px)'
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => {
            const isEven = index % 2 === 0;
            return (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none rounded-lg overflow-hidden relative"
                style={{
                  background: isEven 
                    ? 'radial-gradient(43.69% 75.71% at 50% 44.52%, #10141A 0%, #0C1018 50%, #0A1017 100%)'
                    : 'radial-gradient(43.69% 75.71% at 50% 44.52%, #13101A 0%, #0F0C18 50%, #0D0A17 100%)'
                }}
              >
                {/* Rounded border overlay */}
                <div 
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{
                    background: isEven
                      ? 'radial-gradient(100% 100% at 50% 0%, rgba(104, 114, 131, 0.4) 0%, rgba(104, 114, 131, 0.2) 100%)'
                      : 'radial-gradient(100% 100% at 50% 0%, rgba(124, 119, 148, 0.4) 0%, rgba(124, 119, 148, 0.2) 100%)',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    padding: '1px'
                  }}
                />
                
                <AccordionTrigger className="px-6 py-4 text-white hover:no-underline transition-colors relative z-10">
                  <span className="text-left text-base font-medium">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1 text-gray-400 relative z-10">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
