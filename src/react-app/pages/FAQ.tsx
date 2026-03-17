import { useState } from 'react';
import { 
  ChevronDown, 
  CloudRain, 
  ShieldCheck, 
  CreditCard, 
  CalendarX, 
  MessageCircleQuestion, 
  Star,
  WavesLadder,
  Backpack,
  Users,
  Shell, 
  MapPinPlus, 
  Bus,
  Gem
} from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What happens if the weather changes on the day of the experience?",
      answer: "The ocean teaches us one important lesson: respect nature. If weather conditions are not safe for the planned experience, we may adjust the schedule, change the route, or reschedule to another suitable day. Our priority is always safety and ensuring you still have a memorable coastal experience.",
      icon: CloudRain,
    },
    {
      question: "How is my safety ensured during the experience?",
      answer: "Your safety is central to everything we do. We work with experienced local guides, licensed boat operators, and properly maintained equipment. Safety briefings are provided before marine activities, and life jackets and safety gear are always available when needed.",
      icon: ShieldCheck,
    },
    {
      question: "Can I pay in installments or reserve now and pay later?",
      answer: "Yes. For many experiences, we offer flexible payment options that allow you to secure your spot with a deposit and complete payment closer to the experience date. This makes it easier to plan your trip without pressure.",
      icon: CreditCard,
    },
    {
      question: "What if I need to cancel or request a refund?",
      answer: "We understand that plans sometimes change. Refunds or rescheduling may be possible depending on how close the cancellation is to the experience date. We aim to be fair and flexible while also supporting the local partners who prepare for your visit.",
      icon: CalendarX,
    },
    {
        question: "Are there any special benefits for guests who book with Nobel Sea Tours?",
        answer: "Yes. Guests who travel with us become part of the Nobel Sea community. Returning guests may receive early access to new experiences, priority booking during peak seasons, and occasional invitations to unique coastal events.",
        icon: Star
    },
    {
        question: "Do I need prior experience for activities like kayaking or snorkeling?",
        answer: "Not at all. Many of our experiences are designed for beginners. Our guides provide simple instructions and support so that anyone can comfortably enjoy the activity.",
        icon: WavesLadder
    },
    {
        question: "What should I bring for a coastal experience?",
        answer: "We recommend comfortable clothing, sunscreen, a hat, reusable water bottle, and a camera. For marine activities, bringing a light towel and sandals is also helpful.",
        icon: Backpack
    },
    {
        question: "Are your experiences suitable for families or children?",
        answer: "Many of our experiences are family-friendly. Some activities have minimum age recommendations for safety, but we will always guide you toward the best options for your group.",
        icon: Users
    },
    {
        question: "How do your experiences support local communities?",
        answer: "We collaborate with local boat operators, chefs, guides, and artisans from coastal communities. When you join a Nobel Sea experience, you directly contribute to supporting local livelihoods and preserving Swahili coastal traditions.",
        icon: Gem
    },
    {
        question: "Can you organize a private or a customized experience?",
        answer: "Yes. We can curate private experiences for couples, families, corporate groups, or special occasions. Simply reach out and we will help design something memorable along the East African coast.",
        icon: Shell
    },
    {
        question: "Where do most experience start?",
        answer: "Many of our experiences start along the Kenyan Coast such as Mombasa, Kilifi, Diani, Malindi or nearby towns. Exact meeting points are shared after booking",
        icon: MapPinPlus
    },
    {
        question: "Is transportation included?",
        answer: "Some experiences include transport while others require guests to meet at the starting location. Details are always provided clearly during booking.",
        icon: Bus
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-ocean-50 to-white pt-20 pb-24">
      {/* Hero / Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-ocean-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ocean-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-ocean-700 font-light max-w-3xl mx-auto">
            Everything you need to know before your coastal journey with us
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-ocean-100/50 transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ocean-500 to-cyan-500 flex items-center justify-center shadow-md flex-shrink-0">
                    <faq.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-ocean-900 group-hover:text-ocean-700 transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-ocean-600 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                id={`faq-content-${index}`}
                className={`px-6 pb-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-700 leading-relaxed pl-14">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions? CTA */}
      <section className="mt-20 py-16 bg-gradient-to-br from-ocean-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-ocean-600 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <MessageCircleQuestion className="w-8 h-8 text-cyan-300" />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Still have a question?
          </h2>
          
          <p className="text-lg md:text-xl text-ocean-100 mb-10 max-w-2xl mx-auto">
            Our team is here to help. Reach out anytime — we love answering questions that help you plan the perfect coastal journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@nobelseatours.com"
              className="inline-flex items-center px-8 py-5 bg-white text-ocean-900 rounded-full font-semibold hover:bg-ocean-50 transition-colors shadow-lg"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/254119101566" // ← replace with real WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:brightness-110 transition-all shadow-lg"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}