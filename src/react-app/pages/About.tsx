import { Heart, Users, Leaf, Target, Eye, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Every journey minimizes environmental impact while maximizing positive change for marine ecosystems.',
    },
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'We showcase genuine coastal experiences that honor local traditions and cultural heritage.',
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      description: 'Tourism that uplifts local communities, creating jobs and preserving traditional livelihoods.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering exceptional experiences through expert guides and meticulous attention to detail.',
    },
  ];

  const team = [
    {
      name: 'Amina Hassan',
      role: 'Founder & Marine Biologist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      bio: '15 years protecting East African marine ecosystems',
    },
    {
      name: 'James Mwangi',
      role: 'Head Guide & Conservation Lead',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      bio: 'Born in Wasini, certified dive master and cultural ambassador',
    },
    {
      name: 'Fatuma Ali',
      role: 'Cultural Programs Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      bio: 'Preserving Swahili heritage through immersive experiences',
    },
    {
      name: 'Omar Said',
      role: 'Sustainability Coordinator',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Leading our zero-waste and carbon offset initiatives',
    },
  ];

  const achievements = [
    { number: '10,000+', label: 'Happy Travelers' },
    { number: '500+', label: 'Community Members Supported' },
    { number: '25 Tons', label: 'Plastic Removed from Beaches' },
    { number: '15 Reefs', label: 'Coral Restoration Projects' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&h=600&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/80 to-ocean-900/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Our Story
          </h1>
          <p className="text-xl text-ocean-100">
            Building sustainable futures through transformative coastal experiences
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center space-x-3 text-ocean-600 mb-4">
                <Target className="w-6 h-6" />
                <span className="font-semibold text-sm uppercase tracking-wide">Our Mission</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-ocean-900 mb-6">
                Sustainable Travel, Thriving Oceans, Empowered Communities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nobel Sea Tours was born from a simple belief: tourism can be a powerful force for good. Founded by marine biologist Dr. Amina Hassan in 2015, we've grown from a small dhow operation to East Africa's leading sustainable coastal tour company.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every journey we create serves three purposes—giving travelers unforgettable experiences, protecting our precious marine ecosystems, and uplifting the coastal communities that call this paradise home.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop"
                alt="Ocean conservation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&h=600&fit=crop"
                alt="Coastal community"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center space-x-3 text-ocean-600 mb-4">
                <Eye className="w-6 h-6" />
                <span className="font-semibold text-sm uppercase tracking-wide">Our Vision</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-ocean-900 mb-6">
                Transforming East African Tourism
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We envision a future where every traveler becomes a guardian of the coast, where tourism funds conservation, and where local communities thrive as stewards of their natural heritage.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through education, innovation, and authentic partnerships, we're creating a new model of tourism—one that proves profitability and sustainability aren't just compatible, they're inseparable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-gradient-to-b from-ocean-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-ocean-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-ocean-900 mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate experts dedicated to creating meaningful coastal experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-serif font-bold text-ocean-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-ocean-600 font-semibold mb-2 text-sm">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 bg-gradient-to-br from-ocean-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Impact by the Numbers
            </h2>
            <p className="text-lg text-ocean-100">
              Measurable change through sustainable tourism
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div className="text-5xl font-bold text-cyan-300 mb-2">
                  {achievement.number}
                </div>
                <p className="text-ocean-100 font-medium">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-sand-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-6">
            Join Us in Protecting Our Oceans
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Every journey with Nobel Sea Tours contributes to a more sustainable future for East Africa's coastal communities and marine ecosystems.
          </p>
          <button className="px-8 py-4 bg-ocean-500 text-white rounded-full font-semibold hover:bg-ocean-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
            Explore Our Experiences
          </button>
        </div>
      </section>
    </div>
  );
}
