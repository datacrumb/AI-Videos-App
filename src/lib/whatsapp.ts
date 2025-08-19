interface WhatsAppOptions {
  message?: string;
  phoneNumber?: string;
}

export const openWhatsApp = (options: WhatsAppOptions = {}) => {
  const {
    message = "Hi! I'd like to learn more about your video outreach platform.",
    phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  } = options;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};

// Predefined messages for different contexts
export const whatsAppMessages = {
  general: "Hi! I'd like to learn more about your video outreach platform.",
  features: (featureName: string) => `Hi! I'm interested in the ${featureName} feature. Can you tell me more?`,
  getStarted: "Hi! I'd like to get started with your video outreach platform. Can you help me set up my account?",
  pricing: "Hi! I'd like to know more about your pricing plans and which one would be best for my needs.",
  demo: "Hi! I'd like to book a demo of your video outreach platform. When would be a good time?"
}; 