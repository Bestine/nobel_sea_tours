import { Link } from 'react-router';
// import { Link } from 'react-router-dom';
import { Anchor, Heart, Leaf, Users, Star, ArrowRight, ShoppingBag, Calendar, Clock, DollarSign } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Leaf,
      title: 'Sustainable Tourism',
      description: 'Every journey supports ocean conservation and local communities',
    },
    {
      icon: Heart,
      title: 'Authentic Experiences',
      description: 'Connect with the rich culture and natural beauty of East Africa',
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Empowering coastal communities through responsible travel',
    },
    {
      icon: Anchor,
      title: 'Expert Guides',
      description: 'Local expertise ensuring safe, enriching adventures',
    },
  ];

  const featuredExperience = {
    title: 'Wasini Island Dolphin Experience',
    category: 'Marine Life',
    image: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=1600&h=900&fit=crop',
    description: 'Swim with wild dolphins in their natural habitat, explore vibrant coral reefs, and enjoy a fresh seafood lunch on pristine Wasini Island.',
    duration: 'Full Day (8 hours)',
    groupSize: '4-12 people',
    price: '$120',
    tag: 'Most Popular',
  };

  const testimonials = [
    {
      name: 'Sarah & James',
      role: 'Honeymooners',
      content: 'The sunset dhow cruise was magical. Nobel Sea Tours made our honeymoon unforgettable with their attention to detail and respect for the ocean.',
      rating: 5,
    },
    {
      name: 'Tech Corp Kenya',
      role: 'Corporate Retreat',
      content: 'Outstanding team-building experience. The blend of adventure and cultural immersion was exactly what our team needed.',
      rating: 5,
    },
    {
      name: 'The Martinez Family',
      role: 'Family Adventure',
      content: 'Our kids still talk about swimming with dolphins! A perfect mix of education and excitement.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1602174423520-daa2d87175a0?w=1920&h=1080&fit=crop)',
            // backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/70 via-ocean-900/50 to-ocean-900/70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            Discover the Soul of the
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              East African Coast
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-ocean-100 font-light max-w-3xl mx-auto">
            Sustainable adventures where crystal waters meet ancient culture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/experiences"
              className="px-8 py-4 bg-gradient-to-r from-ocean-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-ocean-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Explore Experiences
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Plan Your Journey
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Experience */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-ocean-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-900 mb-4">
              Featured Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most beloved coastal adventure
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-96 md:h-auto overflow-hidden">
                <img 
                  src={featuredExperience.image}
                  alt={featuredExperience.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 px-4 py-2 bg-coral-500 text-white text-sm font-bold rounded-full shadow-lg">
                  {featuredExperience.tag}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-ocean-100 text-ocean-700 text-sm font-semibold rounded-full mb-4">
                    {featuredExperience.category}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-4">
                    {featuredExperience.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {featuredExperience.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center text-base text-gray-600">
                      <Clock className="w-6 h-6 mr-3 text-ocean-500" />
                      <span>{featuredExperience.duration}</span>
                    </div>
                    <div className="flex items-center text-base text-gray-600">
                      <Users className="w-6 h-6 mr-3 text-ocean-500" />
                      <span>{featuredExperience.groupSize}</span>
                    </div>
                    <div className="flex items-center text-base text-gray-600 col-span-2">
                      <DollarSign className="w-6 h-6 mr-3 text-ocean-500" />
                      <span className="font-bold text-ocean-700 text-2xl">{featuredExperience.price}</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/experiences/wasini-dolphin"
                  className="w-full py-4 bg-ocean-500 text-white rounded-xl font-bold hover:bg-ocean-600 transition-colors flex items-center justify-center space-x-2 text-lg shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Check Availability</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Explore More Link */}
          <div className="text-center mt-10">
            <Link 
              to="/experiences"
              className="inline-flex items-center space-x-2 text-ocean-600 font-semibold text-lg hover:text-ocean-700 transition-colors group"
            >
              <span>Discover more unforgettable coastal experiences</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Travel With Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-900 mb-4">
              Why Travel With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're more than a tour company—we're guardians of the coast
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl hover:bg-ocean-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-ocean-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-ocean-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-ocean-900 to-ocean-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-ocean-600 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Our Commitment to Sustainable Travel
              </h2>
              <p className="text-lg text-ocean-100 mb-6 leading-relaxed">
                Every journey with Nobel Sea Tours actively contributes to marine conservation, community development, and cultural preservation. We believe in tourism that heals, not harms.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-ocean-900 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-ocean-100">Plastic-free operations and beach clean-ups</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-ocean-900 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-ocean-100">Supporting local artisans and coastal communities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-ocean-900 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-ocean-100">Marine education and conservation programs</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop"
                alt="Ocean conservation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-sand-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-900 mb-4">
              Traveler Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from those who've experienced the magic
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-coral-500 text-coral-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-ocean-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-sand-100 to-sand-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=600&fit=crop"
                  alt="Coastal artisan crafts"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-flex items-center space-x-2 text-coral-500 mb-4">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="font-semibold">Artisan Marketplace</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-4">
                  Explore Upcycled Coastal Art
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Beautiful handcrafted treasures from local artisans. Each piece tells a story of sustainability and creativity, transforming ocean waste into wearable art.
                </p>
                <Link 
                  to="/marketplace"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-ocean-500 text-white rounded-full font-semibold hover:bg-ocean-600 transition-colors w-fit"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
