import { Anchor, Heart, Users, Sunset, Shield, Calendar, DollarSign } from 'lucide-react';

export default function SunsetDhowCruise() {
  const impactPoints = [
    {
      icon: Anchor,
      title: 'Wind-Powered Serenity',
      description: 'Traditional sail-powered dhow — zero emissions, gentle on the ocean, preserving the calm of the Indian Ocean sunset.',
    },
    {
      icon: Heart,
      title: 'Swahili Cultural Immersion',
      description: 'Experience live coastal music and stories from local crew, honoring centuries-old sailing traditions of the East African coast.',
    },
    {
      icon: Users,
      title: 'Supporting Local Mariners',
      description: 'Operated by skilled local-based captains and crew — revenue flows directly into coastal families and artisan communities.',
    },
    {
      icon: Shield,
      title: 'Eco-Conscious Operations',
      description: 'Plastic-free service, reusable glassware, minimal footprint — helping protect mangroves and marine life along the route.',
    },
  ];

  const inclusions = [
    'Round-trip hotel transfers from Diani/South Coast/Mombasa hotels',
    'Sunset cruise on a traditional handcrafted dhow',
    'Welcome cocktail & selection of sunset drinks',
    'Fresh tropical fruit platter & light snacks',
    'Live acoustic Swahili/coastal music on board',
    'Professional local captain and crew',
    'Blankets & cushions for comfort during cooler evening breeze',
    'Photo opportunities with stunning golden-hour views',
  ];

  const exclusions = [
    'Alcoholic beverages beyond welcome package (available for purchase)',
    'Personal expenses and gratuities',
    'Travel insurance',
    'Dinner upgrade (some packages offer optional add-on)',
    'Additional private requests outside standard itinerary',
  ];

  const isAvailable = true; // Toggle as needed
  const availabilityText = isAvailable
    ? "Currently Available – Reserve your sunset spot!"
    : "Temporarily Not Available – Contact us for updates";

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://raw.githubusercontent.com/Bestine/nobel_sea_tours/refs/heads/main/public/assets/images/experiences/sunset-dhow-cruise/hero-background.jpg?w=1920&h=600&fit=crop)', // ← add your real image here
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/80 to-ocean-900/60" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center text-white px-4 max-w-4xl mx-auto gap-6">
          {/* Availability badge + strong CTA */}
          <div className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold ${
            isAvailable ? 'bg-green-500/20 text-green-300 border border-green-400/30' : 'bg-red-500/20 text-red-300 border border-red-400/30'
          }`}>
            <Calendar className="w-5 h-5 mr-2" />
            {availabilityText}
          </div>

          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-2">
            Diani Sunset Dhow Cruise
          </h1>

          <p className="text-xl text-ocean-100 mb-4 max-w-3xl">
            Sail into the golden hour on a traditional dhow with cocktails, tropical fruits, and live coastal melodies
          </p>

          <button className="px-10 py-5 bg-gradient-to-r from-ocean-500 to-cyan-600 text-white rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-ocean-600/40 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Book Your Sunset Sail
          </button>
        </div>
      </section>

      {/* About the Tour */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center space-x-3 text-ocean-600 mb-4">
                <Sunset className="w-6 h-6" />
                <span className="font-semibold text-sm uppercase tracking-wide">About the Experience</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-ocean-900 mb-6">
                Glide into Golden Hour Magic
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Board a beautifully crafted traditional dhow as the afternoon light softens and the sky begins its transformation. Sail gently along the Diani coast or into serene mangrove channels, watching the sun melt into the Indian Ocean in a blaze of orange, pink, and gold.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sip a welcome cocktail, savor fresh tropical fruits, and enjoy live acoustic music with Swahili rhythms while the warm sea breeze carries the day away. This romantic, relaxing cruise is ideal for couples, small groups, or anyone seeking a peaceful, authentic coastal moment.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://raw.githubusercontent.com/Bestine/nobel_sea_tours/refs/heads/main/public/assets/images/experiences/sunset-dhow-cruise/sunsetdhow.jpg?w=1920&h=600&fit=crop" // sunset dhow or similar — replace with your own if available
                alt="Sunset over traditional dhow on Indian Ocean"
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
              Every sail supports ocean calm and coastal livelihoods
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Ready for Golden Hour?
          </h2>
          <p className="text-lg text-ocean-100 mb-8">
            Secure your place on this timeless sunset journey along the Kenyan coast
          </p>

          <button className="px-12 py-6 bg-ocean-500 text-white rounded-full font-semibold text-xl hover:bg-ocean-600 transition-colors shadow-xl hover:shadow-2xl transform hover:scale-105">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
}