import { Calendar, Users, Mail, Phone, User, MessageSquare } from 'lucide-react';

export default function BookWasini() {
  // You can expand this array with more images from your repo or stock sources
  const backgroundImages = [
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop',     // Serene Kenyan coast sunrise
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&h=1080&fit=crop',     // Traditional dhow at sunset
    'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&h=1080&fit=crop',  // Turquoise waters & beach
    'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1920&h=1080&fit=crop',  // Marine/dolphin vibe
    // Add your own repo images, e.g.:
    // 'https://raw.githubusercontent.com/Bestine/nobel_sea_tours/main/public/assets/images/experiences/wasini-sunset-dhow.jpg?w=1920&h=1080&fit=crop',
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Rotating Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/70 via-ocean-900/50 to-ocean-900/80 z-10" /> {/* Overlay for readability */}

        {/* Slideshow */}
        <div className="w-full h-full">
          {backgroundImages.map((img, index) => (
            <div
              key={index}
              className="absolute inset-0 bg-cover bg-center opacity-0 animate-slideShow"
              style={{
                backgroundImage: `url(${img})`,
                animationDelay: `${index * 10}s`, // 10s per image, adjust timing
              }}
            />
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-ocean-100/30">
          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ocean-900 mb-4 text-center">
              Book Your Coastal Adventure
            </h1>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Fill in your details below and we'll get back to you within 24 hours with availability, pricing, and next steps.
            </p>

            <form className="space-y-8">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <User className="w-5 h-5 mr-2 text-ocean-600" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-ocean-600" />
                  Phone Number (with country code)
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none transition-all"
                  placeholder="+254 7XX XXX XXX"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-ocean-600" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Date Picker */}
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-ocean-600" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  required
                  min={new Date().toISOString().split('T')[0]} // No past dates
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none transition-all"
                />
              </div>

              {/* Number of Guests */}
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-ocean-600" />
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  min="1"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none transition-all"
                  placeholder="e.g. 2"
                />
              </div>

              {/* Additional Needs */}
              <div>
                <label htmlFor="needs" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-ocean-600" />
                  Let us know about your trip needs (optional)
                </label>
                <textarea
                  id="needs"
                  rows={5}
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none transition-all resize-none"
                  placeholder="e.g. dietary requirements, special requests, preferred tour time, accessibility needs..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-ocean-500 to-cyan-600 text-white rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-ocean-600/40 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Submit Booking Enquiry
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-8">
              We'll confirm availability and send you payment details shortly after submission.
            </p>
          </div>
        </div>
      </div>

      {/* CSS Animation Keyframes – add to your global CSS or inside <style> */}
      <style jsx global>{`
        @keyframes slideShow {
          0% { opacity: 0; }
          10% { opacity: 1; }
          25% { opacity: 1; }
          35% { opacity: 0; }
          100% { opacity: 0; }
        }
        .animate-slideShow {
          animation: slideShow 50s infinite;
        }
      `}</style>
    </div>
  );
}