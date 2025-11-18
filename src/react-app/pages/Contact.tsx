import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/254XXXXXXXXX', '_blank');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
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
            Get in Touch
          </h1>
          <p className="text-xl text-ocean-100">
            Let's plan your perfect coastal adventure together
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-sand-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-serif font-bold text-ocean-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you have questions or are ready to book, we're here to help.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                    placeholder="+254 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Experience Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all">
                    <option>Select an experience...</option>
                    <option>Wasini Island Dolphin Experience</option>
                    <option>Diani Sunset Dhow Cruise</option>
                    <option>Mambrui Sand Dunes + Local Cuisine</option>
                    <option>Chale Island Eco-Triathlon Retreat</option>
                    <option>Floating Restaurant Experience</option>
                    <option>Family Celebration Package</option>
                    <option>Couples Romance Package</option>
                    <option>Corporate Team Building</option>
                    <option>School Educational Trip</option>
                    <option>Custom Experience</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your ideal coastal experience..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-ocean-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-ocean-500 to-cyan-500 p-8 rounded-2xl text-white shadow-xl">
                <h3 className="text-2xl font-serif font-bold mb-6">
                  Quick Contact
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a href="tel:+254XXXXXXXXX" className="text-ocean-100 hover:text-white transition-colors">
                        +254 XXX XXX XXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:info@nobelseatours.com" className="text-ocean-100 hover:text-white transition-colors">
                        info@nobelseatours.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Location</p>
                      <p className="text-ocean-100">
                        Mombasa, Kenya<br />
                        East African Coast
                      </p>
                    </div>
                  </div>

                  <button 
                    onClick={handleWhatsApp}
                    className="w-full py-4 bg-white text-ocean-600 rounded-full font-semibold hover:bg-ocean-50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-serif font-bold text-ocean-900 mb-6">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Monday - Friday</span>
                    <span className="text-ocean-600">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Saturday</span>
                    <span className="text-ocean-600">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-gray-700">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-sand-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-ocean-700">24/7 Emergency Support:</span> For urgent matters related to active bookings, we're always here for you.
                  </p>
                </div>
              </div>

              {/* Visit Us */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-serif font-bold text-ocean-900 mb-4">
                  Visit Our Office
                </h3>
                <p className="text-gray-600 mb-6">
                  Drop by for a personal consultation and explore our full range of coastal experiences. We'd love to share a cup of chai and plan your adventure.
                </p>
                <div className="bg-gray-200 h-48 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=400&fit=crop"
                    alt="Map placeholder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 px-4 bg-sand-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-ocean-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-8">
            Looking for quick answers? Check out our FAQ section for common questions about bookings, experiences, and sustainability practices.
          </p>
          <button className="px-8 py-3 bg-ocean-500 text-white rounded-full font-semibold hover:bg-ocean-600 transition-colors">
            View FAQ
          </button>
        </div>
      </section>
    </div>
  );
}
