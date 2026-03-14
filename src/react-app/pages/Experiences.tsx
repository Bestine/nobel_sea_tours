import { Calendar, Users, Leaf, Clock } from 'lucide-react';
import { Link } from 'react-router';

export default function Experiences() {
  const experiences = [
    {
      id: 1,
      title: 'Wasini Island Dolphin Experience',
      category: 'Marine Life',
      image: 'https://images.unsplash.com/photo-1703319955946-c7816e75b2e5?w=800&h=600&fit=crop',
      description: 'Swim with wild dolphins in their natural habitat, explore vibrant coral reefs, and enjoy a fresh seafood lunch on pristine Wasini Island.',
      duration: 'Full Day (8 hours)',
      groupSize: '4-12 people',
      residentPrice: 'KES 4000',
      nonResidentPrice: 'USD 65',
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
      residentPrice: 'KES 2000',
      nonResidentPrice: 'USD 35',
      ecoBenefit: 'Wind-powered sailing, zero emissions journey',
      suitableFor: ['Couples', 'Groups', 'Celebrations'],
      slug: 'sunset-dhow-cruise',
    },
    {
      id: 5,
      title: 'Floating Restaurant + Fishing (Catch & Cook)',
      category: 'Dining',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop',
      description: 'Dine on fresh seafood at Mkupe Eco and fish with the locals. Enjoy panoramic ocean views while supporting sustainable fishing.',
      duration: '3 hours',
      groupSize: '2-30 people',
      residentPrice: 'KES 3000',
      nonResidentPrice: 'USD 50',
      ecoBenefit: 'Sustainable seafood sourcing, zero-waste dining',
      suitableFor: ['Families', 'Couples', 'Groups'],
      // no slug → will show "Coming Soon"
    },
    {
      id: 3,
      title: 'Mambrui Sand Dunes + Local Cuisine',
      category: 'Cultural',
      image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop',
      description: 'Explore majestic golden sand dunes, visit historic ruins, and savor authentic Swahili dishes prepared by local chefs.',
      duration: 'Half Day (4 hours)',
      groupSize: '6-15 people',
      residentPrice: 'KES 3500',
      nonResidentPrice: 'USD 60',
      ecoBenefit: 'Direct support to local food producers & cultural preservation',
      suitableFor: ['Families', 'Cultural Explorers', 'Photographers'],
      // slug: 'mambrui-sand-dunes-cuisine',
    },
    {
      id: 4,
      title: 'Kilifi Bioluminescent Night Kayaking',
      category: 'Adventure',
      image: 'https://images.unsplash.com/photo-1676196919529-0b228b171e28?w=800&h=600&fit=crop',
      description: 'Glide across the calm waters of Kilifi under a starlit sky in a transparent kayak, watching the ocean glow beneath you as bioluminescent algae light up with every paddle stroke — a surreal nocturnal adventure blending science, serenity, and pure magic.',
      duration: '2–3 Hours (Evening/Night)',
      groupSize: '4–10 people',
      residentPrice: 'KES 3200',
      nonResidentPrice: 'USD 45',
      ecoBenefit: 'Low-impact, non-motorized experience promoting marine conservation awareness and responsible night tourism.',
      suitableFor: ['Couples', 'Adventure Seekers', 'Nature Lovers', 'Photographers'],
      // slug: 'kilifi-bioluminescent-kayaking',
    },
  ];

  const categories = ['All', 'Marine Life', 'Romantic', 'Cultural', 'Adventure', 'Dining', 'Family', 'Corporate', 'Education', 'Retreat'];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero – unchanged */}
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

          {/* Experiences Cards */}
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div 
                key={experience.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-80 md:h-auto overflow-hidden">
                    <img 
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 right-6 px-4 py-2 bg-ocean-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                      {experience.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-ocean-900 mb-4 group-hover:text-ocean-600 transition-colors">
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
                        <div className="col-span-2 flex flex-col gap-1">
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="font-semibold text-ocean-700 text-sm">
                              🇰🇪 Residents: {experience.residentPrice} 
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="font-semibold text-ocean-700 text-sm">
                              Non-Residents: {experience.nonResidentPrice}
                            </span>
                          </div>
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

                    {/* Conditional button: detail page if slug exists, otherwise Coming Soon */}
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

      {/* CTA Section – unchanged */}
      <section className="py-16 px-4 bg-gradient-to-r from-ocean-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-ocean-100 mb-8">
            We specialize in custom experiences. Let us craft the perfect coastal adventure for you.
          </p>
          <Link
           to="/contact"
           className="px-8 py-4 bg-white text-ocean-600 rounded-full font-semibold hover:shadow-2xl transition-all transform hover:scale-105">
            Request Custom Experience
          </Link>
        </div>
      </section>
    </div>
  );
}