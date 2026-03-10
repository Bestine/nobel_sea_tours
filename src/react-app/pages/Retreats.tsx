import { Calendar, Users, Leaf, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router';

export default function Retreats() {
  const retreats = [
    {
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
      title: 'Post-Event Coastal Retreat',
      category: 'Retreat',
      image: 'https://images.unsplash.com/photo-1540206395-68808572332f?w=800&h=600&fit=crop',
      description: 'Perfect after conferences or events. Relaxation sessions, beach activities, mindfulness workshops, and sustainable dining experiences.',
      duration: '1-2 Days',
      groupSize: '15-40 people',
      price: '$195 per person',
      ecoBenefit: 'Wellness-focused, low-impact activities',
      suitableFor: ['Corporate', 'Conferences', 'Retreats'],
    },
  ];

  const categories = ['All', 'Marine Life', 'Romantic', 'Cultural', 'Adventure', 'Dining', 'Family', 'Corporate', 'Education', 'Retreat'];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&h=600&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/80 to-ocean-900/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Coastal Experiences
          </h1>
          <p className="text-xl text-ocean-100">
            Curated journeys for every traveler—from thrilling adventures to serene cultural immersions
          </p>
        </div>
      </section>

      {/* Retreats Full Width */}
      <section className="py-16 bg-gradient-to-b from-white to-sand-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter Categories */}
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

          {/* Retreats - Full Width Cards */}
          <div className="space-y-8">
            {retreats.map((retreat) => (
              <div 
                key={retreat.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-80 md:h-auto overflow-hidden">
                    <img 
                      src={retreat.image}
                      alt={retreat.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 right-6 px-4 py-2 bg-ocean-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                      {retreat.category}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-ocean-900 mb-4">
                        {retreat.title}
                      </h3>
                      <p className="text-gray-600 text-base mb-6 leading-relaxed">
                        {retreat.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-5 h-5 mr-3 text-ocean-500" />
                          <span>{retreat.duration}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-5 h-5 mr-3 text-ocean-500" />
                          <span>{retreat.groupSize}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 col-span-2">
                          <DollarSign className="w-5 h-5 mr-3 text-ocean-500" />
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
                    </div>

                    {retreat.slug ? (
                      <Link
                        to={`/retreats/${retreat.slug}`}
                        className="w-full py-4 bg-ocean-500 text-white rounded-lg font-semibold hover:bg-ocean-600 transition-colors flex items-center justify-center space-x-2 text-lg shadow-md hover:shadow-lg"
                      >
                        <Calendar className="w-5 h-5" />
                        <span>Explore This Tour</span>
                      </Link>
                    ) : (
                      <button
                        className="w-full py-4 bg-ocean-500/70 text-white rounded-lg font-semibold cursor-not-allowed flex items-center justify-center space-x-2 text-lg opacity-80"
                        disabled
                      >
                        <Calendar className="w-5 h-5" />
                        <span>Coming Soon</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-ocean-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-ocean-100 mb-8">
            We specialize in custom retreats. Let us craft the perfect coastal journey for you.
          </p>
          <button className="px-8 py-4 bg-white text-ocean-600 rounded-full font-semibold hover:shadow-2xl transition-all transform hover:scale-105">
            Request Custom Experience
          </button>
        </div>
      </section>
    </div>
  );
}
