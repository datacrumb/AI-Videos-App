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
      question: "How much does each video cost?",
      answer:
        "Our pricing ranges from ₹5 to ₹10 per video, depending on the volume you purchase. The larger the package, the lower the per-video cost.",
    },
    {
      question: "What's the minimum order size?",
      answer:
        "The minimum order is 5,000 videos. This ensures you can run a meaningful campaign and see measurable results.",
    },
    {
      question: "How personalized are the videos?",
      answer:
        "Each video is fully customized with details like the lead's name, company, industry, logo, and even tailored CTAs—making outreach feel truly 1:1.",
    },
    {
      question: "How long does it take to generate videos?",
      answer:
        "You can create 100 to 10,000+ videos in minutes. Our AI is built for speed and scale.",
    },
    {
      question: "Where can I use these videos?",
      answer:
        "Videos can be shared across email, WhatsApp, LinkedIn, landing pages, and websites. You can also integrate with CRMs for automated campaigns.",
    },
    {
      question: "Is the data secure?",
      answer:
        "Yes. All projects are stored in encrypted cloud storage, ensuring your videos and lead data are safe.",
    },
    {
      question: "Do you offer integrations?",
      answer:
        "Yes, we support integrations with Google Drive, Dropbox, Slack, HubSpot, Salesforce, Zoho, and more (on higher plans).",
    },
    {
      question: "What kind of response rates can I expect?",
      answer:
        "Personalized video outreach typically delivers 12–40% response rates, with some campaigns achieving 5× more meetings booked compared to cold emails.",
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
