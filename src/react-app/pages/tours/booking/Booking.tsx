import { useParams, Link } from 'react-router';
import { Calendar, Users, Mail, Phone, User, MessageSquare } from 'lucide-react';

// Optional: small lookup table (expand as you add experiences)
const experienceTitles: Record<string, string> = {
  'wasini-dolphin': 'Wasini Island Swim with Dolphins Experience',
  'sunset-dhow-cruise': 'Sunset Dhow Cruise',
  // add more when you have them
  // default fallback
};

export default function Booking() {
  const { slug = '' } = useParams<{ slug: string }>();

  // Get nice display name or fallback
  const experienceName = experienceTitles[slug] || 'Your Selected Coastal Experience';

  // Rotating backgrounds (same as before or customize)
  const backgroundImages = [
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&h=1080&fit=crop',
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Rotating background – same as previous version */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/70 via-ocean-900/50 to-ocean-900/80 z-10" />
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center opacity-0 animate-slideShow"
            style={{
              backgroundImage: `url(${img})`,
              animationDelay: `${index * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-ocean-100/30">
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-2 text-center">
              Booking Enquiry
            </h1>
            <h2 className="text-xl md:text-2xl font-serif text-ocean-700 mb-8 text-center">
              {experienceName}
            </h2>

            <p className="text-center text-gray-600 mb-10">
              Please fill in your details below. We'll confirm availability, pricing and next steps for your{' '}
              <span className="font-medium text-ocean-700">{experienceName}</span> within 24 hours.
            </p>

            <form className="space-y-7">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <User className="w-5 h-5 mr-2 text-ocean-600" />
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-ocean-600" />
                  Phone Number (with country code)
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none"
                  placeholder="+254 7XX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-ocean-600" />
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-ocean-600" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-ocean-600" />
                  Number of Guests
                </label>
                <input
                  type="number"
                  min="1"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none"
                  placeholder="e.g. 2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-ocean-600" />
                  Additional trip needs / special requests (optional)
                </label>
                <textarea
                  rows={5}
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none resize-none"
                  placeholder="Dietary requirements, accessibility needs, preferred time, group details, etc..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-ocean-500 to-cyan-600 text-white rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-ocean-600/40 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Submit Booking Enquiry
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-8">
              We'll get back to you shortly with confirmation and next steps.
            </p>
          </div>
        </div>
      </div>

      {/* Slideshow animation – same as before */}
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