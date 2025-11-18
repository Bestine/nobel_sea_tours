import { ShoppingCart, Heart, Star } from 'lucide-react';

export default function Marketplace() {
  const products = [
    {
      id: 1,
      name: 'Ocean Wave Wall Art',
      category: 'Wall Décor',
      image: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=600&h=600&fit=crop',
      price: '$45',
      description: 'Hand-painted reclaimed wood featuring coastal wave patterns',
      materials: 'Upcycled driftwood, eco-friendly paint',
      rating: 4.9,
      reviews: 24,
    },
    {
      id: 2,
      name: 'Sea Glass Necklace',
      category: 'Jewelry',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
      price: '$28',
      description: 'Polished sea glass pendant on recycled silver chain',
      materials: 'Beach-found sea glass, recycled sterling silver',
      rating: 5.0,
      reviews: 18,
    },
    {
      id: 3,
      name: 'Coral Protection Charm',
      category: 'Sea Charms',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=600&h=600&fit=crop',
      price: '$22',
      description: 'Handcrafted charm supporting coral reef restoration',
      materials: 'Clay, natural dyes, woven cotton',
      rating: 4.8,
      reviews: 31,
    },
    {
      id: 4,
      name: 'Driftwood Mirror Frame',
      category: 'Wall Décor',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop',
      price: '$85',
      description: 'Rustic mirror framed with authentic coastal driftwood',
      materials: 'Natural driftwood, reclaimed mirror',
      rating: 4.9,
      reviews: 15,
    },
    {
      id: 5,
      name: 'Shell & Bead Bracelet',
      category: 'Jewelry',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
      price: '$18',
      description: 'Handwoven with locally sourced shells and wooden beads',
      materials: 'Natural shells, wooden beads, hemp cord',
      rating: 4.7,
      reviews: 42,
    },
    {
      id: 6,
      name: 'Upcycled Plastic Bowl Set',
      category: 'Upcycled Crafts',
      image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop',
      price: '$35',
      description: 'Colorful bowls crafted from ocean-recovered plastic',
      materials: 'Recycled ocean plastic, food-safe coating',
      rating: 4.6,
      reviews: 28,
    },
    {
      id: 7,
      name: 'Coastal Sunset Canvas',
      category: 'Wall Décor',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=600&fit=crop',
      price: '$120',
      description: 'Original artwork capturing East African coastal sunsets',
      materials: 'Canvas, eco-friendly acrylic paints',
      rating: 5.0,
      reviews: 12,
    },
    {
      id: 8,
      name: 'Dolphin Pendant',
      category: 'Jewelry',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
      price: '$32',
      description: 'Sterling silver dolphin design supporting marine conservation',
      materials: 'Recycled sterling silver',
      rating: 4.9,
      reviews: 37,
    },
    {
      id: 9,
      name: 'Souvenir Gift Bundle',
      category: 'Gift Bundles',
      image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=600&fit=crop',
      price: '$55',
      description: 'Curated collection of coastal treasures and artisan crafts',
      materials: 'Assorted sustainable materials',
      rating: 4.8,
      reviews: 19,
    },
    {
      id: 10,
      name: 'Turtle Protection Charm',
      category: 'Sea Charms',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=600&fit=crop',
      price: '$25',
      description: 'Hand-carved wooden charm supporting turtle conservation',
      materials: 'Sustainable wood, natural finish',
      rating: 5.0,
      reviews: 26,
    },
    {
      id: 11,
      name: 'Woven Wall Hanging',
      category: 'Wall Décor',
      image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&h=600&fit=crop',
      price: '$68',
      description: 'Traditional Swahili weaving techniques in modern design',
      materials: 'Natural fibers, organic dyes',
      rating: 4.7,
      reviews: 21,
    },
    {
      id: 12,
      name: 'Ocean Breeze Earrings',
      category: 'Jewelry',
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=600&fit=crop',
      price: '$24',
      description: 'Delicate wave-inspired drop earrings',
      materials: 'Recycled brass, glass beads',
      rating: 4.8,
      reviews: 33,
    },
  ];

  const categories = ['All', 'Wall Décor', 'Jewelry', 'Sea Charms', 'Upcycled Crafts', 'Gift Bundles'];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=1920&h=600&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-sand-900/80 to-ocean-900/70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Artisan Marketplace
          </h1>
          <p className="text-xl text-sand-100">
            Sustainable treasures handcrafted by coastal artisans—where ocean waste becomes wearable art
          </p>
        </div>
      </section>

      {/* Marketplace */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-sand-50">
        <div className="max-w-7xl mx-auto">
          {/* Info Banner */}
          <div className="bg-gradient-to-r from-ocean-500 to-cyan-500 text-white p-6 rounded-2xl mb-12 text-center">
            <p className="text-lg">
              <span className="font-semibold">Every purchase supports local artisans and ocean conservation efforts.</span> Free shipping on orders over $100.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-white border-2 border-sand-200 text-ocean-700 font-medium hover:bg-ocean-500 hover:text-white hover:border-ocean-500 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden bg-sand-100">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                    <Heart className="w-5 h-5 text-coral-500" />
                  </button>
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-ocean-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {product.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-serif font-bold text-lg text-ocean-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center mb-3 text-xs text-gray-500">
                    <div className="flex items-center mr-3">
                      <Star className="w-4 h-4 fill-coral-500 text-coral-500 mr-1" />
                      <span className="font-semibold">{product.rating}</span>
                    </div>
                    <span>({product.reviews} reviews)</span>
                  </div>

                  <p className="text-xs text-ocean-600 mb-4 italic">
                    {product.materials}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-ocean-700">
                      {product.price}
                    </span>
                    <button className="px-4 py-2 bg-ocean-500 text-white rounded-lg font-semibold hover:bg-ocean-600 transition-colors flex items-center space-x-2 text-sm">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-ocean-900 to-cyan-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Your Purchase Makes a Difference
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-cyan-300">500+</div>
              <p className="text-ocean-200">Artisans Supported</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-cyan-300">10 Tons</div>
              <p className="text-ocean-200">Plastic Upcycled</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-cyan-300">$50K+</div>
              <p className="text-ocean-200">To Communities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
