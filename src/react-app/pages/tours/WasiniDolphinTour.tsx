import { Leaf, Heart, Users, Anchor, Shield, Calendar, DollarSign } from 'lucide-react';

export default function WasiniDolphinTour() {
  const impactPoints = [
    {
      icon: Leaf,
      title: 'Marine Ecosystem Protection',
      description: 'Visits to Kisite-Mpunguti Marine National Park support protected reefs and no-harassment dolphin viewing practices, helping preserve biodiverse habitats.',
    },
    {
      icon: Heart,
      title: 'Ethical Wildlife Encounters',
      description: 'We prioritize responsible dolphin spotting—never chasing or disturbing pods—ensuring these intelligent animals remain wild and thriving.',
    },
    {
      icon: Users,
      title: 'Local Community Empowerment',
      description: 'Tours are operated with local boat captains, guides, and restaurants on Wasini Island, creating jobs and channeling revenue directly into coastal villages.',
    },
    {
      icon: Shield,
      title: 'Sustainable Practices',
      description: 'Zero-waste initiatives, mangrove education, and support for community-led conservation projects reduce environmental footprint while funding long-term reef and beach protection.',
    },
  ];

  const inclusions = [
    'Round-trip hotel transfers from Diani/Mombasa/South Coast',
    'Traditional dhow or boat cruise to Kisite Marine Park',
    'Ethical dolphin watching (high chance of sightings)',
    'Guided snorkeling session with equipment provided',
    'Delicious Swahili seafood lunch on Wasini Island',
    'Marine park entrance fees',
    'Professional local guide and crew',
    'Drinking water and refreshments on board',
  ];

  const exclusions = [
    'Alcoholic beverages',
    'Personal expenses and tips',
    'Travel insurance',
    'Scuba diving (optional add-on)',
    'Additional activities outside the standard itinerary',
  ];

  const isAvailable = true; // Change to false when needed
  const availabilityText = isAvailable 
    ? "Currently Available – Book your spot today!"
    : "Temporarily Not Available – Check back soon or contact us";

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1564419320461-6870880221ad?w=1920&h=600&fit=crop)', // Dolphin/ocean scene; replace if needed
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/80 to-ocean-900/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Wasini Island Swim with Dolphins Experience
          </h1>
          <p className="text-xl text-ocean-100">
            Ethical dolphin encounters, vibrant snorkeling, and authentic Swahili island culture
          </p>
        </div>
      </section>

      {/* About the Tour */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center space-x-3 text-ocean-600 mb-4">
                <Anchor className="w-6 h-6" />
                <span className="font-semibold text-sm uppercase tracking-wide">About the Tour</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-ocean-900 mb-6">
                Discover the Magic of Kisite & Wasini
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Set sail from Shimoni on a traditional dhow or modern boat to the pristine waters of Kisite-Mpunguti Marine National Park. Spot playful bottlenose dolphins in their natural habitat, snorkel among colorful coral reefs teeming with tropical fish, and immerse yourself in Swahili island life on Wasini.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This full-day adventure combines marine wonder, cultural connection, and relaxation—perfect for families, couples, and ocean lovers seeking an authentic Kenyan coastal experience.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop" // Snorkeling/marine scene
                alt="Snorkeling in Kisite Marine Park"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-serif font-bold text-ocean-900 mb-8 text-center md:text-left">
              What's Included
            </h2>
            <ul className="space-y-4">
              {inclusions.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Shield className="w-5 h-5 text-ocean-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-4xl font-serif font-bold text-ocean-900 mb-8 text-center md:text-left">
              What's Not Included
            </h2>
            <ul className="space-y-4">
              {exclusions.map((item, index) => (
                <li key={index} className="flex items-start">
                  <DollarSign className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Its Impact */}
      <section className="py-20 px-4 bg-gradient-to-b from-ocean-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-900 mb-4">
              Its Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every trip supports ocean health and coastal communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-ocean-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <point.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-ocean-900 mb-3 text-center">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability & Book Now */}
      <section className="py-20 px-4 bg-gradient-to-br from-ocean-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold mb-6 ${
              isAvailable ? 'bg-green-500/20 text-green-300 border border-green-400/30' : 'bg-red-500/20 text-red-300 border border-red-400/30'
            }`}>
              <Calendar className="w-5 h-5 mr-2" />
              {availabilityText}
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Ready for Your Adventure?
            </h2>
            <p className="text-lg text-ocean-100 mb-8">
              Secure your spot on this unforgettable dolphin and snorkeling experience
            </p>
          </div>

          <button className="px-12 py-6 bg-ocean-500 text-white rounded-full font-semibold text-xl hover:bg-ocean-600 transition-colors shadow-xl hover:shadow-2xl transform hover:scale-105">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
}