import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';

export default function Blog() {
  const featuredPost = {
    title: 'How Sustainable Tourism is Transforming East African Coastal Communities',
    excerpt: 'Discover the powerful impact of eco-conscious travel on local economies, marine conservation, and cultural preservation along the Kenyan coast.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop',
    category: 'Community Impact',
    date: 'Nov 10, 2025',
    author: 'Dr. Amina Hassan',
    readTime: '8 min read',
  };

  const posts = [
    {
      id: 1,
      title: 'The Secret Lives of Wasini Dolphins: A Marine Biologist\'s Perspective',
      excerpt: 'Learn about the fascinating behavior patterns of Indo-Pacific bottlenose dolphins and how we protect them.',
      image: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=600&h=400&fit=crop',
      category: 'Marine Conservation',
      date: 'Nov 12, 2025',
      author: 'James Mwangi',
      readTime: '6 min read',
    },
    {
      id: 2,
      title: "Swahili Cuisine: A Culinary Journey Through Kenya's Coast",
      excerpt: 'From pilau to mahamri, explore the rich flavors that tell the story of coastal cultural heritage.',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop',
      category: 'Travel Guides',
      date: 'Nov 8, 2025',
      author: 'Fatuma Ali',
      readTime: '5 min read',
    },
    {
      id: 3,
      title: 'Turning Ocean Plastic into Art: Meet Our Upcycling Artisans',
      excerpt: 'Behind the scenes with local creators transforming beach waste into beautiful handcrafted treasures.',
      image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=400&fit=crop',
      category: 'Community Stories',
      date: 'Nov 5, 2025',
      author: 'Sarah Kimani',
      readTime: '7 min read',
    },
    {
      id: 4,
      title: 'The Ancient Art of Dhow Building: Keeping Tradition Alive',
      excerpt: 'Exploring how traditional boat-making techniques are being preserved along the Swahili coast.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
      category: 'Cultural Heritage',
      date: 'Nov 2, 2025',
      author: 'Omar Said',
      readTime: '6 min read',
    },
    {
      id: 5,
      title: 'Coral Restoration Technology: Hope for Our Reefs',
      excerpt: 'New innovations in marine technology are helping restore damaged coral ecosystems off the Kenyan coast.',
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop',
      category: 'Ocean Tech Innovation',
      date: 'Oct 28, 2025',
      author: 'Dr. Peter Omondi',
      readTime: '9 min read',
    },
    {
      id: 6,
      title: 'A Day in the Life: Nobel Sea Tours Guide',
      excerpt: 'Follow our senior guide through a typical day of creating unforgettable coastal experiences.',
      image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=600&h=400&fit=crop',
      category: 'Behind-the-Scenes',
      date: 'Oct 25, 2025',
      author: 'Michael Odhiambo',
      readTime: '5 min read',
    },
    {
      id: 7,
      title: 'Best Time to Visit the East African Coast: A Seasonal Guide',
      excerpt: 'Plan your perfect coastal getaway with our comprehensive guide to Kenya\'s coastal seasons and weather patterns.',
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&h=400&fit=crop',
      category: 'Travel Guides',
      date: 'Oct 20, 2025',
      author: 'Grace Wanjiru',
      readTime: '8 min read',
    },
    {
      id: 8,
      title: 'Protecting Sea Turtles: Our Conservation Partnership',
      excerpt: 'Learn about our work with local organizations to protect endangered sea turtle nesting sites.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
      category: 'Marine Conservation',
      date: 'Oct 15, 2025',
      author: 'Dr. Amina Hassan',
      readTime: '7 min read',
    },
    {
      id: 9,
      title: 'Sustainable Fishing Practices in Coastal Villages',
      excerpt: 'How traditional fishing communities are adapting to protect marine ecosystems for future generations.',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop',
      category: 'Community Stories',
      date: 'Oct 10, 2025',
      author: 'Hassan Mohammed',
      readTime: '6 min read',
    },
  ];

  const categories = ['All Posts', 'Marine Conservation', 'Travel Guides', 'Community Stories', 'Ocean Tech Innovation', 'Behind-the-Scenes', 'Cultural Heritage'];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1920&h=600&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/85 to-ocean-900/70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Ocean Stories
          </h1>
          <p className="text-xl text-ocean-100">
            Conservation insights, travel inspiration, and coastal community tales
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Post */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 text-ocean-600 mb-4">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold text-sm uppercase tracking-wide">Featured Story</span>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-4 py-2 bg-coral-500 text-white text-sm font-semibold rounded-full">
                  {featuredPost.category}
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <button className="inline-flex items-center space-x-2 text-ocean-600 font-semibold hover:text-ocean-700 transition-colors group">
                  <span>Read Full Story</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-5 py-2 rounded-full bg-white border-2 border-ocean-200 text-ocean-700 font-medium hover:bg-ocean-500 hover:text-white hover:border-ocean-500 transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-ocean-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-ocean-900 mb-3 line-clamp-2 group-hover:text-ocean-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <button className="text-ocean-600 font-semibold text-sm hover:text-ocean-700 transition-colors flex items-center space-x-1 group">
                    <span>Read</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-ocean-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Stay Connected to the Coast
          </h2>
          <p className="text-ocean-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for ocean conservation updates, travel tips, and exclusive coastal stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-white text-ocean-600 rounded-full font-semibold hover:bg-ocean-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
