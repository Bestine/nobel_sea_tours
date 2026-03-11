import { Link } from 'react-router';
import { Calendar, Users, Leaf, Clock, DollarSign, Heart, Sunset } from 'lucide-react';

export default function Retreats() {
  const retreats = [
      {
      id: 1,
      title: 'Corporate Team Building Retreat',
      category: 'Corporate',
      image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&h=600&fit=crop',
      description: 'Strengthen your team through beach challenges, leadership workshops, sailing expeditions, and sustainable tourism education.',
      duration: '2 Days / 1 Night',
      groupSize: '20-50 people',
      price: '$320 per person',
      ecoBenefit: 'Carbon offset program, community service component',
      suitableFor: ['Corporate', 'Teams', 'Organizations'],
    },
    {
      id: 2,
      title: 'Private School Educational Trips',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      description: 'Marine biology education, conservation workshops, cultural exchange programs, and hands-on environmental activities for students.',
      duration: '1-3 Days',
      groupSize: '30-60 students',
      price: '$85 per student',
      ecoBenefit: 'Educational materials on ocean conservation included',
      suitableFor: ['Schools', 'Youth Groups', 'Educational Institutions'],
    },
    {
      id: 3,
      title: 'Post-Event Coastal Reset Retreat',
      category: 'Rest & Recovery',
      image: 'https://images.unsplash.com/photo-1540206395-68808572332f?w=800&h=600&fit=crop',
      description: 'Perfect after conferences or busy seasons — relaxation, beach mindfulness, gentle movement, and nourishing meals.',
      duration: '1–2 Days',
      groupSize: '10–30 people',
      price: '$195 per person',
      ecoBenefit: 'Low-impact activities, local organic catering, carbon offset',
      suitableFor: ['Corporate Groups', 'Post-Event Recovery', 'Burnout Prevention'],
    },
    {
      id: 4,
      title: 'Family Celebration Package',
      category: 'Family',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop',
      description: 'Perfect for graduations, reunions, or milestones. Private beach setup, catered meals, water sports, and cultural entertainment.',
      duration: 'Full Day (Customizable)',
      groupSize: '15-50 people',
      price: '$450',
      ecoBenefit: 'Beach cleanup included, reusable décor',
      suitableFor: ['Families', 'Large Groups', 'Celebrations'],
    },
    {
      id: 5,
      title: 'Couples Romance Package',
      category: 'Romantic',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop',
      description: 'Honeymoon or proposal packages with private beach dinners, sunset cruises, couples spa treatments, and luxury accommodation.',
      duration: '2-3 Days',
      groupSize: '2 people',
      price: '$550',
      ecoBenefit: 'Eco-resort partnerships, carbon-neutral activities',
      suitableFor: ['Couples', 'Honeymooners'],
    },
    {
      id: 6,
      title: 'Chale Island Eco-Triathlon Retreat',
      category: 'Wellness & Adventure',
      image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&h=600&fit=crop',
      description: 'A transformative 2-day retreat combining swimming, kayaking, beach yoga, and mindfulness sessions on pristine Chale Island.',
      duration: '2 Days / 1 Night',
      groupSize: '8–20 people',
      price: '$280',
      ecoBenefit: 'Eco-lodge stay, plastic-free operations, reef-safe products',
      suitableFor: ['Wellness Seekers', 'Corporate Teams', 'Couples', 'Solo Travelers'],
    },
  ];

  const categories = [
    'All Retreats',
    'Wellness & Yoga',
    'Corporate & Team',
    'Rest & Recovery',
    'Eco-Luxury',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero – updated slogan for retreats */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1739172064113-0e8c54fe9d6c?w=1920&h=600&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/80 to-ocean-900/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Coastal Retreats
          </h1>
          <p className="text-xl text-ocean-100">
            Deep rest, renewal and reconnection — where ocean rhythms meet inner calm
          </p>
        </div>
      </section>

      {/* Retreats Section */}
      <section className="py-16 bg-gradient-to-b from-white to-sand-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-white border-2 border-ocean-200 text-ocean-700 font-medium hover:bg-ocean-500 hover:text-white hover:border-ocean-500 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Retreat Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retreats.map((retreat) => (
              <div
                key={retreat.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={retreat.image}
                    alt={retreat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 px-4 py-2 bg-ocean-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                    {retreat.category}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-serif font-bold text-ocean-900 mb-3 group-hover:text-ocean-600 transition-colors">
                    {retreat.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {retreat.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-ocean-500" />
                      <span>{retreat.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-ocean-500" />
                      <span>{retreat.groupSize}</span>
                    </div>
                    <div className="flex items-center col-span-2">
                      <DollarSign className="w-5 h-5 mr-2 text-ocean-500" />
                      <span className="font-semibold text-ocean-700 text-lg">{retreat.price}</span>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <Leaf className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-green-800">{retreat.ecoBenefit}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {retreat.suitableFor.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-sand-100 text-ocean-700 text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/booking"
                    className="w-full py-4 bg-ocean-500 text-white rounded-xl font-semibold hover:bg-ocean-600 transition-colors flex items-center justify-center space-x-2 text-lg shadow-md hover:shadow-lg"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Check Availability</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA at bottom */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-6">
              Ready to Reconnect?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Reserve your space in one of our transformative coastal retreats and return home renewed.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-ocean-500 to-cyan-600 text-white rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-ocean-600/40 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start Your Retreat Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}