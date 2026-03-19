import { useEffect, useState } from 'react';

export default function ArtsGallery() {
  // You can later move this data to a separate file / CMS
  const gallerySections = [
    {
      title: "Wasini Moments",
      subtitle: "Dolphins, coral gardens, Swahili smiles and island light",
      images: [
        {
          url: "https://images.unsplash.com/photo-1696910874065-31f082d7b4e5?w=1200&auto=format&fit=crop",
          alt: "Snorkeler surrounded by tropical fish in Kisite Marine Park",
          caption: "Snorkeling above the reef – Kisite-Mpunguti",
        },
        {
          url: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=1200&auto=format&fit=crop",
          alt: "Group watching dolphins from traditional dhow",
          caption: "Playful encounter with wild bottlenose dolphins",
        },
        {
          url: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&auto=format&fit=crop",
          alt: "Local woman preparing fresh seafood lunch on Wasini Island",
          caption: "Swahili seafood lunch prepared with love",
        },
        // add 3–8 more real photos per section
      ],
    },

    {
      title: "Mambrui Stories",
      subtitle: "Golden dunes, ancient ruins and the taste of home",
      images: [
        {
          url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&auto=format&fit=crop",
          alt: "Person walking across vast golden sand dunes at sunset",
          caption: "Walking the endless golden waves of Mambrui",
        },
        {
          url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&auto=format&fit=crop",
          alt: "Traditional Swahili meal served outdoors",
          caption: "Authentic coastal cuisine shared under the stars",
        },
        // more images...
      ],
    },

    {
      title: "Sunset Dhow Memories",
      subtitle: "Golden hour, gentle sails and coastal melodies",
      images: [
        {
          url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop",
          alt: "Traditional dhow sailing at sunset with orange sky",
          caption: "Sailing into the golden hour",
        },
        {
          url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop",
          alt: "People relaxing on dhow with tropical fruits and drinks",
          caption: "Sunset cocktails and fresh fruit under sail",
        },
        // more...
      ],
    },

    {
      title: "Handmade with Heart",
      subtitle: "Art born from the coast – created by local hands",
      images: [
        {
          url: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&auto=format&fit=crop",
          alt: "Handmade upcycled coastal jewelry and decor",
          caption: "Jewelry crafted from ocean-found materials",
        },
        {
          url: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&auto=format&fit=crop",
          alt: "Local artisan weaving traditional patterns",
          caption: "Preserving Swahili weaving techniques",
        },
        // more artisan photos...
      ],
    },

    // Add more sections as needed (Kilifi bioluminescence, Chale Island, etc.)
  ];

  // Simple lightbox state (optional – can be removed if you don't want clickable images)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white pt-20 pb-32">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(14,165,233,0.08)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.07)_0%,transparent_50%)]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-ocean-950 tracking-tight mb-6">
            Moments & Art
          </h1>
          <p className="text-xl md:text-2xl text-ocean-700 font-light max-w-3xl mx-auto leading-relaxed">
            Captured memories from the coast • Handmade expressions from local hearts
          </p>
        </div>
      </section>

      {/* Gallery Sections */}
      <div className="max-w-7xl mx-auto px-6">
        {gallerySections.map((section, sectionIdx) => (
          <section key={sectionIdx} className="mb-24 md:mb-32">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-ocean-900 mb-4">
                {section.title}
              </h2>
              {section.subtitle && (
                <p className="text-lg md:text-xl text-ocean-600 font-light italic max-w-3xl mx-auto">
                  {section.subtitle}
                </p>
              )}
            </div>

            {/* Masonry / Column layout */}
            <div 
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
            >
              {section.images.map((img, imgIdx) => (
                <div 
                  key={imgIdx}
                  className="break-inside-avoid group cursor-pointer relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                  onClick={() => setSelectedImage(img.url)}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* Subtle caption overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <p className="text-white text-sm md:text-base font-light">
                      {img.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Optional simple lightbox (click image → full screen) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-auto">
            <img
              src={selectedImage}
              alt="Enlarged gallery image"
              className="w-full h-auto object-contain rounded-xl"
            />
            <button 
              className="absolute top-4 right-4 text-white text-3xl hover:text-ocean-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}