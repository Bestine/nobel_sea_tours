import { Calendar, Users, Leaf, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router';

export default function Experiences() {
  const experiences = [
    {
      id: 1,
      title: 'Wasini Island Dolphin Experience',
      category: 'Marine Life',
      // image: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=800&h=600&fit=crop',
      image: 'https://images.unsplash.com/photo-1703319955946-c7816e75b2e5?w=800&h=600&fit=crop',
      description: 'Swim with wild dolphins in their natural habitat, explore vibrant coral reefs, and enjoy a fresh seafood lunch on pristine Wasini Island.',
      duration: 'Full Day (8 hours)',
      groupSize: '4-12 people',
      price: '$120',
      ecoBenefit: 'Supports marine conservation & local fishing communities',
      suitableFor: ['Families', 'Couples', 'Adventure Seekers'],
      slug: 'wasini-dolphin',
    },
    {
      id: 2,
      title: 'Sundowner Dhow Cruise',
      category: 'Romantic',
      image: 'https://raw.githubusercontent.com/Bestine/nobel_sea_tours/refs/heads/main/public/assets/images/experiences/sunset-dhow-cruise/hero-background.jpg?w=1920&h=600&fit=crop',
      description: 'Sail on a traditional dhow as the sun sets over the Indian Ocean. Includes sunset cocktails, fresh tropical fruits, and live coastal theme.',
      duration: '3 hours',
      groupSize: '2-20 people',
      price: '$80',
      ecoBenefit: 'Wind-powered sailing, zero emissions journey',
      suitableFor: ['Couples', 'Groups', 'Celebrations'],
      slug: 'sunset-dhow-cruise',
    },
    {
      id: 3,
      title: 'Mambrui Sand Dunes + Local Cuisine',
      category: 'Cultural',
      image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop',
      description: 'Explore majestic golden sand dunes, visit historic ruins, and savor authentic Swahili dishes prepared by local chefs.',
      duration: 'Half Day (4 hours)',
      groupSize: '6-15 people',
      price: '$95',
      ecoBenefit: 'Direct support to local food producers & cultural preservation',
      suitableFor: ['Families', 'Cultural Explorers', 'Photographers'],
    },
    {
      id: 4,
      title: 'Chale Island Eco-Triathlon Retreat',
      category: 'Adventure',
      image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&h=600&fit=crop',
      description: 'A wellness adventure combining swimming, kayaking, and beach yoga on the pristine Chale Island. Includes healthy organic meals.',
      duration: '2 Days / 1 Night',
      groupSize: '8-20 people',
      price: '$280',
      ecoBenefit: 'Eco-lodge stay, plastic-free operations',
      suitableFor: ['Corporate Teams', 'Wellness Groups', 'Retreats'],
    },
    {
      id: 5,
      title: 'Floating Restaurant Experience',
      category: 'Dining',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop',
      description: 'Dine on fresh seafood at Mkupe Eco or Moorings floating restaurants. Enjoy panoramic ocean views while supporting sustainable fishing.',
      duration: '3 hours',
      groupSize: '2-30 people',
      price: '$65',
      ecoBenefit: 'Sustainable seafood sourcing, zero-waste dining',
      suitableFor: ['Families', 'Couples', 'Groups'],
    },
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

      {/* Experiences Full Width */}
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

          {/* Experiences - Full Width Cards */}
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div 
                key={experience.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-80 md:h-auto overflow-hidden">
                    <img 
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 right-6 px-4 py-2 bg-ocean-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                      {experience.category}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-ocean-900 mb-4">
                        {experience.title}
                      </h3>
                      <p className="text-gray-600 text-base mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-5 h-5 mr-3 text-ocean-500" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-5 h-5 mr-3 text-ocean-500" />
                          <span>{experience.groupSize}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 col-span-2">
                          <DollarSign className="w-5 h-5 mr-3 text-ocean-500" />
                          <span className="font-semibold text-ocean-700 text-lg">{experience.price}</span>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                        <div className="flex items-start">
                          <Leaf className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-green-800">{experience.ecoBenefit}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {experience.suitableFor.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1.5 bg-sand-100 text-ocean-700 text-sm rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {experience.slug ? (
                      <Link
                        to={`/experiences/${experience.slug}`}
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
            We specialize in custom experiences. Let us craft the perfect coastal adventure for you.
          </p>
          <button className="px-8 py-4 bg-white text-ocean-600 rounded-full font-semibold hover:shadow-2xl transition-all transform hover:scale-105">
            Request Custom Experience
          </button>
        </div>
      </section>
    </div>
  );
}
